# 框架设计说明文档

## 管理器

### 动画管理器（[AnimationManager](assets/src/core/manager/animation/AnimationManager.ts)）

### 声音管理器（[AudioManager](assets/src/core/manager/audio/AudioManager.ts)）

> 用于整个游戏场景中，需要播放声音的模块，调用全局接口，达到播放声音的效果，开发者无需考虑声音播放缓存问题，音效可自定义是否缓存。

* 继承 `Manager`
* 接口 `ManagerInterface`

#### 方法

##### `playMusic`

> 播放音乐 用于背景音乐，循环播放方式，切换音乐时会有转场效果

|参数|类型|描述|
|:--:|:--:|:--:|
|path|[AudioDefineType](global.d.ts)|加载路径|
|isGradually|boolean|是否渐变转场效果，默认 true|

* 例子

```typescript
G.AudioMgr.playMusic(AudioDefine.XXX, false);
```
---

##### `pauseMusic`

> 暂停当前播放中的音乐，如果当前没有正在播放的音乐，会有个警告提示

* 例子

```typescript
G.AudioMgr.pauseMusic();
```

---

##### `stopMusic`

> 停止当前播放中的音乐，如果当前没有正在播放的音乐，会有个警告提示

|参数|类型|描述|
|:--:|:--:|:--:|
|isGradually|boolean|是否转场效果|

* 例子

```typescript
G.AudioMgr.stopMusic(false);
```

---

##### `resumeMusic`

> 恢复当前被暂停的音乐，如果当前没有正在播放的音乐，会有个警告提示

* 例子

```typescript
G.AudioMgr.resumeMusic();
```

---

##### `playEffect`

> 播放音效 播放一次游戏内的短暂声音

|参数|类型|描述|
|:--:|:--:|:--:|
|path|[AudioDefineType](global.d.ts)|音效路径|
|isBreak|boolean|true 代表之前播放相同路径的资源会被停止后，播放新的路径音效，false 代表之前播放相同路径的资源会自然的播放完成，不会被主动停止|
|isCache|boolean|true 代表之前播放过的资源，在当前场景中缓存并不会被销毁，false 代表播放完成后立刻释放缓存资源|

* 例子

```typescript
G.AudioMgr.playEffect(AudioDefine.XXX, true, false);
```

---

##### `pauseEffect`

> 暂停音效（不销毁缓存）

|参数|类型|描述|
|:--:|:--:|:--:|
|path|[AudioDefineType](global.d.ts)|音效路径|

* 例子

```typescript
G.AudioMgr.pauseEffect(AudioDefine.XXX);
```

---

##### `pauseAllEffect`

> 暂停所有音效

* 例子

```typescript
G.AudioMgr.pauseAllEffect();
```

---

##### `stopEffect`

> 停止音效

|参数|类型|描述|
|:--:|:--:|:--:|
|path|[AudioDefineType](global.d.ts)|音效路径|

* 例子

```typescript
G.AudioMgr.stopEffect(AudioDefine.XXX);
```

---

##### `stopAllEffect`

> 停止所有音效

* 例子

```typescript
G.AudioMgr.stopAllEffect();
```

---

##### `resumeEffect`

> 恢复暂停后的音效

|参数|类型|描述|
|:--:|:--:|:--:|
|path|[AudioDefineType](global.d.ts)|音效路径|

* 例子

```typescript
G.AudioMgr.resumeEffect(AudioDefine.XXX);
```

---

##### `resumeAllEffect`

> 恢复所有暂停后的音效

* 例子

```typescript
G.AudioMgr.resumeAllEffect();
```

---

##### `playClick`

> 播放按钮点击音效

* 例子

```typescript
G.AudioMgr.playClick();
```

---

##### `destroy`

> 销毁 清理并停止所有正在播放声音（只允许通过 单例静态销毁调用，不允许使用成员方法进行 destroy）

* 例子

```typescript
AudioManager.destroy();
```

### 事件管理器 （[EventManager](assets/src/core/manager/event/EventManager.ts)）

> 事件管理器，侦察者模式，用于整个游戏中的消息事件注册、接收、发送工作，各模块之间交互和解耦

* 继承 `Manager`
* 接口 `ManagerInterface`

#### 方法

##### `on`

> 注册事件

|参数|类型|描述|
|:--:|:--:|:--:|
|event|[EventDefineType](global.d.ts)|事件ID|
|caller|T|注册者的 this 对象|
|callback|Function|监听回调函数|

* 例子

```typescript
G.EventMgr.on(EventDefine.XXX, this, this.onCallback);
```

---

##### `off`

> 释放事件

|参数|类型|描述|
|:--:|:--:|:--:|
|event|[EventDefineType](global.d.ts)|事件ID|
|caller|T|注册者的 this 对象|
|callback|Function|监听回调函数|

* 例子

```typescript
G.EventMgr.off(EventDefine.XXX, this, this.onCallback);
```

--

##### `emit`

> 发送事件（异步）

|参数|类型|描述|
|:--:|:--:|:--:|
|event|[EventDefineType](global.d.ts)|事件ID|
|data|...any[]|多个任意数据|

* 例子

```typescript
G.EventMgr.emit(EventDefine.XXX, data);
```

---

##### `destroy`

> 销毁 清理所有注册过的事件（只允许通过 单例静态销毁调用，不允许使用成员方法进行 destroy）

* 例子

```typescript
EventManager.destroy();
```

### 网络管理器（[NetworkManager](assets/src/core/manager/network/NetworkManager.ts)）

### 视图管理器（[UIManager](assets/src/core/manager/ui/UIManager.ts)）

### 日志记录器（[Logger](assets/src/core/machine/Logger.ts)）

### 资源加载器（[Loader](assets/src/core/machine/Loader.ts)）

> 资源加载器 维护已加载的资源管理

#### 方法

##### `getCache`

> 获取已加载后并缓存过的资源

|参数|类型|描述|
|:--:|:--:|:--:|
|path|[AssetsPathDefineType](global.d.ts)|资源路径|
|返回值|类型|描述|
||cc.Asset\|undefined|如果资源已经加载过返回加载后的 cc.Asset，如果未加载或者已释放返回 undefined|

* 例子

```typescript
let asset: cc.Asset | undefined = G.Loader.getCache(EventDefine.XXX);
```

---

##### `preload`

> 预加载动态资源

|参数|类型|描述|
|:--:|:--:|:--:|
|path|[AssetsPathDefineType](global.d.ts)|资源路径|
|onComplete|(items: cc.AssetManager.RequestItem[]) => void|预加载完成回调|
|onProgress|(percent: number) => void|预加载过程中的百分比（0-100）|

* 例子

```typescript
// example 1
let audioPath: AudioDefineType = AudioDefine.CLICK;
G.Loader.preload(audioPath, (items: cc.AssetManager.RequestItem[]) => {
    // 完成后的回调
}, (percent: number) => {
    // 加载进度回调
});

// example 2
let viewPaths: ViewDefineType[] = [];
viewPaths.push(ViewDefine.Test1);
viewPaths.push(ViewDefine.Test2);
G.Loader.preload(audioPath, (items: cc.AssetManager.RequestItem[]) => {
    // 完成后的回调
}, (percent: number) => {
    // 百分比回调
});
```

---

##### `load`

> 加载动态资源（完成后对资源的引用计数加 1）

|参数|类型|描述|
|:--:|:--:|:--:|
|path|[AssetsPathDefineType](global.d.ts)|资源路径|
|onComplete|(items: cc.Asset | cc.Asset[] | null) => void|加载完成回调|
|onProgress|(percent: number) => void|加载过程中的百分比（0-100）|

* 例子

```typescript
// example 1
let audioPath: AudioDefineType = AudioDefine.CLICK;
G.Loader.load(audioPath, (items: cc.Asset | cc.Asset[] | null) => {
    // 完成后的回调
}, (percent: number) => {
    // 百分比回调
});

// example 2
let viewPaths: ViewDefineType[] = [];
viewPaths.push(ViewDefine.Test1);
viewPaths.push(ViewDefine.Test2);
G.Loader.load(audioPath, (items: cc.Asset | cc.Asset[] | null) => {
    // 完成后的回调
}, (percent: number) => {
    // 百分比回调
});
```

---

##### `unload`

> 卸载动态资源（完成后对资源的引用计数减 1）

|参数|类型|描述|
|:--:|:--:|:--:|
|path|[AssetsPathDefineType](global.d.ts)|资源路径|
|onComplete|Function|卸载完成回调|
|onProgress|(percent: number) => void|卸载过程中的百分比（0-100）|

* 例子

```typescript
// example 1
let audioPath: AudioDefineType = AudioDefine.CLICK;
G.Loader.unload(audioPath, () => {
    // 完成后的回调
}, (percent: number) => {
    // 百分比回调
});

// example 2
let viewPaths: ViewDefineType[] = [];
viewPaths.push(ViewDefine.Test1);
viewPaths.push(ViewDefine.Test2);
G.Loader.unload(audioPath, () => {
    // 完成后的回调
}, (percent: number) => {
    // 百分比回调
});
```

---

##### `release`

> 释放已动态加载过的资源（把资源引用计数减到 0，达到释放资源目的）

|参数|类型|描述|
|:--:|:--:|:--:|
|path|[AssetsPathDefineType](global.d.ts)|资源路径|
|onComplete|Function|释放完成回调|
|onProgress|(percent: number) => void|释放过程中的百分比（0-100）|

* 例子

```typescript
// example 1
let audioPath: AudioDefineType = AudioDefine.CLICK;
G.Loader.release(audioPath, () => {
    // 完成后的回调
}, (percent: number) => {
    // 百分比回调
});

// example 2
let viewPaths: ViewDefineType[] = [];
viewPaths.push(ViewDefine.Test1);
viewPaths.push(ViewDefine.Test2);
G.Loader.release(audioPath, () => {
    // 完成后的回调
}, (percent: number) => {
    // 百分比回调
});
```

---

##### `releaseAll`

> 释放所有已动态加载过的资源（把所有加载过的资源引用计数归 0）

|参数|类型|描述|
|:--:|:--:|:--:|
|onComplete|Function|释放所有完成回调|
|onProgress|(percent: number) => void|释放过程中的百分比（0-100）|

* 例子

```typescript
// example 1
G.Loader.releaseAll(() => {
    // 完成后的回调
}, (percent: number) => {
    // 百分比回调
});

// example 2
G.Loader.releaseAll(() => {
    // 完成后的回调
}, (percent: number) => {
    // 百分比回调
});
```

---

##### `destroy`

> 销毁 清理已经加载缓存的资源并置空（只允许通过 单例静态销毁调用，不允许使用成员方法进行 destroy）

* 例子

```typescript
Loader.destroy();
```

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