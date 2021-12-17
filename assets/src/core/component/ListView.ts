/*
 * Author       : ougato
 * Date         : 2021-12-13 11:11:13
 * LastEditors  : ougato
 * LastEditTime : 2021-12-17 17:44:42
 * FilePath     : /client/assets/src/core/component/ListView.ts
 * Description  : 滑动列表（分帧加载、分页加载、无限列表）
 */

import * as ComponentDefine from "../define/ComponentDefine";
import * as ComponentInterface from "../interface/ComponentInterface";

// 每次执行协程分配的时间（单位：毫秒）
const EXEC_GENERATOR_TIME: number = 8;

const { ccclass, property } = cc._decorator;

// 缓存数据接口
interface CacheDataInterface {
    // 下标
    index: number;
    // 删除数量
    count: number;
    // 增加数据
    data: any | any[];
};

@ccclass
export default class ListView extends cc.ScrollView {

    @property({
        visible: (function () {
            cc.Class["Attr"].setClassAttr(this, "horizontalScrollBar", "visible", this.direction === ComponentDefine.DirectionType.HORIZONTAL);
            cc.Class["Attr"].setClassAttr(this, "verticalScrollBar", "visible", this.direction === ComponentDefine.DirectionType.VERTICAL);
            return false;
        })
    })
    private directionType: ComponentDefine.DirectionType = ComponentDefine.DirectionType.HORIZONTAL;

    @property({ type: cc.Prefab, tooltip: "列表项预制" })
    private itemPrefab: cc.Prefab = null;

    @property({ tooltip: "是否分帧加载" })
    private isFraming: boolean = false;

    @property({ tooltip: "是否无限列表" })
    private isEndless: boolean = false;

    @property({ tooltip: "是否分页加载" })
    private isPaging: boolean = false;

    @property({ type: cc.Component.EventHandler, tooltip: "左边拉取回调", visible: (function () { return this.isPaging && this.direction === ComponentDefine.DirectionType.HORIZONTAL }) })
    private pullLeftEventHandler: cc.Component.EventHandler = new cc.Component.EventHandler();

    @property({ type: cc.Component.EventHandler, tooltip: "右边拉取回调", visible: (function () { return this.isPaging && this.direction === ComponentDefine.DirectionType.HORIZONTAL }) })
    private pullRightEventHandler: cc.Component.EventHandler = new cc.Component.EventHandler();

    @property({ type: cc.Component.EventHandler, tooltip: "顶部拉取回调", visible: (function () { return this.isPaging && this.direction === ComponentDefine.DirectionType.VERTICAL }) })
    private pullTopEventHandler: cc.Component.EventHandler = new cc.Component.EventHandler();

    @property({ type: cc.Component.EventHandler, tooltip: "底部拉取回调", visible: (function () { return this.isPaging && this.direction === ComponentDefine.DirectionType.VERTICAL }) })
    private pullBottomEventHandler: cc.Component.EventHandler = new cc.Component.EventHandler();

    @property({ type: cc.SpriteFrame, tooltip: "刷新拉取等待图片", visible: (function () { return this.isPaging }) })
    private waitingImage: cc.SpriteFrame = null;

    @property({ type: cc.Enum(ComponentDefine.DirectionType), tooltip: "滑动方向\nHORIZONTAL 水平\nVERTICAL 垂直" })
    private get direction(): ComponentDefine.DirectionType {
        return this.directionType;
    }
    private set direction(value: ComponentDefine.DirectionType) {
        if (value !== this.directionType) {
            this.directionType = value;
            this.changeDirection(value);
        }
    }

    @property({ override: true, visible: false })
    public horizontal: boolean = this.direction === ComponentDefine.DirectionType.HORIZONTAL;

    @property({ override: true, visible: false })
    public vertical: boolean = this.direction === ComponentDefine.DirectionType.VERTICAL;

    @property({ type: cc.Float, tooltip: "滚动之后的减速系数。取值范围是 0-1，如果是 1 则立马停止滚动，如果是 0，则会一直滚动到 content 的边界。", override: true, visible: true })
    public brake: number = 0.75;

    @property({ type: cc.Float, tooltip: "回弹所需要的时间。取值范围是 0-10。", override: true, visible: true })
    public bounceDuration: number = 0.23;

    @property({ type: cc.Float, tooltip: "垂直间距", visible: (function () { return this.direction === ComponentDefine.DirectionType.VERTICAL }) })
    private spacingY: number = 0;

    @property({ type: cc.Float, tooltip: "顶间距", visible: (function () { return this.direction === ComponentDefine.DirectionType.VERTICAL }) })
    private top: number = 0;

    @property({ type: cc.Float, tooltip: "底间距", visible: (function () { return this.direction === ComponentDefine.DirectionType.VERTICAL }) })
    private bottom: number = 0;

    @property({ type: cc.Float, tooltip: "水平间距", visible: (function () { return this.direction === ComponentDefine.DirectionType.HORIZONTAL }) })
    private spacingX: number = 0;

    @property({ type: cc.Float, tooltip: "左间距", visible: (function () { return this.direction === ComponentDefine.DirectionType.HORIZONTAL }) })
    private left: number = 0;

    @property({ type: cc.Float, tooltip: "右间距", visible: (function () { return this.direction === ComponentDefine.DirectionType.HORIZONTAL }) })
    private right: number = 0;

    @property({ type: cc.Component.EventHandler, tooltip: "点击列表项回调", visible: true })
    private clickItemEventHandler: cc.Component.EventHandler = new cc.Component.EventHandler();

    // 是否加载完成
    private _isLoaded: boolean = false;
    // 数据列表
    private _itemDataList: any[] = [];
    // 列表项节点池
    private _itemNodePool: cc.NodePool = new cc.NodePool();
    // 一次列表项渲染完成后回调
    private _onceRendererFinishCallback: Function = null;
    // 最后节点位置
    private _lastPos: cc.Vec2 = cc.v2(0, 0);
    // 渲染列表项起始下标
    private _renderItemStartIndex: number = null;
    // 渲染列表项结束下标
    private _renderItemEndIndex: number = null;
    // 是否渲染中
    private _isRendering: boolean = false;
    // 缓存列表
    private _itemCacheList: CacheDataInterface[] = [];

    // // 末尾的坐标
    // private _lastPos: cc.Vec2 = null;
    // // 末尾的下标
    // private m_lastIndex: number = null;
    // // 内容器大小
    // private m_innerSize: cc.Size = null;
    // // // 临时数据列表
    // // private m_tempItemDataList: TableViewInterface.ItemData[] = [];
    // // // 数据列表
    // // private m_itemDataList: TableViewInterface.ItemData[] = null;
    // // 缓存矩形
    // private m_cacheRect: cc.Rect = null;
    // // 中间可视矩形
    // private m_visibleRectCenter: cc.Rect = null;
    // // 是否加载完成
    // private m_isLoaded: boolean = false;
    // // 节点列表
    // private m_itemNodeList: cc.Node[] = [];


    /**
     * 修改方向类型属性
     * @param value {ComponentDefine.DirectionType} 方向类型
     */
    private changeDirection(value: ComponentDefine.DirectionType): void {
        this.horizontal = value === ComponentDefine.DirectionType.HORIZONTAL;
        this.vertical = value === ComponentDefine.DirectionType.VERTICAL;

        cc.Class["Attr"].setClassAttr(this, "top", "visible", this.direction === ComponentDefine.DirectionType.VERTICAL);
        cc.Class["Attr"].setClassAttr(this, "bottom", "visible", this.direction === ComponentDefine.DirectionType.VERTICAL);
        cc.Class["Attr"].setClassAttr(this, "spacingY", "visible", this.direction === ComponentDefine.DirectionType.VERTICAL);
        cc.Class["Attr"].setClassAttr(this, "verticalScrollBar", "visible", this.direction === ComponentDefine.DirectionType.VERTICAL);
        cc.Class["Attr"].setClassAttr(this, "left", "visible", this.direction === ComponentDefine.DirectionType.HORIZONTAL);
        cc.Class["Attr"].setClassAttr(this, "right", "visible", this.direction === ComponentDefine.DirectionType.HORIZONTAL);
        cc.Class["Attr"].setClassAttr(this, "spacingX", "visible", this.direction === ComponentDefine.DirectionType.HORIZONTAL);
        cc.Class["Attr"].setClassAttr(this, "horizontalScrollBar", "visible", this.direction === ComponentDefine.DirectionType.HORIZONTAL);
    }

    onLoad() {
        this.initData();
        this.register();
        this.initView();
    }

    start() {
        super.start();

    }

    /**
     * 设置项
     * @param itemsData {T | T[]} 数据|数据列表
     */
    public set<T>(itemsData: T | T[]): void {
        if (itemsData === null || itemsData === undefined) {
            return;
        }

        this._itemDataList = [];

        if (Array.isArray(itemsData)) {
            if (itemsData.length <= 0) {
                return;
            }
            this._itemDataList = this._itemDataList.concat(itemsData);
        } else {
            this._itemDataList.push(itemsData);
        }

        this._renderItemStartIndex = 0;
        this._renderItemEndIndex = this._itemDataList.length - 1;

        this.updateListItem();
    }

    /**
     * 插入项
     * @param itemsData {T | T[]} 数据|数据列表
     * @param index {number} 下标（默认：最后插入）
     */
    public insert<T>(itemsData: T | T[], index?: number): void {
        if (itemsData === null || itemsData === undefined) {
            return;
        }

        if (index === null || index === undefined) {
            index = this._itemDataList.length;
        } else {
            if (index < 0) {
                index = 0;
            } else if (index > this._itemDataList.length) {
                index = this._itemDataList.length;
            }
        }

        if (this._isRendering) {
            this._itemCacheList.push({
                index: index,
                count: 0,
                data: itemsData,
            });
            return;
        }

        if (Array.isArray(itemsData)) {
            if (itemsData.length <= 0) {
                return;
            }
            let spliceParam: any[] = [index, 0];
            spliceParam = spliceParam.concat(itemsData);
            this._itemDataList.splice.apply(this._itemDataList.splice, spliceParam);
        } else {
            this._itemDataList.splice(index, 0, itemsData);
        }

        this._renderItemStartIndex = index;
        this._renderItemEndIndex = this._itemDataList.length - 1;

        this.updateListItem();
    }

    /**
     * 删除项
     * @param index {number} 下标（需要删除的下标）
     * @param count {number} 数量（删除下标后的数量）
     */
    public remove(index?: number, count?: number): void {
        if (this._itemDataList.length <= 0) {
            return;
        }

        if (index === null || index === undefined &&
            count === null || count === undefined) {
            index = 0;
            count = this._itemDataList.length;
        } else if (index === null || index === undefined) {
            index = this._itemDataList.length - count;
            if (index < 0) {
                index = 0;
                count = this._itemDataList.length;
            }
        } else if (count === null || count === undefined) {
            if (index < 0) {
                index = 0;
            } else if (index >= this._itemDataList.length) {
                index = this._itemDataList.length - 1;
            }
            count = this._itemDataList.length - index;
        }

        if (this._isRendering) {
            this._itemCacheList.push({
                index: index,
                count: count,
                data: null,
            });
            return;
        }

        this._itemDataList.splice(index, count);

        this._renderItemStartIndex = index;
        this._renderItemEndIndex = this.content.childrenCount - 1;

        this.updateListItem();
    }

    /**
     * 刷新列表项
     */
    private updateListItem(): void {
        if (!this._isLoaded) {
            return;
        }

        this._isRendering = true;

        for (let i: number = this._renderItemStartIndex; i <= this._renderItemEndIndex; ++i) {
            let itemNode: cc.Node = this.content.children[i];
            let itemData: any = this._itemDataList[i];

            if (itemNode !== undefined && itemData !== undefined) {
                let itemSrc: ComponentInterface.ListViewItemClass = itemNode.getComponent(itemNode.name);
                if (itemSrc && itemSrc.onShow) {
                    itemSrc.onShow(itemData);
                }
            } else if (itemNode === undefined) {
                itemNode = this.getNode();
                let itemSrc: ComponentInterface.ListViewItemClass = itemNode.getComponent(itemNode.name);
                if (itemSrc && itemSrc.onShow) {
                    itemSrc.onShow(itemData);
                }
            } else if (itemData === undefined) {
                this.putNode(itemNode);
            }
        }

        let padding: number = 0;
        let spacing: number = this.getSpacing();
        if (this._itemDataList.length <= 0) {
            padding = this.getPadding();
            spacing = (itemsData.length - 1) * spacing;
        } else {
            spacing = itemsData.length * spacing;
        }

        this._itemDataList = this._itemDataList.concat(itemsData);

        let itemsRectSize: cc.Size = this.getItemsRectSize(itemsData);

        let isExcess: boolean = false;
        if (this.direction === ComponentDefine.DirectionType.HORIZONTAL) {
            this.m_innerSize.width += padding + itemsRectSize.width + spacing;
            isExcess = this.m_innerSize.width > this.content.parent.width;
            if (isExcess) {
                this.content.width = this.m_innerSize.width;
            } else {
                this.content.width = this.content.parent.width;
            }
        } else if (this.direction === ComponentDefine.DirectionType.VERTICAL) {
            this.m_innerSize.height += padding + itemsRectSize.height + spacing;
            isExcess = this.m_innerSize.height > this.content.parent.height;
            if (isExcess) {
                this.content.height = this.m_innerSize.height;
            } else {
                this.content.height = this.content.parent.height;
            }
        }
        this.elastic = isExcess;
        // this.inertia = isExcess;

        if (this.isEndless) {
            // itemsData = 
        }

        if (this.isFrameLoad) {
            this.frameLoadItem(itemsData);
        } else {
            this.directLoadItem(itemsData);
        }

    }

    /**
     * 刷新队列内的列表项
     */
    private updateCacheItemList(): void {

    }

    private initData(): void {
        this._isLoaded = true;

        // this.m_lastIndex = 0;
        // this.horizontal = this.direction === ComponentDefine.DirectionType.HORIZONTAL;
        // this.vertical = this.direction === ComponentDefine.DirectionType.VERTICAL;
        // this.m_innerSize = cc.size(this.content.getContentSize());
        // this.m_visibleRectCenter = this.getVisibleRectCenter();
        // switch (this.direction) {
        //     case ComponentDefine.DirectionType.HORIZONTAL: {
        //         this.m_innerSize.width = 0;
        //         this.m_cacheRect = this.getCacheRectLeftRight();
        //     }
        //         break;
        //     case ComponentDefine.DirectionType.VERTICAL: {
        //         this.m_innerSize.height = 0;
        //         this.m_cacheRect = this.getCacheRectTopBottom();
        //     }
        //         break;
        // }
        // // this.m_itemDataList = [];
        // // this.m_isLoaded = true;
        // // if (this.m_tempItemDataList.length > 0) {
        // //     this.m_itemDataList = [].concat(this.m_tempItemDataList);
        // //     this.m_tempItemDataList = [];
        // //     this.rendererList(this.m_itemDataList);
        // // }
    }

    private register(): void {
        this.node.on("scroll-to-top", this.onScrollToTop, this);
        this.node.on("scroll-to-bottom", this.onScrollToBottom, this);
        this.node.on("scroll-to-left", this.onScrollToLeft, this);
        this.node.on("scroll-to-right", this.onScrollToRight, this);

        this.node.on("bounce-bottom", this.onBounceBottom, this);
        this.node.on("bounce-top", this.onBounceTop, this);
        this.node.on("bounce-left", this.onBounceLeft, this);
        this.node.on("bounce-right", this.onBounceRight, this);

        this.node.on("scrolling", this.onScrolling, this);
        this.node.on("scroll-ended", this.onScrollEnded, this);
        this.node.on("touch-up", this.onTouchUp, this);
        this.node.on("scroll-began", this.onScrollBegan, this);
    }

    private unregister(): void {
        this.node.off("scroll-to-top", this.onScrollToTop, this);
        this.node.off("scroll-to-bottom", this.onScrollToBottom, this);
        this.node.off("scroll-to-left", this.onScrollToLeft, this);
        this.node.off("scroll-to-right", this.onScrollToRight, this);

        this.node.off("bounce-bottom", this.onBounceBottom, this);
        this.node.off("bounce-top", this.onBounceTop, this);
        this.node.off("bounce-left", this.onBounceLeft, this);
        this.node.off("bounce-right", this.onBounceRight, this);

        this.node.off("scrolling", this.onScrolling, this);
        this.node.off("scroll-ended", this.onScrollEnded, this);
        this.node.off("touch-up", this.onTouchUp, this);
        this.node.off("scroll-began", this.onScrollBegan, this);
    }

    private initView(): void {
        switch (this.direction) {
            case ComponentDefine.DirectionType.HORIZONTAL: {
                if (this.content.anchorX === 0.5) {
                    this.content.anchorX = 0;
                    this.content.x = this.content.x - (this.content.width * 0.5);
                }
                this.elastic = this.content.width > this.content.parent.width;
            }
                break;
            case ComponentDefine.DirectionType.VERTICAL: {
                if (this.content.anchorY === 0.5) {
                    this.content.anchorY = 1;
                    this.content.y = this.content.y + (this.content.height * 0.5);
                }
                this.elastic = this.content.height > this.content.parent.height;
            }
                break;
        }

        if (this._itemDataList.length > 0) {
            this.updateListItem();
        }
    }

    /**
     * 获取列表项节点
     * @returns {cc.Node} 节点
     */
    private getNode(): cc.Node | null {
        if (!this.itemPrefab) {
            G.LogMgr.error(`请在 ListView 添加预制项 prefab`);
            return null;
        }

        let node: cc.Node = this._itemNodePool.get();
        if (!node) {
            node = cc.instantiate(this.itemPrefab);
        }

        return node;
    }

    /**
     * 放入列表项节点
     * @param node {cc.Node} 节点
     */
    private putNode(node: cc.Node): void {
        if (!node || node.uuid !== this.itemPrefab.data.uuid) {
            G.LogMgr.warn(`请不要放入与 ${node.name} 不相关的节点`);
            return null;
        }

        node.removeFromParent();
        this.scheduleOnce(() => {
            this._itemNodePool.put(node);
        });
    }

    private initItemPos(node: cc.Node): void {
        if (this.direction === ComponentDefine.DirectionType.HORIZONTAL) {
            // 处理开头
            if (this.content.childrenCount <= 1) {
                this._lastPos.x += this.left;
            }

            node.setPosition(this._lastPos.x + (node.width * 0.5), this._lastPos.y);

            // 处理结尾
            this._lastPos.x += node.width + this.spacingX;
        } else if (this.direction === ComponentDefine.DirectionType.VERTICAL) {
            // 处理开头
            if (this.content.childrenCount <= 1) {
                this._lastPos.y -= this.top;
            }

            node.setPosition(this._lastPos.x, this._lastPos.y - (node.height * 0.5));

            // 处理结尾
            this._lastPos.y -= node.height + this.spacingY;
        }
    }

    /**
     * 生产列表项
     * @param itemData {T} 泛型数据
     */
    private makeItem<T>(itemData: T): void {
        let itemNode: cc.Node = this.getNode();
        this.content.addChild(itemNode);
        let itemSrc: ComponentInterface.ListViewItemClass = itemNode.getComponent(itemNode.name);
        if (itemSrc && itemData !== null && itemData !== undefined) {
            if (this.clickItemEventHandler) {
                itemSrc.clickCallback = this.pullLeftEventHandler.emit;
            }
            if (itemSrc.onShow) {
                itemSrc.onShow.apply(itemSrc, itemData);
            }
        }

        this.initItemPos(itemNode);
    }

    private *makeGeneratorItem<T>(itemsData: T[]): Generator {
        for (let i: number = 0; i < itemsData.length; ++i) {
            yield this.makeItem(itemsData[i]);
        }
    }

    /**
     * 执行协程加载列表项
     * @param generator {Generator} 协程
     * @param duration {number} 每次协程占用时间（单位：毫秒）
     * @returns {Promise<void>}
     */
    private async execGeneratorItem(generator: Generator, duration: number): Promise<void> {
        return new Promise((resolve: (value: void | PromiseLike<void>) => void, reject: (reason?: any) => void) => {
            let exec: Function = () => {
                let startTime = new Date().getTime();
                for (let iterator = generator.next(); ; iterator = generator.next()) {
                    if (iterator == null || iterator.done) {
                        resolve();
                        break;
                    }

                    if (new Date().getTime() - startTime > duration) {
                        this.scheduleOnce(() => {
                            exec();
                        });
                        break;
                    }
                }
            }

            exec();
        });
    }

    /**
     * 分帧加载
     * @param itemsData {itemsData: T[]} 列表项数据
     * @returns {Promise<void>}
     */
    private async frameLoadItem<T>(itemsData: T[]): Promise<void> {
        await this.execGeneratorItem(this.makeGeneratorItem(itemsData), EXEC_GENERATOR_TIME);
        if (this._onceRendererFinishCallback) {
            this._onceRendererFinishCallback();
        }
        this._isRendering = false;
    }

    /**
     * 直接加载
     * @param itemsData {itemsData: T[]} 列表项数据
     */
    private directLoadItem<T>(itemsData: T[]): void {
        for (let i: number = 0; i < itemsData.length; ++i) {
            this.makeItem(itemsData[i]);
        }
        if (this._onceRendererFinishCallback) {
            this._onceRendererFinishCallback();
        }
        this._isRendering = false;
    }

    // /**
    //  * 获取左边缓存矩形区域
    //  * @returns {cc.Rect} 矩形
    //  */
    // private getCacheRectLeft(): cc.Rect {
    //     let rect: cc.Rect = null;
    //     let point: cc.Vec2 = this.content.parent.convertToWorldSpace(cc.v2(0, 0));
    //     point.x -= this.content.parent.width;
    //     rect = cc.rect(point.x, point.y, this.content.parent.width, this.content.parent.height);
    //     return rect;
    // }

    // /**
    //  * 获取右边缓存矩形区域
    //  * @returns {cc.Rect} 矩形
    //  */
    // private getCacheRectRight(): cc.Rect {
    //     let rect: cc.Rect = null;
    //     let point: cc.Vec2 = this.content.parent.convertToWorldSpace(cc.v2(0, 0));
    //     point.x += this.content.parent.width;
    //     rect = cc.rect(point.x, point.y, this.content.parent.width, this.content.parent.height);
    //     return rect;
    // }

    // /**
    //  * 获取顶部缓存矩形区域
    //  * @returns {cc.Rect} 矩形
    //  */
    // private getCacheRectTop(): cc.Rect {
    //     let rect: cc.Rect = null;
    //     let point: cc.Vec2 = this.content.parent.convertToWorldSpace(cc.v2(0, 0));
    //     point.y += this.content.parent.height;
    //     rect = cc.rect(point.x, point.y, this.content.parent.width, this.content.parent.height);
    //     return rect;
    // }

    // /**
    //  * 获取底部缓存矩形区域
    //  * @returns {cc.Rect} 矩形
    //  */
    // private getCacheRectBottom(): cc.Rect {
    //     let rect: cc.Rect = null;
    //     let point: cc.Vec2 = this.content.parent.convertToWorldSpace(cc.v2(0, 0));
    //     point.y -= this.content.parent.height;
    //     rect = cc.rect(point.x, point.y, this.content.parent.width, this.content.parent.height);
    //     return rect;
    // }

    // /**
    //  * 获取左右缓存矩形区域
    //  * @returns {cc.Rect} 矩形
    //  */
    // private getCacheRectLeftRight(): cc.Rect {
    //     let rect: cc.Rect = null;
    //     let point: cc.Vec2 = this.content.parent.convertToWorldSpace(cc.v2(0, 0));
    //     point.x -= this.content.parent.width;
    //     rect = cc.rect(point.x, point.y, this.content.parent.width * 3, this.content.parent.height);
    //     return rect;
    // }

    // /**
    //  * 获取上下缓存矩形区域
    //  * @returns {cc.Rect} 矩形
    //  */
    // private getCacheRectTopBottom(): cc.Rect {
    //     let rect: cc.Rect = null;
    //     let point: cc.Vec2 = this.content.parent.convertToWorldSpace(cc.v2(0, 0));
    //     point.y -= this.content.parent.height;
    //     rect = cc.rect(point.x, point.y, this.content.parent.width, this.content.parent.height * 3);
    //     return rect;
    // }

    // /**
    //  * 获取中间可视矩形区域
    //  * @returns {cc.Rect} 矩形
    //  */
    // private getVisibleRectCenter(): cc.Rect {
    //     let rect: cc.Rect = null;
    //     let point: cc.Vec2 = this.content.parent.convertToWorldSpace(cc.v2(0, 0));
    //     rect = cc.rect(point.x, point.y, this.content.parent.width, this.content.parent.height);
    //     return rect;
    // }

    // /**
    //  * 获取子项列表的矩形大小
    //  * @param items {ScrollViewInterface.ItemData[]} 子项列表
    //  * @returns {cc.Size}
    //  */
    // private getItemsRectSize(items: ScrollViewInterface.ItemData[]): cc.Size {
    //     let rectSize: cc.Size = new cc.Size(0, 0);

    //     if (items) {
    //         if (!(items instanceof Array)) {
    //             items = [].concat(items);
    //         }

    //         for (let i: number = 0; i < items.length; ++i) {
    //             let item: ScrollViewInterface.ItemData = items[i];
    //             rectSize.width += item.prefab.data.width;
    //             rectSize.height += item.prefab.data.height;
    //         }
    //     }

    //     return rectSize;
    // }

    /**
     * 获取边距
     * @param {number} 边距
     */
    private getPadding(): number {
        let padding: number = 0;
        if (this.direction === ComponentDefine.DirectionType.HORIZONTAL) {
            padding += this.left + this.right;
        } else if (this.direction === ComponentDefine.DirectionType.VERTICAL) {
            padding += this.top + this.bottom;
        }
        return padding;
    }

    /**
     * 获取间距
     * @param {number} 间距
     */
    private getSpacing(): number {
        let spacing: number = 0;
        if (this.direction === ComponentDefine.DirectionType.HORIZONTAL) {
            spacing = this.spacingX;
        } else if (this.direction === ComponentDefine.DirectionType.VERTICAL) {
            spacing = this.spacingY;
        }
        return spacing;
    }

    // /**
    //  * 渲染列表
    //  * @param itemsData 
    //  */
    // private rendererList(itemsData: ScrollViewInterface.ItemData[]): void {
    //     this.m_onceItemNodeList = [];

    //     let padding: number = 0;
    //     let spacing: number = this.getSpacing();
    //     if (this.m_itemDataList.length <= 0) {
    //         padding = this.getPadding();
    //         spacing = (itemsData.length - 1) * spacing;
    //     } else {
    //         spacing = itemsData.length * spacing;
    //     }

    //     this.m_itemDataList = this.m_itemDataList.concat(itemsData);

    //     let itemsRectSize: cc.Size = this.getItemsRectSize(itemsData);

    //     let isExcess: boolean = false;
    //     if (this.direction === ComponentDefine.DirectionType.HORIZONTAL) {
    //         this.m_innerSize.width += padding + itemsRectSize.width + spacing;
    //         isExcess = this.m_innerSize.width > this.content.parent.width;
    //         if (isExcess) {
    //             this.content.width = this.m_innerSize.width;
    //         } else {
    //             this.content.width = this.content.parent.width;
    //         }
    //     } else if (this.direction === ComponentDefine.DirectionType.VERTICAL) {
    //         this.m_innerSize.height += padding + itemsRectSize.height + spacing;
    //         isExcess = this.m_innerSize.height > this.content.parent.height;
    //         if (isExcess) {
    //             this.content.height = this.m_innerSize.height;
    //         } else {
    //             this.content.height = this.content.parent.height;
    //         }
    //     }
    //     this.elastic = isExcess;
    //     // this.inertia = isExcess;

    //     if (this.isEndless) {
    //         // itemsData = 
    //     }

    //     if (this.isFrameLoad) {
    //         this.frameLoadItem(itemsData);
    //     } else {
    //         this.directLoadItem(itemsData);
    //     }

    // }

    // /**
    //  * 添加节点
    //  * @param prefab {cc.Prefab} 预制
    //  * @param data {any} 传入节点的数据
    //  */
    // public add(itemsData: ScrollViewInterface.ItemData | ScrollViewInterface.ItemData[]): void {
    //     if (!itemsData) {
    //         G.Logger.warn("ScrollView add 参数不能为空");
    //         return;
    //     }

    //     if (!(itemsData instanceof Array)) {
    //         itemsData = [].concat(itemsData);
    //     }

    //     if (!this.m_isLoaded) {
    //         this.m_tempItemDataList = this.m_tempItemDataList.concat(itemsData);
    //         return;
    //     }

    //     this.rendererList(itemsData);
    // }

    // // public removeAll(): void {
    // //     for (let i: number = 0; i < this.m_itemNodeList.length; ++i) {
    // //         this.putNode(this.m_itemNodeList[i]);
    // //     }

    // //     this._lastPos = cc.v2(0, 0);
    // //     this.m_lastIndex = 0;
    // //     this.m_itemDataList = [];
    // //     this.m_innerSize = cc.size(this.content.getContentSize());
    // //     this.m_visibleRectCenter = this.getVisibleRectCenter();
    // //     switch (this.direction) {
    // //         case ComponentDefine.DirectionType.HORIZONTAL: {
    // //             this.m_innerSize.width = 0;
    // //             this.m_cacheRect = this.getCacheRectLeftRight();
    // //         }
    // //             break;
    // //         case ComponentDefine.DirectionType.VERTICAL: {
    // //             this.m_innerSize.height = 0;
    // //             this.m_cacheRect = this.getCacheRectTopBottom();
    // //         }
    // //             break;
    // //     }
    // //     this.m_itemNodeList = [];
    // //     this.m_tempItemDataList = [];
    // //     this.m_onceItemNodeList = [];
    // // }

    // public getItemNodeList(): cc.Node[] {
    //     return this.m_itemNodeList;
    // }

    // public registerRendererFinish(callback: Function): void {
    //     this._onceRendererFinishCallback = callback;
    // }

    private onScrollToTop(target: ListView): void {
        if (!this.isPaging) {
            return;
        }

        if (this.pullTopEventHandler) {
            this.pullTopEventHandler.emit([target]);
        }
    }

    private onScrollToBottom(target: ListView): void {
        if (!this.isPaging) {
            return;
        }

        if (this.pullBottomEventHandler) {
            this.pullBottomEventHandler.emit([target]);
        }
    }

    private onScrollToLeft(target: ListView): void {
        if (!this.isPaging) {
            return;
        }

        if (this.pullLeftEventHandler) {
            this.pullLeftEventHandler.emit([target]);
        }
    }

    private onScrollToRight(target: ListView): void {
        if (!this.isPaging) {
            return;
        }

        if (this.pullRightEventHandler) {
            this.pullRightEventHandler.emit([target]);
        }
    }

    private onScrolling(target: ListView): void {
        // for (let i: number = 0; i < this.content.childrenCount; ++i) {
        //     let itemNode: cc.Node = this.content.children[i];
        //     let itemRect: cc.Rect = itemNode.getBoundingBoxToWorld();

        //     if (itemRect.intersects(this.m_cacheRect)) {

        //     } else {
        //         if (this.direction === ComponentDefine.DirectionType.HORIZONTAL) {
        //             if (itemNode.convertToWorldSpace(cc.v2(0, 0)).x > this.content.parent.convertToWorldSpaceAR(cc.v2(0, 0)).x) {
        //                 --this.m_lastIndex;
        //             }
        //         } else if (this.direction === ComponentDefine.DirectionType.VERTICAL) {
        //             if (itemNode.convertToWorldSpace(cc.v2(0, 0)).y < this.content.parent.convertToWorldSpaceAR(cc.v2(0, 0)).x) {
        //                 --this.m_lastIndex;
        //             }
        //         }
        //         this.putNode(itemNode);
        //     }

        // }
        // console.log("Scrolling", target);
    }

    private onBounceBottom(target: ListView): void {
        if (!this.brake) {
            return;
        }

        // console.log("BounceBottom");
    }

    private onBounceTop(target: ListView): void {
        if (!this.brake) {
            return;
        }

        // console.log("BounceTop");
    }

    private onBounceLeft(target: ListView): void {
        if (!this.brake) {
            return;
        }

        // console.log("BounceLeft");
    }

    private onBounceRight(target: ListView): void {
        if (!this.brake) {
            return;
        }

        // console.log("BounceRight");
    }

    private onScrollEnded(target: ListView): void {
        // console.log("ScrollEnded");
    }

    private onTouchUp(target: ListView): void {
        // console.log("TouchUp");
    }

    private onScrollBegan(target: ListView): void {
        // console.log("ScrollBegan");
    }

    update(dt: number) {
        super.update(dt);
    }

    protected onDestroy(): void {
        super.onDestroy();

        this.unregister();
    }

}
