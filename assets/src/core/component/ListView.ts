/*
 * Author       : ougato
 * Date         : 2021-12-13 11:11:13
 * LastEditors  : ougato
 * LastEditTime : 2021-12-19 03:52:04
 * FilePath     : /client/assets/src/core/component/ListView.ts
 * Description  : 滑动列表（分帧加载、分页加载、无限列表）
 */

import * as ComponentDefine from "../define/ComponentDefine";
import * as ComponentInterface from "../interface/ComponentInterface";
import TypeUtils from "../utils/TypeUtils";

// 每次执行协程分配的时间（单位：毫秒）
const EXEC_GENERATOR_TIME: number = 8;

const { ccclass, property } = cc._decorator;

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

    @property({ type: cc.Prefab, tooltip: "列表项预制" })
    private itemPrefab: cc.Prefab = null;

    @property({ type: cc.Enum(ComponentDefine.ListViewLoadMode), tooltip: "加载模式\nNONE 直接加载\nFRAME 分帧加载\nENDLESS 无限加载" })
    public mode: ComponentDefine.ListViewLoadMode = ComponentDefine.ListViewLoadMode.NONE;

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
    private _itemDataList: unknown[] = [];
    // 列表项节点池
    private _itemNodePool: cc.NodePool = new cc.NodePool();
    // 最后节点位置
    private _lastPos: cc.Vec2 = cc.v2(0, 0);
    // 渲染列表项起始下标
    private _renderItemStartIndex: number = null;
    // 渲染列表项结束下标
    private _renderItemEndIndex: number = null;
    // 是否渲染中
    private _isRendering: boolean = false;
    // 缓存列表
    private _itemCacheDataList: unknown[] = [];
    // 渲染中操作次数
    private _renderingOperateCount: number = 0;
    // 缓存渲染列表项起始下标
    private _cacheRenderItemStartIndex: number = null;

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
        this.register();
        this.initData();
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
        if (TypeUtils.isNull(itemsData)) {
            return;
        }

        if (TypeUtils.isArray(itemsData) && (itemsData as Array<T>).length <= 0) {
            return;
        }

        if (this._isRendering) {
            this.setData(this._itemCacheDataList, itemsData);
            this._cacheRenderItemStartIndex = 0;
            ++this._renderingOperateCount;
        } else {
            this.setData(this._itemDataList, itemsData);
            this._renderItemStartIndex = 0;
            this._renderItemEndIndex = this._itemDataList.length - 1;
            this.updateListItem();
        }
    }

    /**
     * 设置数据项
     * @param dataList {T[]} 设置列表
     * @param itemsData {T | T[]} 数据|数据列表
     */
    public setData<T>(dataList: T[], itemsData: T | T[]): void {
        dataList.length = 0;
        this.insertData(dataList, itemsData, 0);
    }

    /**
     * 插入项
     * @param itemsData {T | T[]} 数据|数据列表
     * @param index {number} 下标（默认：最后插入）
     */
    public insert<T>(itemsData: T | T[], index?: number): void {
        if (TypeUtils.isNull(itemsData)) {
            return;
        }

        if (TypeUtils.isArray(itemsData) && (itemsData as Array<T>).length <= 0) {
            return;
        }

        let dataList: unknown[] = null;
        if (this._isRendering) {
            if (this._renderingOperateCount <= 0) {
                this._itemCacheDataList = [].concat(this._itemDataList);
            }
            dataList = this._itemCacheDataList;
        } else {
            dataList = this._itemDataList;
        }

        if (TypeUtils.isNull(index)) {
            index = dataList.length;
        } else {
            if (index < 0) {
                index = 0;
            } else if (index > dataList.length) {
                index = dataList.length;
            }
        }

        if (this._isRendering) {
            this.insertData(dataList, itemsData, index);
            if (TypeUtils.isNull(this._cacheRenderItemStartIndex)) {
                this._cacheRenderItemStartIndex = index;
            } else if (this._cacheRenderItemStartIndex > index) {
                this._cacheRenderItemStartIndex = index;
            }
            ++this._renderingOperateCount;
        } else {
            this.insertData(dataList, itemsData, index);
            this._renderItemStartIndex = index;
            this._renderItemEndIndex = dataList.length - 1;
            this.updateListItem();
        }
    }

    /**
     * 插入数据项
     * @param dataList {T[]} 插入列表
     * @param itemsData {T | T[]} 数据|数据列表
     * @param index {number} 下标
     */
    public insertData<T>(dataList: T[], itemsData: T | T[], index: number): void {
        if (Array.isArray(itemsData)) {
            let spliceParam: unknown[] = [index, 0];
            spliceParam = spliceParam.concat(itemsData);
            dataList.splice.apply(dataList, spliceParam);
        } else {
            dataList.splice(index, 0, itemsData);
        }
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

        let dataList: unknown[] = null;
        if (this._isRendering) {
            if (this._renderingOperateCount <= 0) {
                this._itemCacheDataList = [].concat(this._itemDataList);
            }
            dataList = this._itemCacheDataList;
        } else {
            dataList = this._itemDataList;
        }

        if (TypeUtils.isNull(index) && TypeUtils.isNull(count)) {
            index = 0;
            count = dataList.length;
        } else if (TypeUtils.isNull(index)) {
            index = dataList.length - count;
            if (index < 0) {
                index = 0;
                count = dataList.length;
            }
        } else if (TypeUtils.isNull(count)) {
            if (index < 0) {
                index = 0;
            } else if (index >= dataList.length) {
                index = dataList.length - 1;
            }
            count = dataList.length - index;
        }

        if (this._isRendering) {
            dataList.splice(index, count);
            if (TypeUtils.isNull(this._cacheRenderItemStartIndex)) {
                this._cacheRenderItemStartIndex = index;
            } else if (this._cacheRenderItemStartIndex > index) {
                this._cacheRenderItemStartIndex = index;
            }
            ++this._renderingOperateCount;
        } else {
            dataList.splice(index, count);
            this._renderItemStartIndex = index;
            this._renderItemEndIndex = this.content.childrenCount - 1;
            this.updateListItem();
        }
    }

    /**
     * 刷新列表项
     */
    private updateListItem(): void {
        if (!this._isLoaded) {
            return;
        }

        this.setRendering(true);

        this.content.setContentSize(this.getInnerEstimateSize());

        if (this.mode === ComponentDefine.ListViewLoadMode.ENDLESS) {

        } else {
            let putIndexList: number[] = [];
            for (let i: number = this._renderItemStartIndex; i <= this._renderItemEndIndex; ++i) {
                let itemNode: cc.Node = this.content.children[i];
                let itemData: unknown = this._itemDataList[i];

                if (!TypeUtils.isNull(itemNode) && this._itemDataList.hasOwnProperty(i)) {
                    if (this.clickItemEventHandler) {
                        itemNode.getComponent(cc.Button).node.off("click");
                        itemNode.getComponent(cc.Button).node.on("click", this.onClickItem.bind(this, itemNode, itemData));
                    }
                    let itemSrc: ComponentInterface.ListViewItemClass = itemNode.getComponent(itemNode.name);
                    itemSrc.onShow && itemSrc.onShow(itemData);
                } else if (TypeUtils.isNull(itemNode)) {
                    let itemsData: unknown[] = this._itemDataList.slice(i, this._itemDataList.length);;
                    if (this.mode === ComponentDefine.ListViewLoadMode.FRAME) {
                        let nodePoolSize: number = this._itemNodePool.size();
                        if (nodePoolSize > 0) {
                            let directLoadEndIndex: number = i + (nodePoolSize - 1);
                            itemsData = this._itemDataList.slice(i, directLoadEndIndex);
                            this.directLoadItem(itemsData);
                            if (directLoadEndIndex < this._renderItemEndIndex) {
                                itemsData = this._itemDataList.slice(directLoadEndIndex, this._renderItemEndIndex);
                                this.frameLoadItem(itemsData);
                            }
                        } else {
                            this.frameLoadItem(itemsData);
                        }
                    } else if (this.mode === ComponentDefine.ListViewLoadMode.NONE) {
                        this.directLoadItem(itemsData);
                    }
                    break;
                } else if (!this._itemDataList.hasOwnProperty(i)) {
                    putIndexList.push(i);
                }
            }

            for (let i: number = putIndexList.length - 1; i >= 0; --i) {
                let itemNode: cc.Node = this.content.children[putIndexList[i]];
                if (this.clickItemEventHandler) {
                    itemNode.getComponent(cc.Button).node.off("click");
                }
                this.putNode(itemNode);
            }

            if (this.mode === ComponentDefine.ListViewLoadMode.NONE) {
                this.setRendering(false);
            }
        }
    }

    /**
     * 刷新缓存数据列表项
     */
    private updateCacheDataList(): void {
        this.setData(this._itemDataList, this._itemCacheDataList);
        this._itemCacheDataList.length = 0;
        this._renderItemStartIndex = this._cacheRenderItemStartIndex;
        this._renderItemEndIndex = this._itemDataList.length - 1;
        this.updateListItem();
    }

    private initData(): void {
        this._isLoaded = true;
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
        let poolNodeCount: number = 0;

        switch (this.direction) {
            case ComponentDefine.DirectionType.HORIZONTAL: {
                if (this.content.anchorX === 0.5) {
                    this.content.anchorX = 0;
                    this.content.x = this.content.x - (this.content.width * 0.5);
                }
                this.content.anchorY = 0.5;
                poolNodeCount = Math.ceil((this.node.width - this.spacingX) / (this.itemPrefab.data.width + this.spacingX)) + 2;
            }
                break;
            case ComponentDefine.DirectionType.VERTICAL: {
                if (this.content.anchorY === 0.5) {
                    this.content.anchorY = 1;
                    this.content.y = this.content.y + (this.content.height * 0.5);
                }
                this.content.anchorX = 0.5;
                poolNodeCount = Math.ceil((this.node.height - this.spacingY) / (this.itemPrefab.data.height + this.spacingY)) + 2;
            }
                break;
        }

        if (this.mode === ComponentDefine.ListViewLoadMode.ENDLESS) {
            for (let i: number = 0; i < poolNodeCount; ++i) {
                this.putNode(this.getNode());
            }
        }

        if (this._itemDataList.length > 0) {
            this.updateListItem();
        }
    }

    /**
     * 设置渲染中状态
     * @param isRendering {boolean} 是否正在渲染项
     */
    private setRendering(isRendering: boolean): void {
        this._isRendering = isRendering;
        if (!isRendering) {
            this.onRendered();
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

            if (this.clickItemEventHandler) {
                let button: cc.Button = node.getComponent(cc.Button);
                if (!button) {
                    button = node.addComponent(cc.Button);
                }
            }
        }

        return node;
    }

    /**
     * 放入列表项节点
     * @param node {cc.Node} 节点
     */
    private putNode(node: cc.Node): void {
        if (!node || node.name !== this.itemPrefab.data.name) {
            G.LogMgr.warn(`请不要放入与 ${node.name} 不相关的节点`);
            return null;
        }

        node.removeFromParent();

        let src: ComponentInterface.ListViewItemClass = node.getComponent(node.name);
        src.reset();

        this.scheduleOnce(() => {
            this._itemNodePool.put(node);
        });
    }

    private initItemPos(node: cc.Node): void {
        let innerCount: number = this.content.childrenCount - 1;
        if (this.direction === ComponentDefine.DirectionType.HORIZONTAL) {
            node.setPosition(this.left + (this.itemPrefab.data.width * 0.5) + (innerCount * this.itemPrefab.data.width) + (innerCount * this.spacingX), 0);
        } else if (this.direction === ComponentDefine.DirectionType.VERTICAL) {
            node.setPosition(0, 0 - this.top - (this.itemPrefab.data.height * 0.5) - (innerCount * this.itemPrefab.data.height) - (innerCount * this.spacingY));
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
        if (itemSrc && !TypeUtils.isNull(itemData)) {
            if (this.clickItemEventHandler) {
                itemNode.getComponent(cc.Button).node.on("click", this.onClickItem.bind(this, itemNode, itemData));
            }
            itemSrc.onShow && itemSrc.onShow(itemData);
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
                let startTime = Date.now();
                for (let iterator = generator.next(); ; iterator = generator.next()) {
                    if (iterator == null || iterator.done) {
                        resolve();
                        break;
                    }

                    if (Date.now() - startTime > duration) {
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
        this.setRendering(false);
    }

    /**
     * 直接加载
     * @param itemsData {itemsData: T[]} 列表项数据
     */
    private directLoadItem<T>(itemsData: T[]): void {
        for (let i: number = 0; i < itemsData.length; ++i) {
            this.makeItem(itemsData[i]);
        }
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
     * @returns {number} 边距
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
     * @returns {number} 间距
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

    /**
     * 获取内容器预估大小
     * @returns {cc.Size} 内容器预估大小
     */
    private getInnerEstimateSize(): cc.Size {
        let size: cc.Size = this.content.parent.getContentSize();
        if (this.direction === ComponentDefine.DirectionType.HORIZONTAL) {
            size.width = this.getPadding() + (this.getSpacing() * (this._itemDataList.length - 1)) + (this._itemDataList.length * this.itemPrefab.data.width);
            if (size.width < this.content.parent.width) {
                size.width = this.content.parent.width;
            }
        } else if (this.direction === ComponentDefine.DirectionType.VERTICAL) {
            size.height = this.getPadding() + (this.getSpacing() * (this._itemDataList.length - 1)) + (this._itemDataList.length * this.itemPrefab.data.height);
            if (size.height < this.content.parent.height) {
                size.height = this.content.parent.height;
            }
        }
        return size;
    }

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

    /**
     * 加载渲染完成 回调
     */
    private onRendered(): void {
        this._renderingOperateCount = 0;

        if (this._itemCacheDataList.length <= 0) {
            this._cacheRenderItemStartIndex = null;
            return;
        }

        this.updateCacheDataList();
    }

    update(dt: number) {
        super.update(dt);
    }

    private onClickItem<T>(node: cc.Node, data: T): void {
        this.clickItemEventHandler.emit([node, data]);
    }

    protected onDestroy(): void {
        super.onDestroy();

        this.unregister();
    }

}
