# 框架设计说明文档

## 管理器

### 动画管理器

### 声音管理器（[AudioManager](assets/src/core/manager/audio/AudioManager.ts)#90）

> 用于整个游戏场景中，需要播放声音的模块，调用全局接口，达到播放声音的效果，开发者无需考虑声音播放缓存问题，音效可自定义是否缓存。

* 继承 `Manager`
* 接口 `ManagerInterface`

#### 方法

`playMusic`
> 播放音乐 用于背景音乐，循环播放方式，切换音乐时会有转场效果

|参数|类型|描述|
|:--:|:--:|:--:|
|path|[AudioDefineType](global.ts.d)|加载路径|
|isGradually|boolean|是否渐变转场效果，默认 true|

`pauseMusic`
> 暂停当前播放中的音乐，如果当前没有正在播放的音乐，会有个警告提示

### 事件管理器 （[EventManager](assets/src/core/manager/event/EventManager.ts)）

> 使用侦察者模式设计，用于整个游戏中的消息事件注册、接收、发送工作，各模块之间交互和解耦

* 继承于 Manager
* 接口 ManagerInterface

#### 成员

**`m_eventMap`**

|meta|desc|
|:--:|:--:|
|类型|Map<EventDefine, Map<any, Function[]>>|

#### 方法

**`on`**

> 注册事件函数，不可在当前模块内重复注册相同事件。

|参数|类型|描述|
|:--:|:--:|:--:|
|event|EventDefine|事件ID|
|caller|T|注册者的 this 对象|
|callback|Function|监听回调函数|

例子

```typescript
    private onListener(num: number, str: string, bool: boolean): void {
        // ...
    }

    C.EventMgr.on(EventDefine.XXX, this, this.onListener);
```

---

**`off`**

> 释放一个已注册过的事件和回调方法。

|参数|类型|描述|
|:--:|:--:|:--:|
|event|EventDefine|事件ID|
|caller|T|释放者的 this 对象|
|callback|Function|监听回调函数|

例子

```typescript
    C.EventMgr.off(EventDefine.XXX, this, this.onListener);
```

---

**`emit`**

> 发送事件，包括可以发送多个参数给监听者。

|参数|类型|描述|
|:--:|:--:|:--:|
|event|EventDefine|事件ID|
|data|...any[]|多个参数的数据|

例子

```typescript
    C.EventMgr.emit(EventDefine.XXX, 100, "200", true);
```

---

**`destroy`**

> 手动销毁注册过的事件回调和 Map 对象

例子

```typescript
    C.EventMgr.destroy();
```

### 日志管理器

### 网络管理器

### 视图管理器

## 命名规范

### 节点命名
* 驼峰命名法
* 节点名 = 前缀 + 作用名

#### 前缀

* 精灵：`img`
* 标签：`lab`
* 按钮：`btn`
* 输入框：`edb`
* 滑动条：`sld`
* 网页视图：`wbv`
* 页面视图：`pgv`
* 滑动视图：`scv`
* 复选按钮：`tog`
* 布局：`lao`
* 富文本：`rch`
* 动画：`ani`
* 节点：`nod`

#### 