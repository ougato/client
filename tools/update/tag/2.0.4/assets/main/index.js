window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AccountScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74cb4zP17FJwrqYQee8lZ0C", "AccountScene");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const LocalStorageDefine_1 = __importDefault(require("../../define/LocalStorageDefine"));
    const ViewDefine_1 = __importDefault(require("../../define/ViewDefine"));
    const SceneBase_1 = __importDefault(require("../SceneBase"));
    const {ccclass: ccclass, property: property} = cc._decorator;
    let AccountScene = (() => {
      let AccountScene = class AccountScene extends SceneBase_1.default {
        constructor() {
          super(...arguments);
          this.m_token = null;
        }
        onLoad() {
          this.register();
          this.initData();
          this.initView();
        }
        start() {
          this.m_token ? console.log(`\u81ea\u52a8\u767b\u5f55 token: ${this.m_token}`) : G.UIMgr.openView(ViewDefine_1.default.LoginView);
        }
        register() {}
        unRegister() {}
        initData() {
          this.m_token = cc.sys.localStorage.getItem(LocalStorageDefine_1.default.LOCAL_LOGIN_TOKEN);
        }
        initView() {}
        onDestroy() {
          this.unRegister();
        }
      };
      AccountScene = __decorate([ ccclass ], AccountScene);
      return AccountScene;
    })();
    exports.default = AccountScene;
    cc._RF.pop();
  }, {
    "../../define/LocalStorageDefine": "LocalStorageDefine",
    "../../define/ViewDefine": "ViewDefine",
    "../SceneBase": "SceneBase"
  } ],
  AnimationManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f668eOIarVFRo0Wy+en9TW/", "AnimationManager");
    "use strict";
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const Manager_1 = __importDefault(require("../Manager"));
    let AnimationManager = (() => {
      class AnimationManager extends Manager_1.default {
        constructor() {
          super();
        }
        static getInstance() {
          null === this.s_instance && (this.s_instance = new AnimationManager());
          return this.s_instance;
        }
        static destroy() {
          null !== this.s_instance && this.s_instance.destroy();
          this.s_instance = null;
        }
        destroy() {}
      }
      AnimationManager.s_instance = null;
      return AnimationManager;
    })();
    exports.default = AnimationManager;
    cc._RF.pop();
  }, {
    "../Manager": "Manager"
  } ],
  AudioDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d28flGQOVLhbQXVjNynVzC", "AudioDefine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SoundPath = exports.MusicPath = void 0;
    var MusicPath;
    (function(MusicPath) {})(MusicPath = exports.MusicPath || (exports.MusicPath = {}));
    var SoundPath;
    (function(SoundPath) {
      SoundPath["CLICK"] = "audio/sound/click";
    })(SoundPath = exports.SoundPath || (exports.SoundPath = {}));
    exports.default = Object.assign(Object.assign({}, MusicPath), SoundPath);
    cc._RF.pop();
  }, {} ],
  AudioEffectUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c506crS9axH9aFFVzBhVRmi", "AudioEffectUtil");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    class AudioEffectUtil {
      static openGradually(audio, maxVolume = 1, graduallyTime = 5, completeCallback) {
        audio.volume = .1;
        audio.play();
        cc.tween(audio).to(graduallyTime, {
          volume: maxVolume
        }).call(() => {
          completeCallback && completeCallback();
        }).start();
      }
      static closeGradually(audio, minVolume = 0, graduallyTime = 5, completeCallback) {
        cc.tween(audio).to(graduallyTime, {
          volume: minVolume
        }).call(() => {
          completeCallback && completeCallback();
        }).start();
      }
    }
    exports.default = AudioEffectUtil;
    cc._RF.pop();
  }, {} ],
  AudioManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f45a5Pcu6NAwqdZ5f3GC9i7", "AudioManager");
    "use strict";
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const Manager_1 = __importDefault(require("../Manager"));
    const AudioDefine_1 = __importDefault(require("../../../define/AudioDefine"));
    const Loader_1 = __importDefault(require("../../machine/Loader"));
    const Audio_1 = __importDefault(require("./Audio"));
    const Pool_1 = __importDefault(require("../../../pattern/Pool"));
    const Logger_1 = __importDefault(require("../../machine/Logger"));
    const AudioEffectUtil_1 = __importDefault(require("../../../utils/AudioEffectUtil"));
    const MAX_SAME_TIME_PLAY_SIZE = 10;
    const GRADUALLY_TIME = 1;
    let AudioManager = (() => {
      class AudioManager extends Manager_1.default {
        constructor() {
          super();
          this.m_soundPool = null;
          this.m_soundMap = null;
          this.m_music = null;
          this.m_soundPool = new Pool_1.default(Audio_1.default, MAX_SAME_TIME_PLAY_SIZE);
          this.m_soundMap = new Map();
          this.m_music = new Audio_1.default();
        }
        static getInstance() {
          null === this.s_instance && (this.s_instance = new AudioManager());
          return this.s_instance;
        }
        static destroy() {
          null !== this.s_instance && this.s_instance.destroy();
          this.s_instance = null;
        }
        checkLegal(path) {
          let legal = true;
          null !== path && void 0 !== path || (legal = false);
          return legal;
        }
        playMusic(path, isGradually = true) {
          Loader_1.default.getInstance().load(path, clip => {
            if (null === clip) return;
            let playCallBack = () => {
              this.m_music.clear();
              this.m_music.setClip(clip);
              this.m_music.setPath(path);
              this.m_music.regCallback(() => {
                Loader_1.default.getInstance().unload(path);
                this.m_music.clear();
              });
              isGradually ? AudioEffectUtil_1.default.openGradually(this.m_music) : this.m_music.play();
              this.m_music.loop = true;
            };
            let preMusicPath = this.m_music.getPath();
            if (null !== preMusicPath) if (isGradually) AudioEffectUtil_1.default.closeGradually(this.m_music, 0, GRADUALLY_TIME, () => {
              Loader_1.default.getInstance().unload(path);
              playCallBack();
            }); else {
              Loader_1.default.getInstance().unload(path);
              playCallBack();
            } else playCallBack();
          });
        }
        pauseMusic() {
          if (!this.m_music.getPath() || !this.m_music.isPlaying) {
            Logger_1.default.getInstance().warn(`\u65e0\u6cd5\u627e\u5230\u9700\u8981\u6682\u505c\u7684\u97f3\u4e50 ${this.m_music.getPath()}`);
            return;
          }
          this.m_music.pause();
        }
        stopMusic(isGradually = true) {
          if (!this.m_music.getPath() || !this.m_music.isPlaying) {
            Logger_1.default.getInstance().warn(`\u65e0\u6cd5\u627e\u5230\u9700\u8981\u505c\u6b62\u7684\u97f3\u4e50 ${this.m_music.getPath()}`);
            return;
          }
          isGradually ? AudioEffectUtil_1.default.closeGradually(this.m_music, 0, GRADUALLY_TIME, () => {
            this.m_music.stop();
          }) : this.m_music.stop();
        }
        resumeMusic() {
          if (!this.m_music.getPath() || this.m_music.isPlaying) {
            Logger_1.default.getInstance().warn(`\u65e0\u6cd5\u627e\u5230\u9700\u8981\u6062\u590d\u7684\u97f3\u4e50 ${this.m_music.getPath()}`);
            return;
          }
          this.m_music.resume();
        }
        playSound(path, isBreak = false, isCache = true) {
          if (isBreak) {
            let audio = this.m_soundMap.get(path);
            null !== audio && void 0 !== audio && audio.stop();
          }
          Loader_1.default.getInstance().load(path, clip => {
            if (null === clip) return;
            let audio = this.m_soundPool.get();
            this.m_soundMap.set(path, audio);
            audio.setClip(clip);
            audio.setPath(path);
            audio.regCallback(() => {
              let asset = Loader_1.default.getInstance().getCache(path);
              (!isCache || asset.refCount > 1) && Loader_1.default.getInstance().unload(path);
              this.m_soundPool.put(audio);
              asset.refCount <= 0 && this.m_soundMap.delete(path);
            });
            audio.play();
            audio.loop = false;
          });
        }
        pauseSound(path) {
          if (!this.checkLegal(path)) {
            Logger_1.default.getInstance().warn(`\u6682\u505c\u97f3\u6548\u8def\u5f84\u9519\u8bef ${path}`);
            return;
          }
          let audio = this.m_soundMap.get(path);
          if (null === audio || void 0 === audio) {
            Logger_1.default.getInstance().warn(`\u65e0\u6cd5\u6682\u505c\u4e0d\u5b58\u5728\u7684\u97f3\u6548 ${path}`);
            return;
          }
          if (!audio.isPlaying) {
            Logger_1.default.getInstance().warn(`\u65e0\u6cd5\u6682\u505c\u672a\u64ad\u653e\u7684\u97f3\u6548 ${path}`);
            return;
          }
          audio.pause();
        }
        pauseAllSound() {
          let soundSize = this.m_soundMap.size;
          soundSize > 0 && this.m_soundMap.forEach(value => {
            value.pause();
          });
        }
        stopSound(path) {
          if (!this.checkLegal(path)) {
            Logger_1.default.getInstance().warn(`\u505c\u6b62\u97f3\u6548\u8def\u5f84\u9519\u8bef ${path}`);
            return;
          }
          let audio = this.m_soundMap.get(path);
          if (null === audio || void 0 === audio) {
            Logger_1.default.getInstance().warn(`\u65e0\u6cd5\u505c\u6b62\u4e0d\u5b58\u5728\u7684\u97f3\u6548 ${path}`);
            return;
          }
          if (!audio.isPlaying) {
            Logger_1.default.getInstance().warn(`\u65e0\u6cd5\u505c\u6b62\u672a\u64ad\u653e\u7684\u97f3\u6548 ${path}`);
            return;
          }
          audio.stop();
        }
        stopAllSound() {
          let soundSize = this.m_soundMap.size;
          soundSize > 0 && this.m_soundMap.forEach(value => {
            value.stop();
          });
        }
        resumeSound(path) {
          if (!this.checkLegal(path)) {
            Logger_1.default.getInstance().warn(`\u6062\u590d\u97f3\u6548\u8def\u5f84\u9519\u8bef ${path}`);
            return;
          }
          let audio = this.m_soundMap.get(path);
          if (null === audio || void 0 === audio) {
            Logger_1.default.getInstance().warn(`\u65e0\u6cd5\u6062\u590d\u4e0d\u5b58\u5728\u7684\u97f3\u6548 ${path}`);
            return;
          }
          if (audio.isPlaying) {
            Logger_1.default.getInstance().warn(`\u65e0\u6cd5\u6062\u590d\u672a\u6682\u505c\u7684\u97f3\u6548 ${path}`);
            return;
          }
          audio.resume();
        }
        resumeAllSound() {
          let soundSize = this.m_soundMap.size;
          soundSize > 0 && this.m_soundMap.forEach(value => {
            value.resume();
          });
        }
        playClick() {
          this.playSound(AudioDefine_1.default.CLICK, false);
        }
        clearSound() {
          this.m_soundMap.forEach(value => {
            value.stop();
            value.release();
          });
          this.m_soundMap.clear();
        }
        clearMusic() {
          this.m_music.stop();
          this.m_music.release();
        }
        destroy() {
          this.clearSound();
          this.clearMusic();
          this.m_soundPool.destroy();
          this.m_soundPool = null;
          this.m_soundMap = null;
          this.m_music = null;
        }
      }
      AudioManager.s_instance = null;
      return AudioManager;
    })();
    exports.default = AudioManager;
    cc._RF.pop();
  }, {
    "../../../define/AudioDefine": "AudioDefine",
    "../../../pattern/Pool": "Pool",
    "../../../utils/AudioEffectUtil": "AudioEffectUtil",
    "../../machine/Loader": "Loader",
    "../../machine/Logger": "Logger",
    "../Manager": "Manager",
    "./Audio": "Audio"
  } ],
  Audio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4b8a44eRV9B05rPoU6DaiST", "Audio");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    class Audio extends cc.AudioSource {
      constructor() {
        super();
        this.m_endTime = null;
        this.m_endTimer = null;
        this.m_endCallback = null;
        this.m_assetsPath = null;
      }
      regCallback(callback) {
        this.m_endCallback = callback;
      }
      setClip(clip) {
        this.clip = clip;
        this.m_endTime = clip.duration;
      }
      setPath(path) {
        this.m_assetsPath = path;
      }
      getPath() {
        return this.m_assetsPath;
      }
      callFinish() {
        this.m_endCallback && this.m_endCallback();
      }
      startTimer() {
        void 0 !== this.m_endTimer && null !== this.m_endTimer || (this.m_endTimer = setTimeout(() => {
          this.loop || this.callFinish();
        }, 1e3 * this.m_endTime));
      }
      stopTimer() {
        if (void 0 !== this.m_endTimer && null !== this.m_endTimer) {
          clearTimeout(this.m_endTimer);
          this.m_endTimer = null;
        }
      }
      play() {
        super.play();
        this.startTimer();
      }
      stop() {
        super.stop();
        this.callFinish();
      }
      pause() {
        super.pause();
        this.stopTimer();
        this.m_endTime = super.getCurrentTime();
      }
      resume() {
        this.m_endTime = super.getCurrentTime();
        super.resume();
        this.startTimer();
      }
      rewind() {
        this.stopTimer();
        this.m_endTime = this.clip.duration;
        super.rewind();
        this.startTimer();
      }
      clear() {
        this.m_endTime = null;
        this.stopTimer();
        this.m_endCallback = null;
        this.m_assetsPath = null;
      }
      release() {
        this.clear();
      }
    }
    exports.default = Audio;
    cc._RF.pop();
  }, {} ],
  BootScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "649755TIBFA4qKpYnLUyyXa", "BootScene");
    "use strict";
    var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
          return m[k];
        }
      });
    } : function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      o[k2] = m[k];
    });
    var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
      });
    } : function(o, v) {
      o["default"] = v;
    });
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importStar = this && this.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const Loader_1 = __importDefault(require("../../core/machine/Loader"));
    const ViewLayerDefine_1 = __importDefault(require("../../define/ViewLayerDefine"));
    const LanguagePathDefine_1 = __importDefault(require("../../define/LanguagePathDefine"));
    const ViewDefine_1 = __importStar(require("../../define/ViewDefine"));
    const UIManager_1 = __importDefault(require("../../core/manager/ui/UIManager"));
    const UpdateDefine = __importStar(require("../../define/UpdateDefine"));
    const LocalizationDefine_1 = __importDefault(require("../../define/LocalizationDefine"));
    const Util_1 = __importDefault(require("../../utils/Util"));
    const Logger_1 = __importDefault(require("../../core/machine/Logger"));
    const LanguageUtil_1 = __importDefault(require("../../utils/LanguageUtil"));
    const LocalStorageDefine_1 = __importDefault(require("../../define/LocalStorageDefine"));
    const GameConfig = __importStar(require("../../config/GameConfig"));
    const SceneBase_1 = __importDefault(require("../SceneBase"));
    const {ccclass: ccclass, property: property} = cc._decorator;
    let BootScene = (() => {
      let BootScene = class BootScene extends SceneBase_1.default {
        constructor() {
          super(...arguments);
          this.labTips = null;
          this.jsnGameConfig = null;
        }
        onLoad() {
          this.register();
          this.initData();
          this.initView();
        }
        start() {
          this.launch();
        }
        register() {}
        initData() {}
        onLanguage() {}
        initView() {
          this.setTips("");
        }
        setTips(str) {
          this.labTips.string = str;
        }
        launch() {
          return __awaiter(this, void 0, void 0, function*() {
            yield this.loadLanguage();
            yield this.loadDepend();
            yield this.loadUpdate();
            this.intoGame();
          });
        }
        loadLanguage() {
          return __awaiter(this, void 0, void 0, function*() {
            return new Promise(resolve => {
              let language = cc.sys.localStorage.getItem(LocalStorageDefine_1.default.LOCAL_LANGUAGE);
              let languagePath = LanguagePathDefine_1.default[language];
              if (null === language || void 0 === languagePath) {
                language = LanguageUtil_1.default.transOsLanguage(cc.sys.language);
                languagePath = LanguagePathDefine_1.default[language];
                cc.sys.localStorage.setItem(LocalStorageDefine_1.default.LOCAL_LANGUAGE, language);
              }
              G.Game.language = language;
              Loader_1.default.getInstance().load(languagePath, asset => {
                if (null === asset) {
                  G.Logger.error(`\u52a0\u8f7d\u8bed\u8a00\u5931\u8d25 ${languagePath}`);
                  G.UIMgr.openPopups("\u52a0\u8f7d\u8bed\u8a00\u5305\u5931\u8d25\uff0c\u5373\u5c06\u91cd\u542f\u6e38\u620f", "\u63d0\u793a", this.node, () => {
                    cc.game.restart();
                  });
                } else resolve(asset.json);
                Loader_1.default.getInstance().unload(languagePath);
              });
            }).then(localization => {
              G.Localization.data = localization;
              G.Logger.log("\u8bed\u8a00\u52a0\u8f7d\u5b8c\u6210");
            });
          });
        }
        loadPersist() {
          return __awaiter(this, void 0, void 0, function*() {
            this.setTips(G.Localization.get(LocalizationDefine_1.default.LOAD_ASSETS));
            return new Promise(resolve => {
              let res = [ ViewDefine_1.PersistViewDefine.LoadingView, ViewDefine_1.PersistViewDefine.LockTouchView, ViewDefine_1.PersistViewDefine.ProgressView, ViewDefine_1.PersistViewDefine.TestView ];
              Loader_1.default.getInstance().load(res, prefabs => {
                if (null === prefabs) {
                  G.Logger.error("\u5e38\u9a7b\u89c6\u56fe\u52a0\u8f7d\u5931\u8d25");
                  G.UIMgr.openPopups(G.Localization.get(LocalizationDefine_1.default.INITIALIZATION_FAILED), G.Localization.get(LocalizationDefine_1.default.ERROR), this.node, () => {
                    cc.game.restart();
                  });
                } else {
                  prefabs.map((prefab, index) => {
                    let node = cc.instantiate(prefab);
                    node.zIndex = ViewLayerDefine_1.default.SYSTEM;
                    cc.game.addPersistRootNode(node);
                    node.parent = cc.director.getScene();
                    UIManager_1.default.getInstance().setPersistView(res[index], node);
                  });
                  resolve();
                }
              });
            }).then(() => {
              G.Logger.log("\u5e38\u9a7b\u52a0\u8f7d\u5b8c\u6210");
            });
          });
        }
        loadConfig() {
          return __awaiter(this, void 0, void 0, function*() {
            return new Promise((resolve, reject) => {
              if (this.jsnGameConfig && this.jsnGameConfig.json) {
                let gameConfig = this.jsnGameConfig.json;
                G.Game.version = gameConfig.version;
                resolve();
              } else reject();
            }).then(() => {
              G.Logger.log("\u914d\u7f6e\u52a0\u8f7d\u5b8c\u6210");
            }).catch(() => {
              G.Logger.warn("\u52a0\u8f7d\u914d\u7f6e\u9519\u8bef");
            });
          });
        }
        loadSDK() {
          return __awaiter(this, void 0, void 0, function*() {
            return new Promise(resolve => {
              resolve();
            }).then(() => {
              G.Logger.log("SDK \u52a0\u8f7d\u5b8c\u6210");
            });
          });
        }
        loadDepend() {
          return __awaiter(this, void 0, void 0, function*() {
            return new Promise(resolve => {
              Promise.all([ this.loadConfig(), this.loadPersist(), this.loadSDK() ]).then(() => {
                resolve();
              });
            });
          });
        }
        loadUpdate() {
          return __awaiter(this, void 0, void 0, function*() {
            if (!cc.sys.isNative) return;
            return new Promise(resolve => {
              let goMaintain = () => {
                G.UIMgr.openView(ViewDefine_1.default.MaintainView);
                this.initView();
              };
              let goError = state => {
                let error = "";
                switch (state) {
                 case UpdateDefine.ErrorState.LOAD_LOCAL_MANIFEST:
                 case UpdateDefine.ErrorState.DOWNLOAD_MANIFEST:
                 case UpdateDefine.ErrorState.PARSE_MANIFEST:
                 case UpdateDefine.ErrorState.DECOMPRESS_FILE:
                 case UpdateDefine.ErrorState.DOWNLOAD_FILE:
                 case UpdateDefine.ErrorState.VERIFY_FILE:
                 case UpdateDefine.ErrorState.RETRY:
                  error = G.Localization.get(LocalizationDefine_1.default.UPDATE_FAILED_RETRY);
                  break;

                 default:
                  return;
                }
                G.UIMgr.openPopups(error, G.Localization.get(LocalizationDefine_1.default.ERROR), this.node, () => __awaiter(this, void 0, void 0, function*() {
                  if (cc.sys.getNetworkType() === cc.sys.NetworkType.NONE) {
                    Logger_1.default.getInstance().warn("\u7f51\u7edc\u9519\u8bef");
                    return G.UIMgr.openPopups(G.Localization.get(LocalizationDefine_1.default.NETWORK_ERROR_RETRY), null, this.node, () => {
                      goError(state);
                    }, () => {
                      goMaintain();
                    });
                  }
                  let updateResult = yield G.UpdateMgr.retry();
                  if (null !== updateResult.error && void 0 !== updateResult.error) return goError(updateResult.error);
                  switch (updateResult.state) {
                   case UpdateDefine.UpdateState.UPDATE_FINISH:
                    cc.game.restart();
                    break;

                   case UpdateDefine.UpdateState.ALREADY_NEW:
                    resolve();
                    break;

                   case UpdateDefine.UpdateState.AGENT:
                    goCheck();
                    break;

                   default:
                    G.Logger.error("\u91cd\u8bd5\u8fd4\u56de\u72b6\u6001\u5f02\u5e38");
                  }
                }), () => {
                  goMaintain();
                });
              };
              let goUpdate = () => __awaiter(this, void 0, void 0, function*() {
                this.setTips(G.Localization.get(LocalizationDefine_1.default.UPDATING_ASSETS));
                if (cc.sys.getNetworkType() === cc.sys.NetworkType.NONE) {
                  Logger_1.default.getInstance().warn("\u7f51\u7edc\u9519\u8bef");
                  return G.UIMgr.openPopups(G.Localization.get(LocalizationDefine_1.default.NETWORK_ERROR_RETRY), null, this.node, () => {
                    goUpdate();
                  }, () => {
                    goMaintain();
                  });
                }
                G.UIMgr.openView(ViewDefine_1.default.UpdateView);
                let updateResult = yield G.UpdateMgr.update();
                if (null !== updateResult.error && void 0 !== updateResult.error) return goError(updateResult.error);
                switch (updateResult.state) {
                 case UpdateDefine.UpdateState.UPDATE_FINISH:
                  cc.game.restart();
                  break;

                 case UpdateDefine.UpdateState.ALREADY_NEW:
                  resolve();
                  break;

                 case UpdateDefine.UpdateState.AGENT:
                  goCheck();
                  break;

                 default:
                  G.Logger.error("\u66f4\u65b0\u8fd4\u56de\u72b6\u6001\u5f02\u5e38");
                }
              });
              let goCheck = () => __awaiter(this, void 0, void 0, function*() {
                this.setTips(G.Localization.get(LocalizationDefine_1.default.CHECK_VERSION_INFO));
                if (cc.sys.getNetworkType() === cc.sys.NetworkType.NONE) {
                  Logger_1.default.getInstance().warn("\u7f51\u7edc\u9519\u8bef");
                  return G.UIMgr.openPopups(G.Localization.get(LocalizationDefine_1.default.NETWORK_ERROR_RETRY), null, this.node, () => {
                    goCheck();
                  }, () => {
                    goMaintain();
                  });
                }
                let checkResult = yield G.UpdateMgr.check();
                if (null !== checkResult.error && void 0 !== checkResult.error) return goError(checkResult.error);
                switch (checkResult.state) {
                 case UpdateDefine.CheckState.NOT:
                  resolve();
                  break;

                 case UpdateDefine.CheckState.QUIET:
                  goUpdate();
                  break;

                 case UpdateDefine.CheckState.PROMPT:
                  G.UIMgr.openPopups(G.Localization.get(LocalizationDefine_1.default.TRANFFIC_DOWNLOAD, Util_1.default.bytesToFileUnit(checkResult.downloadBytes)), G.Localization.get(LocalizationDefine_1.default.UPDATE), this.node, () => {
                    goUpdate();
                  }, () => {
                    goMaintain();
                  });
                  break;

                 case UpdateDefine.CheckState.URL:
                  this.setTips(G.Localization.get(LocalizationDefine_1.default.DOWNING_APP));
                  cc.sys.openURL(G.UpdateMgr.getAppURL());
                  goMaintain();
                  break;

                 case UpdateDefine.CheckState.STORE:
                  this.setTips(G.Localization.get(LocalizationDefine_1.default.NEED_STORE_UPDATE));
                  G.UIMgr.openPopups(G.Localization.get(LocalizationDefine_1.default.STORE_DOWNLOAD), G.Localization.get(LocalizationDefine_1.default.UPDATE), this.node, () => {
                    cc.sys.openURL(G.UpdateMgr.getAppStoreURL());
                    goMaintain();
                  });
                  break;

                 default:
                  G.Logger.error(`\u65e0\u6cd5\u627e\u5230\u70ed\u66f4\u68c0\u6d4b\u7ed3\u679c ${checkResult.state}`);
                }
              });
              goCheck();
            });
          });
        }
        intoGame() {
          G.UIMgr.openScene(GameConfig.DEFAULT_LAUNCH_SCENE);
        }
        onDestroy() {}
      };
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u521d\u59cb\u5316\u63d0\u793a"
      }) ], BootScene.prototype, "labTips", void 0);
      __decorate([ property({
        type: cc.JsonAsset,
        tooltip: "\u6e38\u620f\u914d\u7f6e"
      }) ], BootScene.prototype, "jsnGameConfig", void 0);
      BootScene = __decorate([ ccclass ], BootScene);
      return BootScene;
    })();
    exports.default = BootScene;
    cc._RF.pop();
  }, {
    "../../config/GameConfig": "GameConfig",
    "../../core/machine/Loader": "Loader",
    "../../core/machine/Logger": "Logger",
    "../../core/manager/ui/UIManager": "UIManager",
    "../../define/LanguagePathDefine": "LanguagePathDefine",
    "../../define/LocalStorageDefine": "LocalStorageDefine",
    "../../define/LocalizationDefine": "LocalizationDefine",
    "../../define/UpdateDefine": "UpdateDefine",
    "../../define/ViewDefine": "ViewDefine",
    "../../define/ViewLayerDefine": "ViewLayerDefine",
    "../../utils/LanguageUtil": "LanguageUtil",
    "../../utils/Util": "Util",
    "../SceneBase": "SceneBase"
  } ],
  CodeUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "774558MuQpEM5/b4BUAlFci", "CodeUtil");
    "use strict";
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const md5_1 = __importDefault(require("../lib/md5"));
    class CodeUtil {
      static uint8ArrayToString(uint8Array) {
        let str = "";
        let index = 0;
        let char1 = 0;
        let char2 = 0;
        let char3 = 0;
        while (index < uint8Array.length) {
          char1 = uint8Array[index++];
          switch (char1 >> 4) {
           case 0:
           case 1:
           case 2:
           case 3:
           case 4:
           case 5:
           case 6:
           case 7:
            str += String.fromCharCode(char1);
            break;

           case 12:
           case 13:
            char2 = uint8Array[index++];
            str += String.fromCharCode((31 & char1) << 6 | 63 & char2);
            break;

           case 14:
            char2 = uint8Array[index++];
            char3 = uint8Array[index++];
            str += String.fromCharCode((15 & char1) << 12 | (63 & char2) << 6 | (63 & char3) << 0);
          }
        }
        return str;
      }
      static stringToUint8Array(str) {
        let pos = 0;
        const strLen = str.length;
        let at = 0;
        let tlen = Math.max(32, strLen + (strLen >> 1) + 7);
        let target = new Uint8Array(tlen >> 3 << 3);
        while (pos < strLen) {
          let value = str.charCodeAt(pos++);
          if (value >= 55296 && value <= 56319) {
            if (pos < strLen) {
              const extra = str.charCodeAt(pos);
              if (56320 === (64512 & extra)) {
                ++pos;
                value = ((1023 & value) << 10) + (1023 & extra) + 65536;
              }
            }
            if (value >= 55296 && value <= 56319) continue;
          }
          if (at + 4 > target.length) {
            tlen += 8;
            tlen *= 1 + pos / strLen * 2;
            tlen = tlen >> 3 << 3;
            const update = new Uint8Array(tlen);
            update.set(target);
            target = update;
          }
          if (0 === (4294967168 & value)) {
            target[at++] = value;
            continue;
          }
          if (0 === (4294965248 & value)) target[at++] = value >> 6 & 31 | 192; else if (0 === (4294901760 & value)) {
            target[at++] = value >> 12 & 15 | 224;
            target[at++] = value >> 6 & 63 | 128;
          } else {
            if (0 !== (4292870144 & value)) continue;
            target[at++] = value >> 18 & 7 | 240;
            target[at++] = value >> 12 & 63 | 128;
            target[at++] = value >> 6 & 63 | 128;
          }
          target[at++] = 63 & value | 128;
        }
        return target.slice(0, at);
      }
      static uint8ArrayToArray(uint8Array) {
        return Array.prototype.slice.call(uint8Array);
      }
      static md5(data) {
        return md5_1.default(data);
      }
    }
    exports.default = CodeUtil;
    cc._RF.pop();
  }, {
    "../lib/md5": "md5"
  } ],
  1: [ function(require, module, exports) {
    var process = module.exports = {};
    var cachedSetTimeout;
    var cachedClearTimeout;
    function defaultSetTimout() {
      throw new Error("setTimeout has not been defined");
    }
    function defaultClearTimeout() {
      throw new Error("clearTimeout has not been defined");
    }
    (function() {
      try {
        cachedSetTimeout = "function" === typeof setTimeout ? setTimeout : defaultSetTimout;
      } catch (e) {
        cachedSetTimeout = defaultSetTimout;
      }
      try {
        cachedClearTimeout = "function" === typeof clearTimeout ? clearTimeout : defaultClearTimeout;
      } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
      }
    })();
    function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
      }
      try {
        return cachedSetTimeout(fun, 0);
      } catch (e) {
        try {
          return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
          return cachedSetTimeout.call(this, fun, 0);
        }
      }
    }
    function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
      }
      try {
        return cachedClearTimeout(marker);
      } catch (e) {
        try {
          return cachedClearTimeout.call(null, marker);
        } catch (e) {
          return cachedClearTimeout.call(this, marker);
        }
      }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    function cleanUpNextTick() {
      if (!draining || !currentQueue) return;
      draining = false;
      currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1;
      queue.length && drainQueue();
    }
    function drainQueue() {
      if (draining) return;
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
      var len = queue.length;
      while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) currentQueue && currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
    }
    process.nextTick = function(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
      queue.push(new Item(fun, args));
      1 !== queue.length || draining || runTimeout(drainQueue);
    };
    function Item(fun, array) {
      this.fun = fun;
      this.array = array;
    }
    Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    process.title = "browser";
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = "";
    process.versions = {};
    function noop() {}
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;
    process.listeners = function(name) {
      return [];
    };
    process.binding = function(name) {
      throw new Error("process.binding is not supported");
    };
    process.cwd = function() {
      return "/";
    };
    process.chdir = function(dir) {
      throw new Error("process.chdir is not supported");
    };
    process.umask = function() {
      return 0;
    };
  }, {} ],
  EventDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3721ePOe/NBDqS7CmQClLiV", "EventDefine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameEventDefine = exports.SystemEventDefine = void 0;
    var SystemEventDefine;
    (function(SystemEventDefine) {
      SystemEventDefine[SystemEventDefine["WS_CONNECTING"] = 0] = "WS_CONNECTING";
      SystemEventDefine[SystemEventDefine["WS_CONNECTED"] = 1] = "WS_CONNECTED";
      SystemEventDefine[SystemEventDefine["WS_ERROR"] = 2] = "WS_ERROR";
      SystemEventDefine[SystemEventDefine["WS_CLOSING"] = 3] = "WS_CLOSING";
      SystemEventDefine[SystemEventDefine["WS_CLOSED"] = 4] = "WS_CLOSED";
      SystemEventDefine[SystemEventDefine["WS_MESSAGE_TIMEOUT"] = 5] = "WS_MESSAGE_TIMEOUT";
      SystemEventDefine[SystemEventDefine["WS_MESSAGE_NORMAL"] = 6] = "WS_MESSAGE_NORMAL";
      SystemEventDefine[SystemEventDefine["WS_PONG_TIMEOUT"] = 7] = "WS_PONG_TIMEOUT";
      SystemEventDefine[SystemEventDefine["HTTP_TIMEOUT"] = 8] = "HTTP_TIMEOUT";
      SystemEventDefine[SystemEventDefine["HTTP_ERROR"] = 9] = "HTTP_ERROR";
      SystemEventDefine[SystemEventDefine["HTTP_CODE_ERROR"] = 10] = "HTTP_CODE_ERROR";
      SystemEventDefine[SystemEventDefine["UPDATE_PROGRESS"] = 11] = "UPDATE_PROGRESS";
    })(SystemEventDefine = exports.SystemEventDefine || (exports.SystemEventDefine = {}));
    var GameEventDefine;
    (function(GameEventDefine) {
      GameEventDefine[GameEventDefine["STRAT_GAME"] = 1e4] = "STRAT_GAME";
    })(GameEventDefine = exports.GameEventDefine || (exports.GameEventDefine = {}));
    exports.default = Object.assign(Object.assign({}, SystemEventDefine), GameEventDefine);
    cc._RF.pop();
  }, {} ],
  EventManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "25567xdpNFCEIgMGW2rPF1m", "EventManager");
    "use strict";
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const Manager_1 = __importDefault(require("../Manager"));
    const EventDefine_1 = __importDefault(require("../../../define/EventDefine"));
    const Logger_1 = __importDefault(require("../../machine/Logger"));
    let EventManager = (() => {
      class EventManager extends Manager_1.default {
        constructor() {
          super();
          this.m_eventMap = null;
          this.m_eventMap = new Map();
        }
        static getInstance() {
          null === this.s_instance && (this.s_instance = new EventManager());
          return this.s_instance;
        }
        static destroy() {
          null !== this.s_instance && this.s_instance.destroy();
          this.s_instance = null;
        }
        on(event, caller, callback) {
          if (null === this.m_eventMap) {
            Logger_1.default.getInstance().warn("\u6ce8\u518c", EventDefine_1.default[event], "\u4e8b\u4ef6\u5931\u8d25");
            return;
          }
          let listenMap = this.m_eventMap.get(event);
          if (void 0 === listenMap) {
            listenMap = new Map();
            this.m_eventMap.set(event, listenMap);
          }
          let callbackValue = listenMap.get(caller);
          if (void 0 !== callbackValue) {
            Logger_1.default.getInstance().warn(`${caller.constructor.name} \u7c7b\u4e2d\uff0c\u91cd\u590d\u6ce8\u518c\u4e8b\u4ef6 ${EventDefine_1.default[event]}`);
            return;
          }
          listenMap.set(caller, callback);
        }
        off(event, caller) {
          if (null === this.m_eventMap) {
            Logger_1.default.getInstance().warn(`\u91ca\u653e ${EventDefine_1.default[event]} \u4e8b\u4ef6\u5931\u8d25`);
            return;
          }
          let listenMap = this.m_eventMap.get(event);
          if (void 0 === listenMap) return;
          listenMap.has(caller) && listenMap.delete(caller);
        }
        emit(event, ...data) {
          if (null === this.m_eventMap) {
            Logger_1.default.getInstance().warn(`\u53d1\u9001 ${EventDefine_1.default[event]} \u4e8b\u4ef6\u5931\u8d25`);
            return;
          }
          let listenMap = this.m_eventMap.get(event);
          if (void 0 === listenMap) return;
          listenMap.forEach((value, key) => {
            value.apply(key, data);
          });
        }
        clearEventMap() {
          this.m_eventMap.clear();
        }
        destroy() {
          this.clearEventMap();
          this.m_eventMap = null;
        }
      }
      EventManager.s_instance = null;
      return EventManager;
    })();
    exports.default = EventManager;
    cc._RF.pop();
  }, {
    "../../../define/EventDefine": "EventDefine",
    "../../machine/Logger": "Logger",
    "../Manager": "Manager"
  } ],
  Factory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74fee9l/gJHSraf5Yntkc18", "Factory");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    class Factory {
      static create(cls) {
        return new cls();
      }
    }
    exports.default = Factory;
    cc._RF.pop();
  }, {} ],
  GameConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "435cdN4L9RGMJDS7gFqoZks", "GameConfig");
    "use strict";
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DEFAULT_LAUNCH_SCENE = exports.DEFAULT_SOUND_VOLUME = exports.DEFAULT_MUSIC_VOLUME = exports.DEFAULT_LANGUAGE = void 0;
    const SceneDefine_1 = __importDefault(require("../define/SceneDefine"));
    const LanguageDefine_1 = __importDefault(require("../define/LanguageDefine"));
    exports.DEFAULT_LANGUAGE = LanguageDefine_1.default.zh_CN;
    exports.DEFAULT_MUSIC_VOLUME = 1;
    exports.DEFAULT_SOUND_VOLUME = 1;
    exports.DEFAULT_LAUNCH_SCENE = SceneDefine_1.default.AccountScene;
    cc._RF.pop();
  }, {
    "../define/LanguageDefine": "LanguageDefine",
    "../define/SceneDefine": "SceneDefine"
  } ],
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1c99759NbJMp6n8aEODlDj7", "Game");
    "use strict";
    var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
          return m[k];
        }
      });
    } : function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      o[k2] = m[k];
    });
    var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
      });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = this && this.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const LanguageDefine_1 = __importDefault(require("./define/LanguageDefine"));
    const LocalStorageDefine_1 = __importDefault(require("./define/LocalStorageDefine"));
    const GameConfig = __importStar(require("./config/GameConfig"));
    const Logger_1 = __importDefault(require("./core/machine/Logger"));
    const EventManager_1 = __importDefault(require("./core/manager/event/EventManager"));
    const EventDefine_1 = require("./define/EventDefine");
    const UIManager_1 = __importDefault(require("./core/manager/ui/UIManager"));
    const NetworkManager_1 = __importDefault(require("./core/manager/network/NetworkManager"));
    const SceneDefine_1 = __importDefault(require("./define/SceneDefine"));
    const NetworkDefine = __importStar(require("./define/NetworkDefine"));
    const Localization_1 = __importDefault(require("./i18n/Localization"));
    const LocalizationDefine_1 = __importDefault(require("./define/LocalizationDefine"));
    let Game = (() => {
      class Game {
        constructor() {
          this.m_language = null;
          this.m_vesrion = null;
          this.m_musicVolume = null;
          this.m_soundVolume = null;
          this.register();
          this.initData();
        }
        static getInstance() {
          null === this.s_instance && (this.s_instance = new Game());
          return this.s_instance;
        }
        static destroy() {
          null !== this.s_instance && this.s_instance.destroy();
          this.s_instance = null;
        }
        register() {
          EventManager_1.default.getInstance().on(EventDefine_1.SystemEventDefine.WS_CONNECTING, this, this.onWebSocketConnecting);
          EventManager_1.default.getInstance().on(EventDefine_1.SystemEventDefine.WS_CONNECTED, this, this.onWebSocketConnected);
          EventManager_1.default.getInstance().on(EventDefine_1.SystemEventDefine.WS_ERROR, this, this.onWebSocketError);
          EventManager_1.default.getInstance().on(EventDefine_1.SystemEventDefine.WS_CLOSING, this, this.onWebSocketClosing);
          EventManager_1.default.getInstance().on(EventDefine_1.SystemEventDefine.WS_CLOSED, this, this.onWebSocketClosed);
          EventManager_1.default.getInstance().on(EventDefine_1.SystemEventDefine.WS_MESSAGE_TIMEOUT, this, this.onWebSocketMessageTimeout);
          EventManager_1.default.getInstance().on(EventDefine_1.SystemEventDefine.WS_MESSAGE_NORMAL, this, this.onWebSocketMessageNormal);
          EventManager_1.default.getInstance().on(EventDefine_1.SystemEventDefine.WS_PONG_TIMEOUT, this, this.onWebSocketPongTimeout);
          EventManager_1.default.getInstance().on(EventDefine_1.SystemEventDefine.HTTP_TIMEOUT, this, this.onHttpTimeout);
          EventManager_1.default.getInstance().on(EventDefine_1.SystemEventDefine.HTTP_ERROR, this, this.onHttpError);
          EventManager_1.default.getInstance().on(EventDefine_1.SystemEventDefine.HTTP_CODE_ERROR, this, this.onHttpCodeError);
        }
        initData() {
          this.initMusicVolume();
          this.initSoundVolume();
        }
        onWebSocketConnecting() {
          UIManager_1.default.getInstance().openLoading("\u6b63\u5728\u8fde\u63a5\u7f51\u7edc...");
        }
        onWebSocketConnected() {
          UIManager_1.default.getInstance().closeLoading();
        }
        onWebSocketError() {}
        onWebSocketClosing() {
          UIManager_1.default.getInstance().openLockTouch();
        }
        onWebSocketClosed(closeState) {
          UIManager_1.default.getInstance().closeLockTouch();
          switch (closeState) {
           case NetworkDefine.CloseState.ERROR_CLOSE:
            UIManager_1.default.getInstance().closeLoading();
            UIManager_1.default.getInstance().openPopups("\u7f51\u7edc\u8fde\u63a5\u9519\u8bef\uff0c\u8bf7\u8fd4\u56de\u767b\u5f55\u754c\u9762\u91cd\u65b0\u8fde\u63a5...", "\u63d0\u793a", null, () => {
              UIManager_1.default.getInstance().openScene(SceneDefine_1.default.AccountScene);
            });
            break;

           default:
            UIManager_1.default.getInstance().openLoading("\u7f51\u7edc\u8fde\u63a5\u65ad\u5f00\uff0c\u6b63\u5728\u5c1d\u8bd5\u91cd\u8fde...");
            NetworkManager_1.default.getInstance().reconnect("ws://121.89.193.124:30000");
          }
        }
        onWebSocketMessageNormal() {
          UIManager_1.default.getInstance().closeLockTouch();
          UIManager_1.default.getInstance().closeLoading();
        }
        onWebSocketPongTimeout() {}
        onHttpTimeout() {
          UIManager_1.default.getInstance().openTips(Localization_1.default.getInstance().get(LocalizationDefine_1.default.HTTP_TIMEOUT));
        }
        onHttpError() {
          UIManager_1.default.getInstance().openTips(Localization_1.default.getInstance().get(LocalizationDefine_1.default.HTTP_ERROR));
        }
        onHttpCodeError(content) {
          UIManager_1.default.getInstance().openTips(content);
        }
        onWebSocketMessageTimeout() {
          UIManager_1.default.getInstance().openLoading("\u7f51\u7edc\u4e0d\u7a33\u5b9a\uff0c\u7b49\u5f85\u8fde\u63a5...");
        }
        initMusicVolume() {
          this.m_musicVolume = GameConfig.DEFAULT_MUSIC_VOLUME;
          let volume = cc.sys.localStorage.getItem(LocalStorageDefine_1.default.LOCAL_MUSIC_VOLUME);
          null !== volume && void 0 !== volume && !isNaN(Number(volume)) && Number(volume) >= 0 && Number(volume) <= 1 ? this.m_musicVolume = Number(volume) : cc.sys.localStorage.setItem(LocalStorageDefine_1.default.LOCAL_MUSIC_VOLUME, this.m_musicVolume.toString());
        }
        initSoundVolume() {
          this.m_soundVolume = GameConfig.DEFAULT_SOUND_VOLUME;
          let volume = cc.sys.localStorage.getItem(LocalStorageDefine_1.default.LOCAL_SOUND_VOLUME);
          null !== volume && void 0 !== volume && !isNaN(Number(volume)) && Number(volume) >= 0 && Number(volume) <= 1 ? this.m_soundVolume = Number(volume) : cc.sys.localStorage.setItem(LocalStorageDefine_1.default.LOCAL_SOUND_VOLUME, this.m_soundVolume.toString());
        }
        get language() {
          return this.m_language;
        }
        set language(language) {
          if (null !== language && void 0 !== language && void 0 !== LanguageDefine_1.default[language]) {
            this.m_language = language;
            cc.sys.localStorage.setItem(LocalStorageDefine_1.default.LOCAL_LANGUAGE, language);
          } else Logger_1.default.getInstance().warn(`language \u8bbe\u7f6e\u53c2\u6570\u9519\u8bef ${language}`);
        }
        get musicVolume() {
          return this.m_musicVolume;
        }
        set musicVolume(volume) {
          if (null !== volume && void 0 !== volume && !isNaN(Number(volume)) && Number(volume) >= 0 && Number(volume) <= 1) {
            this.m_musicVolume = volume;
            cc.sys.localStorage.setItem(LocalStorageDefine_1.default.LOCAL_MUSIC_VOLUME, volume.toString());
          } else Logger_1.default.getInstance().warn(`musicVolume \u8bbe\u7f6e\u53c2\u6570\u9519\u8bef ${volume}`);
        }
        get soundVolume() {
          return this.m_soundVolume;
        }
        set soundVolume(volume) {
          if (null !== volume && void 0 !== volume && !isNaN(Number(volume)) && Number(volume) >= 0 && Number(volume) <= 1) {
            this.m_soundVolume = volume;
            cc.sys.localStorage.setItem(LocalStorageDefine_1.default.LOCAL_SOUND_VOLUME, volume.toString());
          } else Logger_1.default.getInstance().warn(`soundVolume \u8bbe\u7f6e\u53c2\u6570\u9519\u8bef ${volume}`);
        }
        get vesrion() {
          return this.m_vesrion;
        }
        set version(version) {
          null !== version && void 0 !== version ? this.m_vesrion = version : Logger_1.default.getInstance().warn("version \u8bbe\u7f6e\u53c2\u6570\u4e0d\u80fd\u4e3a\u7a7a");
        }
        destroy() {
          this.m_language = null;
          this.m_musicVolume = null;
          this.m_soundVolume = null;
          this.m_vesrion = null;
        }
      }
      Game.s_instance = new Game();
      return Game;
    })();
    exports.default = Game;
    cc._RF.pop();
  }, {
    "./config/GameConfig": "GameConfig",
    "./core/machine/Logger": "Logger",
    "./core/manager/event/EventManager": "EventManager",
    "./core/manager/network/NetworkManager": "NetworkManager",
    "./core/manager/ui/UIManager": "UIManager",
    "./define/EventDefine": "EventDefine",
    "./define/LanguageDefine": "LanguageDefine",
    "./define/LocalStorageDefine": "LocalStorageDefine",
    "./define/LocalizationDefine": "LocalizationDefine",
    "./define/NetworkDefine": "NetworkDefine",
    "./define/SceneDefine": "SceneDefine",
    "./i18n/Localization": "Localization"
  } ],
  Global: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "672acMSHCFNFYTyr//GYMDa", "Global");
    "use strict";
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const EventManager_1 = __importDefault(require("./manager/event/EventManager"));
    const AudioManager_1 = __importDefault(require("./manager/audio/AudioManager"));
    const UIManager_1 = __importDefault(require("./manager/ui/UIManager"));
    const AnimationManager_1 = __importDefault(require("./manager/animation/AnimationManager"));
    const NetworkManager_1 = __importDefault(require("./manager/network/NetworkManager"));
    const UpdateManager_1 = __importDefault(require("./manager/update/UpdateManager"));
    const Loader_1 = __importDefault(require("./machine/Loader"));
    const Logger_1 = __importDefault(require("./machine/Logger"));
    const Game_1 = __importDefault(require("../Game"));
    const Localization_1 = __importDefault(require("../i18n/Localization"));
    let Global = (() => {
      class Global {
        constructor() {
          window.G = this;
        }
        static getInstance() {
          null === this.s_instance && (this.s_instance = new Global());
          return this.s_instance;
        }
        static destroy() {
          null !== this.s_instance && this.s_instance.destroy();
          this.s_instance = null;
        }
        get EventMgr() {
          return EventManager_1.default.getInstance();
        }
        get AudioMgr() {
          return AudioManager_1.default.getInstance();
        }
        get UIMgr() {
          return UIManager_1.default.getInstance();
        }
        get AnimMgr() {
          return AnimationManager_1.default.getInstance();
        }
        get NetMgr() {
          return NetworkManager_1.default.getInstance();
        }
        get UpdateMgr() {
          return UpdateManager_1.default.getInstance();
        }
        get Loader() {
          return Loader_1.default.getInstance();
        }
        get Logger() {
          return Logger_1.default.getInstance();
        }
        get Game() {
          return Game_1.default.getInstance();
        }
        get Localization() {
          return Localization_1.default.getInstance();
        }
        destroy() {
          delete window.G;
        }
      }
      Global.s_instance = new Global();
      return Global;
    })();
    exports.default = Global;
    cc._RF.pop();
  }, {
    "../Game": "Game",
    "../i18n/Localization": "Localization",
    "./machine/Loader": "Loader",
    "./machine/Logger": "Logger",
    "./manager/animation/AnimationManager": "AnimationManager",
    "./manager/audio/AudioManager": "AudioManager",
    "./manager/event/EventManager": "EventManager",
    "./manager/network/NetworkManager": "NetworkManager",
    "./manager/ui/UIManager": "UIManager",
    "./manager/update/UpdateManager": "UpdateManager"
  } ],
  HomeScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d1f15RjLlEg5BZb13GVyD1", "HomeScene");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const SceneBase_1 = __importDefault(require("../SceneBase"));
    const {ccclass: ccclass, property: property} = cc._decorator;
    let HomeScene = (() => {
      let HomeScene = class HomeScene extends SceneBase_1.default {
        onLoad() {
          this.register();
          this.initData();
          this.initView();
        }
        start() {}
        register() {}
        unRegister() {}
        initData() {}
        initView() {}
        onDestroy() {
          this.unRegister();
        }
      };
      HomeScene = __decorate([ ccclass ], HomeScene);
      return HomeScene;
    })();
    exports.default = HomeScene;
    cc._RF.pop();
  }, {
    "../SceneBase": "SceneBase"
  } ],
  HttpDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5ca5fMuabhG57WOyb7iIqVb", "HttpDefine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TIMEOUT = exports.ReadyState = exports.StateType = exports.ContentType = exports.Method = void 0;
    var Method;
    (function(Method) {
      Method["GET"] = "GET";
      Method["POST"] = "POST";
      Method["PUT"] = "PUT";
      Method["HEAD"] = "HEAD";
      Method["PATCH"] = "PATCH";
      Method["DELETE"] = "DELETE";
      Method["OPTIONS"] = "OPTIONS";
      Method["TRACE"] = "TRACE";
      Method["CONNECT"] = "CONNECT";
      Method["LINK"] = "LINK";
      Method["UNLINE"] = "UNLINE";
    })(Method = exports.Method || (exports.Method = {}));
    var ContentType;
    (function(ContentType) {
      ContentType["JSON"] = "application/json;charset=UTF-8";
      ContentType["FROM"] = "application/x-www-form-urlencoded;charset=UTF-8";
    })(ContentType = exports.ContentType || (exports.ContentType = {}));
    var StateType;
    (function(StateType) {
      StateType[StateType["OK"] = 0] = "OK";
      StateType[StateType["ERROR"] = 1] = "ERROR";
      StateType[StateType["TIMEOUT"] = 2] = "TIMEOUT";
      StateType[StateType["ABORT"] = 3] = "ABORT";
    })(StateType = exports.StateType || (exports.StateType = {}));
    var ReadyState;
    (function(ReadyState) {
      ReadyState[ReadyState["UNSENT"] = 0] = "UNSENT";
      ReadyState[ReadyState["OPENED"] = 1] = "OPENED";
      ReadyState[ReadyState["LOADING"] = 2] = "LOADING";
      ReadyState[ReadyState["HEADERS_RECEIVED"] = 3] = "HEADERS_RECEIVED";
      ReadyState[ReadyState["DONE"] = 4] = "DONE";
    })(ReadyState = exports.ReadyState || (exports.ReadyState = {}));
    exports.TIMEOUT = 10;
    cc._RF.pop();
  }, {} ],
  HttpFetch: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0116b6Oav5LhaATiTUX8Tig", "HttpFetch");
    "use strict";
    var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
          return m[k];
        }
      });
    } : function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      o[k2] = m[k];
    });
    var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
      });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = this && this.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const HttpDefine = __importStar(require("../../define/HttpDefine"));
    const Logger_1 = __importDefault(require("../machine/Logger"));
    class HttpFetch {
      constructor() {
        this.m_abortController = null;
        this.m_requestInfo = null;
        this.m_timer = null;
        this.m_url = null;
        this.m_method = null;
        this.m_abortController = new AbortController();
        this.m_requestInfo = {};
        this.initRequestInfo();
      }
      initRequestInfo() {
        this.m_requestInfo.body = null;
        this.m_requestInfo.cache = "default";
        this.m_requestInfo.credentials = "omit";
        this.m_requestInfo.headers = {
          "Content-Type": HttpDefine.ContentType.JSON
        };
        this.m_requestInfo.keepalive = false;
        this.m_requestInfo.method = HttpDefine.Method.GET;
        this.m_requestInfo.mode = "cors";
        this.m_requestInfo.redirect = "follow";
        this.m_requestInfo.referrer = "";
        this.m_requestInfo.referrerPolicy = "no-referrer-when-downgrade";
        this.m_requestInfo.signal = this.m_abortController.signal;
      }
      request(url, method, body, responseType) {
        return __awaiter(this, void 0, void 0, function*() {
          this.m_url = url;
          this.m_method = method;
          null !== responseType && void 0 !== responseType || (responseType = "text");
          return new Promise(resolve => {
            Logger_1.default.getInstance().log(`${this.m_method} \u8bf7\u6c42 ${this.m_url}`);
            console.log(body);
            this.m_requestInfo.method = method;
            null === body && void 0 === body || (this.m_requestInfo.body = body);
            let data = {
              state: null,
              body: null
            };
            this.startTimer();
            fetch(url, this.m_requestInfo).then(response => __awaiter(this, void 0, void 0, function*() {
              this.stopTimer();
              Logger_1.default.getInstance().log(`${this.m_method} \u54cd\u5e94 ${status}`);
              if (response.ok) {
                data.state = HttpDefine.StateType.OK;
                data.body = yield this.getBodyByResponse(responseType, response);
                console.log(data.body);
              } else {
                data.state = HttpDefine.StateType.ERROR;
                data.body = response.statusText;
              }
              resolve(data);
            })).catch(e => {
              this.stopTimer();
              "AbortError" === e.name ? data.state = HttpDefine.StateType.TIMEOUT : data.state = HttpDefine.StateType.ERROR;
              data.body = e.message;
              resolve(data);
            });
          });
        });
      }
      getBodyByResponse(responseType, response) {
        return __awaiter(this, void 0, void 0, function*() {
          switch (responseType) {
           case "":
           case "text":
            return yield response.text();

           case "json":
            return yield response.json();

           case "arraybuffer":
            return yield response.arrayBuffer();

           case "blob":
            return yield response.blob();

           case "document":
            return yield response.formData();

           default:
            return yield response.text();
          }
        });
      }
      startTimer() {
        null === this.m_timer && (this.m_timer = setTimeout(() => {
          Logger_1.default.getInstance().warn(`${this.m_method} \u8d85\u65f6 ${this.m_url}`);
          this.m_abortController.abort();
          this.m_timer = null;
        }, 1e3 * HttpDefine.TIMEOUT));
      }
      stopTimer() {
        if (null !== this.m_timer) {
          clearTimeout(this.m_timer);
          this.m_timer = null;
        }
      }
    }
    exports.default = HttpFetch;
    cc._RF.pop();
  }, {
    "../../define/HttpDefine": "HttpDefine",
    "../machine/Logger": "Logger"
  } ],
  HttpInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2fe5dbDc0dEq4ieQDEOR9g7", "HttpInterface");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  HttpRequest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6edc9Anf+tMzYUfgYe/1wIz", "HttpRequest");
    "use strict";
    var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
          return m[k];
        }
      });
    } : function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      o[k2] = m[k];
    });
    var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
      });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = this && this.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const HttpDefine = __importStar(require("../../define/HttpDefine"));
    const HttpXmlRequest_1 = __importDefault(require("./HttpXmlRequest"));
    class HttpRequest {
      static checkLegal(url) {
        let legal = true;
        null !== url && void 0 !== url && "" !== url || (legal = false);
        return legal;
      }
      static get(url, responseType, cls) {
        return __awaiter(this, void 0, void 0, function*() {
          if (!this.checkLegal(url)) {
            console.warn(`GET \u5730\u5740\u4e0d\u5408\u6cd5 ${url}`);
            return;
          }
          let response;
          response = null === cls || void 0 === cls ? yield new HttpXmlRequest_1.default().request(url, HttpDefine.Method.GET) : yield new cls().request(url, HttpDefine.Method.GET);
          return response;
        });
      }
      static post(url, body, responseType, cls) {
        return __awaiter(this, void 0, void 0, function*() {
          if (!this.checkLegal(url)) {
            console.warn(`POST \u5730\u5740\u4e0d\u5408\u6cd5 ${url}`);
            return;
          }
          let response;
          response = null === cls || void 0 === cls ? yield new HttpXmlRequest_1.default().request(url, HttpDefine.Method.POST, body) : yield new cls().request(url, HttpDefine.Method.POST, body);
          return response;
        });
      }
    }
    exports.default = HttpRequest;
    cc._RF.pop();
  }, {
    "../../define/HttpDefine": "HttpDefine",
    "./HttpXmlRequest": "HttpXmlRequest"
  } ],
  HttpXmlRequest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dc69eHEmSlD5roUgb3JBEJZ", "HttpXmlRequest");
    "use strict";
    var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
          return m[k];
        }
      });
    } : function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      o[k2] = m[k];
    });
    var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
      });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = this && this.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const EventDefine_1 = __importDefault(require("../../define/EventDefine"));
    const HttpDefine = __importStar(require("../../define/HttpDefine"));
    const Logger_1 = __importDefault(require("../machine/Logger"));
    const EventManager_1 = __importDefault(require("../manager/event/EventManager"));
    class HttpXmlRequest {
      constructor() {
        this.m_xhr = null;
        this.m_requestResolve = null;
        this.m_timer = null;
        this.m_url = null;
        this.m_method = null;
        this.m_xhr = new XMLHttpRequest();
        this.m_xhr.onabort = this.onAbort.bind(this);
        this.m_xhr.onerror = this.onError.bind(this);
        this.m_xhr.onload = this.onLoad.bind(this);
        this.m_xhr.onloadend = this.onLoadend.bind(this);
        this.m_xhr.onloadstart = this.onLoadstart.bind(this);
        this.m_xhr.onprogress = this.onProgress.bind(this);
        this.m_xhr.ontimeout = this.onTimeout.bind(this);
        this.m_xhr.onreadystatechange = this.onReadystatechange.bind(this);
      }
      request(url, method, body, responseType) {
        return __awaiter(this, void 0, void 0, function*() {
          this.m_url = url;
          this.m_method = method;
          void 0 === body && (body = null);
          null !== responseType && void 0 !== responseType || (responseType = "text");
          return new Promise((resolve, reject) => {
            Logger_1.default.getInstance().log(`${this.m_method} \u8bf7\u6c42 ${this.m_url}`);
            console.log(body);
            this.m_requestResolve = resolve;
            this.m_xhr.open(method, url);
            this.m_xhr.responseType = responseType;
            this.startTimer();
            this.m_xhr.send(body);
          }).then(data => {
            this.stopTimer();
            return data;
          });
        });
      }
      clearPromise() {
        this.m_requestResolve = null;
      }
      startTimer() {
        null === this.m_timer && (this.m_timer = setTimeout(() => {
          this.onTimeout();
          this.m_xhr.abort();
          this.m_timer = null;
        }, 1e3 * HttpDefine.TIMEOUT));
      }
      stopTimer() {
        if (null !== this.m_timer) {
          this.clearPromise();
          clearTimeout(this.m_timer);
          this.m_timer = null;
        }
      }
      getBodyByResponse(responseType, response) {
        return __awaiter(this, void 0, void 0, function*() {
          switch (responseType) {
           case "":
           case "text":
            return yield response.text();

           case "json":
            return yield response.json();

           case "arraybuffer":
            return yield response.arrayBuffer();

           case "blob":
            return yield response.blob();

           case "document":
            return yield response.formData();

           default:
            return yield response.text();
          }
        });
      }
      onAbort() {
        this.m_requestResolve && this.m_requestResolve({
          state: HttpDefine.StateType.ABORT,
          body: ""
        });
      }
      onError() {
        Logger_1.default.getInstance().log(`${this.m_method} \u9519\u8bef ${this.m_url}`);
        this.m_requestResolve && this.m_requestResolve({
          state: HttpDefine.StateType.ERROR,
          body: ""
        });
        EventManager_1.default.getInstance().emit(EventDefine_1.default.HTTP_ERROR);
      }
      onLoad() {}
      onLoadend() {
        this.m_requestResolve && this.m_requestResolve({
          state: HttpDefine.StateType.OK,
          body: this.m_xhr.responseText
        });
      }
      onLoadstart() {}
      onProgress() {}
      onTimeout() {
        Logger_1.default.getInstance().warn(`${this.m_method} \u8d85\u65f6 ${this.m_url}`);
        this.m_requestResolve && this.m_requestResolve({
          state: HttpDefine.StateType.TIMEOUT,
          body: ""
        });
        EventManager_1.default.getInstance().emit(EventDefine_1.default.HTTP_TIMEOUT);
      }
      onReadystatechange() {
        if (this.m_xhr.readyState === HttpDefine.ReadyState.DONE) {
          let responseInfo;
          Logger_1.default.getInstance().log(`${this.m_method} \u54cd\u5e94 ${this.m_xhr.status}`);
          if (this.m_xhr.status >= 200 && this.m_xhr.status <= 400) {
            console.log(this.m_xhr.responseText);
            responseInfo = {
              state: HttpDefine.StateType.OK,
              body: this.getBodyByResponse(this.m_xhr.responseType, this.m_xhr.response)
            };
            let responseData = JSON.parse(responseInfo.body);
            0 !== responseData.code && EventManager_1.default.getInstance().emit(EventDefine_1.default.HTTP_CODE_ERROR, responseData.msg);
          } else {
            responseInfo = {
              state: HttpDefine.StateType.ERROR,
              body: this.m_xhr.statusText
            };
            EventManager_1.default.getInstance().emit(EventDefine_1.default.HTTP_ERROR);
          }
          this.m_requestResolve && this.m_requestResolve(responseInfo);
        }
      }
    }
    exports.default = HttpXmlRequest;
    cc._RF.pop();
  }, {
    "../../define/EventDefine": "EventDefine",
    "../../define/HttpDefine": "HttpDefine",
    "../machine/Logger": "Logger",
    "../manager/event/EventManager": "EventManager"
  } ],
  LanguageDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "349594u1ghNAbdZNHM+Ee+w", "LanguageDefine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LanguageDefine;
    (function(LanguageDefine) {
      LanguageDefine["ar_IL"] = "ar_IL";
      LanguageDefine["ar_EG"] = "ar_EG";
      LanguageDefine["zh_CN"] = "zh_CN";
      LanguageDefine["zh_TW"] = "zh_TW";
      LanguageDefine["zh_HK"] = "zh_HK";
      LanguageDefine["nl_NL"] = "nl_NL";
      LanguageDefine["nl_BE"] = "nl_BE";
      LanguageDefine["en_US"] = "en_US";
      LanguageDefine["en_AU"] = "en_AU";
      LanguageDefine["en_CA"] = "en_CA";
      LanguageDefine["en_IN"] = "en_IN";
      LanguageDefine["en_IE"] = "en_IE";
      LanguageDefine["en_NZ"] = "en_NZ";
      LanguageDefine["en_SG"] = "en_SG";
      LanguageDefine["en_ZA"] = "en_ZA";
      LanguageDefine["en_GB"] = "en_GB";
      LanguageDefine["fr_FR"] = "fr_FR";
      LanguageDefine["fr_BE"] = "fr_BE";
      LanguageDefine["fr_CA"] = "fr_CA";
      LanguageDefine["fr_CH"] = "fr_CH";
      LanguageDefine["de_DE"] = "de_DE";
      LanguageDefine["de_LI"] = "de_LI";
      LanguageDefine["de_AT"] = "de_AT";
      LanguageDefine["de_CH"] = "de_CH";
      LanguageDefine["it_IT"] = "it_IT";
      LanguageDefine["it_CH"] = "it_CH";
      LanguageDefine["pt_BR"] = "pt_BR";
      LanguageDefine["pt_PT"] = "pt_PT";
      LanguageDefine["es_ES"] = "es_ES";
      LanguageDefine["es_US"] = "es_US";
      LanguageDefine["bn_BD"] = "bn_BD";
      LanguageDefine["bn_IN"] = "bn_IN";
      LanguageDefine["hr_HR"] = "hr_HR";
      LanguageDefine["cs_CZ"] = "cs_CZ";
      LanguageDefine["da_DK"] = "da_DK";
      LanguageDefine["el_GR"] = "el_GR";
      LanguageDefine["he_IL"] = "he_IL";
      LanguageDefine["iw_IL"] = "iw_IL";
      LanguageDefine["hi_IN"] = "hi_IN";
      LanguageDefine["hu_HU"] = "hu_HU";
      LanguageDefine["in_ID"] = "in_ID";
      LanguageDefine["ja_JP"] = "ja_JP";
      LanguageDefine["ko_KR"] = "ko_KR";
      LanguageDefine["ms_MY"] = "ms_MY";
      LanguageDefine["fa_IR"] = "fa_IR";
      LanguageDefine["pl_PL"] = "pl_PL";
      LanguageDefine["ro_RO"] = "ro_RO";
      LanguageDefine["ru_RU"] = "ru_RU";
      LanguageDefine["sr_RS"] = "sr_RS";
      LanguageDefine["sv_SE"] = "sv_SE";
      LanguageDefine["th_TH"] = "th_TH";
      LanguageDefine["tr_TR"] = "tr_TR";
      LanguageDefine["ur_PK"] = "ur_PK";
      LanguageDefine["vi_VN"] = "vi_VN";
      LanguageDefine["ca_ES"] = "ca_ES";
      LanguageDefine["lv_LV"] = "lv_LV";
      LanguageDefine["lt_LT"] = "lt_LT";
      LanguageDefine["nb_NO"] = "nb_NO";
      LanguageDefine["sk_SK"] = "sk_SK";
      LanguageDefine["sl_SI"] = "sl_SI";
      LanguageDefine["bg_BG"] = "bg_BG";
      LanguageDefine["uk_UA"] = "uk_UA";
      LanguageDefine["tl_PH"] = "tl_PH";
      LanguageDefine["fi_FI"] = "fi_FI";
      LanguageDefine["af_ZA"] = "af_ZA";
      LanguageDefine["rm_CH"] = "rm_CH";
      LanguageDefine["my_ZG"] = "my_ZG";
      LanguageDefine["my_MM"] = "my_MM";
      LanguageDefine["km_KH"] = "km_KH";
      LanguageDefine["am_ET"] = "am_ET";
      LanguageDefine["be_BY"] = "be_BY";
      LanguageDefine["et_EE"] = "et_EE";
      LanguageDefine["sw_TZ"] = "sw_TZ";
      LanguageDefine["zu_ZA"] = "zu_ZA";
      LanguageDefine["az_AZ"] = "az_AZ";
      LanguageDefine["hy_AM"] = "hy_AM";
      LanguageDefine["ka_GE"] = "ka_GE";
      LanguageDefine["lo_LA"] = "lo_LA";
      LanguageDefine["mn_MN"] = "mn_MN";
      LanguageDefine["ne_NP"] = "ne_NP";
      LanguageDefine["kk_KZ"] = "kk_KZ";
      LanguageDefine["gl_rES"] = "\xa0gl_rES";
      LanguageDefine["is_rIS"] = "is_rIS";
      LanguageDefine["kn_rIN"] = " kn_rIN";
      LanguageDefine["ky_rKG"] = "ky_rKG";
      LanguageDefine["ml_rIN"] = "ml_rIN";
      LanguageDefine["mr_rIN"] = "mr_rIN";
      LanguageDefine["ta_rIN"] = "ta_rIN";
      LanguageDefine["mk_rMK"] = "mk_rMK";
      LanguageDefine["te_rIN"] = "te_rIN";
      LanguageDefine["uz_rUZ"] = "uz_rUZ";
      LanguageDefine["eu_rES"] = "eu_rES";
      LanguageDefine["si_LK"] = "si_LK";
    })(LanguageDefine || (LanguageDefine = {}));
    exports.default = LanguageDefine;
    cc._RF.pop();
  }, {} ],
  LanguagePathDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0f71e4/LhBOSrD2FFBNPZ6M", "LanguagePathDefine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LanguagePathDefine;
    (function(LanguagePathDefine) {
      LanguagePathDefine["zh_CN"] = "json/language/zh_CN";
    })(LanguagePathDefine || (LanguagePathDefine = {}));
    exports.default = LanguagePathDefine;
    cc._RF.pop();
  }, {} ],
  LanguageUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ee53e0Swv1GLrOMSDoNcoMb", "LanguageUtil");
    "use strict";
    var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
          return m[k];
        }
      });
    } : function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      o[k2] = m[k];
    });
    var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
      });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = this && this.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const LanguageDefine_1 = __importDefault(require("../define/LanguageDefine"));
    const GameConfig = __importStar(require("../config/GameConfig"));
    const LanguagePathDefine_1 = __importDefault(require("../define/LanguagePathDefine"));
    class LanguageUtil {
      static transOsLanguage(language) {
        let value = null;
        switch (language) {
         case cc.sys.LANGUAGE_ENGLISH:
          value = LanguageDefine_1.default.en_US;
          break;

         case cc.sys.LANGUAGE_CHINESE:
          value = LanguageDefine_1.default.zh_CN;
          break;

         case cc.sys.LANGUAGE_FRENCH:
          value = LanguageDefine_1.default.fr_FR;
          break;

         case cc.sys.LANGUAGE_ITALIAN:
          value = LanguageDefine_1.default.it_IT;
          break;

         case cc.sys.LANGUAGE_GERMAN:
          value = LanguageDefine_1.default.de_DE;
          break;

         case cc.sys.LANGUAGE_SPANISH:
          value = LanguageDefine_1.default.es_ES;
          break;

         case cc.sys.LANGUAGE_DUTCH:
          value = LanguageDefine_1.default.nl_NL;
          break;

         case cc.sys.LANGUAGE_RUSSIAN:
          value = LanguageDefine_1.default.ru_RU;
          break;

         case cc.sys.LANGUAGE_KOREAN:
          value = LanguageDefine_1.default.ko_KR;
          break;

         case cc.sys.LANGUAGE_JAPANESE:
          value = LanguageDefine_1.default.ja_JP;
          break;

         case cc.sys.LANGUAGE_HUNGARIAN:
          value = LanguageDefine_1.default.hu_HU;
          break;

         case cc.sys.LANGUAGE_PORTUGUESE:
          value = LanguageDefine_1.default.pt_PT;
          break;

         case cc.sys.LANGUAGE_ARABIC:
          value = LanguageDefine_1.default.ar_EG;
          break;

         case cc.sys.LANGUAGE_NORWEGIAN:
          value = LanguageDefine_1.default.nb_NO;
          break;

         case cc.sys.LANGUAGE_POLISH:
          value = LanguageDefine_1.default.pl_PL;
          break;

         case cc.sys.LANGUAGE_TURKISH:
          value = LanguageDefine_1.default.tr_TR;
          break;

         case cc.sys.LANGUAGE_UKRAINIAN:
          value = LanguageDefine_1.default.uk_UA;
          break;

         case cc.sys.LANGUAGE_ROMANIAN:
          value = LanguageDefine_1.default.ro_RO;
          break;

         case cc.sys.LANGUAGE_BULGARIAN:
          value = LanguageDefine_1.default.bg_BG;
          break;

         default:
          value = GameConfig.DEFAULT_LANGUAGE;
        }
        void 0 === LanguagePathDefine_1.default[value] && (value = GameConfig.DEFAULT_LANGUAGE);
        return value;
      }
    }
    exports.default = LanguageUtil;
    cc._RF.pop();
  }, {
    "../config/GameConfig": "GameConfig",
    "../define/LanguageDefine": "LanguageDefine",
    "../define/LanguagePathDefine": "LanguagePathDefine"
  } ],
  Loader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2c774b6uB9FabwmSnSd1Fd9", "Loader");
    "use strict";
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const Logger_1 = __importDefault(require("./Logger"));
    const Util_1 = __importDefault(require("../../utils/Util"));
    let Loader = (() => {
      class Loader {
        constructor() {
          this.m_cacheAssets = new Map();
        }
        static getInstance() {
          null === this.s_instance && (this.s_instance = new Loader());
          return this.s_instance;
        }
        static destroy() {
          null !== this.s_instance && this.s_instance.destroy();
          this.s_instance = null;
        }
        checkLegal(path) {
          let isLegal = true;
          null === path || void 0 === path ? isLegal = false : path instanceof Array && path.length <= 0 && (isLegal = false);
          return isLegal;
        }
        addAsset(path, value) {
          let asset = this.getCache(path);
          null !== asset && void 0 !== asset || this.m_cacheAssets.set(path, value);
          value.addRef();
        }
        decAsset(path) {
          let asset = this.getCache(path);
          if (null !== asset && void 0 !== asset) {
            asset.decRef();
            if (asset.refCount <= 0) {
              cc.assetManager.releaseAsset(asset);
              this.m_cacheAssets.delete(path);
              asset = null;
            }
          } else Logger_1.default.getInstance().warn(`\u8d44\u6e90\u5f15\u7528\u8ba1\u6570\u51cf 1 \u8fc7\u7a0b\u4e2d\uff0c\u627e\u4e0d\u5230\u52a0\u8f7d\u7f13\u5b58\u8fc7\u7684\u8d44\u6e90 ${path}`);
        }
        getCache(path) {
          return this.m_cacheAssets.get(path);
        }
        preload(path, onComplete, onProgress) {
          if (!this.checkLegal(path)) {
            onComplete && onComplete(null);
            return;
          }
          cc.resources.preload(path, (finish, total, item) => {
            let percent = Util_1.default.toFixed(finish / total * 100);
            onProgress && onProgress(percent);
          }, (error, items) => {
            if (error) {
              Logger_1.default.getInstance().warn(`\u9884\u52a0\u8f7d\u8def\u5f84\u5931\u8d25 ${error.stack}`);
              onComplete && onComplete(null);
            } else onComplete && onComplete(items);
          });
        }
        load(path, onComplete, onProgress) {
          if (!this.checkLegal(path)) {
            Logger_1.default.getInstance().warn(`\u52a0\u8f7d\u975e\u6cd5\u8def\u5f84 ${path}`);
            onComplete && onComplete(null);
            return;
          }
          cc.resources.load(path, (finish, total, item) => {
            let percent = Util_1.default.toFixed(finish / total * 100);
            onProgress && onProgress(percent);
          }, (error, assets) => {
            if (error) {
              Logger_1.default.getInstance().warn(`\u52a0\u8f7d\u8def\u5f84\u5931\u8d25 ${error.stack}`);
              onComplete && onComplete(null);
            } else {
              if (assets instanceof Array) for (let i = 0; i < assets.length; ++i) this.addAsset(path[i], assets[i]); else this.addAsset(path, assets);
              onComplete && onComplete(assets);
            }
          });
        }
        unload(path, onComplete, onProgress) {
          if (!this.checkLegal(path)) {
            Logger_1.default.getInstance().warn(`\u5378\u8f7d\u975e\u6cd5\u8def\u5f84 ${path}`);
            onComplete && onComplete();
            return;
          }
          if (path instanceof Array) {
            let releaseSize = path.length;
            for (let i = 0; i < path.length; ++i) {
              onProgress && onProgress(Util_1.default.toFixed((i + 1) / releaseSize * 100));
              this.decAsset(path[i]);
            }
          } else this.decAsset(path);
          onComplete && onComplete();
        }
        release(path, onComplete, onProgress) {
          if (!this.checkLegal(path)) {
            Logger_1.default.getInstance().warn(`\u91ca\u653e\u975e\u6cd5\u8def\u5f84 ${path}`);
            onComplete && onComplete();
            return;
          }
          if (path instanceof Array) {
            let releaseSize = path.length;
            for (let i = 0; i < releaseSize; ++i) {
              onProgress && onProgress(Util_1.default.toFixed((i + 1) / releaseSize * 100));
              let asset = this.getCache(path[i]);
              if (null !== asset && void 0 !== asset) for (let j = 0; j < asset.refCount; ++j) this.decAsset(path[i]);
            }
          } else {
            let asset = this.getCache(path);
            if (null !== asset && void 0 !== asset) for (let i = 0; i < asset.refCount; ++i) this.decAsset(path);
          }
          onComplete && onComplete();
        }
        releaseAll(onComplete, onProgress) {
          let size = this.m_cacheAssets.size;
          if (this.m_cacheAssets && size > 0) {
            let index = 0;
            this.m_cacheAssets.forEach((value, key, map) => {
              onProgress && onProgress(Util_1.default.toFixed(++index / size * 100));
              for (let i = 0; i < value.refCount; ++i) this.decAsset(key);
            });
            this.m_cacheAssets.clear();
          }
          onComplete && onComplete();
        }
        destroy() {
          this.releaseAll(() => {
            this.m_cacheAssets = null;
          });
        }
      }
      Loader.s_instance = null;
      return Loader;
    })();
    exports.default = Loader;
    cc._RF.pop();
  }, {
    "../../utils/Util": "Util",
    "./Logger": "Logger"
  } ],
  LoadingClip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d1282cLThtNUr/LtAivorBQ", "LoadingClip");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const {ccclass: ccclass, property: property} = cc._decorator;
    var Order;
    (function(Order) {
      Order[Order["BELOW"] = 100] = "BELOW";
      Order[Order["ABOVE"] = 101] = "ABOVE";
    })(Order || (Order = {}));
    let LoadingClip = (() => {
      let LoadingClip = class LoadingClip extends cc.Component {
        constructor() {
          super(...arguments);
          this.imgBall1 = null;
          this.imgBall2 = null;
          this.m_anim = null;
        }
        onLoad() {
          this.initData();
          this.initView();
        }
        start() {}
        initData() {
          this.m_anim = this.node.getComponent(cc.Animation);
        }
        initView() {
          this.imgBall1.node.zIndex = Order.BELOW;
          this.imgBall2.node.zIndex = Order.ABOVE;
        }
        onSwitchOrder() {
          this.imgBall1.node.zIndex = this.imgBall1.node.zIndex === Order.BELOW ? Order.ABOVE : Order.BELOW;
          this.imgBall2.node.zIndex = this.imgBall2.node.zIndex === Order.BELOW ? Order.ABOVE : Order.BELOW;
        }
        play() {
          this.m_anim && this.m_anim.play();
        }
        stop() {
          this.m_anim && this.m_anim.stop();
          this.initView();
        }
      };
      __decorate([ property(cc.Sprite) ], LoadingClip.prototype, "imgBall1", void 0);
      __decorate([ property(cc.Sprite) ], LoadingClip.prototype, "imgBall2", void 0);
      LoadingClip = __decorate([ ccclass ], LoadingClip);
      return LoadingClip;
    })();
    exports.default = LoadingClip;
    cc._RF.pop();
  }, {} ],
  LoadingView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6910fe7SfRMALPtOqxsIdMX", "LoadingView");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const ViewBase_1 = __importDefault(require("../../ViewBase"));
    const {ccclass: ccclass, property: property} = cc._decorator;
    let LoadingView = (() => {
      let LoadingView = class LoadingView extends ViewBase_1.default {
        constructor() {
          super(...arguments);
          this.labTips = null;
          this.loadingClip = null;
          this.m_loadingScript = null;
        }
        onLoad() {
          this.initData();
          this.initView();
        }
        start() {
          this.hide();
        }
        onDisable() {
          this.initView();
          this.m_loadingScript.stop();
        }
        initData() {
          this.m_loadingScript = this.loadingClip.getComponent("LoadingClip");
        }
        initView() {
          this.labTips.string = "";
        }
        open(content) {
          this.m_loadingScript.play();
          content && (this.labTips.string = content);
          this.show();
        }
        close() {
          this.hide();
        }
      };
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u6587\u5b57\u63d0\u793a"
      }) ], LoadingView.prototype, "labTips", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u8f6c\u52a8\u52a8\u753b"
      }) ], LoadingView.prototype, "loadingClip", void 0);
      LoadingView = __decorate([ ccclass ], LoadingView);
      return LoadingView;
    })();
    exports.default = LoadingView;
    cc._RF.pop();
  }, {
    "../../ViewBase": "ViewBase"
  } ],
  LocalStorageDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f8950am/RdGb46QpXjgXqhq", "LocalStorageDefine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LocalStorageDefine;
    (function(LocalStorageDefine) {
      LocalStorageDefine["LOCAL_UPDATE_SEARCH_PATH"] = "LOCAL_UPDATE_SEARCH_PATH";
      LocalStorageDefine["LOCAL_MUSIC_VOLUME"] = "LOCAL_MUSIC_VOLUME";
      LocalStorageDefine["LOCAL_SOUND_VOLUME"] = "LOCAL_SOUND_VOLUME";
      LocalStorageDefine["LOCAL_LANGUAGE"] = "LOCAL_LANGUAGE";
      LocalStorageDefine["LOCAL_LOGIN_TOKEN"] = "LOCAL_LOGIN_TOKEN";
    })(LocalStorageDefine || (LocalStorageDefine = {}));
    exports.default = LocalStorageDefine;
    cc._RF.pop();
  }, {} ],
  LocalizationDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e38049fvOBBF6whfFt1+3sY", "LocalizationDefine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LocalizationDefine;
    (function(LocalizationDefine) {
      LocalizationDefine["INITIALIZATION_FAILED"] = "INITIALIZATION_FAILED";
      LocalizationDefine["LOAD_ASSETS"] = "LOAD_ASSETS";
      LocalizationDefine["CHECK_VERSION_INFO"] = "CHECK_VERSION_INFO";
      LocalizationDefine["UPDATING_ASSETS"] = "UPDATING_ASSETS";
      LocalizationDefine["NEED_UPDATE"] = "NEED_UPDATE";
      LocalizationDefine["DOWNING_APP"] = "DOWNING_APP";
      LocalizationDefine["NEED_ASSETS_UPDATE"] = "NEED_ASSETS_UPDATE";
      LocalizationDefine["NEED_STORE_UPDATE"] = "NEED_STORE_UPDATE";
      LocalizationDefine["UPDATE_FINISH"] = "UPDATE_FINISH";
      LocalizationDefine["ERROR"] = "ERROR";
      LocalizationDefine["UPDATE_FAILED_RETRY"] = "UPDATE_FAILED_RETRY";
      LocalizationDefine["NETWORK_ERROR_RETRY"] = "NETWORK_ERROR_RETRY";
      LocalizationDefine["TRANFFIC_DOWNLOAD"] = "TRANFFIC_DOWNLOAD";
      LocalizationDefine["UPDATE"] = "UPDATE";
      LocalizationDefine["STORE_DOWNLOAD"] = "SOTRE_DOWNLOAD";
      LocalizationDefine["CANCEL"] = "CANCEL";
      LocalizationDefine["CONFIRM"] = "CONFIRM";
      LocalizationDefine["HTTP_TIMEOUT"] = "HTTP_TIMEOUT";
      LocalizationDefine["HTTP_ERROR"] = "HTTP_ERROR";
      LocalizationDefine["REGISTER_OK"] = "REGISTER_OK";
    })(LocalizationDefine || (LocalizationDefine = {}));
    exports.default = LocalizationDefine;
    cc._RF.pop();
  }, {} ],
  Localization: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "811b5EL2GBC/6y/o7LgJ2yw", "Localization");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    let Localization = (() => {
      class Localization {
        constructor() {
          this.m_data = null;
        }
        static getInstance() {
          null === this.s_instance && (this.s_instance = new Localization());
          return this.s_instance;
        }
        static destroy() {
          null !== this.s_instance && this.s_instance.destroy();
          this.s_instance = null;
        }
        set data(value) {
          this.m_data = value;
        }
        get(key, ...format) {
          let value = "";
          this.m_data && void 0 !== this.m_data[key] && (value = this.m_data[key]);
          format.length > 0 && (value = value.replace(/{(\d+)}/g, (_, matchIndex) => {
            let index = Number(matchIndex);
            let content = format[index];
            let result = "";
            result = void 0 === content ? "?" : "number" === typeof content ? content.toString() : content;
            return result;
          }));
          return value;
        }
        destroy() {
          this.m_data = null;
        }
      }
      Localization.s_instance = null;
      return Localization;
    })();
    exports.default = Localization;
    cc._RF.pop();
  }, {} ],
  LockTouchView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24b4bfpy/ZGvrRZopU/Zzvj", "LockTouchView");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const ViewBase_1 = __importDefault(require("../../ViewBase"));
    const {ccclass: ccclass, property: property} = cc._decorator;
    let LockTouchNode = (() => {
      let LockTouchNode = class LockTouchNode extends ViewBase_1.default {
        onLoad() {
          this.initData();
          this.initView();
        }
        start() {
          this.hide();
        }
        initData() {}
        initView() {}
        open() {
          this.show();
        }
        close() {
          this.hide();
        }
      };
      LockTouchNode = __decorate([ ccclass ], LockTouchNode);
      return LockTouchNode;
    })();
    exports.default = LockTouchNode;
    cc._RF.pop();
  }, {
    "../../ViewBase": "ViewBase"
  } ],
  Logger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bdbe8E8KJxBOZ2Bcjp4Efgr", "Logger");
    "use strict";
    var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
          return m[k];
        }
      });
    } : function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      o[k2] = m[k];
    });
    var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
      });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = this && this.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const SystemConfig = __importStar(require("../../config/SystemConfig"));
    let Logger = (() => {
      class Logger {
        constructor() {}
        static getInstance() {
          null === this.s_instance && (this.s_instance = new Logger());
          return this.s_instance;
        }
        static destroy() {
          null !== this.s_instance && this.s_instance.destroy();
          this.s_instance = null;
        }
        log(...data) {
          if (!SystemConfig.DEBUG_LOG) return;
          data.unshift("\u4fe1\u606f\uff1a");
          console.log.apply(console, data);
        }
        warn(...data) {
          if (!SystemConfig.DEBUG_LOG) return;
          data.unshift("\u8b66\u544a\uff1a");
          console.warn.apply(console, data);
        }
        error(...data) {
          if (!SystemConfig.DEBUG_LOG) return;
          data.unshift("\u9519\u8bef\uff1a");
          console.error.apply(console, data);
        }
        destroy() {}
      }
      Logger.s_instance = null;
      return Logger;
    })();
    exports.default = Logger;
    cc._RF.pop();
  }, {
    "../../config/SystemConfig": "SystemConfig"
  } ],
  LoginView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "82313wYtJNKIouF4GzbY0BI", "LoginView");
    "use strict";
    var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
          return m[k];
        }
      });
    } : function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      o[k2] = m[k];
    });
    var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
      });
    } : function(o, v) {
      o["default"] = v;
    });
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importStar = this && this.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const HttpRequest_1 = __importDefault(require("../../../core/http/HttpRequest"));
    const WebAPIConfig = __importStar(require("../../../config/WebAPIConfig"));
    const ViewBase_1 = __importDefault(require("../../ViewBase"));
    const HttpDefine = __importStar(require("../../../define/HttpDefine"));
    const ServerConfig = __importStar(require("../../../config/ServerConfig"));
    const ViewDefine_1 = __importDefault(require("../../../define/ViewDefine"));
    const SceneDefine_1 = __importDefault(require("../../../define/SceneDefine"));
    const {ccclass: ccclass, property: property} = cc._decorator;
    let LoginView = (() => {
      let LoginView = class LoginView extends ViewBase_1.default {
        constructor() {
          super(...arguments);
          this.edbUsername = null;
          this.edbPassword = null;
        }
        onLoad() {
          this.register();
          this.initData();
          this.initView();
        }
        start() {}
        register() {}
        unRegister() {}
        initData() {}
        initView() {}
        setInfo(username, password) {
          this.edbUsername.string = username;
          this.edbPassword.string = password;
        }
        onClickLogin() {
          let requestData = {
            username: this.edbUsername.string,
            password: this.edbPassword.string
          };
          let url = ServerConfig.WEB_API_SERVER + WebAPIConfig.WEB_API_LOGIN_REQUEST;
          HttpRequest_1.default.post(url, JSON.stringify(requestData)).then(responseInfo => {
            if (responseInfo.state === HttpDefine.StateType.OK) {
              let responseData = JSON.parse(responseInfo.body);
              0 === responseData.code && G.UIMgr.openScene(SceneDefine_1.default.HomeScene);
            }
          });
        }
        onClickRegister() {
          G.UIMgr.openView(ViewDefine_1.default.RegisterView, null, () => {
            this.hide();
          });
        }
        onDestroy() {
          this.unRegister();
        }
      };
      __decorate([ property({
        type: cc.EditBox,
        tooltip: "\u7528\u6237\u540d"
      }) ], LoginView.prototype, "edbUsername", void 0);
      __decorate([ property({
        type: cc.EditBox,
        tooltip: "\u5bc6\u7801"
      }) ], LoginView.prototype, "edbPassword", void 0);
      LoginView = __decorate([ ccclass ], LoginView);
      return LoginView;
    })();
    exports.default = LoginView;
    cc._RF.pop();
  }, {
    "../../../config/ServerConfig": "ServerConfig",
    "../../../config/WebAPIConfig": "WebAPIConfig",
    "../../../core/http/HttpRequest": "HttpRequest",
    "../../../define/HttpDefine": "HttpDefine",
    "../../../define/SceneDefine": "SceneDefine",
    "../../../define/ViewDefine": "ViewDefine",
    "../../ViewBase": "ViewBase"
  } ],
  MaintainView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "651eaPTwzNBxap0GR9pWLqI", "MaintainView");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const ViewBase_1 = __importDefault(require("../../ViewBase"));
    const {ccclass: ccclass, property: property} = cc._decorator;
    let PopupsView = (() => {
      let PopupsView = class PopupsView extends ViewBase_1.default {
        onLoad() {
          this.initData();
          this.initView();
        }
        start() {}
        initData() {}
        initView() {}
        onClickBulletin() {
          console.log("\u663e\u793a\u66f4\u65b0\u516c\u544a");
        }
      };
      PopupsView = __decorate([ ccclass ], PopupsView);
      return PopupsView;
    })();
    exports.default = PopupsView;
    cc._RF.pop();
  }, {
    "../../ViewBase": "ViewBase"
  } ],
  ManagerInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a70f9RHxJdAhIltBmRrl927", "ManagerInterface");
    cc._RF.pop();
  }, {} ],
  Manager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ca8aD3Rj9I2oDOEajggPb9", "Manager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    class Manager {
      constructor() {}
    }
    exports.default = Manager;
    cc._RF.pop();
  }, {} ],
  NetworkDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e96cW6ditBc7cdYWDkP9J+", "NetworkDefine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CloseState = void 0;
    var CloseState;
    (function(CloseState) {
      CloseState[CloseState["ERROR_CLOSE"] = 0] = "ERROR_CLOSE";
      CloseState[CloseState["CLIENT_CLOSE"] = 1] = "CLIENT_CLOSE";
      CloseState[CloseState["SERVER_CLOSE"] = 2] = "SERVER_CLOSE";
    })(CloseState = exports.CloseState || (exports.CloseState = {}));
    cc._RF.pop();
  }, {} ],
  NetworkInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b309e2wcQpMkbHDYl/ALA4w", "NetworkInterface");
    cc._RF.pop();
  }, {} ],
  NetworkManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d0008ciFYJH/aZX7v81p5/J", "NetworkManager");
    "use strict";
    var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
          return m[k];
        }
      });
    } : function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      o[k2] = m[k];
    });
    var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
      });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = this && this.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const Manager_1 = __importDefault(require("../Manager"));
    const EventDefine_1 = __importStar(require("../../../define/EventDefine"));
    const Logger_1 = __importDefault(require("../../machine/Logger"));
    const NetworkMessageTimer_1 = __importDefault(require("./NetworkMessageTimer"));
    const CodeUtil_1 = __importDefault(require("../../../utils/CodeUtil"));
    const EventManager_1 = __importDefault(require("../event/EventManager"));
    const NetworkDefine = __importStar(require("../../../define/NetworkDefine"));
    const Proto_1 = __importDefault(require("../../../protobuf/Proto"));
    const SERIAL_LENGTH_BYTE_SIZE = 1;
    const MSG_NAME_LENGTH_BYTE_SIZE = 1;
    const MSG_RESPONSE_TIMEOUT_SEC = 1;
    const MSG_WAIT_TIMEOUT_SEC = 3;
    const PONG_TIMEOUT_SEC = 10;
    const START_SERIAL = 1;
    let NetworkManager = (() => {
      class NetworkManager extends Manager_1.default {
        constructor() {
          super();
          this.m_websocket = null;
          this.m_messageCallbackMap = null;
          this.m_networkMessageTimer = null;
          this.m_pongTimerId = null;
          this.m_messageWaitTimerId = null;
          this.m_serial = 0;
          this.m_requestDataMap = null;
          this.m_messageTimeoutMap = null;
          this.m_closeState = null;
          this.m_messageCallbackMap = new Map();
          this.m_networkMessageTimer = new NetworkMessageTimer_1.default(this.onMessageTimeout.bind(this));
          this.m_requestDataMap = new Map();
          this.m_messageTimeoutMap = new Map();
        }
        static getInstance() {
          null === this.s_instance && (this.s_instance = new NetworkManager());
          return this.s_instance;
        }
        static destroy() {
          null !== this.s_instance && this.s_instance.destroy();
          this.s_instance = null;
        }
        initClose() {
          this.m_websocket = null;
          this.m_closeState = null;
          this.m_serial = 0;
          this.stopAllTimer();
          this.m_requestDataMap.clear();
          this.m_messageTimeoutMap.clear();
        }
        on(msgClass, caller, callback) {
          let msgName = msgClass.name;
          if (null === this.m_messageCallbackMap) {
            Logger_1.default.getInstance().warn(`\u6ce8\u518c ${msgName} \u7f51\u7edc\u5931\u8d25`);
            return;
          }
          let listenMap = this.m_messageCallbackMap.get(msgName);
          if (void 0 === listenMap) {
            listenMap = new Map();
            this.m_messageCallbackMap.set(msgName, listenMap);
          }
          let value = listenMap.get(caller);
          if (void 0 !== value && null !== value) {
            Logger_1.default.getInstance().warn(`${caller.name} \u7c7b\u4e2d\uff0c\u91cd\u590d\u6ce8\u518c\u7f51\u7edc ${msgName}`);
            return;
          }
          listenMap.set(caller, callback);
        }
        off(msgClass, caller) {
          let msgName = msgClass.name;
          if (null === this.m_messageCallbackMap) {
            Logger_1.default.getInstance().warn(`\u91ca\u653e ${msgName} \u7f51\u7edc\u5931\u8d25`);
            return;
          }
          let listenMap = this.m_messageCallbackMap.get(msgName);
          if (void 0 === listenMap || null === listenMap) return;
          listenMap.has(caller) && listenMap.delete(caller);
        }
        onMessageTimeout(serial) {
          if (this.m_messageTimeoutMap.size <= 0) {
            EventManager_1.default.getInstance().emit(EventDefine_1.default.WS_MESSAGE_TIMEOUT);
            this.startMessageWait();
          }
          let networkData = this.m_requestDataMap.get(serial);
          if (void 0 === networkData) {
            Logger_1.default.getInstance().error("\u7f51\u7edc\u8d85\u65f6\u6570\u636e\u4e0d\u5b58\u5728\uff0c\u7531\u4e8e\u6ca1\u6709\u4efb\u4f55\u5730\u65b9\u53ef\u4ee5\u5220\u9664\u6570\u636e\uff0c\u6240\u4ee5\u5728\u8fd9\u91cc\u5fc5\u987b\u6709\u6570\u636e");
            return;
          }
          this.m_messageTimeoutMap.set(serial, networkData);
          Logger_1.default.getInstance().warn(`\u6d88\u606f\u8d85\u65f6\uff0c\u5e8f\u5217\u53f7\uff1a[${networkData.serial}] \u6d88\u606f\u540d\uff1a[${networkData.msgName}]`);
        }
        onPongTimeout() {
          EventManager_1.default.getInstance().emit(EventDefine_1.default.WS_PONG_TIMEOUT);
          this.stopAllTimer();
          this.close();
          Logger_1.default.getInstance().warn(`\u5fc3\u8df3\u8d85\u65f6\uff0c\u6d88\u606f\u540d\uff1a[${Proto_1.default.Pong.name}]`);
        }
        onOpen(ev) {
          EventManager_1.default.getInstance().emit(EventDefine_1.default.WS_CONNECTED);
          Logger_1.default.getInstance().log("\u7f51\u7edc\u8fde\u63a5\u6210\u529f");
        }
        onMessage(ev) {
          let responseData = this.decodeData(ev.data);
          if (this.m_messageTimeoutMap.has(responseData.serial)) {
            this.m_messageTimeoutMap.delete(responseData.serial);
            if (this.m_messageTimeoutMap.size <= 0) {
              this.stopMessageWait();
              EventManager_1.default.getInstance().emit(EventDefine_1.default.WS_MESSAGE_NORMAL);
            }
          }
          Logger_1.default.getInstance().log(`\u6d88\u606f\u63a5\u6536\uff0c\u5e8f\u5217\u53f7\uff1a[${responseData.serial}] \u6d88\u606f\u540d\uff1a[${responseData.msgName}] \u6570\u636e\uff1a[${JSON.stringify(responseData.msgData)}]`);
          if (responseData.msgName === Proto_1.default.Pong.name) {
            this.resetPong();
            return;
          }
          this.m_networkMessageTimer.off(responseData.serial);
          this.m_requestDataMap.has(responseData.serial) && this.m_requestDataMap.delete(responseData.serial);
          let listenMap = this.m_messageCallbackMap.get(responseData.msgName);
          void 0 !== listenMap && listenMap.forEach((callback, caller) => {
            callback.call(caller, responseData.msgData);
          });
        }
        onClose(ev) {
          null === this.m_closeState && (this.m_closeState = NetworkDefine.CloseState.SERVER_CLOSE);
          let closeState = this.m_closeState;
          this.initClose();
          EventManager_1.default.getInstance().emit(EventDefine_1.default.WS_CLOSED, closeState);
          Logger_1.default.getInstance().log("\u7f51\u7edc\u65ad\u5f00\u8fde\u63a5");
        }
        onError(ev) {
          this.m_closeState = NetworkDefine.CloseState.ERROR_CLOSE;
          EventManager_1.default.getInstance().emit(EventDefine_1.default.WS_ERROR);
          Logger_1.default.getInstance().log("\u7f51\u7edc\u8fde\u63a5\u9519\u8bef");
        }
        connect(...args) {
          if (null !== this.m_websocket && this.m_websocket.readyState !== WebSocket.CLOSED) {
            Logger_1.default.getInstance().warn("\u7f51\u7edc\u8fde\u63a5\u672a\u5173\u95ed\uff0c\u8bf7\u4e0d\u8981\u91cd\u590d\u5efa\u7acb\u8fde\u63a5");
            return;
          }
          EventManager_1.default.getInstance().emit(EventDefine_1.SystemEventDefine.WS_CONNECTING);
          let url = null;
          if (3 === args.length && "string" === typeof args[0] && "string" === typeof args[1] && "number" === typeof args[2]) url = `${args[0]}://${args[1]}:${args[2]}`; else {
            if (1 !== args.length || "string" !== typeof args[0]) {
              Logger_1.default.getInstance().warn("\u8fde\u63a5\u7f51\u7edc\u53c2\u6570\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u4f20\u5165\u53c2\u6570");
              return;
            }
            url = args[0];
          }
          this.m_websocket = new WebSocket(url);
          this.m_websocket.binaryType = "arraybuffer";
          this.m_websocket.onopen = this.onOpen.bind(this);
          this.m_websocket.onmessage = this.onMessage.bind(this);
          this.m_websocket.onclose = this.onClose.bind(this);
          this.m_websocket.onerror = this.onError.bind(this);
          Logger_1.default.getInstance().log(`\u6b63\u5728\u8fde\u63a5\u7f51\u7edc\uff1a${url}`);
        }
        reconnect(...args) {
          this.connect.apply(this, args);
        }
        send(msgClass, msgData) {
          if (null === this.m_websocket || void 0 === this.m_websocket) {
            Logger_1.default.getInstance().warn("\u7f51\u7edc\u53d1\u9001\u5931\u8d25\uff0c\u672a\u5efa\u7acb\u7f51\u7edc\u8fde\u63a5");
            return;
          }
          if (this.m_websocket.readyState !== WebSocket.OPEN) {
            Logger_1.default.getInstance().warn(`\u7f51\u7edc\u72b6\u6001\u5f02\u5e38\uff1a${this.m_websocket.readyState}`);
            return;
          }
          this.addSerial();
          let requestData = this.encodeData(msgClass, msgData);
          this.m_websocket.send(requestData);
          try {
            Logger_1.default.getInstance().log(`\u6d88\u606f\u53d1\u9001\uff0c\u5e8f\u5217\u53f7\uff1a[${this.m_serial}] \u6d88\u606f\u540d\uff1a[${msgClass.name}] \u6570\u636e\uff1a[${JSON.stringify(msgData)}]`);
          } catch (e) {
            Logger_1.default.getInstance().log(`\u6d88\u606f\u53d1\u9001\uff0c\u5e8f\u5217\u53f7\uff1a[${this.m_serial}] \u6d88\u606f\u540d\uff1a[${msgClass.name}] \u6570\u636e\uff1a[${msgData}]`);
          }
          this.m_networkMessageTimer.on(this.m_serial, MSG_RESPONSE_TIMEOUT_SEC);
          this.m_requestDataMap.set(this.m_serial, {
            serial: this.m_serial,
            msgName: msgClass.name,
            msgData: msgData
          });
        }
        close() {
          if (this.m_websocket.readyState === WebSocket.CLOSING || this.m_websocket.readyState === WebSocket.CLOSED) {
            Logger_1.default.getInstance().warn("\u7f51\u7edc\u6b63\u5728\u5173\u95ed\uff0c\u8bf7\u4e0d\u8981\u91cd\u590d\u5173\u95ed\u7f51\u7edc");
            return;
          }
          this.m_closeState = NetworkDefine.CloseState.CLIENT_CLOSE;
          EventManager_1.default.getInstance().emit(EventDefine_1.SystemEventDefine.WS_CLOSING);
          Logger_1.default.getInstance().log("\u7f51\u7edc\u6b63\u5728\u65ad\u5f00");
          this.m_websocket.close();
        }
        getCloseState() {
          return this.m_closeState;
        }
        addSerial() {
          ++this.m_serial > 255 && (this.m_serial = START_SERIAL);
        }
        startMessageWait() {
          null !== this.m_messageWaitTimerId && void 0 !== this.m_messageWaitTimerId || (this.m_messageWaitTimerId = setTimeout(() => {
            this.stopAllTimer();
            this.close();
            this.m_messageWaitTimerId = null;
          }, 1e3 * MSG_WAIT_TIMEOUT_SEC));
        }
        stopMessageWait() {
          if (null !== this.m_messageWaitTimerId && void 0 !== this.m_messageWaitTimerId) {
            clearTimeout(this.m_messageWaitTimerId);
            this.m_messageWaitTimerId = null;
          }
        }
        startPong() {
          null !== this.m_pongTimerId && void 0 !== this.m_pongTimerId || (this.m_pongTimerId = setTimeout(() => {
            this.onPongTimeout();
            this.m_pongTimerId = null;
          }, 1e3 * PONG_TIMEOUT_SEC));
        }
        resetPong() {
          this.stopPong();
          this.startPong();
        }
        stopPong() {
          if (null !== this.m_pongTimerId && void 0 !== this.m_pongTimerId) {
            clearTimeout(this.m_pongTimerId);
            this.m_pongTimerId = null;
          }
        }
        stopAllTimer() {
          this.stopPong();
          this.m_networkMessageTimer.offAll();
          this.stopMessageWait();
        }
        encodeData(msgClass, msgData) {
          let msgName = msgClass.name;
          let msgNameUint8Array = CodeUtil_1.default.stringToUint8Array(msgName);
          let msgNameLen = msgNameUint8Array.byteLength;
          let instance = msgClass.create(msgData);
          let msgDataBuffer = msgClass.encode(instance).finish();
          let msgDataLen = msgDataBuffer.byteLength;
          let bodyLen = SERIAL_LENGTH_BYTE_SIZE + MSG_NAME_LENGTH_BYTE_SIZE + msgNameLen + msgDataLen;
          let dataLen = bodyLen;
          let dataBuffer = new ArrayBuffer(dataLen);
          let dataView = new DataView(dataBuffer);
          let bufferOffset = 0;
          dataView.setUint8(bufferOffset, this.m_serial);
          bufferOffset += SERIAL_LENGTH_BYTE_SIZE;
          dataView.setUint8(bufferOffset, msgNameLen);
          bufferOffset += MSG_NAME_LENGTH_BYTE_SIZE;
          let nameBuffer = new Uint8Array(dataBuffer, bufferOffset, msgNameLen);
          nameBuffer.set(CodeUtil_1.default.stringToUint8Array(msgName), 0);
          bufferOffset += msgNameLen;
          new Uint8Array(dataBuffer, bufferOffset, msgDataLen).set(msgDataBuffer, 0);
          bufferOffset += msgDataLen;
          return dataBuffer;
        }
        decodeData(bufffer) {
          let dataView = new DataView(bufffer);
          let bufferOffset = 0;
          let serial = dataView.getUint8(bufferOffset);
          bufferOffset += SERIAL_LENGTH_BYTE_SIZE;
          let msgNameLen = dataView.getUint8(bufferOffset);
          bufferOffset += MSG_NAME_LENGTH_BYTE_SIZE;
          let msgName = CodeUtil_1.default.uint8ArrayToString(new Uint8Array(bufffer.slice(bufferOffset, bufferOffset += msgNameLen)));
          let msgDataLen = bufffer.byteLength - bufferOffset;
          let msgData = Proto_1.default[msgName].decode(new Uint8Array(bufffer.slice(bufferOffset, bufferOffset += msgDataLen)));
          let data = {
            serial: serial,
            msgName: msgName,
            msgData: msgData
          };
          return data;
        }
        destroy() {}
      }
      NetworkManager.s_instance = null;
      return NetworkManager;
    })();
    exports.default = NetworkManager;
    cc._RF.pop();
  }, {
    "../../../define/EventDefine": "EventDefine",
    "../../../define/NetworkDefine": "NetworkDefine",
    "../../../protobuf/Proto": "Proto",
    "../../../utils/CodeUtil": "CodeUtil",
    "../../machine/Logger": "Logger",
    "../Manager": "Manager",
    "../event/EventManager": "EventManager",
    "./NetworkMessageTimer": "NetworkMessageTimer"
  } ],
  NetworkMessageTimer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "42f1brXcBpDRqdDXYlOLGc3", "NetworkMessageTimer");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    class NetworkMessageTimer {
      constructor(timeoutCallback) {
        this.m_timerMap = null;
        this.m_messageTimeoutCallback = null;
        this.m_timerMap = new Map();
        this.m_messageTimeoutCallback = timeoutCallback;
      }
      on(serial, timeout) {
        let timerId = this.m_timerMap.get(serial);
        if (void 0 === timerId || null === timerId) {
          timerId = setTimeout(() => {
            this.m_messageTimeoutCallback(serial);
            this.m_timerMap.delete(serial);
          }, 1e3 * timeout);
          this.m_timerMap.set(serial, timerId);
        }
      }
      off(serial) {
        let timerId = this.m_timerMap.get(serial);
        if (void 0 !== timerId && null !== timerId) {
          clearTimeout(timerId);
          this.m_timerMap.delete(serial);
        }
      }
      offAll() {
        this.m_timerMap.forEach((timerId, serial) => {
          clearTimeout(timerId);
          this.m_timerMap.delete(serial);
        });
      }
    }
    exports.default = NetworkMessageTimer;
    cc._RF.pop();
  }, {} ],
  NetworkUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4b68bLlEMBC/Z7IABHKfLeR", "NetworkUtil");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    class NetworkUtil {}
    exports.default = NetworkUtil;
    cc._RF.pop();
  }, {} ],
  NumKeyboardView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72230xbFidBxLbwJkQUfLqa", "NumKeyboardView");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const ViewBase_1 = __importDefault(require("../../ViewBase"));
    const {ccclass: ccclass, property: property} = cc._decorator;
    let NumKeyboardView = (() => {
      let NumKeyboardView = class NumKeyboardView extends ViewBase_1.default {
        onLoad() {
          this.initData();
          this.initView();
        }
        start() {}
        initData() {}
        initView() {}
      };
      NumKeyboardView = __decorate([ ccclass ], NumKeyboardView);
      return NumKeyboardView;
    })();
    exports.default = NumKeyboardView;
    cc._RF.pop();
  }, {
    "../../ViewBase": "ViewBase"
  } ],
  PersistInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c4a7dkjChpJKYPzmSWbZbng", "PersistInterface");
    cc._RF.pop();
  }, {} ],
  PoolInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "22ee7Hrrc5DVrMxZIbchsAC", "PoolInterface");
    cc._RF.pop();
  }, {} ],
  PoolItemInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "999ceGtY+hPuq6oToIWds7/", "PoolItemInterface");
    cc._RF.pop();
  }, {} ],
  Pool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9070fXGXmxPpqSofvvxPBhZ", "Pool");
    "use strict";
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const Logger_1 = __importDefault(require("../core/machine/Logger"));
    const Factory_1 = __importDefault(require("./Factory"));
    class Pool {
      constructor(type, maxSize = 1024) {
        this.type = type;
        this.m_maxSize = null;
        this.m_poolList = null;
        if (maxSize <= 0) {
          Logger_1.default.getInstance().error("\u5bf9\u8c61\u6c60\u521d\u59cb\u5316\u6700\u5927\u5bb9\u7eb3\u6570\u91cf\u9700\u5927\u4e8e0");
          return;
        }
        this.m_maxSize = maxSize;
        this.m_poolList = [];
        for (let i = 0; i < maxSize; ++i) this.m_poolList.push(Factory_1.default.create(this.type));
      }
      get size() {
        return this.m_poolList.length;
      }
      get() {
        let isNew = false;
        if (this.m_poolList.length <= 0) {
          this.m_poolList.push(Factory_1.default.create(this.type));
          isNew = true;
        }
        let item = this.m_poolList.shift();
        isNew || item.clear();
        return item;
      }
      put(obj) {
        null !== obj && void 0 !== obj && obj instanceof this.type && this.m_poolList.push(obj);
      }
      clear() {
        if (this.m_poolList.length > this.m_maxSize) {
          let clearList = this.m_poolList.slice(this.m_maxSize, this.m_poolList.length);
          for (let i = 0; i < clearList.length; ++i) {
            let item = clearList[i];
            item.release();
          }
          clearList.length = 0;
        }
      }
      clearAll() {
        for (let i = 0; i < this.m_poolList.length; ++i) {
          let item = this.m_poolList[i];
          item.release();
        }
        this.m_poolList.length = 0;
      }
      destroy() {
        this.clearAll();
        this.m_maxSize = null;
        this.m_poolList = null;
      }
    }
    exports.default = Pool;
    cc._RF.pop();
  }, {
    "../core/machine/Logger": "Logger",
    "./Factory": "Factory"
  } ],
  PopupsView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3767vyLGFOK74PVs0u2CwR", "PopupsView");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const ViewBase_1 = __importDefault(require("../../ViewBase"));
    const {ccclass: ccclass, property: property} = cc._decorator;
    let PopupsView = (() => {
      let PopupsView = class PopupsView extends ViewBase_1.default {
        constructor() {
          super(...arguments);
          this.labTitle = null;
          this.labContent = null;
          this.btnCancel = null;
          this.btnConfirm = null;
          this.m_confirmCallback = null;
          this.m_cancelCallback = null;
        }
        onLoad() {
          this.initData();
          this.initView();
        }
        start() {}
        onDisable() {
          this.initData();
          this.initView();
        }
        initData() {
          this.m_confirmCallback = null;
          this.m_cancelCallback = null;
        }
        initView() {
          this.labTitle.string = "";
          this.labContent.string = "";
          this.btnCancel.node.active = false;
          this.btnConfirm.node.active = false;
        }
        setContent(data) {
          this.labContent.string = data;
        }
        setTitle(data) {
          let title = "";
          "string" === typeof data && (title = data);
          this.labTitle.string = title;
        }
        setButton(confirmCallback, cancelCallback) {
          confirmCallback && (this.m_confirmCallback = confirmCallback);
          if (cancelCallback) {
            this.m_cancelCallback = cancelCallback;
            let parent = this.btnCancel.node.parent;
            let intervalWidth = (parent.width - this.btnCancel.node.width - this.btnConfirm.node.width) / 3;
            let cancelX = parent.width / 2 * -1 + intervalWidth + this.btnCancel.node.width / 2;
            let confirmX = cancelX + this.btnCancel.node.width / 2 + intervalWidth + this.btnConfirm.node.width / 2;
            this.btnCancel.node.x = cancelX;
            this.btnConfirm.node.x = confirmX;
            this.btnCancel.node.active = true;
          } else {
            this.btnConfirm.node.x = 0;
            this.btnCancel.node.active = false;
          }
          this.btnConfirm.node.active = true;
        }
        open(content, title, confirmCallback, cancelCallback) {
          this.setContent(content);
          this.setTitle(title);
          this.setButton(confirmCallback, cancelCallback);
        }
        onClickCancel() {
          this.m_cancelCallback && this.m_cancelCallback();
          this.node.destroy();
        }
        onClickConfirm() {
          this.m_confirmCallback && this.m_confirmCallback();
          this.node.destroy();
        }
      };
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u6807\u9898"
      }) ], PopupsView.prototype, "labTitle", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u5185\u5bb9"
      }) ], PopupsView.prototype, "labContent", void 0);
      __decorate([ property({
        type: cc.Button,
        tooltip: "\u53d6\u6d88"
      }) ], PopupsView.prototype, "btnCancel", void 0);
      __decorate([ property({
        type: cc.Button,
        tooltip: "\u786e\u5b9a"
      }) ], PopupsView.prototype, "btnConfirm", void 0);
      PopupsView = __decorate([ ccclass ], PopupsView);
      return PopupsView;
    })();
    exports.default = PopupsView;
    cc._RF.pop();
  }, {
    "../../ViewBase": "ViewBase"
  } ],
  ProgressView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "754f9IS3slDBqhvg4ZcHVD5", "ProgressView");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const ViewBase_1 = __importDefault(require("../../ViewBase"));
    const {ccclass: ccclass, property: property} = cc._decorator;
    const MIN_PERCENT = 0;
    const MAX_PERCENT = 100;
    const MIN_SMOOTH_STEP = 1;
    const TOTAL_CMOOTH_STEP = 10;
    let ProgressNode = (() => {
      let ProgressNode = class ProgressNode extends ViewBase_1.default {
        constructor() {
          super(...arguments);
          this.pobLoad = null;
          this.m_currPercent = null;
          this.m_realTimePercent = null;
        }
        onLoad() {
          this.initData();
          this.initView();
        }
        start() {
          this.hide();
        }
        onDisable() {
          this.initData();
          this.initView();
        }
        update(dt) {
          if (this.m_realTimePercent > this.m_currPercent) {
            let differencePercent = this.m_realTimePercent - this.m_currPercent;
            let intervalStep = 0;
            intervalStep = differencePercent < MIN_SMOOTH_STEP ? differencePercent : this.m_realTimePercent >= MAX_PERCENT ? differencePercent : differencePercent / TOTAL_CMOOTH_STEP;
            this.m_currPercent += intervalStep;
            this.pobLoad.progress = this.m_currPercent / MAX_PERCENT;
          }
        }
        initData() {
          this.m_currPercent = 0;
          this.m_realTimePercent = 0;
        }
        initView() {
          this.pobLoad.progress = this.m_currPercent;
        }
        open() {
          this.show();
        }
        close() {
          this.hide();
        }
        onEnable() {
          this.initData();
          this.initView();
        }
        setPercent(value) {
          value < MIN_PERCENT ? value = MIN_PERCENT : value > MAX_PERCENT && (value = MAX_PERCENT);
          this.m_realTimePercent = value;
        }
      };
      __decorate([ property({
        type: cc.ProgressBar,
        tooltip: "\u52a0\u8f7d\u8d44\u6e90\u8fdb\u5ea6\u6761"
      }) ], ProgressNode.prototype, "pobLoad", void 0);
      ProgressNode = __decorate([ ccclass ], ProgressNode);
      return ProgressNode;
    })();
    exports.default = ProgressNode;
    cc._RF.pop();
  }, {
    "../../ViewBase": "ViewBase"
  } ],
  Proto: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c9b75uc3ixIerFsyB3BhDf6", "Proto");
    "use strict";
    exports.__esModule = true;
    exports.Pong = exports.Ping = exports.C2SSignIn = void 0;
    var $protobuf = require("protobuf");
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    var C2SSignIn = $root.C2SSignIn = function() {
      function C2SSignIn(p) {
        if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) null != p[ks[i]] && (this[ks[i]] = p[ks[i]]);
      }
      C2SSignIn.prototype.user = "";
      C2SSignIn.prototype.password = "";
      C2SSignIn.create = function create(properties) {
        return new C2SSignIn(properties);
      };
      C2SSignIn.encode = function encode(m, w) {
        w || (w = $Writer.create());
        null != m.user && Object.hasOwnProperty.call(m, "user") && w.uint32(10).string(m.user);
        null != m.password && Object.hasOwnProperty.call(m, "password") && w.uint32(18).string(m.password);
        return w;
      };
      C2SSignIn.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      C2SSignIn.decode = function decode(r, l) {
        r instanceof $Reader || (r = $Reader.create(r));
        var c = void 0 === l ? r.len : r.pos + l, m = new $root.C2SSignIn();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
           case 1:
            m.user = r.string();
            break;

           case 2:
            m.password = r.string();
            break;

           default:
            r.skipType(7 & t);
          }
        }
        return m;
      };
      C2SSignIn.decodeDelimited = function decodeDelimited(reader) {
        reader instanceof $Reader || (reader = new $Reader(reader));
        return this.decode(reader, reader.uint32());
      };
      C2SSignIn.verify = function verify(m) {
        if ("object" !== typeof m || null === m) return "object expected";
        if (null != m.user && m.hasOwnProperty("user") && !$util.isString(m.user)) return "user: string expected";
        if (null != m.password && m.hasOwnProperty("password") && !$util.isString(m.password)) return "password: string expected";
        return null;
      };
      return C2SSignIn;
    }();
    exports.C2SSignIn = C2SSignIn;
    var Ping = $root.Ping = function() {
      function Ping(p) {
        if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) null != p[ks[i]] && (this[ks[i]] = p[ks[i]]);
      }
      Ping.create = function create(properties) {
        return new Ping(properties);
      };
      Ping.encode = function encode(m, w) {
        w || (w = $Writer.create());
        return w;
      };
      Ping.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      Ping.decode = function decode(r, l) {
        r instanceof $Reader || (r = $Reader.create(r));
        var c = void 0 === l ? r.len : r.pos + l, m = new $root.Ping();
        while (r.pos < c) {
          var t = r.uint32();
          t >>> 3;
          r.skipType(7 & t);
        }
        return m;
      };
      Ping.decodeDelimited = function decodeDelimited(reader) {
        reader instanceof $Reader || (reader = new $Reader(reader));
        return this.decode(reader, reader.uint32());
      };
      Ping.verify = function verify(m) {
        if ("object" !== typeof m || null === m) return "object expected";
        return null;
      };
      return Ping;
    }();
    exports.Ping = Ping;
    var Pong = $root.Pong = function() {
      function Pong(p) {
        if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) null != p[ks[i]] && (this[ks[i]] = p[ks[i]]);
      }
      Pong.create = function create(properties) {
        return new Pong(properties);
      };
      Pong.encode = function encode(m, w) {
        w || (w = $Writer.create());
        return w;
      };
      Pong.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      Pong.decode = function decode(r, l) {
        r instanceof $Reader || (r = $Reader.create(r));
        var c = void 0 === l ? r.len : r.pos + l, m = new $root.Pong();
        while (r.pos < c) {
          var t = r.uint32();
          t >>> 3;
          r.skipType(7 & t);
        }
        return m;
      };
      Pong.decodeDelimited = function decodeDelimited(reader) {
        reader instanceof $Reader || (reader = new $Reader(reader));
        return this.decode(reader, reader.uint32());
      };
      Pong.verify = function verify(m) {
        if ("object" !== typeof m || null === m) return "object expected";
        return null;
      };
      return Pong;
    }();
    exports.Pong = Pong;
    module.exports = $root;
    cc._RF.pop();
  }, {
    protobuf: "protobuf"
  } ],
  RegisterView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "27e86N5NVdJv7A6Q4kb/RR8", "RegisterView");
    "use strict";
    var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
          return m[k];
        }
      });
    } : function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      o[k2] = m[k];
    });
    var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
      });
    } : function(o, v) {
      o["default"] = v;
    });
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importStar = this && this.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const HttpRequest_1 = __importDefault(require("../../../core/http/HttpRequest"));
    const WebAPIConfig = __importStar(require("../../../config/WebAPIConfig"));
    const ViewBase_1 = __importDefault(require("../../ViewBase"));
    const HttpDefine = __importStar(require("../../../define/HttpDefine"));
    const ServerConfig = __importStar(require("../../../config/ServerConfig"));
    const ViewDefine_1 = __importDefault(require("../../../define/ViewDefine"));
    const LocalizationDefine_1 = __importDefault(require("../../../define/LocalizationDefine"));
    const {ccclass: ccclass, property: property} = cc._decorator;
    let RegisterView = (() => {
      let RegisterView = class RegisterView extends ViewBase_1.default {
        constructor() {
          super(...arguments);
          this.m_isPwdPlain = null;
          this.edbUsername = null;
          this.edbPassword = null;
          this.labPasswordPlain = null;
        }
        onLoad() {
          this.register();
          this.initData();
          this.initView();
        }
        start() {}
        register() {}
        unRegister() {}
        initData() {
          this.m_isPwdPlain = false;
        }
        initView() {
          this.setPwdPlain(this.m_isPwdPlain);
        }
        setPwdPlain(isPlain) {
          let inputFlag;
          let strPasswordPlain;
          if (isPlain) {
            inputFlag = cc.EditBox.InputFlag.DEFAULT;
            strPasswordPlain = "\u9690\u85cf\u5bc6\u7801";
          } else {
            inputFlag = cc.EditBox.InputFlag.PASSWORD;
            strPasswordPlain = "\u663e\u793a\u5bc6\u7801";
          }
          this.edbPassword.inputFlag = inputFlag;
          this.labPasswordPlain.string = strPasswordPlain;
          this.m_isPwdPlain = isPlain;
        }
        onClickRegister() {
          let requestData = {
            username: this.edbUsername.string,
            password: this.edbPassword.string
          };
          let url = ServerConfig.WEB_API_SERVER + WebAPIConfig.WEB_API_REGISTER_REQUEST;
          HttpRequest_1.default.post(url, JSON.stringify(requestData)).then(responseInfo => {
            if (responseInfo.state === HttpDefine.StateType.OK) {
              let responseData = JSON.parse(responseInfo.body);
              if (0 === responseData.code) {
                G.UIMgr.openTips(G.Localization.get(LocalizationDefine_1.default.REGISTER_OK));
                let loginView = G.UIMgr.getView(ViewDefine_1.default.LoginView);
                let loginScript = loginView.getComponent("LoginView");
                loginScript.setInfo(requestData.username, requestData.password);
                this.onClickGoback();
              }
            }
          });
        }
        onClickGoback() {
          G.UIMgr.showView(ViewDefine_1.default.LoginView);
          this.close();
        }
        onClickPwdPlain() {
          this.setPwdPlain(!this.m_isPwdPlain);
        }
        onDestroy() {
          this.unRegister();
        }
      };
      __decorate([ property({
        type: cc.EditBox,
        tooltip: "\u7528\u6237\u540d"
      }) ], RegisterView.prototype, "edbUsername", void 0);
      __decorate([ property({
        type: cc.EditBox,
        tooltip: "\u5bc6\u7801"
      }) ], RegisterView.prototype, "edbPassword", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u663e\u9690\u5bc6\u7801"
      }) ], RegisterView.prototype, "labPasswordPlain", void 0);
      RegisterView = __decorate([ ccclass ], RegisterView);
      return RegisterView;
    })();
    exports.default = RegisterView;
    cc._RF.pop();
  }, {
    "../../../config/ServerConfig": "ServerConfig",
    "../../../config/WebAPIConfig": "WebAPIConfig",
    "../../../core/http/HttpRequest": "HttpRequest",
    "../../../define/HttpDefine": "HttpDefine",
    "../../../define/LocalizationDefine": "LocalizationDefine",
    "../../../define/ViewDefine": "ViewDefine",
    "../../ViewBase": "ViewBase"
  } ],
  RollNoticeView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "babe8spYodPX6PYIQGV118L", "RollNoticeView");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const ViewBase_1 = __importDefault(require("../../ViewBase"));
    const {ccclass: ccclass, property: property} = cc._decorator;
    let RollNoticeView = (() => {
      let RollNoticeView = class RollNoticeView extends ViewBase_1.default {
        constructor() {
          super(...arguments);
          this.data = null;
        }
        onLoad() {
          this.initData();
          this.initView();
        }
        start() {}
        initData() {}
        initView() {}
      };
      RollNoticeView = __decorate([ ccclass ], RollNoticeView);
      return RollNoticeView;
    })();
    exports.default = RollNoticeView;
    cc._RF.pop();
  }, {
    "../../ViewBase": "ViewBase"
  } ],
  SceneBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "520a5BMLmxD9a0Pe5BiY1JO", "SceneBase");
    "use strict";
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const UIBase_1 = __importDefault(require("./UIBase"));
    class SceneBase extends UIBase_1.default {
      constructor() {
        super();
      }
      onLanguage() {}
    }
    exports.default = SceneBase;
    cc._RF.pop();
  }, {
    "./UIBase": "UIBase"
  } ],
  SceneDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "40d68o9p7pNnZTCvpxjG8D1", "SceneDefine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CustomSceneDefine = exports.SystemSceneDefine = void 0;
    var SystemSceneDefine;
    (function(SystemSceneDefine) {
      SystemSceneDefine["BootScene"] = "BootScene";
    })(SystemSceneDefine = exports.SystemSceneDefine || (exports.SystemSceneDefine = {}));
    var CustomSceneDefine;
    (function(CustomSceneDefine) {
      CustomSceneDefine["AccountScene"] = "AccountScene";
      CustomSceneDefine["HomeScene"] = "HomeScene";
    })(CustomSceneDefine = exports.CustomSceneDefine || (exports.CustomSceneDefine = {}));
    exports.default = Object.assign(Object.assign({}, SystemSceneDefine), CustomSceneDefine);
    cc._RF.pop();
  }, {} ],
  SceneInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3a3a6TDPRZOwZBsoEgiwnL0", "SceneInterface");
    cc._RF.pop();
  }, {} ],
  ServerConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ac8a9cok3xD9I0ELhIVKyZr", "ServerConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WEB_API_SERVER = void 0;
    exports.WEB_API_SERVER = "http://p.sswanv.com:8090";
    cc._RF.pop();
  }, {} ],
  SystemConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36af6jpPv9GyKhYc8x2g9h9", "SystemConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DEBUG_LOG = void 0;
    exports.DEBUG_LOG = true;
    cc._RF.pop();
  }, {} ],
  TestView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a0c1hRWRlHkLXYRQeLh9Wb", "TestView");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const ViewBase_1 = __importDefault(require("../../ViewBase"));
    const {ccclass: ccclass, property: property} = cc._decorator;
    const MOVE_PIXEL = 50;
    let TestView = (() => {
      let TestView = class TestView extends ViewBase_1.default {
        constructor() {
          super(...arguments);
          this.nodRoot = null;
          this.labSwitch = null;
          this.btnSwitch = null;
          this.m_switchBtnOriginPos = null;
          this.m_isOpen = null;
        }
        onLoad() {
          this.register();
          this.initData();
          this.initView();
        }
        start() {}
        register() {
          this.btnSwitch.node.on(cc.Node.EventType.TOUCH_START, this.onSwitchTouchStart, this);
          this.btnSwitch.node.on(cc.Node.EventType.TOUCH_MOVE, this.onSwitchTouchMove, this);
          this.btnSwitch.node.on(cc.Node.EventType.TOUCH_END, this.onSwitchTouchEnd, this);
          this.btnSwitch.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onSwitchTouchCancel, this);
        }
        unRegister() {}
        initData() {
          this.m_isOpen = false;
        }
        initView() {
          this.setSwitch(this.m_isOpen);
        }
        setSwitch(isOpen) {
          let strSwitch = "";
          strSwitch = isOpen ? "\u5173\u95ed\u6d4b\u8bd5" : "\u5f00\u542f\u6d4b\u8bd5";
          this.labSwitch.string = strSwitch;
          this.nodRoot.active = isOpen;
        }
        open() {}
        close() {}
        onSwitchTouchStart(event) {
          this.m_switchBtnOriginPos = this.btnSwitch.node.getPosition();
        }
        onSwitchTouchMove(event) {
          let startLocation = event.getStartLocation();
          let moveLocation = event.getLocation();
          if (Math.abs(moveLocation.x - startLocation.x) < MOVE_PIXEL && Math.abs(moveLocation.y - startLocation.y) < MOVE_PIXEL) return;
          this.btnSwitch.interactable = false;
          let movePos = this.btnSwitch.node.parent.convertToNodeSpaceAR(moveLocation);
          this.btnSwitch.node.setPosition(movePos);
        }
        onSwitchTouchEnd(event) {
          this.btnSwitch.interactable = true;
          let node = event.target;
          this.m_switchBtnOriginPos = node.getPosition();
        }
        onSwitchTouchCancel(event) {
          this.btnSwitch.interactable = true;
          let node = event.target;
          node.setPosition(this.m_switchBtnOriginPos);
        }
        onClickSwitch() {
          this.m_isOpen = !this.m_isOpen;
          this.setSwitch(this.m_isOpen);
        }
        onClickOpenTips() {
          let timestamp = new Date().getTime();
          let content = timestamp.toString();
          G.UIMgr.openTips(content);
        }
        onDestroy() {
          this.unRegister();
        }
      };
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u6839\u8282\u70b9"
      }) ], TestView.prototype, "nodRoot", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u6d4b\u8bd5\u5f00\u5173\u6587\u5b57"
      }) ], TestView.prototype, "labSwitch", void 0);
      __decorate([ property({
        type: cc.Button,
        tooltip: "\u6d4b\u8bd5\u5f00\u5173\u6309\u94ae"
      }) ], TestView.prototype, "btnSwitch", void 0);
      TestView = __decorate([ ccclass ], TestView);
      return TestView;
    })();
    exports.default = TestView;
    cc._RF.pop();
  }, {
    "../../ViewBase": "ViewBase"
  } ],
  TimeUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0596ogxExFoZF1WmU+p4r7", "TimeUtil");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    class TimeUtil {
      static markTime(timestamp) {
        let currTime = performance.now();
        return void 0 === timestamp ? currTime : currTime - timestamp;
      }
    }
    exports.default = TimeUtil;
    cc._RF.pop();
  }, {} ],
  TipsView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c865c273EtFQKRglFmlwVV+", "TipsView");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const ViewBase_1 = __importDefault(require("../../ViewBase"));
    const {ccclass: ccclass, property: property} = cc._decorator;
    const MOVE_TIME = .5;
    const STAY_TIME = 2;
    const FADE_IN_TIME = .1;
    const FADE_OUT_TIME = .5;
    const CASE_PADDING = 15;
    let TipsView = (() => {
      let TipsView = class TipsView extends ViewBase_1.default {
        constructor() {
          super(...arguments);
          this.nodCase = null;
          this.labContent = null;
        }
        onLoad() {
          this.initData();
          this.initView();
        }
        start() {}
        initData() {}
        initView() {
          this.hide();
          this.labContent.string = "";
        }
        playAnimation() {
          this.nodCase.opacity = 0;
          cc.tween(this.nodCase).to(FADE_IN_TIME, {
            opacity: 255
          }).to(STAY_TIME, {}).to(FADE_OUT_TIME, {
            opacity: 0
          }).call(() => {
            this.close();
          }).start();
        }
        open(content) {
          this.labContent.string = content;
          this.labContent._forceUpdateRenderData();
          if (this.labContent.node.width >= this.nodCase.width) {
            this.labContent.node.width = this.nodCase.width - 2 * CASE_PADDING;
            this.labContent.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
            this.labContent._forceUpdateRenderData();
          } else this.nodCase.width = this.labContent.node.width + 2 * CASE_PADDING;
          this.nodCase.height = this.labContent.node.height + 2 * CASE_PADDING;
          this.show();
          this.playAnimation();
        }
        close() {
          this.node && this.node.isValid && this.node.destroy();
        }
      };
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u98d8\u52a8\u63d0\u793a\u5e95\u6846"
      }) ], TipsView.prototype, "nodCase", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u63d0\u793a\u5185\u5bb9"
      }) ], TipsView.prototype, "labContent", void 0);
      TipsView = __decorate([ ccclass ], TipsView);
      return TipsView;
    })();
    exports.default = TipsView;
    cc._RF.pop();
  }, {
    "../../ViewBase": "ViewBase"
  } ],
  TweenUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0a3a4L9Pu1A3ab+l7yYSgBJ", "TweenUtil");
    "use strict";
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const ViewStyleDefine_1 = __importDefault(require("../define/ViewStyleDefine"));
    const Logger_1 = __importDefault(require("../core/machine/Logger"));
    const FADE_TIME = .2;
    class TweenUtil {
      static openScale(node, completeCallback) {
        completeCallback();
      }
      static closeScale(node, completeCallback) {
        completeCallback();
      }
      static openFade(node, completeCallback) {
        node.opacity = 0;
        node.active = true;
        cc.tween(node).to(FADE_TIME, {
          opacity: 255
        }).call(() => {
          completeCallback();
        }).start();
      }
      static closeFade(node, completeCallback) {
        cc.tween(node).to(FADE_TIME, {
          opacity: 0
        }).call(() => {
          completeCallback();
        }).start();
      }
      static playOpen(node, style, completeCallback) {
        switch (style) {
         case ViewStyleDefine_1.default.FADE:
          this.openFade(node, completeCallback);
          break;

         case ViewStyleDefine_1.default.SCALE:
          this.openScale(node, completeCallback);
          break;

         case ViewStyleDefine_1.default.LEFT_RIGHT:
         case ViewStyleDefine_1.default.RIGHT_LEFT:
         case ViewStyleDefine_1.default.BOTTOM_TOP:
         case ViewStyleDefine_1.default.TOP_BOTTOM:
          break;

         default:
          Logger_1.default.getInstance().warn(`\u89c6\u56fe\u5173\u95ed\u52a8\u753b ${ViewStyleDefine_1.default[ViewStyleDefine_1.default[style]]} \u98ce\u683c\u4e0d\u5b58\u5728`);
        }
      }
      static playClose(node, style, completeCallback) {
        switch (style) {
         case ViewStyleDefine_1.default.FADE:
          this.closeFade(node, completeCallback);
          break;

         case ViewStyleDefine_1.default.SCALE:
          this.closeScale(node, completeCallback);
          break;

         case ViewStyleDefine_1.default.LEFT_RIGHT:
         case ViewStyleDefine_1.default.RIGHT_LEFT:
         case ViewStyleDefine_1.default.BOTTOM_TOP:
         case ViewStyleDefine_1.default.TOP_BOTTOM:
          break;

         default:
          Logger_1.default.getInstance().warn(`\u89c6\u56fe\u6253\u5f00\u52a8\u753b ${ViewStyleDefine_1.default[ViewStyleDefine_1.default[style]]} \u98ce\u683c\u4e0d\u5b58\u5728`);
        }
      }
    }
    exports.default = TweenUtil;
    cc._RF.pop();
  }, {
    "../core/machine/Logger": "Logger",
    "../define/ViewStyleDefine": "ViewStyleDefine"
  } ],
  UIBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "518bfCuecZLTrjtnUyLWYbh", "UIBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    class UIBase extends cc.Component {
      constructor() {
        super();
        this.data = null;
      }
      update(dt) {}
      lateUpdate() {}
      onLoad() {}
      start() {}
      onEnable() {}
      onDisable() {}
      onDestroy() {}
      onFocusInEditor() {}
      onLostFocusInEditor() {}
      resetInEditor() {}
      show() {
        this.node.active = true;
      }
      hide() {
        this.node.active = false;
      }
    }
    exports.default = UIBase;
    cc._RF.pop();
  }, {} ],
  UIInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94aabdbwmpD37Lko+6MuqJT", "UIInterface");
    cc._RF.pop();
  }, {} ],
  UIManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3fc51SUF5lBj4clRkG2z2y5", "UIManager");
    "use strict";
    var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
          return m[k];
        }
      });
    } : function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      o[k2] = m[k];
    });
    var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
      });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = this && this.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const Manager_1 = __importDefault(require("../Manager"));
    const Logger_1 = __importDefault(require("../../machine/Logger"));
    const ViewDefine = __importStar(require("../../../define/ViewDefine"));
    const ViewLayerDefine_1 = __importDefault(require("../../../define/ViewLayerDefine"));
    const ViewLayerDefine_2 = require("../../../define/ViewLayerDefine");
    const TweenUtil_1 = __importDefault(require("../../../utils/TweenUtil"));
    const Loader_1 = __importDefault(require("../../machine/Loader"));
    const Util_1 = __importDefault(require("../../../utils/Util"));
    const PRELOAD_SCENE_WAITIMG_TIME = 1;
    let UIManager = (() => {
      class UIManager extends Manager_1.default {
        constructor() {
          super();
          this.m_viewMap = null;
          this.m_viewMap = new Map();
        }
        static getInstance() {
          null === this.s_instance && (this.s_instance = new UIManager());
          return this.s_instance;
        }
        static destroy() {
          null !== this.s_instance && this.s_instance.destroy();
          this.s_instance = null;
        }
        getLayerChild(layer) {
          let views = [];
          this.m_viewMap.forEach((value, key, map) => {
            let layerDiff = value.zIndex - layer;
            let isLayerInView = layerDiff >= 0 && layerDiff < ViewLayerDefine_2.ORDER_INTERVAL;
            isLayerInView && views.push(value);
          });
          views.sort((a, b) => a.zIndex < b.zIndex ? -1 : 1);
          return views;
        }
        getLayerByOrder(order) {
          return Math.floor(order / ViewLayerDefine_2.ORDER_INTERVAL) * ViewLayerDefine_2.ORDER_INTERVAL;
        }
        getLayerTopOrder(layer) {
          null !== layer && void 0 !== layer || (layer = ViewLayerDefine_1.default.UI);
          let order = layer;
          let views = this.getLayerChild(layer);
          let size = views.length;
          if (size <= 0) return order;
          if (views.length > ViewLayerDefine_2.ORDER_INTERVAL) {
            Logger_1.default.getInstance().warn(`${ViewLayerDefine_1.default[ViewLayerDefine_1.default[layer]]} \u5c42\u5bb9\u91cf\u4e0d\u8db3\uff0c\u8d85\u8fc7\u4e86\u539f\u672c\u8bbe\u5b9a\u7684 ${ViewLayerDefine_2.ORDER_INTERVAL} \u4e2a`);
            return ViewLayerDefine_2.ORDER_INTERVAL - 1;
          }
          return views[size - 1].zIndex + 1;
        }
        resetLayerOrder(layer) {
          let order = layer;
          let views = this.getLayerChild(layer);
          if (views.length <= 0) return order;
          if (views.length > ViewLayerDefine_2.ORDER_INTERVAL) {
            Logger_1.default.getInstance().warn(`${ViewLayerDefine_1.default[ViewLayerDefine_1.default[layer]]} \u5c42\u5bb9\u91cf\u4e0d\u8db3\uff0c\u8d85\u8fc7\u4e86\u539f\u672c\u8bbe\u5b9a\u7684 ${ViewLayerDefine_2.ORDER_INTERVAL} \u4e2a`);
            return ViewLayerDefine_2.ORDER_INTERVAL - 1;
          }
          for (let i = 0; i < views.length; ++i) views[i].zIndex = order++;
          return order;
        }
        checkOrderBounds(layer, order) {
          return order - layer >= ViewLayerDefine_2.ORDER_INTERVAL;
        }
        getRootNode() {
          let rootNode = cc.director.getScene().getChildByName("Canvas");
          return rootNode;
        }
        isPersistPath(path) {
          let is = false;
          for (let value in ViewDefine.PersistViewDefine) if (ViewDefine.PersistViewDefine[value] === path) {
            is = true;
            break;
          }
          return is;
        }
        setPersistView(viewPath, viewNode) {
          let script = viewNode.getComponent(viewNode.name);
          script && script.path && (script.path = viewPath);
          this.m_viewMap.set(viewPath, viewNode);
        }
        loadView(path) {
          return __awaiter(this, void 0, void 0, function*() {
            return new Promise((resolve, reject) => {
              let preloadTimer = null;
              let startPreloadTimer = () => {
                null !== preloadTimer && void 0 !== preloadTimer || (preloadTimer = setTimeout(() => {
                  this.openProgress();
                }, 1e3 * PRELOAD_SCENE_WAITIMG_TIME));
              };
              let stopPreloadTimer = () => {
                if (null !== preloadTimer && void 0 !== preloadTimer) {
                  this.closeProgress();
                  clearTimeout(preloadTimer);
                  preloadTimer = null;
                }
              };
              startPreloadTimer();
              let view = this.m_viewMap.get(path);
              if (view) {
                stopPreloadTimer();
                resolve(view);
              } else Loader_1.default.getInstance().load(path, prefab => {
                if (prefab) {
                  view = cc.instantiate(prefab);
                  this.m_viewMap.set(path, view);
                  stopPreloadTimer();
                  resolve(view);
                } else {
                  stopPreloadTimer();
                  reject();
                }
              }, percent => {
                this.setProgress(percent);
              });
            });
          });
        }
        openLoading(content) {
          let loadingView = this.m_viewMap.get(ViewDefine.PersistViewDefine.LoadingView);
          if (loadingView) {
            let script = loadingView.getComponent("LoadingView");
            script.open(content);
          } else Logger_1.default.getInstance().warn("LoadingView \u5e38\u9a7b\u89c6\u56fe\u672a\u52a0\u8f7d");
        }
        closeLoading() {
          let loadingView = this.m_viewMap.get(ViewDefine.PersistViewDefine.LoadingView);
          if (loadingView) {
            let script = loadingView.getComponent("LoadingView");
            script.close();
          } else Logger_1.default.getInstance().warn("LoadingView \u5e38\u9a7b\u89c6\u56fe\u672a\u52a0\u8f7d");
        }
        openProgress() {
          let progressView = this.m_viewMap.get(ViewDefine.PersistViewDefine.ProgressView);
          if (progressView) {
            let script = progressView.getComponent("ProgressView");
            script.open();
          } else Logger_1.default.getInstance().warn("ProgressView \u5e38\u9a7b\u89c6\u56fe\u672a\u52a0\u8f7d");
        }
        setProgress(percent) {
          let progressView = this.m_viewMap.get(ViewDefine.PersistViewDefine.ProgressView);
          if (progressView) {
            let script = progressView.getComponent("ProgressView");
            script.setPercent(percent);
          } else Logger_1.default.getInstance().warn("ProgressView \u5e38\u9a7b\u89c6\u56fe\u672a\u52a0\u8f7d");
        }
        closeProgress() {
          let progressView = this.m_viewMap.get(ViewDefine.PersistViewDefine.ProgressView);
          if (progressView) {
            let script = progressView.getComponent("ProgressView");
            script.close();
          } else Logger_1.default.getInstance().warn("ProgressView \u5e38\u9a7b\u89c6\u56fe\u672a\u52a0\u8f7d");
        }
        openLockTouch() {
          let lockTouchView = this.m_viewMap.get(ViewDefine.PersistViewDefine.LockTouchView);
          if (lockTouchView) {
            let script = lockTouchView.getComponent("LockTouchView");
            script.open();
          } else Logger_1.default.getInstance().warn("LockTouchView \u5e38\u9a7b\u89c6\u56fe\u672a\u52a0\u8f7d");
        }
        closeLockTouch() {
          let lockTouchView = this.m_viewMap.get(ViewDefine.PersistViewDefine.LockTouchView);
          if (lockTouchView) {
            let script = lockTouchView.getComponent("LockTouchView");
            script.close();
          } else Logger_1.default.getInstance().warn("LockTouchView \u5e38\u9a7b\u89c6\u56fe\u672a\u52a0\u8f7d");
        }
        openPopups(content, title, parent, confirmCallback, cancelCallback) {
          this.openLockTouch();
          Loader_1.default.getInstance().load(ViewDefine.CommonViewDefine.PopupsView, prefab => {
            if (null === prefab) Logger_1.default.getInstance().warn("\u6253\u5f00\u5f39\u7a97\u754c\u9762\u5931\u8d25"); else {
              let layer = null;
              if (void 0 === parent || null === parent) {
                parent = this.getRootNode();
                layer = ViewLayerDefine_1.default.POPUP;
              } else layer = this.getLayerByOrder(parent.zIndex);
              let node = cc.instantiate(prefab);
              node.zIndex = this.getLayerTopOrder(layer);
              node.parent = parent;
              let script = node.getComponent("PopupsView");
              script.open(content, title, confirmCallback, cancelCallback);
            }
            this.closeLockTouch();
          });
        }
        openTips(content) {
          Loader_1.default.getInstance().load(ViewDefine.CommonViewDefine.TipsView, prefab => {
            if (null === prefab) Logger_1.default.getInstance().warn("\u6253\u5f00\u74e2\u5b57\u63d0\u793a\u754c\u9762\u5931\u8d25"); else {
              let node = cc.instantiate(prefab);
              node.zIndex = this.getLayerTopOrder(ViewLayerDefine_1.default.TOP);
              node.parent = this.getRootNode();
              let script = node.getComponent("TipsView");
              script.open(content);
            }
          });
        }
        openNumKeyboard(inputBox, decimal, parent) {}
        closeNumKeyboard() {}
        openRollNotice(content) {}
        replaceScene(name, data, completeCallback, progressCallback) {
          cc.director.preloadScene(name, (completedCount, totalCount, item) => {
            progressCallback && progressCallback(Util_1.default.toFixed(completedCount / totalCount * 100));
          }, error => {
            if (error) {
              Logger_1.default.getInstance().warn(`\u9884\u52a0\u8f7d ${name} \u573a\u666f\u5931\u8d25`, error);
              completeCallback && completeCallback(error, null);
            } else cc.director.loadScene(name, (error, scene) => {
              if (error) Logger_1.default.getInstance().warn(`\u5207\u6362 ${name} \u573a\u666f\u5931\u8d25`, error); else if (void 0 !== data && null !== data) {
                let script = scene.getChildByName("Canvas").getComponent(scene.name);
                script ? script.data = data : Logger_1.default.getInstance().warn(`${name} \u573a\u666f\u672a\u6302\u8f7d ${name} \u811a\u672c`);
              }
              completeCallback && completeCallback(error, scene);
            });
          });
        }
        openScene(name, data, completeCallback, progressCallback, preload) {
          this.openLockTouch();
          let preloadTimer = setTimeout(() => {
            this.openProgress();
          }, 1e3 * PRELOAD_SCENE_WAITIMG_TIME);
          let preloadTotal = 0;
          null !== preload && void 0 !== preload && (preloadTotal = preload instanceof Array ? preload.length : 1);
          let done = (error, scene) => {
            if (null !== preloadTimer && void 0 !== preloadTimer) {
              clearTimeout(preloadTimer);
              preloadTimer = null;
              this.closeProgress();
            }
            completeCallback && completeCallback(error, scene);
            this.closeLockTouch();
            Logger_1.default.getInstance().log(`\u573a\u666f ${name} \u5207\u6362\u6210\u529f`);
          };
          Loader_1.default.getInstance().releaseAll(() => {
            if (preloadTotal > 0) {
              let firstHalfPercent = 0;
              let lastHalfPercent = 0;
              Loader_1.default.getInstance().preload(preload, items => {
                this.replaceScene(name, data, (error, scene) => {
                  done(error, scene);
                }, percent => {
                  lastHalfPercent = Util_1.default.toFixed(firstHalfPercent + percent / 100 * (100 - firstHalfPercent));
                  this.setProgress(lastHalfPercent);
                  progressCallback && progressCallback(lastHalfPercent);
                });
              }, percent => {
                firstHalfPercent = Util_1.default.toFixed(100 / (preloadTotal + 1) * preloadTotal * percent / 100);
                this.setProgress(firstHalfPercent);
                progressCallback && progressCallback(firstHalfPercent);
              });
            } else this.replaceScene(name, data, (error, scene) => {
              done(error, scene);
            }, percent => {
              this.setProgress(percent);
              progressCallback && progressCallback(percent);
            });
          });
        }
        getView(path) {
          let view = this.m_viewMap.get(path);
          view || (view = null);
          return view;
        }
        openView(path, data, completeCallback, layer, style) {
          this.openLockTouch();
          let isPersist = this.isPersistPath(path);
          if (isPersist) {
            Logger_1.default.getInstance().warn("\u65e0\u6cd5\u4f7f\u7528 openView \u6253\u5f00\u5e38\u9a7b\u89c6\u56fe");
            this.closeLockTouch();
            return;
          }
          this.loadView(path).then(view => {
            if (null === view.parent || void 0 === view.parent) {
              let rootNode = this.getRootNode();
              if (null === rootNode || void 0 === rootNode) {
                Logger_1.default.getInstance().warn(`${cc.director.getScene()} \u573a\u666f\u6839\u8282\u70b9\uff0c\u8981\u6c42\u547d\u540d\u4e3a Canvas`);
                return;
              }
              view.parent = rootNode;
            }
            let script = view.getComponent(view.name);
            if (script) {
              script.path = path;
              null !== data && void 0 !== data && (script.data = data);
            }
            let topOrder = this.getLayerTopOrder(layer);
            this.checkOrderBounds(ViewLayerDefine_1.default.SYSTEM, topOrder) && (topOrder = this.resetLayerOrder(ViewLayerDefine_1.default.SYSTEM));
            view.zIndex = topOrder;
            if (null !== style && void 0 !== style) {
              view.active = false;
              TweenUtil_1.default.playOpen(view, style, () => {
                this.closeLockTouch();
                completeCallback && completeCallback(view);
              });
            } else {
              this.closeLockTouch();
              completeCallback && completeCallback(view);
            }
          }).catch(() => {
            Logger_1.default.getInstance().warn(`\u52a0\u8f7d ${path} \u89c6\u56fe\u5931\u8d25`);
            this.closeLockTouch();
          });
        }
        closeView(path, completeCallback, style) {
          this.openLockTouch();
          let view = this.m_viewMap.get(path);
          let done = () => {
            view.destroy();
            view = null;
            completeCallback && completeCallback();
            this.m_viewMap.delete(path);
            this.closeLockTouch();
          };
          view && (null !== style && void 0 !== style ? TweenUtil_1.default.playClose(view, style, () => {
            done();
          }) : done());
        }
        showView(path, completeCallback, isAbove) {
          let view = this.m_viewMap.get(path);
          if (view && view.isValid) {
            if (isAbove) {
              let layer = this.getLayerByOrder(view.zIndex);
              let topOrder = this.getLayerTopOrder(layer);
              this.checkOrderBounds(layer, topOrder) && (topOrder = this.resetLayerOrder(layer));
              view.zIndex = topOrder;
            }
            view.active = true;
          }
          completeCallback && completeCallback();
        }
        hideView(path, completeCallback) {
          let view = this.m_viewMap.get(path);
          view && view.isValid && (view.active = false);
          completeCallback && completeCallback();
        }
        destroy() {
          this.m_viewMap.forEach((value, key) => {
            value.isValid && value.destroy();
            Loader_1.default.getInstance().release(key);
          });
          this.m_viewMap.clear();
        }
      }
      UIManager.s_instance = null;
      return UIManager;
    })();
    exports.default = UIManager;
    cc._RF.pop();
  }, {
    "../../../define/ViewDefine": "ViewDefine",
    "../../../define/ViewLayerDefine": "ViewLayerDefine",
    "../../../utils/TweenUtil": "TweenUtil",
    "../../../utils/Util": "Util",
    "../../machine/Loader": "Loader",
    "../../machine/Logger": "Logger",
    "../Manager": "Manager"
  } ],
  UpdateConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32725z9l1hMrLQq1vnxdYoc", "UpdateConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WIN32_MANIFEST_IN_APP_PATH = exports.IOS_IPA_URL = exports.ANDROID_APK_URL = exports.GOOGLE_PLAY_STORE_URL = exports.APP_STORE_URL = void 0;
    exports.APP_STORE_URL = "https://www.appstore.com/";
    exports.GOOGLE_PLAY_STORE_URL = "https://www.google.com/";
    exports.ANDROID_APK_URL = "https://static.sswanv.com:8443/app/android/ougato.apk";
    exports.IOS_IPA_URL = "http://www.baidu.com/app.ipa";
    exports.WIN32_MANIFEST_IN_APP_PATH = "D:\\public-desktop\\client242\\build\\jsb-default\\assets\\project.manifest";
    cc._RF.pop();
  }, {} ],
  UpdateDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8563eeJJFO0pFIc+XfBqhT", "UpdateDefine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UpdateState = exports.CheckState = exports.ErrorState = exports.VersionNumber = void 0;
    var VersionNumber;
    (function(VersionNumber) {
      VersionNumber[VersionNumber["X"] = 0] = "X";
      VersionNumber[VersionNumber["Y"] = 1] = "Y";
      VersionNumber[VersionNumber["Z"] = 2] = "Z";
    })(VersionNumber = exports.VersionNumber || (exports.VersionNumber = {}));
    var ErrorState;
    (function(ErrorState) {
      ErrorState[ErrorState["LOAD_LOCAL_MANIFEST"] = 0] = "LOAD_LOCAL_MANIFEST";
      ErrorState[ErrorState["DOWNLOAD_MANIFEST"] = 1] = "DOWNLOAD_MANIFEST";
      ErrorState[ErrorState["PARSE_MANIFEST"] = 2] = "PARSE_MANIFEST";
      ErrorState[ErrorState["DECOMPRESS_FILE"] = 3] = "DECOMPRESS_FILE";
      ErrorState[ErrorState["DOWNLOAD_FILE"] = 4] = "DOWNLOAD_FILE";
      ErrorState[ErrorState["VERIFY_FILE"] = 5] = "VERIFY_FILE";
      ErrorState[ErrorState["RETRY"] = 6] = "RETRY";
    })(ErrorState = exports.ErrorState || (exports.ErrorState = {}));
    var CheckState;
    (function(CheckState) {
      CheckState[CheckState["NOT"] = 0] = "NOT";
      CheckState[CheckState["QUIET"] = 1] = "QUIET";
      CheckState[CheckState["PROMPT"] = 2] = "PROMPT";
      CheckState[CheckState["URL"] = 3] = "URL";
      CheckState[CheckState["STORE"] = 4] = "STORE";
    })(CheckState = exports.CheckState || (exports.CheckState = {}));
    var UpdateState;
    (function(UpdateState) {
      UpdateState[UpdateState["UPDATE_FINISH"] = 0] = "UPDATE_FINISH";
      UpdateState[UpdateState["ALREADY_NEW"] = 1] = "ALREADY_NEW";
      UpdateState[UpdateState["AGENT"] = 2] = "AGENT";
    })(UpdateState = exports.UpdateState || (exports.UpdateState = {}));
    cc._RF.pop();
  }, {} ],
  UpdateInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f9b9kA/klLZL6lHS92+4lo", "UpdateInterface");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  UpdateManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b60bnq+F9OgYf8Jb9vo0A4", "UpdateManager");
    "use strict";
    var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
          return m[k];
        }
      });
    } : function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      o[k2] = m[k];
    });
    var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
      });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = this && this.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const UpdateDefine = __importStar(require("../../../define/UpdateDefine"));
    const UpdateConfig = __importStar(require("../../../config/UpdateConfig"));
    const Manager_1 = __importDefault(require("../Manager"));
    const Logger_1 = __importDefault(require("../../machine/Logger"));
    const CodeUtil_1 = __importDefault(require("../../../utils/CodeUtil"));
    const LocalStorageDefine_1 = __importDefault(require("../../../define/LocalStorageDefine"));
    const Util_1 = __importDefault(require("../../../utils/Util"));
    const EventManager_1 = __importDefault(require("../event/EventManager"));
    const EventDefine_1 = __importDefault(require("../../../define/EventDefine"));
    const NATIVE_UPDATE_ASSETS_FOLDER = "hot-update";
    const TEXT_FILE_SUFFIX = [ "json" ];
    const MAX_FAILED_FILE_COUNT = 3;
    const PROJECT_MANIFEST_FILENAME = "project.manifest";
    let UpdateManager = (() => {
      class UpdateManager extends Manager_1.default {
        constructor() {
          super();
          this.m_jsbAssetsManager = null;
          this.m_diffVersionNum = null;
          this.m_failedFiles = null;
          this.m_errorState = null;
          this.m_percent = null;
          this.initData();
        }
        static getInstance() {
          null === this.s_instance && (this.s_instance = new UpdateManager());
          return this.s_instance;
        }
        static destroy() {
          null !== this.s_instance && this.s_instance.destroy();
          this.s_instance = null;
        }
        initData() {
          this.m_diffVersionNum = null;
          this.m_failedFiles = [];
          this.m_errorState = null;
          this.m_percent = 0;
        }
        check() {
          return __awaiter(this, void 0, void 0, function*() {
            if (!cc.sys.isNative) return {
              state: UpdateDefine.CheckState.NOT
            };
            return new Promise(resolve => {
              if (null === this.m_jsbAssetsManager) {
                this.m_jsbAssetsManager = jsb.AssetsManager.create(this.getLocalManifestPath(), this.getUpdateSearchPath());
                this.m_jsbAssetsManager.setVersionCompareHandle(this.onVersionCompare.bind(this));
                this.m_jsbAssetsManager.setVerifyCallback(this.onVerifyMD5.bind(this));
              }
              let jsbState = this.m_jsbAssetsManager.getState();
              jsbState >= jsb.AssetsManager.State.PREDOWNLOAD_VERSION && jsbState !== jsb.AssetsManager.State.FAIL_TO_UPDATE && Logger_1.default.getInstance().warn("\u5df2\u68c0\u6d4b\u8fc7\u7248\u672c\uff0c\u8bf7\u4e0d\u8981\u91cd\u590d\u68c0\u6d4b\u66f4\u65b0\u6570\u636e");
              if (!this.m_jsbAssetsManager.getLocalManifest() || !this.m_jsbAssetsManager.getLocalManifest().isLoaded()) {
                Logger_1.default.getInstance().warn("\u52a0\u8f7d\u672c\u5730 manifest \u5931\u8d25");
                return resolve({
                  error: UpdateDefine.ErrorState.LOAD_LOCAL_MANIFEST
                });
              }
              Logger_1.default.getInstance().log("\u6b63\u5728\u68c0\u6d4b\u8d44\u6e90\u66f4\u65b0");
              let checkState = null;
              let failedState = null;
              this.m_jsbAssetsManager.setEventCallback(event => {
                switch (event.getEventCode()) {
                 case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                  Logger_1.default.getInstance().warn("\u52a0\u8f7d\u672c\u5730\u6587\u4ef6 Manifest \u5931\u8d25");
                  failedState = UpdateDefine.ErrorState.LOAD_LOCAL_MANIFEST;
                  break;

                 case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                  Logger_1.default.getInstance().warn("\u4e0b\u8f7d\u8fdc\u7a0b Manifest \u5931\u8d25");
                  Logger_1.default.getInstance().warn(event.getAssetsManagerEx().getLocalManifest().getManifestFileUrl());
                  failedState = UpdateDefine.ErrorState.DOWNLOAD_MANIFEST;
                  break;

                 case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                  Logger_1.default.getInstance().warn("\u89e3\u6790\u8fdc\u7a0b Manifest \u5931\u8d25");
                  failedState = UpdateDefine.ErrorState.PARSE_MANIFEST;
                  break;

                 case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                  Logger_1.default.getInstance().log("\u5df2\u662f\u6700\u65b0\u7248\u672c");
                  checkState = UpdateDefine.CheckState.NOT;
                  break;

                 case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                  Logger_1.default.getInstance().log("\u53d1\u73b0\u65b0\u7248\u672c\u66f4\u65b0");
                  switch (this.m_diffVersionNum) {
                   case UpdateDefine.VersionNumber.X:
                    checkState = UpdateDefine.CheckState.URL;
                    break;

                   case UpdateDefine.VersionNumber.Y:
                   case UpdateDefine.VersionNumber.Z:
                    checkState = UpdateDefine.CheckState.QUIET;
                    cc.sys.getNetworkType() === cc.sys.NetworkType.WWAN && (checkState = UpdateDefine.CheckState.PROMPT);
                    break;

                   default:
                    Logger_1.default.getInstance().warn("\u7248\u672c\u53f7\u9519\u8bef");
                  }
                }
                if (null !== checkState) {
                  this.m_jsbAssetsManager.setEventCallback(null);
                  return resolve({
                    state: checkState,
                    downloadBytes: event.getTotalBytes()
                  });
                }
                if (null !== failedState) {
                  this.m_jsbAssetsManager.setEventCallback(null);
                  this.m_errorState = failedState;
                  return resolve({
                    error: failedState
                  });
                }
              });
              this.m_jsbAssetsManager.checkUpdate();
            });
          });
        }
        update() {
          return __awaiter(this, void 0, void 0, function*() {
            return new Promise(resolve => {
              let jsbState = this.m_jsbAssetsManager.getState();
              jsbState > jsb.AssetsManager.State.READY_TO_UPDATE && jsbState !== jsb.AssetsManager.State.FAIL_TO_UPDATE && Logger_1.default.getInstance().warn("\u6b63\u5728\u66f4\u65b0\u6700\u65b0\u8d44\u6e90\uff0c\u8bf7\u4e0d\u8981\u91cd\u590d\u6267\u884c\u66f4\u65b0");
              Logger_1.default.getInstance().log("\u6b63\u5728\u66f4\u65b0\u6700\u65b0\u8d44\u6e90");
              let failedCount = 0;
              let finishState = null;
              let failedState = null;
              let percent = this.m_percent;
              this.m_jsbAssetsManager.setEventCallback(event => {
                let eventCode = event.getEventCode();
                switch (eventCode) {
                 case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                  Logger_1.default.getInstance().warn("\u52a0\u8f7d\u672c\u5730\u6587\u4ef6 Manifest \u5931\u8d25");
                  failedState = UpdateDefine.ErrorState.LOAD_LOCAL_MANIFEST;
                  break;

                 case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                  Logger_1.default.getInstance().warn("\u4e0b\u8f7d\u8fdc\u7a0b Manifest \u5931\u8d25");
                  failedState = UpdateDefine.ErrorState.DOWNLOAD_MANIFEST;
                  break;

                 case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                  Logger_1.default.getInstance().warn("\u89e3\u6790\u8fdc\u7a0b Manifest \u5931\u8d25");
                  failedState = UpdateDefine.ErrorState.PARSE_MANIFEST;
                  break;

                 case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                  Logger_1.default.getInstance().log(`\u89e3\u538b\u6587\u4ef6\u5931\u8d25\uff1a${event.getAssetId()}`);
                  this.m_failedFiles.push(event.getAssetId());
                  failedCount++ >= MAX_FAILED_FILE_COUNT && (failedState = UpdateDefine.ErrorState.DECOMPRESS_FILE);
                  break;

                 case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                  break;

                 case jsb.EventAssetsManager.ASSET_UPDATED:
                  percent = Util_1.default.toFixed(100 * event.getPercentByFile());
                  Logger_1.default.getInstance().log(`\u6587\u4ef6\u5b8c\u6210\uff1a${event.getAssetId()} \uff08${percent}%\uff09`);
                  break;

                 case jsb.EventAssetsManager.ERROR_UPDATING:
                  Logger_1.default.getInstance().warn(`\u4e0b\u8f7d\u6587\u4ef6\u5931\u8d25\uff1a${event.getAssetId()}`);
                  this.m_failedFiles.push(event.getAssetId());
                  ++failedCount >= MAX_FAILED_FILE_COUNT && (failedState = UpdateDefine.ErrorState.DOWNLOAD_FILE);
                  break;

                 case jsb.EventAssetsManager.UPDATE_FAILED:
                  Logger_1.default.getInstance().log(`\u6587\u4ef6\u6821\u9a8c\u5931\u8d25\uff1a${event.getAssetId()}`);
                  this.m_failedFiles.push(event.getAssetId());
                  ++failedCount >= MAX_FAILED_FILE_COUNT && (failedState = UpdateDefine.ErrorState.VERIFY_FILE);
                  break;

                 case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                  Logger_1.default.getInstance().log("\u5df2\u662f\u6700\u65b0\u7248\u672c");
                  finishState = UpdateDefine.UpdateState.ALREADY_NEW;
                  break;

                 case jsb.EventAssetsManager.UPDATE_FINISHED:
                  Logger_1.default.getInstance().log("\u66f4\u65b0\u5b8c\u6210\uff0c\u81ea\u52a8\u91cd\u542f\u5ba2\u6237\u7aef");
                  this.resetSearchPath();
                  percent = 100;
                  finishState = UpdateDefine.UpdateState.UPDATE_FINISH;
                  break;

                 default:
                  Logger_1.default.getInstance().warn(`\u70ed\u66f4\u65b0\u4e2d\u672a\u6355\u83b7\u7684\u4e8b\u4ef6 ${eventCode}`);
                }
                if (this.m_percent < percent) {
                  this.m_percent = percent;
                  EventManager_1.default.getInstance().emit(EventDefine_1.default.UPDATE_PROGRESS, this.m_percent);
                }
                if (null !== finishState) {
                  this.m_jsbAssetsManager.setEventCallback(null);
                  this.initData();
                  resolve({
                    state: finishState
                  });
                }
                if (null !== failedState) {
                  this.m_jsbAssetsManager.setEventCallback(null);
                  this.initData();
                  this.m_errorState = failedState;
                  resolve({
                    error: failedState
                  });
                }
              });
              this.m_jsbAssetsManager.update();
            });
          });
        }
        retry() {
          return __awaiter(this, void 0, void 0, function*() {
            return new Promise(resolve => {
              this.m_jsbAssetsManager.getState() !== jsb.AssetsManager.State.FAIL_TO_UPDATE && Logger_1.default.getInstance().warn("\u65e0\u6cd5\u6267\u884c\u70ed\u66f4\u91cd\u8bd5\uff0c\u8981\u6c42\u5728\u5931\u8d25\u72b6\u6001\u4e0b\u624d\u80fd\u6267\u884c");
              Logger_1.default.getInstance().log("\u6b63\u5728\u91cd\u8bd5\u66f4\u65b0\u8d44\u6e90");
              switch (this.m_errorState) {
               case UpdateDefine.ErrorState.LOAD_LOCAL_MANIFEST:
                this.cleanUpdateDir();
                resolve({
                  state: UpdateDefine.UpdateState.AGENT
                });
                break;

               case UpdateDefine.ErrorState.DOWNLOAD_MANIFEST:
               case UpdateDefine.ErrorState.PARSE_MANIFEST:
                resolve({
                  state: UpdateDefine.UpdateState.AGENT
                });
                break;

               case UpdateDefine.ErrorState.DECOMPRESS_FILE:
               case UpdateDefine.ErrorState.DOWNLOAD_FILE:
               case UpdateDefine.ErrorState.VERIFY_FILE:
                this.m_jsbAssetsManager.setEventCallback(event => {
                  let percent = 0;
                  let failedState = null;
                  let finishState = null;
                  switch (event.getEventCode()) {
                   case jsb.EventAssetsManager.ASSET_UPDATED:
                    percent = Util_1.default.toFixed(100 * event.getPercentByFile());
                    Logger_1.default.getInstance().log(`\u6587\u4ef6\u5b8c\u6210\uff1a${event.getAssetId()} \uff08${percent}%\uff09`);
                    break;

                   case jsb.EventAssetsManager.ERROR_UPDATING:
                    Logger_1.default.getInstance().warn(`\u4e0b\u8f7d\u6587\u4ef6\u5931\u8d25\uff1a${event.getAssetId()}`);
                    this.m_failedFiles.push(event.getAssetId());
                    failedState = UpdateDefine.ErrorState.DOWNLOAD_FILE;
                    break;

                   case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                    Logger_1.default.getInstance().log(`\u89e3\u538b\u6587\u4ef6\u5931\u8d25\uff1a${event.getAssetId()}`);
                    this.m_failedFiles.push(event.getAssetId());
                    failedState = UpdateDefine.ErrorState.DECOMPRESS_FILE;

                   case jsb.EventAssetsManager.UPDATE_FAILED:
                    Logger_1.default.getInstance().log(`\u6587\u4ef6\u6821\u9a8c\u5931\u8d25\uff1a${event.getAssetId()}`);
                    this.m_failedFiles.push(event.getAssetId());
                    failedState = UpdateDefine.ErrorState.VERIFY_FILE;
                    break;

                   case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                    Logger_1.default.getInstance().log("\u5df2\u662f\u6700\u65b0\u7248\u672c");
                    finishState = UpdateDefine.UpdateState.ALREADY_NEW;
                    break;

                   case jsb.EventAssetsManager.UPDATE_FINISHED:
                    Logger_1.default.getInstance().log("\u66f4\u65b0\u5b8c\u6210\uff0c\u81ea\u52a8\u91cd\u542f\u5ba2\u6237\u7aef");
                    this.resetSearchPath();
                    percent = 100;
                  }
                  if (this.m_percent < percent) {
                    this.m_percent = percent;
                    EventManager_1.default.getInstance().emit(EventDefine_1.default.UPDATE_PROGRESS, this.m_percent);
                  }
                  if (null !== finishState && void 0 !== finishState) {
                    this.m_jsbAssetsManager.setEventCallback(null);
                    this.initData();
                    resolve({
                      state: finishState
                    });
                  }
                  if (null !== failedState && void 0 !== failedState) {
                    this.m_jsbAssetsManager.setEventCallback(null);
                    this.initData();
                    this.m_errorState = failedState;
                    resolve({
                      error: failedState
                    });
                  }
                });
                this.m_jsbAssetsManager.downloadFailedAssets();
              }
            });
          });
        }
        getAppURL() {
          let appURL = "";
          switch (cc.sys.os) {
           case cc.sys.OS_ANDROID:
            appURL = UpdateConfig.ANDROID_APK_URL;
            break;

           case cc.sys.OS_IOS:
            appURL = UpdateConfig.IOS_IPA_URL;
            break;

           default:
            Logger_1.default.getInstance().warn(`\u5f53\u524d\u5e73\u53f0 ${cc.sys.os} \u672a\u5b9a\u4e49\u6574\u5305\u4e0b\u8f7d\u94fe\u63a5`);
          }
          return appURL;
        }
        getAppStoreURL() {
          let appStoreURL = "";
          switch (cc.sys.os) {
           case cc.sys.OS_ANDROID:
            appStoreURL = UpdateConfig.GOOGLE_PLAY_STORE_URL;
            break;

           case cc.sys.OS_IOS:
            appStoreURL = UpdateConfig.APP_STORE_URL;
            break;

           default:
            Logger_1.default.getInstance().warn(`\u5f53\u524d\u5e73\u53f0 ${cc.sys.os} \u672a\u5b9a\u4e49\u6574\u5305\u4e0b\u8f7d\u94fe\u63a5`);
          }
          return appStoreURL;
        }
        cleanUpdateDir() {
          return this.removeUpdateTempDir() && this.removeUpdateSearchDir();
        }
        removeUpdateSearchDir() {
          let succeed = false;
          let updateSearchPath = this.getUpdateSearchPath();
          jsb.fileUtils.isDirectoryExist(updateSearchPath) && (succeed = jsb.fileUtils.removeDirectory(updateSearchPath));
          return succeed;
        }
        removeUpdateTempDir() {
          let succeed = false;
          let updateTempPath = this.getUpdateTempPath();
          jsb.fileUtils.isDirectoryExist(updateTempPath) && (succeed = jsb.fileUtils.removeDirectory(updateTempPath));
          return succeed;
        }
        getUpdateTempPath() {
          let searchTempPath = "";
          switch (cc.sys.os) {
           case cc.sys.OS_WINDOWS:
           case cc.sys.OS_IOS:
           case cc.sys.OS_ANDROID:
            searchTempPath = this.getAssetsWritePath() + NATIVE_UPDATE_ASSETS_FOLDER + "_temp";
            break;

           case cc.sys.OS_OSX:
            break;

           default:
            Logger_1.default.getInstance().warn("\u7cfb\u7edf\u4e0d\u652f\u6301\u83b7\u53d6\u672c\u5730 manifest \u6587\u4ef6\u8def\u5f84");
          }
          return searchTempPath;
        }
        getUpdateSearchPath() {
          return this.getAssetsWritePath() + NATIVE_UPDATE_ASSETS_FOLDER;
        }
        getManifestPathInSearch() {
          let manifestPath = "";
          switch (cc.sys.os) {
           case cc.sys.OS_WINDOWS:
            manifestPath = this.getAssetsWritePath() + NATIVE_UPDATE_ASSETS_FOLDER + "\\" + PROJECT_MANIFEST_FILENAME;
            break;

           case cc.sys.OS_OSX:
            break;

           case cc.sys.OS_IOS:
           case cc.sys.OS_ANDROID:
            manifestPath = this.getAssetsWritePath() + PROJECT_MANIFEST_FILENAME;
            break;

           default:
            Logger_1.default.getInstance().warn("\u7cfb\u7edf\u4e0d\u652f\u6301\u83b7\u53d6\u672c\u5730 manifest \u6587\u4ef6\u8def\u5f84");
          }
          return manifestPath;
        }
        getManifestPathInApp() {
          let manifestPath = "";
          switch (cc.sys.os) {
           case cc.sys.OS_WINDOWS:
            manifestPath = UpdateConfig.WIN32_MANIFEST_IN_APP_PATH;
            break;

           case cc.sys.OS_OSX:
            break;

           case cc.sys.OS_ANDROID:
            {
              let rootPath = jsb.fileUtils.getDefaultResourceRootPath();
              if (rootPath) {
                "@" === rootPath[0] && (rootPath = rootPath.slice(1, rootPath.length));
                manifestPath = rootPath + PROJECT_MANIFEST_FILENAME;
              }
            }
            break;

           case cc.sys.OS_IOS:
            let rootPath = "assets/";
            manifestPath = rootPath + PROJECT_MANIFEST_FILENAME;
            break;

           default:
            Logger_1.default.getInstance().warn("\u7cfb\u7edf\u4e0d\u652f\u6301\u83b7\u53d6\u672c\u5730 manifest \u6587\u4ef6\u8def\u5f84");
          }
          return manifestPath;
        }
        getLocalManifestPath() {
          let manifestPath = "";
          let searchTempPath = this.getUpdateTempPath();
          let manifestPathSearch = this.getManifestPathInSearch();
          let manifestPathApp = this.getManifestPathInApp();
          jsb.fileUtils.isDirectoryExist(searchTempPath) || !jsb.fileUtils.isFileExist(manifestPathSearch) ? manifestPath = manifestPathApp : jsb.fileUtils.isFileExist(manifestPathApp) && (manifestPath = manifestPathApp);
          if (!jsb.fileUtils.isFileExist(manifestPath)) {
            manifestPath = this.getManifestPathInApp();
            if (!jsb.fileUtils.isFileExist(manifestPath)) {
              Logger_1.default.getInstance().warn("\u65e0\u6cd5\u627e\u5230 APP \u5185\u548c \u641c\u7d22\u8def\u5f84\u5185\u7684 manifest \u6587\u4ef6");
              manifestPath = "";
            }
          }
          return manifestPath;
        }
        getAssetsWritePath() {
          let path = "";
          path = jsb && jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/";
          return path;
        }
        uniqueSearchPath(searchPaths) {
          let newSearchPath = [];
          let flagPathMap = new Map();
          for (let i = 0; i < searchPaths.length; ++i) {
            let key = searchPaths[i];
            if (!flagPathMap.has(key)) {
              flagPathMap.set(key, key);
              newSearchPath.push(key);
            }
          }
          flagPathMap.clear();
          return newSearchPath;
        }
        resetSearchPath() {
          let searchPaths = this.uniqueSearchPath(jsb.fileUtils.getSearchPaths());
          let insertSearchPaths = this.m_jsbAssetsManager.getLocalManifest().getSearchPaths();
          for (let i = 0; i < insertSearchPaths.length; ++i) {
            let insertSearchPath = insertSearchPaths[i];
            let sameSearchPathIndex = searchPaths.indexOf(insertSearchPath);
            sameSearchPathIndex >= 0 && searchPaths.splice(sameSearchPathIndex, 1);
          }
          Array.prototype.unshift.apply(searchPaths, insertSearchPaths);
          cc.sys.localStorage.setItem(LocalStorageDefine_1.default.LOCAL_UPDATE_SEARCH_PATH, JSON.stringify(searchPaths));
          jsb.fileUtils.setSearchPaths(searchPaths);
        }
        onVersionCompare(a, b) {
          Logger_1.default.getInstance().log(`\u672c\u5730\u7248\u672c\u53f7\uff1a${a}`);
          Logger_1.default.getInstance().log(`\u8fdc\u7a0b\u7248\u672c\u53f7\uff1a${b}`);
          let aSplit = a.split(".");
          let bSplit = b.split(".");
          for (let i = 0; i < aSplit.length; ++i) {
            let aNum = Number(aSplit[i]);
            let bNum = Number(bSplit[i]);
            if (aNum < bNum) {
              this.m_diffVersionNum = UpdateDefine.VersionNumber[UpdateDefine.VersionNumber[i]];
              return -1;
            }
            if (aNum > bNum) break;
          }
          return 0;
        }
        onVerifyMD5(path, asset) {
          if (!jsb.fileUtils.isFileExist(path)) return false;
          let fileData = null;
          let filePathSuffix = path.slice(path.lastIndexOf("."), path.length);
          fileData = TEXT_FILE_SUFFIX.indexOf[filePathSuffix] >= 0 ? jsb.fileUtils.getStringFromFile(path) : jsb.fileUtils.getDataFromFile(path);
          let fileMD5 = CodeUtil_1.default.md5(fileData);
          return fileMD5 === asset.md5;
        }
        destroy() {
          this.m_jsbAssetsManager = null;
          this.m_diffVersionNum = null;
          this.m_failedFiles = null;
          this.m_errorState = null;
          this.m_percent = null;
        }
      }
      UpdateManager.s_instance = null;
      return UpdateManager;
    })();
    exports.default = UpdateManager;
    cc._RF.pop();
  }, {
    "../../../config/UpdateConfig": "UpdateConfig",
    "../../../define/EventDefine": "EventDefine",
    "../../../define/LocalStorageDefine": "LocalStorageDefine",
    "../../../define/UpdateDefine": "UpdateDefine",
    "../../../utils/CodeUtil": "CodeUtil",
    "../../../utils/Util": "Util",
    "../../machine/Logger": "Logger",
    "../Manager": "Manager",
    "../event/EventManager": "EventManager"
  } ],
  UpdateView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8e96SjSi1MUKGpUnNDffsa", "UpdateView");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const EventDefine_1 = __importDefault(require("../../../define/EventDefine"));
    const ViewBase_1 = __importDefault(require("../../ViewBase"));
    const {ccclass: ccclass, property: property} = cc._decorator;
    let UpdateView = (() => {
      let UpdateView = class UpdateView extends ViewBase_1.default {
        constructor() {
          super(...arguments);
          this.labTips = null;
        }
        onLoad() {
          this.register();
          this.initView();
        }
        start() {}
        register() {
          G.EventMgr.on(EventDefine_1.default.UPDATE_PROGRESS, this, this.onUpdateProgress);
        }
        initView() {
          this.labTips.string = "";
        }
        onUpdateProgress(percent) {
          this.labTips.string = percent.toString();
        }
      };
      __decorate([ property(cc.Label) ], UpdateView.prototype, "labTips", void 0);
      UpdateView = __decorate([ ccclass ], UpdateView);
      return UpdateView;
    })();
    exports.default = UpdateView;
    cc._RF.pop();
  }, {
    "../../../define/EventDefine": "EventDefine",
    "../../ViewBase": "ViewBase"
  } ],
  Util: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3e401QcfBNM/Y7enVfq6QeM", "Util");
    "use strict";
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const Logger_1 = __importDefault(require("../core/machine/Logger"));
    class Util {
      static toFixed(value, digit = 2) {
        if (digit <= 0) {
          Logger_1.default.getInstance().warn(`bit \u53c2\u6570\u4f4d\u6570\u9519\u8bef\uff1a${digit}`);
          return null;
        }
        let num = Number(value);
        if (null === value || void 0 === value || isNaN(num)) return null;
        let multiple = 1;
        for (let i = 0; i < digit; ++i) multiple *= 10;
        let result = Math.floor(num * multiple) / multiple;
        return result;
      }
      static bytesToFileUnit(bytesSize) {
        const CARRY = 1024;
        const SYMBOLS = [ "B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB" ];
        let value = bytesSize;
        let unit = SYMBOLS[0];
        let index = 0;
        while (index < SYMBOLS.length - 1 && value / CARRY >= 1) {
          value /= CARRY;
          unit = SYMBOLS[++index];
        }
        return `${Util.toFixed(value)} ${unit}`;
      }
    }
    exports.default = Util;
    cc._RF.pop();
  }, {
    "../core/machine/Logger": "Logger"
  } ],
  ViewBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "02a43xGcaBPzamUCkCVFgwH", "ViewBase");
    "use strict";
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const UIBase_1 = __importDefault(require("./UIBase"));
    class ViewBase extends UIBase_1.default {
      constructor() {
        super();
        this.path = null;
      }
      onLanguage() {}
      close() {
        G.UIMgr.closeView(this.path);
      }
    }
    exports.default = ViewBase;
    cc._RF.pop();
  }, {
    "./UIBase": "UIBase"
  } ],
  ViewDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a65c88noYFPNbDv9GoAxoSm", "ViewDefine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CustomViewDefine = exports.CommonViewDefine = exports.PersistViewDefine = void 0;
    var PersistViewDefine;
    (function(PersistViewDefine) {
      PersistViewDefine["TestView"] = "prefab/persist/TestView";
      PersistViewDefine["LoadingView"] = "prefab/persist/LoadingView";
      PersistViewDefine["LockTouchView"] = "prefab/persist/LockTouchView";
      PersistViewDefine["ProgressView"] = "prefab/persist/ProgressView";
    })(PersistViewDefine = exports.PersistViewDefine || (exports.PersistViewDefine = {}));
    var CommonViewDefine;
    (function(CommonViewDefine) {
      CommonViewDefine["UpdateView"] = "prefab/common/UpdateView";
      CommonViewDefine["PopupsView"] = "prefab/common/PopupsView";
      CommonViewDefine["TipsView"] = "prefab/common/TipsView";
      CommonViewDefine["RollNoticeView"] = "prefab/common/RollNoticeView";
      CommonViewDefine["MaintainView"] = "prefab/common/MaintainView";
    })(CommonViewDefine = exports.CommonViewDefine || (exports.CommonViewDefine = {}));
    var CustomViewDefine;
    (function(CustomViewDefine) {
      CustomViewDefine["LoginView"] = "prefab/account/LoginView";
      CustomViewDefine["RegisterView"] = "prefab/account/RegisterView";
    })(CustomViewDefine = exports.CustomViewDefine || (exports.CustomViewDefine = {}));
    exports.default = Object.assign(Object.assign(Object.assign({}, PersistViewDefine), CommonViewDefine), CustomViewDefine);
    cc._RF.pop();
  }, {} ],
  ViewInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dcfd5MQGZNF1oi/+nyWGtTo", "ViewInterface");
    cc._RF.pop();
  }, {} ],
  ViewLayerDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0edcddtrxlOCYAbl3tw4J03", "ViewLayerDefine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ORDER_INTERVAL = void 0;
    exports.ORDER_INTERVAL = 100;
    var ViewLayerDefine;
    (function(ViewLayerDefine) {
      ViewLayerDefine[ViewLayerDefine["BOTTOM"] = 0] = "BOTTOM";
      ViewLayerDefine[ViewLayerDefine["UI"] = 1 * exports.ORDER_INTERVAL] = "UI";
      ViewLayerDefine[ViewLayerDefine["POPUP"] = 2 * exports.ORDER_INTERVAL] = "POPUP";
      ViewLayerDefine[ViewLayerDefine["TOP"] = 3 * exports.ORDER_INTERVAL] = "TOP";
      ViewLayerDefine[ViewLayerDefine["SYSTEM"] = 4 * exports.ORDER_INTERVAL] = "SYSTEM";
    })(ViewLayerDefine || (ViewLayerDefine = {}));
    exports.default = ViewLayerDefine;
    cc._RF.pop();
  }, {} ],
  ViewStyleDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30bb065aKtLLo8TMH9Zhpfo", "ViewStyleDefine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewStyleDefine;
    (function(ViewStyleDefine) {
      ViewStyleDefine[ViewStyleDefine["FADE"] = 0] = "FADE";
      ViewStyleDefine[ViewStyleDefine["SCALE"] = 1] = "SCALE";
      ViewStyleDefine[ViewStyleDefine["LEFT_RIGHT"] = 2] = "LEFT_RIGHT";
      ViewStyleDefine[ViewStyleDefine["RIGHT_LEFT"] = 3] = "RIGHT_LEFT";
      ViewStyleDefine[ViewStyleDefine["BOTTOM_TOP"] = 4] = "BOTTOM_TOP";
      ViewStyleDefine[ViewStyleDefine["TOP_BOTTOM"] = 5] = "TOP_BOTTOM";
    })(ViewStyleDefine || (ViewStyleDefine = {}));
    exports.default = ViewStyleDefine;
    cc._RF.pop();
  }, {} ],
  WebAPIConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8854aJ8V2RMK4LiM7ICdnFP", "WebAPIConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WEB_API_REGISTER_REQUEST = exports.WEB_API_LOGIN_REQUEST = void 0;
    exports.WEB_API_LOGIN_REQUEST = "/base/login";
    exports.WEB_API_REGISTER_REQUEST = "/base/register";
    cc._RF.pop();
  }, {} ],
  WebAPIInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7c8d5M3JkJBXoZbdb4UsPm8", "WebAPIInterface");
    cc._RF.pop();
  }, {} ],
  md5: [ function(require, module, exports) {
    (function(process, global) {
      "use strict";
      cc._RF.push(module, "25363Q09TpCNqc6RtMsd9O/", "md5");
      "use strict";
      (function() {
        var ERROR = "input is invalid type";
        var WINDOW = "object" === typeof window;
        var root = WINDOW ? window : {};
        root.JS_MD5_NO_WINDOW && (WINDOW = false);
        var WEB_WORKER = !WINDOW && "object" === typeof self;
        var NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" === typeof process && process.versions && process.versions.node;
        NODE_JS ? root = global : WEB_WORKER && (root = self);
        var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && "object" === typeof module && module.exports;
        var AMD = "function" === typeof define && define.amd;
        var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" !== typeof ArrayBuffer;
        var HEX_CHARS = "0123456789abcdef".split("");
        var EXTRA = [ 128, 32768, 8388608, -2147483648 ];
        var SHIFT = [ 0, 8, 16, 24 ];
        var OUTPUT_TYPES = [ "hex", "array", "digest", "buffer", "arrayBuffer", "base64" ];
        var BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
        var blocks = [], buffer8;
        if (ARRAY_BUFFER) {
          var buffer = new ArrayBuffer(68);
          buffer8 = new Uint8Array(buffer);
          blocks = new Uint32Array(buffer);
        }
        !root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function(obj) {
          return "[object Array]" === Object.prototype.toString.call(obj);
        });
        !ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(obj) {
          return "object" === typeof obj && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        });
        var createOutputMethod = function createOutputMethod(outputType) {
          return function(message) {
            return new Md5(true).update(message)[outputType]();
          };
        };
        var createMethod = function createMethod() {
          var method = createOutputMethod("hex");
          NODE_JS && (method = nodeWrap(method));
          method.create = function() {
            return new Md5();
          };
          method.update = function(message) {
            return method.create().update(message);
          };
          for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
            var type = OUTPUT_TYPES[i];
            method[type] = createOutputMethod(type);
          }
          return method;
        };
        var nodeWrap = function nodeWrap(method) {
          var crypto = eval("require('crypto')");
          var Buffer = eval("require('buffer').Buffer");
          var nodeMethod = function nodeMethod(message) {
            if ("string" === typeof message) return crypto.createHash("md5").update(message, "utf8").digest("hex");
            if (null === message || void 0 === message) throw ERROR;
            message.constructor === ArrayBuffer && (message = new Uint8Array(message));
            return Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(message)).digest("hex") : method(message);
          };
          return nodeMethod;
        };
        function Md5(sharedMemory) {
          if (sharedMemory) {
            blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
            this.blocks = blocks;
            this.buffer8 = buffer8;
          } else if (ARRAY_BUFFER) {
            var buffer = new ArrayBuffer(68);
            this.buffer8 = new Uint8Array(buffer);
            this.blocks = new Uint32Array(buffer);
          } else this.blocks = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
          this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
          this.finalized = this.hashed = false;
          this.first = true;
        }
        Md5.prototype.update = function(message) {
          if (this.finalized) return;
          var notString, type = typeof message;
          if ("string" !== type) {
            if ("object" !== type) throw ERROR;
            if (null === message) throw ERROR;
            if (ARRAY_BUFFER && message.constructor === ArrayBuffer) message = new Uint8Array(message); else if (!Array.isArray(message) && (!ARRAY_BUFFER || !ArrayBuffer.isView(message))) throw ERROR;
            notString = true;
          }
          var code, index = 0, i, length = message.length, blocks = this.blocks;
          var buffer8 = this.buffer8;
          while (index < length) {
            if (this.hashed) {
              this.hashed = false;
              blocks[0] = blocks[16];
              blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
            }
            if (notString) if (ARRAY_BUFFER) for (i = this.start; index < length && i < 64; ++index) buffer8[i++] = message[index]; else for (i = this.start; index < length && i < 64; ++index) blocks[i >> 2] |= message[index] << SHIFT[3 & i++]; else if (ARRAY_BUFFER) for (i = this.start; index < length && i < 64; ++index) {
              code = message.charCodeAt(index);
              if (code < 128) buffer8[i++] = code; else if (code < 2048) {
                buffer8[i++] = 192 | code >> 6;
                buffer8[i++] = 128 | 63 & code;
              } else if (code < 55296 || code >= 57344) {
                buffer8[i++] = 224 | code >> 12;
                buffer8[i++] = 128 | code >> 6 & 63;
                buffer8[i++] = 128 | 63 & code;
              } else {
                code = 65536 + ((1023 & code) << 10 | 1023 & message.charCodeAt(++index));
                buffer8[i++] = 240 | code >> 18;
                buffer8[i++] = 128 | code >> 12 & 63;
                buffer8[i++] = 128 | code >> 6 & 63;
                buffer8[i++] = 128 | 63 & code;
              }
            } else for (i = this.start; index < length && i < 64; ++index) {
              code = message.charCodeAt(index);
              if (code < 128) blocks[i >> 2] |= code << SHIFT[3 & i++]; else if (code < 2048) {
                blocks[i >> 2] |= (192 | code >> 6) << SHIFT[3 & i++];
                blocks[i >> 2] |= (128 | 63 & code) << SHIFT[3 & i++];
              } else if (code < 55296 || code >= 57344) {
                blocks[i >> 2] |= (224 | code >> 12) << SHIFT[3 & i++];
                blocks[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[3 & i++];
                blocks[i >> 2] |= (128 | 63 & code) << SHIFT[3 & i++];
              } else {
                code = 65536 + ((1023 & code) << 10 | 1023 & message.charCodeAt(++index));
                blocks[i >> 2] |= (240 | code >> 18) << SHIFT[3 & i++];
                blocks[i >> 2] |= (128 | code >> 12 & 63) << SHIFT[3 & i++];
                blocks[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[3 & i++];
                blocks[i >> 2] |= (128 | 63 & code) << SHIFT[3 & i++];
              }
            }
            this.lastByteIndex = i;
            this.bytes += i - this.start;
            if (i >= 64) {
              this.start = i - 64;
              this.hash();
              this.hashed = true;
            } else this.start = i;
          }
          if (this.bytes > 4294967295) {
            this.hBytes += this.bytes / 4294967296 << 0;
            this.bytes = this.bytes % 4294967296;
          }
          return this;
        };
        Md5.prototype.finalize = function() {
          if (this.finalized) return;
          this.finalized = true;
          var blocks = this.blocks, i = this.lastByteIndex;
          blocks[i >> 2] |= EXTRA[3 & i];
          if (i >= 56) {
            this.hashed || this.hash();
            blocks[0] = blocks[16];
            blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
          }
          blocks[14] = this.bytes << 3;
          blocks[15] = this.hBytes << 3 | this.bytes >>> 29;
          this.hash();
        };
        Md5.prototype.hash = function() {
          var a, b, c, d, bc, da, blocks = this.blocks;
          if (this.first) {
            a = blocks[0] - 680876937;
            a = (a << 7 | a >>> 25) - 271733879 << 0;
            d = (-1732584194 ^ 2004318071 & a) + blocks[1] - 117830708;
            d = (d << 12 | d >>> 20) + a << 0;
            c = (-271733879 ^ d & (-271733879 ^ a)) + blocks[2] - 1126478375;
            c = (c << 17 | c >>> 15) + d << 0;
            b = (a ^ c & (d ^ a)) + blocks[3] - 1316259209;
            b = (b << 22 | b >>> 10) + c << 0;
          } else {
            a = this.h0;
            b = this.h1;
            c = this.h2;
            d = this.h3;
            a += (d ^ b & (c ^ d)) + blocks[0] - 680876936;
            a = (a << 7 | a >>> 25) + b << 0;
            d += (c ^ a & (b ^ c)) + blocks[1] - 389564586;
            d = (d << 12 | d >>> 20) + a << 0;
            c += (b ^ d & (a ^ b)) + blocks[2] + 606105819;
            c = (c << 17 | c >>> 15) + d << 0;
            b += (a ^ c & (d ^ a)) + blocks[3] - 1044525330;
            b = (b << 22 | b >>> 10) + c << 0;
          }
          a += (d ^ b & (c ^ d)) + blocks[4] - 176418897;
          a = (a << 7 | a >>> 25) + b << 0;
          d += (c ^ a & (b ^ c)) + blocks[5] + 1200080426;
          d = (d << 12 | d >>> 20) + a << 0;
          c += (b ^ d & (a ^ b)) + blocks[6] - 1473231341;
          c = (c << 17 | c >>> 15) + d << 0;
          b += (a ^ c & (d ^ a)) + blocks[7] - 45705983;
          b = (b << 22 | b >>> 10) + c << 0;
          a += (d ^ b & (c ^ d)) + blocks[8] + 1770035416;
          a = (a << 7 | a >>> 25) + b << 0;
          d += (c ^ a & (b ^ c)) + blocks[9] - 1958414417;
          d = (d << 12 | d >>> 20) + a << 0;
          c += (b ^ d & (a ^ b)) + blocks[10] - 42063;
          c = (c << 17 | c >>> 15) + d << 0;
          b += (a ^ c & (d ^ a)) + blocks[11] - 1990404162;
          b = (b << 22 | b >>> 10) + c << 0;
          a += (d ^ b & (c ^ d)) + blocks[12] + 1804603682;
          a = (a << 7 | a >>> 25) + b << 0;
          d += (c ^ a & (b ^ c)) + blocks[13] - 40341101;
          d = (d << 12 | d >>> 20) + a << 0;
          c += (b ^ d & (a ^ b)) + blocks[14] - 1502002290;
          c = (c << 17 | c >>> 15) + d << 0;
          b += (a ^ c & (d ^ a)) + blocks[15] + 1236535329;
          b = (b << 22 | b >>> 10) + c << 0;
          a += (c ^ d & (b ^ c)) + blocks[1] - 165796510;
          a = (a << 5 | a >>> 27) + b << 0;
          d += (b ^ c & (a ^ b)) + blocks[6] - 1069501632;
          d = (d << 9 | d >>> 23) + a << 0;
          c += (a ^ b & (d ^ a)) + blocks[11] + 643717713;
          c = (c << 14 | c >>> 18) + d << 0;
          b += (d ^ a & (c ^ d)) + blocks[0] - 373897302;
          b = (b << 20 | b >>> 12) + c << 0;
          a += (c ^ d & (b ^ c)) + blocks[5] - 701558691;
          a = (a << 5 | a >>> 27) + b << 0;
          d += (b ^ c & (a ^ b)) + blocks[10] + 38016083;
          d = (d << 9 | d >>> 23) + a << 0;
          c += (a ^ b & (d ^ a)) + blocks[15] - 660478335;
          c = (c << 14 | c >>> 18) + d << 0;
          b += (d ^ a & (c ^ d)) + blocks[4] - 405537848;
          b = (b << 20 | b >>> 12) + c << 0;
          a += (c ^ d & (b ^ c)) + blocks[9] + 568446438;
          a = (a << 5 | a >>> 27) + b << 0;
          d += (b ^ c & (a ^ b)) + blocks[14] - 1019803690;
          d = (d << 9 | d >>> 23) + a << 0;
          c += (a ^ b & (d ^ a)) + blocks[3] - 187363961;
          c = (c << 14 | c >>> 18) + d << 0;
          b += (d ^ a & (c ^ d)) + blocks[8] + 1163531501;
          b = (b << 20 | b >>> 12) + c << 0;
          a += (c ^ d & (b ^ c)) + blocks[13] - 1444681467;
          a = (a << 5 | a >>> 27) + b << 0;
          d += (b ^ c & (a ^ b)) + blocks[2] - 51403784;
          d = (d << 9 | d >>> 23) + a << 0;
          c += (a ^ b & (d ^ a)) + blocks[7] + 1735328473;
          c = (c << 14 | c >>> 18) + d << 0;
          b += (d ^ a & (c ^ d)) + blocks[12] - 1926607734;
          b = (b << 20 | b >>> 12) + c << 0;
          bc = b ^ c;
          a += (bc ^ d) + blocks[5] - 378558;
          a = (a << 4 | a >>> 28) + b << 0;
          d += (bc ^ a) + blocks[8] - 2022574463;
          d = (d << 11 | d >>> 21) + a << 0;
          da = d ^ a;
          c += (da ^ b) + blocks[11] + 1839030562;
          c = (c << 16 | c >>> 16) + d << 0;
          b += (da ^ c) + blocks[14] - 35309556;
          b = (b << 23 | b >>> 9) + c << 0;
          bc = b ^ c;
          a += (bc ^ d) + blocks[1] - 1530992060;
          a = (a << 4 | a >>> 28) + b << 0;
          d += (bc ^ a) + blocks[4] + 1272893353;
          d = (d << 11 | d >>> 21) + a << 0;
          da = d ^ a;
          c += (da ^ b) + blocks[7] - 155497632;
          c = (c << 16 | c >>> 16) + d << 0;
          b += (da ^ c) + blocks[10] - 1094730640;
          b = (b << 23 | b >>> 9) + c << 0;
          bc = b ^ c;
          a += (bc ^ d) + blocks[13] + 681279174;
          a = (a << 4 | a >>> 28) + b << 0;
          d += (bc ^ a) + blocks[0] - 358537222;
          d = (d << 11 | d >>> 21) + a << 0;
          da = d ^ a;
          c += (da ^ b) + blocks[3] - 722521979;
          c = (c << 16 | c >>> 16) + d << 0;
          b += (da ^ c) + blocks[6] + 76029189;
          b = (b << 23 | b >>> 9) + c << 0;
          bc = b ^ c;
          a += (bc ^ d) + blocks[9] - 640364487;
          a = (a << 4 | a >>> 28) + b << 0;
          d += (bc ^ a) + blocks[12] - 421815835;
          d = (d << 11 | d >>> 21) + a << 0;
          da = d ^ a;
          c += (da ^ b) + blocks[15] + 530742520;
          c = (c << 16 | c >>> 16) + d << 0;
          b += (da ^ c) + blocks[2] - 995338651;
          b = (b << 23 | b >>> 9) + c << 0;
          a += (c ^ (b | ~d)) + blocks[0] - 198630844;
          a = (a << 6 | a >>> 26) + b << 0;
          d += (b ^ (a | ~c)) + blocks[7] + 1126891415;
          d = (d << 10 | d >>> 22) + a << 0;
          c += (a ^ (d | ~b)) + blocks[14] - 1416354905;
          c = (c << 15 | c >>> 17) + d << 0;
          b += (d ^ (c | ~a)) + blocks[5] - 57434055;
          b = (b << 21 | b >>> 11) + c << 0;
          a += (c ^ (b | ~d)) + blocks[12] + 1700485571;
          a = (a << 6 | a >>> 26) + b << 0;
          d += (b ^ (a | ~c)) + blocks[3] - 1894986606;
          d = (d << 10 | d >>> 22) + a << 0;
          c += (a ^ (d | ~b)) + blocks[10] - 1051523;
          c = (c << 15 | c >>> 17) + d << 0;
          b += (d ^ (c | ~a)) + blocks[1] - 2054922799;
          b = (b << 21 | b >>> 11) + c << 0;
          a += (c ^ (b | ~d)) + blocks[8] + 1873313359;
          a = (a << 6 | a >>> 26) + b << 0;
          d += (b ^ (a | ~c)) + blocks[15] - 30611744;
          d = (d << 10 | d >>> 22) + a << 0;
          c += (a ^ (d | ~b)) + blocks[6] - 1560198380;
          c = (c << 15 | c >>> 17) + d << 0;
          b += (d ^ (c | ~a)) + blocks[13] + 1309151649;
          b = (b << 21 | b >>> 11) + c << 0;
          a += (c ^ (b | ~d)) + blocks[4] - 145523070;
          a = (a << 6 | a >>> 26) + b << 0;
          d += (b ^ (a | ~c)) + blocks[11] - 1120210379;
          d = (d << 10 | d >>> 22) + a << 0;
          c += (a ^ (d | ~b)) + blocks[2] + 718787259;
          c = (c << 15 | c >>> 17) + d << 0;
          b += (d ^ (c | ~a)) + blocks[9] - 343485551;
          b = (b << 21 | b >>> 11) + c << 0;
          if (this.first) {
            this.h0 = a + 1732584193 << 0;
            this.h1 = b - 271733879 << 0;
            this.h2 = c - 1732584194 << 0;
            this.h3 = d + 271733878 << 0;
            this.first = false;
          } else {
            this.h0 = this.h0 + a << 0;
            this.h1 = this.h1 + b << 0;
            this.h2 = this.h2 + c << 0;
            this.h3 = this.h3 + d << 0;
          }
        };
        Md5.prototype.hex = function() {
          this.finalize();
          var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
          return HEX_CHARS[h0 >> 4 & 15] + HEX_CHARS[15 & h0] + HEX_CHARS[h0 >> 12 & 15] + HEX_CHARS[h0 >> 8 & 15] + HEX_CHARS[h0 >> 20 & 15] + HEX_CHARS[h0 >> 16 & 15] + HEX_CHARS[h0 >> 28 & 15] + HEX_CHARS[h0 >> 24 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[15 & h1] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h2 >> 4 & 15] + HEX_CHARS[15 & h2] + HEX_CHARS[h2 >> 12 & 15] + HEX_CHARS[h2 >> 8 & 15] + HEX_CHARS[h2 >> 20 & 15] + HEX_CHARS[h2 >> 16 & 15] + HEX_CHARS[h2 >> 28 & 15] + HEX_CHARS[h2 >> 24 & 15] + HEX_CHARS[h3 >> 4 & 15] + HEX_CHARS[15 & h3] + HEX_CHARS[h3 >> 12 & 15] + HEX_CHARS[h3 >> 8 & 15] + HEX_CHARS[h3 >> 20 & 15] + HEX_CHARS[h3 >> 16 & 15] + HEX_CHARS[h3 >> 28 & 15] + HEX_CHARS[h3 >> 24 & 15];
        };
        Md5.prototype.toString = Md5.prototype.hex;
        Md5.prototype.digest = function() {
          this.finalize();
          var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
          return [ 255 & h0, h0 >> 8 & 255, h0 >> 16 & 255, h0 >> 24 & 255, 255 & h1, h1 >> 8 & 255, h1 >> 16 & 255, h1 >> 24 & 255, 255 & h2, h2 >> 8 & 255, h2 >> 16 & 255, h2 >> 24 & 255, 255 & h3, h3 >> 8 & 255, h3 >> 16 & 255, h3 >> 24 & 255 ];
        };
        Md5.prototype.array = Md5.prototype.digest;
        Md5.prototype.arrayBuffer = function() {
          this.finalize();
          var buffer = new ArrayBuffer(16);
          var blocks = new Uint32Array(buffer);
          blocks[0] = this.h0;
          blocks[1] = this.h1;
          blocks[2] = this.h2;
          blocks[3] = this.h3;
          return buffer;
        };
        Md5.prototype.buffer = Md5.prototype.arrayBuffer;
        Md5.prototype.base64 = function() {
          var v1, v2, v3, base64Str = "", bytes = this.array();
          for (var i = 0; i < 15; ) {
            v1 = bytes[i++];
            v2 = bytes[i++];
            v3 = bytes[i++];
            base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[63 & (v1 << 4 | v2 >>> 4)] + BASE64_ENCODE_CHAR[63 & (v2 << 2 | v3 >>> 6)] + BASE64_ENCODE_CHAR[63 & v3];
          }
          v1 = bytes[i];
          base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[v1 << 4 & 63] + "==";
          return base64Str;
        };
        var exports = createMethod();
        if (COMMON_JS) module.exports = exports; else {
          root.md5 = exports;
          AMD && define(function() {
            return exports;
          });
        }
      })();
      cc._RF.pop();
    }).call(this, require("_process"), "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    _process: 1
  } ],
  protobuf: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      cc._RF.push(module, "f9a14F5DbNDqaODTAGwVTJS", "protobuf");
      "use strict";
      (function(undefined) {
        (function prelude(modules, cache, entries) {
          function $require(name) {
            var $module = cache[name];
            $module || modules[name][0].call($module = cache[name] = {
              exports: {}
            }, $require, $module, $module.exports);
            return $module.exports;
          }
          var protobuf = $require(entries[0]);
          protobuf.util.global.protobuf = protobuf;
          "function" === typeof define && define.amd && define([ "long" ], function(Long) {
            if (Long && Long.isLong) {
              protobuf.util.Long = Long;
              protobuf.configure();
            }
            return protobuf;
          });
          "object" === typeof module && module && module.exports && (module.exports = protobuf);
        })({
          1: [ function(require, module, exports) {
            module.exports = asPromise;
            function asPromise(fn, ctx) {
              var params = new Array(arguments.length - 1), offset = 0, index = 2, pending = true;
              while (index < arguments.length) params[offset++] = arguments[index++];
              return new Promise(function executor(resolve, reject) {
                params[offset] = function callback(err) {
                  if (pending) {
                    pending = false;
                    if (err) reject(err); else {
                      var params = new Array(arguments.length - 1), offset = 0;
                      while (offset < params.length) params[offset++] = arguments[offset];
                      resolve.apply(null, params);
                    }
                  }
                };
                try {
                  fn.apply(ctx || null, params);
                } catch (err) {
                  if (pending) {
                    pending = false;
                    reject(err);
                  }
                }
              });
            }
          }, {} ],
          2: [ function(require, module, exports) {
            var base64 = exports;
            base64.length = function length(string) {
              var p = string.length;
              if (!p) return 0;
              var n = 0;
              while (--p % 4 > 1 && "=" === string.charAt(p)) ++n;
              return Math.ceil(3 * string.length) / 4 - n;
            };
            var b64 = new Array(64);
            var s64 = new Array(123);
            for (var i = 0; i < 64; ) s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
            base64.encode = function encode(buffer, start, end) {
              var parts = null, chunk = [];
              var i = 0, j = 0, t;
              while (start < end) {
                var b = buffer[start++];
                switch (j) {
                 case 0:
                  chunk[i++] = b64[b >> 2];
                  t = (3 & b) << 4;
                  j = 1;
                  break;

                 case 1:
                  chunk[i++] = b64[t | b >> 4];
                  t = (15 & b) << 2;
                  j = 2;
                  break;

                 case 2:
                  chunk[i++] = b64[t | b >> 6];
                  chunk[i++] = b64[63 & b];
                  j = 0;
                }
                if (i > 8191) {
                  (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
                  i = 0;
                }
              }
              if (j) {
                chunk[i++] = b64[t];
                chunk[i++] = 61;
                1 === j && (chunk[i++] = 61);
              }
              if (parts) {
                i && parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
                return parts.join("");
              }
              return String.fromCharCode.apply(String, chunk.slice(0, i));
            };
            var invalidEncoding = "invalid encoding";
            base64.decode = function decode(string, buffer, offset) {
              var start = offset;
              var j = 0, t;
              for (var i = 0; i < string.length; ) {
                var c = string.charCodeAt(i++);
                if (61 === c && j > 1) break;
                if ((c = s64[c]) === undefined) throw Error(invalidEncoding);
                switch (j) {
                 case 0:
                  t = c;
                  j = 1;
                  break;

                 case 1:
                  buffer[offset++] = t << 2 | (48 & c) >> 4;
                  t = c;
                  j = 2;
                  break;

                 case 2:
                  buffer[offset++] = (15 & t) << 4 | (60 & c) >> 2;
                  t = c;
                  j = 3;
                  break;

                 case 3:
                  buffer[offset++] = (3 & t) << 6 | c;
                  j = 0;
                }
              }
              if (1 === j) throw Error(invalidEncoding);
              return offset - start;
            };
            base64.test = function test(string) {
              return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(string);
            };
          }, {} ],
          3: [ function(require, module, exports) {
            module.exports = codegen;
            function codegen(functionParams, functionName) {
              if ("string" === typeof functionParams) {
                functionName = functionParams;
                functionParams = undefined;
              }
              var body = [];
              function Codegen(formatStringOrScope) {
                if ("string" !== typeof formatStringOrScope) {
                  var source = toString();
                  codegen.verbose && console.log("codegen: " + source);
                  source = "return " + source;
                  if (formatStringOrScope) {
                    var scopeKeys = Object.keys(formatStringOrScope), scopeParams = new Array(scopeKeys.length + 1), scopeValues = new Array(scopeKeys.length), scopeOffset = 0;
                    while (scopeOffset < scopeKeys.length) {
                      scopeParams[scopeOffset] = scopeKeys[scopeOffset];
                      scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
                    }
                    scopeParams[scopeOffset] = source;
                    return Function.apply(null, scopeParams).apply(null, scopeValues);
                  }
                  return Function(source)();
                }
                var formatParams = new Array(arguments.length - 1), formatOffset = 0;
                while (formatOffset < formatParams.length) formatParams[formatOffset] = arguments[++formatOffset];
                formatOffset = 0;
                formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
                  var value = formatParams[formatOffset++];
                  switch ($1) {
                   case "d":
                   case "f":
                    return String(Number(value));

                   case "i":
                    return String(Math.floor(value));

                   case "j":
                    return JSON.stringify(value);

                   case "s":
                    return String(value);
                  }
                  return "%";
                });
                if (formatOffset !== formatParams.length) throw Error("parameter count mismatch");
                body.push(formatStringOrScope);
                return Codegen;
              }
              function toString(functionNameOverride) {
                return "function " + (functionNameOverride || functionName || "") + "(" + (functionParams && functionParams.join(",") || "") + "){\n  " + body.join("\n  ") + "\n}";
              }
              Codegen.toString = toString;
              return Codegen;
            }
            codegen.verbose = false;
          }, {} ],
          4: [ function(require, module, exports) {
            module.exports = EventEmitter;
            function EventEmitter() {
              this._listeners = {};
            }
            EventEmitter.prototype.on = function on(evt, fn, ctx) {
              (this._listeners[evt] || (this._listeners[evt] = [])).push({
                fn: fn,
                ctx: ctx || this
              });
              return this;
            };
            EventEmitter.prototype.off = function off(evt, fn) {
              if (evt === undefined) this._listeners = {}; else if (fn === undefined) this._listeners[evt] = []; else {
                var listeners = this._listeners[evt];
                for (var i = 0; i < listeners.length; ) listeners[i].fn === fn ? listeners.splice(i, 1) : ++i;
              }
              return this;
            };
            EventEmitter.prototype.emit = function emit(evt) {
              var listeners = this._listeners[evt];
              if (listeners) {
                var args = [], i = 1;
                for (;i < arguments.length; ) args.push(arguments[i++]);
                for (i = 0; i < listeners.length; ) listeners[i].fn.apply(listeners[i++].ctx, args);
              }
              return this;
            };
          }, {} ],
          5: [ function(require, module, exports) {
            module.exports = fetch;
            var asPromise = require(1), inquire = require(7);
            var fs = inquire("fs");
            function fetch(filename, options, callback) {
              if ("function" === typeof options) {
                callback = options;
                options = {};
              } else options || (options = {});
              if (!callback) return asPromise(fetch, this, filename, options);
              if (!options.xhr && fs && fs.readFile) return fs.readFile(filename, function fetchReadFileCallback(err, contents) {
                return err && "undefined" !== typeof XMLHttpRequest ? fetch.xhr(filename, options, callback) : err ? callback(err) : callback(null, options.binary ? contents : contents.toString("utf8"));
              });
              return fetch.xhr(filename, options, callback);
            }
            fetch.xhr = function fetch_xhr(filename, options, callback) {
              var xhr = new XMLHttpRequest();
              xhr.onreadystatechange = function fetchOnReadyStateChange() {
                if (4 !== xhr.readyState) return undefined;
                if (0 !== xhr.status && 200 !== xhr.status) return callback(Error("status " + xhr.status));
                if (options.binary) {
                  var buffer = xhr.response;
                  if (!buffer) {
                    buffer = [];
                    for (var i = 0; i < xhr.responseText.length; ++i) buffer.push(255 & xhr.responseText.charCodeAt(i));
                  }
                  return callback(null, "undefined" !== typeof Uint8Array ? new Uint8Array(buffer) : buffer);
                }
                return callback(null, xhr.responseText);
              };
              if (options.binary) {
                "overrideMimeType" in xhr && xhr.overrideMimeType("text/plain; charset=x-user-defined");
                xhr.responseType = "arraybuffer";
              }
              xhr.open("GET", filename);
              xhr.send();
            };
          }, {
            1: 1,
            7: 7
          } ],
          6: [ function(require, module, exports) {
            module.exports = factory(factory);
            function factory(exports) {
              "undefined" !== typeof Float32Array ? function() {
                var f32 = new Float32Array([ -0 ]), f8b = new Uint8Array(f32.buffer), le = 128 === f8b[3];
                function writeFloat_f32_cpy(val, buf, pos) {
                  f32[0] = val;
                  buf[pos] = f8b[0];
                  buf[pos + 1] = f8b[1];
                  buf[pos + 2] = f8b[2];
                  buf[pos + 3] = f8b[3];
                }
                function writeFloat_f32_rev(val, buf, pos) {
                  f32[0] = val;
                  buf[pos] = f8b[3];
                  buf[pos + 1] = f8b[2];
                  buf[pos + 2] = f8b[1];
                  buf[pos + 3] = f8b[0];
                }
                exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
                exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;
                function readFloat_f32_cpy(buf, pos) {
                  f8b[0] = buf[pos];
                  f8b[1] = buf[pos + 1];
                  f8b[2] = buf[pos + 2];
                  f8b[3] = buf[pos + 3];
                  return f32[0];
                }
                function readFloat_f32_rev(buf, pos) {
                  f8b[3] = buf[pos];
                  f8b[2] = buf[pos + 1];
                  f8b[1] = buf[pos + 2];
                  f8b[0] = buf[pos + 3];
                  return f32[0];
                }
                exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
                exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;
              }() : function() {
                function writeFloat_ieee754(writeUint, val, buf, pos) {
                  var sign = val < 0 ? 1 : 0;
                  sign && (val = -val);
                  if (0 === val) writeUint(1 / val > 0 ? 0 : 2147483648, buf, pos); else if (isNaN(val)) writeUint(2143289344, buf, pos); else if (val > 34028234663852886e22) writeUint((sign << 31 | 2139095040) >>> 0, buf, pos); else if (val < 11754943508222875e-54) writeUint((sign << 31 | Math.round(val / 1401298464324817e-60)) >>> 0, buf, pos); else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2), mantissa = 8388607 & Math.round(val * Math.pow(2, -exponent) * 8388608);
                    writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
                  }
                }
                exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
                exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
                function readFloat_ieee754(readUint, buf, pos) {
                  var uint = readUint(buf, pos), sign = 2 * (uint >> 31) + 1, exponent = uint >>> 23 & 255, mantissa = 8388607 & uint;
                  return 255 === exponent ? mantissa ? NaN : Infinity * sign : 0 === exponent ? 1401298464324817e-60 * sign * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
                }
                exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
                exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
              }();
              "undefined" !== typeof Float64Array ? function() {
                var f64 = new Float64Array([ -0 ]), f8b = new Uint8Array(f64.buffer), le = 128 === f8b[7];
                function writeDouble_f64_cpy(val, buf, pos) {
                  f64[0] = val;
                  buf[pos] = f8b[0];
                  buf[pos + 1] = f8b[1];
                  buf[pos + 2] = f8b[2];
                  buf[pos + 3] = f8b[3];
                  buf[pos + 4] = f8b[4];
                  buf[pos + 5] = f8b[5];
                  buf[pos + 6] = f8b[6];
                  buf[pos + 7] = f8b[7];
                }
                function writeDouble_f64_rev(val, buf, pos) {
                  f64[0] = val;
                  buf[pos] = f8b[7];
                  buf[pos + 1] = f8b[6];
                  buf[pos + 2] = f8b[5];
                  buf[pos + 3] = f8b[4];
                  buf[pos + 4] = f8b[3];
                  buf[pos + 5] = f8b[2];
                  buf[pos + 6] = f8b[1];
                  buf[pos + 7] = f8b[0];
                }
                exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
                exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;
                function readDouble_f64_cpy(buf, pos) {
                  f8b[0] = buf[pos];
                  f8b[1] = buf[pos + 1];
                  f8b[2] = buf[pos + 2];
                  f8b[3] = buf[pos + 3];
                  f8b[4] = buf[pos + 4];
                  f8b[5] = buf[pos + 5];
                  f8b[6] = buf[pos + 6];
                  f8b[7] = buf[pos + 7];
                  return f64[0];
                }
                function readDouble_f64_rev(buf, pos) {
                  f8b[7] = buf[pos];
                  f8b[6] = buf[pos + 1];
                  f8b[5] = buf[pos + 2];
                  f8b[4] = buf[pos + 3];
                  f8b[3] = buf[pos + 4];
                  f8b[2] = buf[pos + 5];
                  f8b[1] = buf[pos + 6];
                  f8b[0] = buf[pos + 7];
                  return f64[0];
                }
                exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
                exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;
              }() : function() {
                function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
                  var sign = val < 0 ? 1 : 0;
                  sign && (val = -val);
                  if (0 === val) {
                    writeUint(0, buf, pos + off0);
                    writeUint(1 / val > 0 ? 0 : 2147483648, buf, pos + off1);
                  } else if (isNaN(val)) {
                    writeUint(0, buf, pos + off0);
                    writeUint(2146959360, buf, pos + off1);
                  } else if (val > 17976931348623157e292) {
                    writeUint(0, buf, pos + off0);
                    writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
                  } else {
                    var mantissa;
                    if (val < 22250738585072014e-324) {
                      mantissa = val / 5e-324;
                      writeUint(mantissa >>> 0, buf, pos + off0);
                      writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                    } else {
                      var exponent = Math.floor(Math.log(val) / Math.LN2);
                      1024 === exponent && (exponent = 1023);
                      mantissa = val * Math.pow(2, -exponent);
                      writeUint(4503599627370496 * mantissa >>> 0, buf, pos + off0);
                      writeUint((sign << 31 | exponent + 1023 << 20 | 1048576 * mantissa & 1048575) >>> 0, buf, pos + off1);
                    }
                  }
                }
                exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
                exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
                function readDouble_ieee754(readUint, off0, off1, buf, pos) {
                  var lo = readUint(buf, pos + off0), hi = readUint(buf, pos + off1);
                  var sign = 2 * (hi >> 31) + 1, exponent = hi >>> 20 & 2047, mantissa = 4294967296 * (1048575 & hi) + lo;
                  return 2047 === exponent ? mantissa ? NaN : Infinity * sign : 0 === exponent ? 5e-324 * sign * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
                }
                exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
                exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
              }();
              return exports;
            }
            function writeUintLE(val, buf, pos) {
              buf[pos] = 255 & val;
              buf[pos + 1] = val >>> 8 & 255;
              buf[pos + 2] = val >>> 16 & 255;
              buf[pos + 3] = val >>> 24;
            }
            function writeUintBE(val, buf, pos) {
              buf[pos] = val >>> 24;
              buf[pos + 1] = val >>> 16 & 255;
              buf[pos + 2] = val >>> 8 & 255;
              buf[pos + 3] = 255 & val;
            }
            function readUintLE(buf, pos) {
              return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
            }
            function readUintBE(buf, pos) {
              return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
            }
          }, {} ],
          7: [ function(require, module, exports) {
            module.exports = inquire;
            function inquire(moduleName) {
              try {
                var mod = eval("quire".replace(/^/, "re"))(moduleName);
                if (mod && (mod.length || Object.keys(mod).length)) return mod;
              } catch (e) {}
              return null;
            }
          }, {} ],
          8: [ function(require, module, exports) {
            var path = exports;
            var isAbsolute = path.isAbsolute = function isAbsolute(path) {
              return /^(?:\/|\w+:)/.test(path);
            };
            var normalize = path.normalize = function normalize(path) {
              path = path.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
              var parts = path.split("/"), absolute = isAbsolute(path), prefix = "";
              absolute && (prefix = parts.shift() + "/");
              for (var i = 0; i < parts.length; ) ".." === parts[i] ? i > 0 && ".." !== parts[i - 1] ? parts.splice(--i, 2) : absolute ? parts.splice(i, 1) : ++i : "." === parts[i] ? parts.splice(i, 1) : ++i;
              return prefix + parts.join("/");
            };
            path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
              alreadyNormalized || (includePath = normalize(includePath));
              if (isAbsolute(includePath)) return includePath;
              alreadyNormalized || (originPath = normalize(originPath));
              return (originPath = originPath.replace(/(?:\/|^)[^\/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
            };
          }, {} ],
          9: [ function(require, module, exports) {
            module.exports = pool;
            function pool(alloc, slice, size) {
              var SIZE = size || 8192;
              var MAX = SIZE >>> 1;
              var slab = null;
              var offset = SIZE;
              return function pool_alloc(size) {
                if (size < 1 || size > MAX) return alloc(size);
                if (offset + size > SIZE) {
                  slab = alloc(SIZE);
                  offset = 0;
                }
                var buf = slice.call(slab, offset, offset += size);
                7 & offset && (offset = 1 + (7 | offset));
                return buf;
              };
            }
          }, {} ],
          10: [ function(require, module, exports) {
            var utf8 = exports;
            utf8.length = function utf8_length(string) {
              var len = 0, c = 0;
              for (var i = 0; i < string.length; ++i) {
                c = string.charCodeAt(i);
                if (c < 128) len += 1; else if (c < 2048) len += 2; else if (55296 === (64512 & c) && 56320 === (64512 & string.charCodeAt(i + 1))) {
                  ++i;
                  len += 4;
                } else len += 3;
              }
              return len;
            };
            utf8.read = function utf8_read(buffer, start, end) {
              var len = end - start;
              if (len < 1) return "";
              var parts = null, chunk = [], i = 0, t;
              while (start < end) {
                t = buffer[start++];
                if (t < 128) chunk[i++] = t; else if (t > 191 && t < 224) chunk[i++] = (31 & t) << 6 | 63 & buffer[start++]; else if (t > 239 && t < 365) {
                  t = ((7 & t) << 18 | (63 & buffer[start++]) << 12 | (63 & buffer[start++]) << 6 | 63 & buffer[start++]) - 65536;
                  chunk[i++] = 55296 + (t >> 10);
                  chunk[i++] = 56320 + (1023 & t);
                } else chunk[i++] = (15 & t) << 12 | (63 & buffer[start++]) << 6 | 63 & buffer[start++];
                if (i > 8191) {
                  (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
                  i = 0;
                }
              }
              if (parts) {
                i && parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
                return parts.join("");
              }
              return String.fromCharCode.apply(String, chunk.slice(0, i));
            };
            utf8.write = function utf8_write(string, buffer, offset) {
              var start = offset, c1, c2;
              for (var i = 0; i < string.length; ++i) {
                c1 = string.charCodeAt(i);
                if (c1 < 128) buffer[offset++] = c1; else if (c1 < 2048) {
                  buffer[offset++] = c1 >> 6 | 192;
                  buffer[offset++] = 63 & c1 | 128;
                } else if (55296 === (64512 & c1) && 56320 === (64512 & (c2 = string.charCodeAt(i + 1)))) {
                  c1 = 65536 + ((1023 & c1) << 10) + (1023 & c2);
                  ++i;
                  buffer[offset++] = c1 >> 18 | 240;
                  buffer[offset++] = c1 >> 12 & 63 | 128;
                  buffer[offset++] = c1 >> 6 & 63 | 128;
                  buffer[offset++] = 63 & c1 | 128;
                } else {
                  buffer[offset++] = c1 >> 12 | 224;
                  buffer[offset++] = c1 >> 6 & 63 | 128;
                  buffer[offset++] = 63 & c1 | 128;
                }
              }
              return offset - start;
            };
          }, {} ],
          11: [ function(require, module, exports) {
            module.exports = common;
            var commonRe = /\/|\./;
            function common(name, json) {
              if (!commonRe.test(name)) {
                name = "google/protobuf/" + name + ".proto";
                json = {
                  nested: {
                    google: {
                      nested: {
                        protobuf: {
                          nested: json
                        }
                      }
                    }
                  }
                };
              }
              common[name] = json;
            }
            common("any", {
              Any: {
                fields: {
                  type_url: {
                    type: "string",
                    id: 1
                  },
                  value: {
                    type: "bytes",
                    id: 2
                  }
                }
              }
            });
            var timeType;
            common("duration", {
              Duration: timeType = {
                fields: {
                  seconds: {
                    type: "int64",
                    id: 1
                  },
                  nanos: {
                    type: "int32",
                    id: 2
                  }
                }
              }
            });
            common("timestamp", {
              Timestamp: timeType
            });
            common("empty", {
              Empty: {
                fields: {}
              }
            });
            common("struct", {
              Struct: {
                fields: {
                  fields: {
                    keyType: "string",
                    type: "Value",
                    id: 1
                  }
                }
              },
              Value: {
                oneofs: {
                  kind: {
                    oneof: [ "nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue" ]
                  }
                },
                fields: {
                  nullValue: {
                    type: "NullValue",
                    id: 1
                  },
                  numberValue: {
                    type: "double",
                    id: 2
                  },
                  stringValue: {
                    type: "string",
                    id: 3
                  },
                  boolValue: {
                    type: "bool",
                    id: 4
                  },
                  structValue: {
                    type: "Struct",
                    id: 5
                  },
                  listValue: {
                    type: "ListValue",
                    id: 6
                  }
                }
              },
              NullValue: {
                values: {
                  NULL_VALUE: 0
                }
              },
              ListValue: {
                fields: {
                  values: {
                    rule: "repeated",
                    type: "Value",
                    id: 1
                  }
                }
              }
            });
            common("wrappers", {
              DoubleValue: {
                fields: {
                  value: {
                    type: "double",
                    id: 1
                  }
                }
              },
              FloatValue: {
                fields: {
                  value: {
                    type: "float",
                    id: 1
                  }
                }
              },
              Int64Value: {
                fields: {
                  value: {
                    type: "int64",
                    id: 1
                  }
                }
              },
              UInt64Value: {
                fields: {
                  value: {
                    type: "uint64",
                    id: 1
                  }
                }
              },
              Int32Value: {
                fields: {
                  value: {
                    type: "int32",
                    id: 1
                  }
                }
              },
              UInt32Value: {
                fields: {
                  value: {
                    type: "uint32",
                    id: 1
                  }
                }
              },
              BoolValue: {
                fields: {
                  value: {
                    type: "bool",
                    id: 1
                  }
                }
              },
              StringValue: {
                fields: {
                  value: {
                    type: "string",
                    id: 1
                  }
                }
              },
              BytesValue: {
                fields: {
                  value: {
                    type: "bytes",
                    id: 1
                  }
                }
              }
            });
            common("field_mask", {
              FieldMask: {
                fields: {
                  paths: {
                    rule: "repeated",
                    type: "string",
                    id: 1
                  }
                }
              }
            });
            common.get = function get(file) {
              return common[file] || null;
            };
          }, {} ],
          12: [ function(require, module, exports) {
            var converter = exports;
            var Enum = require(15), util = require(37);
            function genValuePartial_fromObject(gen, field, fieldIndex, prop) {
              if (field.resolvedType) if (field.resolvedType instanceof Enum) {
                gen("switch(d%s){", prop);
                for (var values = field.resolvedType.values, keys = Object.keys(values), i = 0; i < keys.length; ++i) {
                  field.repeated && values[keys[i]] === field.typeDefault && gen("default:");
                  gen("case%j:", keys[i])("case %i:", values[keys[i]])("m%s=%j", prop, values[keys[i]])("break");
                }
                gen("}");
              } else gen('if(typeof d%s!=="object")', prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", prop, fieldIndex, prop); else {
                var isUnsigned = false;
                switch (field.type) {
                 case "double":
                 case "float":
                  gen("m%s=Number(d%s)", prop, prop);
                  break;

                 case "uint32":
                 case "fixed32":
                  gen("m%s=d%s>>>0", prop, prop);
                  break;

                 case "int32":
                 case "sint32":
                 case "sfixed32":
                  gen("m%s=d%s|0", prop, prop);
                  break;

                 case "uint64":
                  isUnsigned = true;

                 case "int64":
                 case "sint64":
                 case "fixed64":
                 case "sfixed64":
                  gen("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", prop, prop, isUnsigned)('else if(typeof d%s==="string")', prop)("m%s=parseInt(d%s,10)", prop, prop)('else if(typeof d%s==="number")', prop)("m%s=d%s", prop, prop)('else if(typeof d%s==="object")', prop)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
                  break;

                 case "bytes":
                  gen('if(typeof d%s==="string")', prop)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)("else if(d%s.length)", prop)("m%s=d%s", prop, prop);
                  break;

                 case "string":
                  gen("m%s=String(d%s)", prop, prop);
                  break;

                 case "bool":
                  gen("m%s=Boolean(d%s)", prop, prop);
                }
              }
              return gen;
            }
            converter.fromObject = function fromObject(mtype) {
              var fields = mtype.fieldsArray;
              var gen = util.codegen([ "d" ], mtype.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
              if (!fields.length) return gen("return new this.ctor");
              gen("var m=new this.ctor");
              for (var i = 0; i < fields.length; ++i) {
                var field = fields[i].resolve(), prop = util.safeProp(field.name);
                if (field.map) {
                  gen("if(d%s){", prop)('if(typeof d%s!=="object")', prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s={}", prop)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
                  genValuePartial_fromObject(gen, field, i, prop + "[ks[i]]")("}")("}");
                } else if (field.repeated) {
                  gen("if(d%s){", prop)("if(!Array.isArray(d%s))", prop)("throw TypeError(%j)", field.fullName + ": array expected")("m%s=[]", prop)("for(var i=0;i<d%s.length;++i){", prop);
                  genValuePartial_fromObject(gen, field, i, prop + "[i]")("}")("}");
                } else {
                  field.resolvedType instanceof Enum || gen("if(d%s!=null){", prop);
                  genValuePartial_fromObject(gen, field, i, prop);
                  field.resolvedType instanceof Enum || gen("}");
                }
              }
              return gen("return m");
            };
            function genValuePartial_toObject(gen, field, fieldIndex, prop) {
              if (field.resolvedType) field.resolvedType instanceof Enum ? gen("d%s=o.enums===String?types[%i].values[m%s]:m%s", prop, fieldIndex, prop, prop) : gen("d%s=types[%i].toObject(m%s,o)", prop, fieldIndex, prop); else {
                var isUnsigned = false;
                switch (field.type) {
                 case "double":
                 case "float":
                  gen("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", prop, prop, prop, prop);
                  break;

                 case "uint64":
                  isUnsigned = true;

                 case "int64":
                 case "sint64":
                 case "fixed64":
                 case "sfixed64":
                  gen('if(typeof m%s==="number")', prop)("d%s=o.longs===String?String(m%s):m%s", prop, prop, prop)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", prop, prop, prop, prop, isUnsigned ? "true" : "", prop);
                  break;

                 case "bytes":
                  gen("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
                  break;

                 default:
                  gen("d%s=m%s", prop, prop);
                }
              }
              return gen;
            }
            converter.toObject = function toObject(mtype) {
              var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
              if (!fields.length) return util.codegen()("return {}");
              var gen = util.codegen([ "m", "o" ], mtype.name + "$toObject")("if(!o)")("o={}")("var d={}");
              var repeatedFields = [], mapFields = [], normalFields = [], i = 0;
              for (;i < fields.length; ++i) fields[i].partOf || (fields[i].resolve().repeated ? repeatedFields : fields[i].map ? mapFields : normalFields).push(fields[i]);
              if (repeatedFields.length) {
                gen("if(o.arrays||o.defaults){");
                for (i = 0; i < repeatedFields.length; ++i) gen("d%s=[]", util.safeProp(repeatedFields[i].name));
                gen("}");
              }
              if (mapFields.length) {
                gen("if(o.objects||o.defaults){");
                for (i = 0; i < mapFields.length; ++i) gen("d%s={}", util.safeProp(mapFields[i].name));
                gen("}");
              }
              if (normalFields.length) {
                gen("if(o.defaults){");
                for (i = 0; i < normalFields.length; ++i) {
                  var field = normalFields[i], prop = util.safeProp(field.name);
                  if (field.resolvedType instanceof Enum) gen("d%s=o.enums===String?%j:%j", prop, field.resolvedType.valuesById[field.typeDefault], field.typeDefault); else if (field["long"]) gen("if(util.Long){")("var n=new util.Long(%i,%i,%j)", field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", prop)("}else")("d%s=o.longs===String?%j:%i", prop, field.typeDefault.toString(), field.typeDefault.toNumber()); else if (field.bytes) {
                    var arrayDefault = "[" + Array.prototype.slice.call(field.typeDefault).join(",") + "]";
                    gen("if(o.bytes===String)d%s=%j", prop, String.fromCharCode.apply(String, field.typeDefault))("else{")("d%s=%s", prop, arrayDefault)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", prop, prop)("}");
                  } else gen("d%s=%j", prop, field.typeDefault);
                }
                gen("}");
              }
              var hasKs2 = false;
              for (i = 0; i < fields.length; ++i) {
                var field = fields[i], index = mtype._fieldsArray.indexOf(field), prop = util.safeProp(field.name);
                if (field.map) {
                  if (!hasKs2) {
                    hasKs2 = true;
                    gen("var ks2");
                  }
                  gen("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)("d%s={}", prop)("for(var j=0;j<ks2.length;++j){");
                  genValuePartial_toObject(gen, field, index, prop + "[ks2[j]]")("}");
                } else if (field.repeated) {
                  gen("if(m%s&&m%s.length){", prop, prop)("d%s=[]", prop)("for(var j=0;j<m%s.length;++j){", prop);
                  genValuePartial_toObject(gen, field, index, prop + "[j]")("}");
                } else {
                  gen("if(m%s!=null&&m.hasOwnProperty(%j)){", prop, field.name);
                  genValuePartial_toObject(gen, field, index, prop);
                  field.partOf && gen("if(o.oneofs)")("d%s=%j", util.safeProp(field.partOf.name), field.name);
                }
                gen("}");
              }
              return gen("return d");
            };
          }, {
            15: 15,
            37: 37
          } ],
          13: [ function(require, module, exports) {
            module.exports = decoder;
            var Enum = require(15), types = require(36), util = require(37);
            function missing(field) {
              return "missing required '" + field.name + "'";
            }
            function decoder(mtype) {
              var gen = util.codegen([ "r", "l" ], mtype.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (mtype.fieldsArray.filter(function(field) {
                return field.map;
              }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
              mtype.group && gen("if((t&7)===4)")("break");
              gen("switch(t>>>3){");
              var i = 0;
              for (;i < mtype.fieldsArray.length; ++i) {
                var field = mtype._fieldsArray[i].resolve(), type = field.resolvedType instanceof Enum ? "int32" : field.type, ref = "m" + util.safeProp(field.name);
                gen("case %i:", field.id);
                if (field.map) {
                  gen("if(%s===util.emptyObject)", ref)("%s={}", ref)("var c2 = r.uint32()+r.pos");
                  types.defaults[field.keyType] !== undefined ? gen("k=%j", types.defaults[field.keyType]) : gen("k=null");
                  types.defaults[type] !== undefined ? gen("value=%j", types.defaults[type]) : gen("value=null");
                  gen("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", field.keyType)("case 2:");
                  types.basic[type] === undefined ? gen("value=types[%i].decode(r,r.uint32())", i) : gen("value=r.%s()", type);
                  gen("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
                  types["long"][field.keyType] !== undefined ? gen('%s[typeof k==="object"?util.longToHash(k):k]=value', ref) : gen("%s[k]=value", ref);
                } else if (field.repeated) {
                  gen("if(!(%s&&%s.length))", ref, ref)("%s=[]", ref);
                  types.packed[type] !== undefined && gen("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", ref, type)("}else");
                  types.basic[type] === undefined ? gen(field.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", ref, i) : gen("%s.push(r.%s())", ref, type);
                } else types.basic[type] === undefined ? gen(field.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", ref, i) : gen("%s=r.%s()", ref, type);
                gen("break");
              }
              gen("default:")("r.skipType(t&7)")("break")("}")("}");
              for (i = 0; i < mtype._fieldsArray.length; ++i) {
                var rfield = mtype._fieldsArray[i];
                rfield.required && gen("if(!m.hasOwnProperty(%j))", rfield.name)("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
              }
              return gen("return m");
            }
          }, {
            15: 15,
            36: 36,
            37: 37
          } ],
          14: [ function(require, module, exports) {
            module.exports = encoder;
            var Enum = require(15), types = require(36), util = require(37);
            function genTypePartial(gen, field, fieldIndex, ref) {
              return field.resolvedType.group ? gen("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", fieldIndex, ref, (field.id << 3 | 3) >>> 0, (field.id << 3 | 4) >>> 0) : gen("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", fieldIndex, ref, (field.id << 3 | 2) >>> 0);
            }
            function encoder(mtype) {
              var gen = util.codegen([ "m", "w" ], mtype.name + "$encode")("if(!w)")("w=Writer.create()");
              var i, ref;
              var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
              for (var i = 0; i < fields.length; ++i) {
                var field = fields[i].resolve(), index = mtype._fieldsArray.indexOf(field), type = field.resolvedType instanceof Enum ? "int32" : field.type, wireType = types.basic[type];
                ref = "m" + util.safeProp(field.name);
                if (field.map) {
                  gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", ref, field.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (field.id << 3 | 2) >>> 0, 8 | types.mapKey[field.keyType], field.keyType);
                  wireType === undefined ? gen("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", index, ref) : gen(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | wireType, type, ref);
                  gen("}")("}");
                } else if (field.repeated) {
                  gen("if(%s!=null&&%s.length){", ref, ref);
                  if (field.packed && types.packed[type] !== undefined) gen("w.uint32(%i).fork()", (field.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", ref)("w.%s(%s[i])", type, ref)("w.ldelim()"); else {
                    gen("for(var i=0;i<%s.length;++i)", ref);
                    wireType === undefined ? genTypePartial(gen, field, index, ref + "[i]") : gen("w.uint32(%i).%s(%s[i])", (field.id << 3 | wireType) >>> 0, type, ref);
                  }
                  gen("}");
                } else {
                  field.optional && gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", ref, field.name);
                  wireType === undefined ? genTypePartial(gen, field, index, ref) : gen("w.uint32(%i).%s(%s)", (field.id << 3 | wireType) >>> 0, type, ref);
                }
              }
              return gen("return w");
            }
          }, {
            15: 15,
            36: 36,
            37: 37
          } ],
          15: [ function(require, module, exports) {
            module.exports = Enum;
            var ReflectionObject = require(24);
            ((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";
            var Namespace = require(23), util = require(37);
            function Enum(name, values, options, comment, comments) {
              ReflectionObject.call(this, name, options);
              if (values && "object" !== typeof values) throw TypeError("values must be an object");
              this.valuesById = {};
              this.values = Object.create(this.valuesById);
              this.comment = comment;
              this.comments = comments || {};
              this.reserved = undefined;
              if (values) for (var keys = Object.keys(values), i = 0; i < keys.length; ++i) "number" === typeof values[keys[i]] && (this.valuesById[this.values[keys[i]] = values[keys[i]]] = keys[i]);
            }
            Enum.fromJSON = function fromJSON(name, json) {
              var enm = new Enum(name, json.values, json.options, json.comment, json.comments);
              enm.reserved = json.reserved;
              return enm;
            };
            Enum.prototype.toJSON = function toJSON(toJSONOptions) {
              var keepComments = !!toJSONOptions && Boolean(toJSONOptions.keepComments);
              return util.toObject([ "options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", keepComments ? this.comment : undefined, "comments", keepComments ? this.comments : undefined ]);
            };
            Enum.prototype.add = function add(name, id, comment) {
              if (!util.isString(name)) throw TypeError("name must be a string");
              if (!util.isInteger(id)) throw TypeError("id must be an integer");
              if (this.values[name] !== undefined) throw Error("duplicate name '" + name + "' in " + this);
              if (this.isReservedId(id)) throw Error("id " + id + " is reserved in " + this);
              if (this.isReservedName(name)) throw Error("name '" + name + "' is reserved in " + this);
              if (this.valuesById[id] !== undefined) {
                if (!(this.options && this.options.allow_alias)) throw Error("duplicate id " + id + " in " + this);
                this.values[name] = id;
              } else this.valuesById[this.values[name] = id] = name;
              this.comments[name] = comment || null;
              return this;
            };
            Enum.prototype.remove = function remove(name) {
              if (!util.isString(name)) throw TypeError("name must be a string");
              var val = this.values[name];
              if (null == val) throw Error("name '" + name + "' does not exist in " + this);
              delete this.valuesById[val];
              delete this.values[name];
              delete this.comments[name];
              return this;
            };
            Enum.prototype.isReservedId = function isReservedId(id) {
              return Namespace.isReservedId(this.reserved, id);
            };
            Enum.prototype.isReservedName = function isReservedName(name) {
              return Namespace.isReservedName(this.reserved, name);
            };
          }, {
            23: 23,
            24: 24,
            37: 37
          } ],
          16: [ function(require, module, exports) {
            module.exports = Field;
            var ReflectionObject = require(24);
            ((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";
            var Enum = require(15), types = require(36), util = require(37);
            var Type;
            var ruleRe = /^required|optional|repeated$/;
            Field.fromJSON = function fromJSON(name, json) {
              return new Field(name, json.id, json.type, json.rule, json.extend, json.options, json.comment);
            };
            function Field(name, id, type, rule, extend, options, comment) {
              if (util.isObject(rule)) {
                comment = extend;
                options = rule;
                rule = extend = undefined;
              } else if (util.isObject(extend)) {
                comment = options;
                options = extend;
                extend = undefined;
              }
              ReflectionObject.call(this, name, options);
              if (!util.isInteger(id) || id < 0) throw TypeError("id must be a non-negative integer");
              if (!util.isString(type)) throw TypeError("type must be a string");
              if (rule !== undefined && !ruleRe.test(rule = rule.toString().toLowerCase())) throw TypeError("rule must be a string rule");
              if (extend !== undefined && !util.isString(extend)) throw TypeError("extend must be a string");
              this.rule = rule && "optional" !== rule ? rule : undefined;
              this.type = type;
              this.id = id;
              this.extend = extend || undefined;
              this.required = "required" === rule;
              this.optional = !this.required;
              this.repeated = "repeated" === rule;
              this.map = false;
              this.message = null;
              this.partOf = null;
              this.typeDefault = null;
              this.defaultValue = null;
              this["long"] = !!util.Long && types["long"][type] !== undefined;
              this.bytes = "bytes" === type;
              this.resolvedType = null;
              this.extensionField = null;
              this.declaringField = null;
              this._packed = null;
              this.comment = comment;
            }
            Object.defineProperty(Field.prototype, "packed", {
              get: function get() {
                null === this._packed && (this._packed = false !== this.getOption("packed"));
                return this._packed;
              }
            });
            Field.prototype.setOption = function setOption(name, value, ifNotSet) {
              "packed" === name && (this._packed = null);
              return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
            };
            Field.prototype.toJSON = function toJSON(toJSONOptions) {
              var keepComments = !!toJSONOptions && Boolean(toJSONOptions.keepComments);
              return util.toObject([ "rule", "optional" !== this.rule && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", keepComments ? this.comment : undefined ]);
            };
            Field.prototype.resolve = function resolve() {
              if (this.resolved) return this;
              if ((this.typeDefault = types.defaults[this.type]) === undefined) {
                this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
                this.resolvedType instanceof Type ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
              }
              if (this.options && null != this.options["default"]) {
                this.typeDefault = this.options["default"];
                this.resolvedType instanceof Enum && "string" === typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault]);
              }
              if (this.options) {
                true !== this.options.packed && (this.options.packed === undefined || !this.resolvedType || this.resolvedType instanceof Enum) || delete this.options.packed;
                Object.keys(this.options).length || (this.options = undefined);
              }
              if (this["long"]) {
                this.typeDefault = util.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0));
                Object.freeze && Object.freeze(this.typeDefault);
              } else if (this.bytes && "string" === typeof this.typeDefault) {
                var buf;
                util.base64.test(this.typeDefault) ? util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0) : util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
                this.typeDefault = buf;
              }
              this.map ? this.defaultValue = util.emptyObject : this.repeated ? this.defaultValue = util.emptyArray : this.defaultValue = this.typeDefault;
              this.parent instanceof Type && (this.parent.ctor.prototype[this.name] = this.defaultValue);
              return ReflectionObject.prototype.resolve.call(this);
            };
            Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {
              "function" === typeof fieldType ? fieldType = util.decorateType(fieldType).name : fieldType && "object" === typeof fieldType && (fieldType = util.decorateEnum(fieldType).name);
              return function fieldDecorator(prototype, fieldName) {
                util.decorateType(prototype.constructor).add(new Field(fieldName, fieldId, fieldType, fieldRule, {
                  default: defaultValue
                }));
              };
            };
            Field._configure = function configure(Type_) {
              Type = Type_;
            };
          }, {
            15: 15,
            24: 24,
            36: 36,
            37: 37
          } ],
          17: [ function(require, module, exports) {
            var protobuf = module.exports = require(18);
            protobuf.build = "light";
            function load(filename, root, callback) {
              if ("function" === typeof root) {
                callback = root;
                root = new protobuf.Root();
              } else root || (root = new protobuf.Root());
              return root.load(filename, callback);
            }
            protobuf.load = load;
            function loadSync(filename, root) {
              root || (root = new protobuf.Root());
              return root.loadSync(filename);
            }
            protobuf.loadSync = loadSync;
            protobuf.encoder = require(14);
            protobuf.decoder = require(13);
            protobuf.verifier = require(40);
            protobuf.converter = require(12);
            protobuf.ReflectionObject = require(24);
            protobuf.Namespace = require(23);
            protobuf.Root = require(29);
            protobuf.Enum = require(15);
            protobuf.Type = require(35);
            protobuf.Field = require(16);
            protobuf.OneOf = require(25);
            protobuf.MapField = require(20);
            protobuf.Service = require(33);
            protobuf.Method = require(22);
            protobuf.Message = require(21);
            protobuf.wrappers = require(41);
            protobuf.types = require(36);
            protobuf.util = require(37);
            protobuf.ReflectionObject._configure(protobuf.Root);
            protobuf.Namespace._configure(protobuf.Type, protobuf.Service, protobuf.Enum);
            protobuf.Root._configure(protobuf.Type);
            protobuf.Field._configure(protobuf.Type);
          }, {
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            18: 18,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            29: 29,
            33: 33,
            35: 35,
            36: 36,
            37: 37,
            40: 40,
            41: 41
          } ],
          18: [ function(require, module, exports) {
            var protobuf = exports;
            protobuf.build = "minimal";
            protobuf.Writer = require(42);
            protobuf.BufferWriter = require(43);
            protobuf.Reader = require(27);
            protobuf.BufferReader = require(28);
            protobuf.util = require(39);
            protobuf.rpc = require(31);
            protobuf.roots = require(30);
            protobuf.configure = configure;
            function configure() {
              protobuf.util._configure();
              protobuf.Writer._configure(protobuf.BufferWriter);
              protobuf.Reader._configure(protobuf.BufferReader);
            }
            configure();
          }, {
            27: 27,
            28: 28,
            30: 30,
            31: 31,
            39: 39,
            42: 42,
            43: 43
          } ],
          19: [ function(require, module, exports) {
            var protobuf = module.exports = require(17);
            protobuf.build = "full";
            protobuf.tokenize = require(34);
            protobuf.parse = require(26);
            protobuf.common = require(11);
            protobuf.Root._configure(protobuf.Type, protobuf.parse, protobuf.common);
          }, {
            11: 11,
            17: 17,
            26: 26,
            34: 34
          } ],
          20: [ function(require, module, exports) {
            module.exports = MapField;
            var Field = require(16);
            ((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";
            var types = require(36), util = require(37);
            function MapField(name, id, keyType, type, options, comment) {
              Field.call(this, name, id, type, undefined, undefined, options, comment);
              if (!util.isString(keyType)) throw TypeError("keyType must be a string");
              this.keyType = keyType;
              this.resolvedKeyType = null;
              this.map = true;
            }
            MapField.fromJSON = function fromJSON(name, json) {
              return new MapField(name, json.id, json.keyType, json.type, json.options, json.comment);
            };
            MapField.prototype.toJSON = function toJSON(toJSONOptions) {
              var keepComments = !!toJSONOptions && Boolean(toJSONOptions.keepComments);
              return util.toObject([ "keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", keepComments ? this.comment : undefined ]);
            };
            MapField.prototype.resolve = function resolve() {
              if (this.resolved) return this;
              if (types.mapKey[this.keyType] === undefined) throw Error("invalid key type: " + this.keyType);
              return Field.prototype.resolve.call(this);
            };
            MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {
              "function" === typeof fieldValueType ? fieldValueType = util.decorateType(fieldValueType).name : fieldValueType && "object" === typeof fieldValueType && (fieldValueType = util.decorateEnum(fieldValueType).name);
              return function mapFieldDecorator(prototype, fieldName) {
                util.decorateType(prototype.constructor).add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
              };
            };
          }, {
            16: 16,
            36: 36,
            37: 37
          } ],
          21: [ function(require, module, exports) {
            module.exports = Message;
            var util = require(39);
            function Message(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) this[keys[i]] = properties[keys[i]];
            }
            Message.create = function create(properties) {
              return this.$type.create(properties);
            };
            Message.encode = function encode(message, writer) {
              return this.$type.encode(message, writer);
            };
            Message.encodeDelimited = function encodeDelimited(message, writer) {
              return this.$type.encodeDelimited(message, writer);
            };
            Message.decode = function decode(reader) {
              return this.$type.decode(reader);
            };
            Message.decodeDelimited = function decodeDelimited(reader) {
              return this.$type.decodeDelimited(reader);
            };
            Message.verify = function verify(message) {
              return this.$type.verify(message);
            };
            Message.fromObject = function fromObject(object) {
              return this.$type.fromObject(object);
            };
            Message.toObject = function toObject(message, options) {
              return this.$type.toObject(message, options);
            };
            Message.prototype.toJSON = function toJSON() {
              return this.$type.toObject(this, util.toJSONOptions);
            };
          }, {
            39: 39
          } ],
          22: [ function(require, module, exports) {
            module.exports = Method;
            var ReflectionObject = require(24);
            ((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";
            var util = require(37);
            function Method(name, type, requestType, responseType, requestStream, responseStream, options, comment) {
              if (util.isObject(requestStream)) {
                options = requestStream;
                requestStream = responseStream = undefined;
              } else if (util.isObject(responseStream)) {
                options = responseStream;
                responseStream = undefined;
              }
              if (!(type === undefined || util.isString(type))) throw TypeError("type must be a string");
              if (!util.isString(requestType)) throw TypeError("requestType must be a string");
              if (!util.isString(responseType)) throw TypeError("responseType must be a string");
              ReflectionObject.call(this, name, options);
              this.type = type || "rpc";
              this.requestType = requestType;
              this.requestStream = !!requestStream || undefined;
              this.responseType = responseType;
              this.responseStream = !!responseStream || undefined;
              this.resolvedRequestType = null;
              this.resolvedResponseType = null;
              this.comment = comment;
            }
            Method.fromJSON = function fromJSON(name, json) {
              return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment);
            };
            Method.prototype.toJSON = function toJSON(toJSONOptions) {
              var keepComments = !!toJSONOptions && Boolean(toJSONOptions.keepComments);
              return util.toObject([ "type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", keepComments ? this.comment : undefined ]);
            };
            Method.prototype.resolve = function resolve() {
              if (this.resolved) return this;
              this.resolvedRequestType = this.parent.lookupType(this.requestType);
              this.resolvedResponseType = this.parent.lookupType(this.responseType);
              return ReflectionObject.prototype.resolve.call(this);
            };
          }, {
            24: 24,
            37: 37
          } ],
          23: [ function(require, module, exports) {
            module.exports = Namespace;
            var ReflectionObject = require(24);
            ((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";
            var Field = require(16), util = require(37);
            var Type, Service, Enum;
            Namespace.fromJSON = function fromJSON(name, json) {
              return new Namespace(name, json.options).addJSON(json.nested);
            };
            function arrayToJSON(array, toJSONOptions) {
              if (!(array && array.length)) return undefined;
              var obj = {};
              for (var i = 0; i < array.length; ++i) obj[array[i].name] = array[i].toJSON(toJSONOptions);
              return obj;
            }
            Namespace.arrayToJSON = arrayToJSON;
            Namespace.isReservedId = function isReservedId(reserved, id) {
              if (reserved) for (var i = 0; i < reserved.length; ++i) if ("string" !== typeof reserved[i] && reserved[i][0] <= id && reserved[i][1] > id) return true;
              return false;
            };
            Namespace.isReservedName = function isReservedName(reserved, name) {
              if (reserved) for (var i = 0; i < reserved.length; ++i) if (reserved[i] === name) return true;
              return false;
            };
            function Namespace(name, options) {
              ReflectionObject.call(this, name, options);
              this.nested = undefined;
              this._nestedArray = null;
            }
            function clearCache(namespace) {
              namespace._nestedArray = null;
              return namespace;
            }
            Object.defineProperty(Namespace.prototype, "nestedArray", {
              get: function get() {
                return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
              }
            });
            Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
              return util.toObject([ "options", this.options, "nested", arrayToJSON(this.nestedArray, toJSONOptions) ]);
            };
            Namespace.prototype.addJSON = function addJSON(nestedJson) {
              var ns = this;
              if (nestedJson) for (var names = Object.keys(nestedJson), i = 0, nested; i < names.length; ++i) {
                nested = nestedJson[names[i]];
                ns.add((nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : nested.id !== undefined ? Field.fromJSON : Namespace.fromJSON)(names[i], nested));
              }
              return this;
            };
            Namespace.prototype.get = function get(name) {
              return this.nested && this.nested[name] || null;
            };
            Namespace.prototype.getEnum = function getEnum(name) {
              if (this.nested && this.nested[name] instanceof Enum) return this.nested[name].values;
              throw Error("no such enum: " + name);
            };
            Namespace.prototype.add = function add(object) {
              if (!(object instanceof Field && object.extend !== undefined || object instanceof Type || object instanceof Enum || object instanceof Service || object instanceof Namespace)) throw TypeError("object must be a valid nested object");
              if (this.nested) {
                var prev = this.get(object.name);
                if (prev) {
                  if (!(prev instanceof Namespace && object instanceof Namespace) || prev instanceof Type || prev instanceof Service) throw Error("duplicate name '" + object.name + "' in " + this);
                  var nested = prev.nestedArray;
                  for (var i = 0; i < nested.length; ++i) object.add(nested[i]);
                  this.remove(prev);
                  this.nested || (this.nested = {});
                  object.setOptions(prev.options, true);
                }
              } else this.nested = {};
              this.nested[object.name] = object;
              object.onAdd(this);
              return clearCache(this);
            };
            Namespace.prototype.remove = function remove(object) {
              if (!(object instanceof ReflectionObject)) throw TypeError("object must be a ReflectionObject");
              if (object.parent !== this) throw Error(object + " is not a member of " + this);
              delete this.nested[object.name];
              Object.keys(this.nested).length || (this.nested = undefined);
              object.onRemove(this);
              return clearCache(this);
            };
            Namespace.prototype.define = function define(path, json) {
              if (util.isString(path)) path = path.split("."); else if (!Array.isArray(path)) throw TypeError("illegal path");
              if (path && path.length && "" === path[0]) throw Error("path must be relative");
              var ptr = this;
              while (path.length > 0) {
                var part = path.shift();
                if (ptr.nested && ptr.nested[part]) {
                  ptr = ptr.nested[part];
                  if (!(ptr instanceof Namespace)) throw Error("path conflicts with non-namespace objects");
                } else ptr.add(ptr = new Namespace(part));
              }
              json && ptr.addJSON(json);
              return ptr;
            };
            Namespace.prototype.resolveAll = function resolveAll() {
              var nested = this.nestedArray, i = 0;
              while (i < nested.length) nested[i] instanceof Namespace ? nested[i++].resolveAll() : nested[i++].resolve();
              return this.resolve();
            };
            Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {
              if ("boolean" === typeof filterTypes) {
                parentAlreadyChecked = filterTypes;
                filterTypes = undefined;
              } else filterTypes && !Array.isArray(filterTypes) && (filterTypes = [ filterTypes ]);
              if (util.isString(path) && path.length) {
                if ("." === path) return this.root;
                path = path.split(".");
              } else if (!path.length) return this;
              if ("" === path[0]) return this.root.lookup(path.slice(1), filterTypes);
              var found = this.get(path[0]);
              if (found) {
                if (1 === path.length) {
                  if (!filterTypes || filterTypes.indexOf(found.constructor) > -1) return found;
                } else if (found instanceof Namespace && (found = found.lookup(path.slice(1), filterTypes, true))) return found;
              } else for (var i = 0; i < this.nestedArray.length; ++i) if (this._nestedArray[i] instanceof Namespace && (found = this._nestedArray[i].lookup(path, filterTypes, true))) return found;
              if (null === this.parent || parentAlreadyChecked) return null;
              return this.parent.lookup(path, filterTypes);
            };
            Namespace.prototype.lookupType = function lookupType(path) {
              var found = this.lookup(path, [ Type ]);
              if (!found) throw Error("no such type: " + path);
              return found;
            };
            Namespace.prototype.lookupEnum = function lookupEnum(path) {
              var found = this.lookup(path, [ Enum ]);
              if (!found) throw Error("no such Enum '" + path + "' in " + this);
              return found;
            };
            Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
              var found = this.lookup(path, [ Type, Enum ]);
              if (!found) throw Error("no such Type or Enum '" + path + "' in " + this);
              return found;
            };
            Namespace.prototype.lookupService = function lookupService(path) {
              var found = this.lookup(path, [ Service ]);
              if (!found) throw Error("no such Service '" + path + "' in " + this);
              return found;
            };
            Namespace._configure = function(Type_, Service_, Enum_) {
              Type = Type_;
              Service = Service_;
              Enum = Enum_;
            };
          }, {
            16: 16,
            24: 24,
            37: 37
          } ],
          24: [ function(require, module, exports) {
            module.exports = ReflectionObject;
            ReflectionObject.className = "ReflectionObject";
            var util = require(37);
            var Root;
            function ReflectionObject(name, options) {
              if (!util.isString(name)) throw TypeError("name must be a string");
              if (options && !util.isObject(options)) throw TypeError("options must be an object");
              this.options = options;
              this.parsedOptions = null;
              this.name = name;
              this.parent = null;
              this.resolved = false;
              this.comment = null;
              this.filename = null;
            }
            Object.defineProperties(ReflectionObject.prototype, {
              root: {
                get: function get() {
                  var ptr = this;
                  while (null !== ptr.parent) ptr = ptr.parent;
                  return ptr;
                }
              },
              fullName: {
                get: function get() {
                  var path = [ this.name ], ptr = this.parent;
                  while (ptr) {
                    path.unshift(ptr.name);
                    ptr = ptr.parent;
                  }
                  return path.join(".");
                }
              }
            });
            ReflectionObject.prototype.toJSON = function toJSON() {
              throw Error();
            };
            ReflectionObject.prototype.onAdd = function onAdd(parent) {
              this.parent && this.parent !== parent && this.parent.remove(this);
              this.parent = parent;
              this.resolved = false;
              var root = parent.root;
              root instanceof Root && root._handleAdd(this);
            };
            ReflectionObject.prototype.onRemove = function onRemove(parent) {
              var root = parent.root;
              root instanceof Root && root._handleRemove(this);
              this.parent = null;
              this.resolved = false;
            };
            ReflectionObject.prototype.resolve = function resolve() {
              if (this.resolved) return this;
              this.root instanceof Root && (this.resolved = true);
              return this;
            };
            ReflectionObject.prototype.getOption = function getOption(name) {
              if (this.options) return this.options[name];
              return undefined;
            };
            ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
              ifNotSet && this.options && this.options[name] !== undefined || ((this.options || (this.options = {}))[name] = value);
              return this;
            };
            ReflectionObject.prototype.setParsedOption = function setParsedOption(name, value, propName) {
              this.parsedOptions || (this.parsedOptions = []);
              var parsedOptions = this.parsedOptions;
              if (propName) {
                var opt = parsedOptions.find(function(opt) {
                  return Object.prototype.hasOwnProperty.call(opt, name);
                });
                if (opt) {
                  var newValue = opt[name];
                  util.setProperty(newValue, propName, value);
                } else {
                  opt = {};
                  opt[name] = util.setProperty({}, propName, value);
                  parsedOptions.push(opt);
                }
              } else {
                var newOpt = {};
                newOpt[name] = value;
                parsedOptions.push(newOpt);
              }
              return this;
            };
            ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
              if (options) for (var keys = Object.keys(options), i = 0; i < keys.length; ++i) this.setOption(keys[i], options[keys[i]], ifNotSet);
              return this;
            };
            ReflectionObject.prototype.toString = function toString() {
              var className = this.constructor.className, fullName = this.fullName;
              if (fullName.length) return className + " " + fullName;
              return className;
            };
            ReflectionObject._configure = function(Root_) {
              Root = Root_;
            };
          }, {
            37: 37
          } ],
          25: [ function(require, module, exports) {
            module.exports = OneOf;
            var ReflectionObject = require(24);
            ((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";
            var Field = require(16), util = require(37);
            function OneOf(name, fieldNames, options, comment) {
              if (!Array.isArray(fieldNames)) {
                options = fieldNames;
                fieldNames = undefined;
              }
              ReflectionObject.call(this, name, options);
              if (!(fieldNames === undefined || Array.isArray(fieldNames))) throw TypeError("fieldNames must be an Array");
              this.oneof = fieldNames || [];
              this.fieldsArray = [];
              this.comment = comment;
            }
            OneOf.fromJSON = function fromJSON(name, json) {
              return new OneOf(name, json.oneof, json.options, json.comment);
            };
            OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
              var keepComments = !!toJSONOptions && Boolean(toJSONOptions.keepComments);
              return util.toObject([ "options", this.options, "oneof", this.oneof, "comment", keepComments ? this.comment : undefined ]);
            };
            function addFieldsToParent(oneof) {
              if (oneof.parent) for (var i = 0; i < oneof.fieldsArray.length; ++i) oneof.fieldsArray[i].parent || oneof.parent.add(oneof.fieldsArray[i]);
            }
            OneOf.prototype.add = function add(field) {
              if (!(field instanceof Field)) throw TypeError("field must be a Field");
              field.parent && field.parent !== this.parent && field.parent.remove(field);
              this.oneof.push(field.name);
              this.fieldsArray.push(field);
              field.partOf = this;
              addFieldsToParent(this);
              return this;
            };
            OneOf.prototype.remove = function remove(field) {
              if (!(field instanceof Field)) throw TypeError("field must be a Field");
              var index = this.fieldsArray.indexOf(field);
              if (index < 0) throw Error(field + " is not a member of " + this);
              this.fieldsArray.splice(index, 1);
              index = this.oneof.indexOf(field.name);
              index > -1 && this.oneof.splice(index, 1);
              field.partOf = null;
              return this;
            };
            OneOf.prototype.onAdd = function onAdd(parent) {
              ReflectionObject.prototype.onAdd.call(this, parent);
              var self = this;
              for (var i = 0; i < this.oneof.length; ++i) {
                var field = parent.get(this.oneof[i]);
                if (field && !field.partOf) {
                  field.partOf = self;
                  self.fieldsArray.push(field);
                }
              }
              addFieldsToParent(this);
            };
            OneOf.prototype.onRemove = function onRemove(parent) {
              for (var i = 0, field; i < this.fieldsArray.length; ++i) (field = this.fieldsArray[i]).parent && field.parent.remove(field);
              ReflectionObject.prototype.onRemove.call(this, parent);
            };
            OneOf.d = function decorateOneOf() {
              var fieldNames = new Array(arguments.length), index = 0;
              while (index < arguments.length) fieldNames[index] = arguments[index++];
              return function oneOfDecorator(prototype, oneofName) {
                util.decorateType(prototype.constructor).add(new OneOf(oneofName, fieldNames));
                Object.defineProperty(prototype, oneofName, {
                  get: util.oneOfGetter(fieldNames),
                  set: util.oneOfSetter(fieldNames)
                });
              };
            };
          }, {
            16: 16,
            24: 24,
            37: 37
          } ],
          26: [ function(require, module, exports) {
            module.exports = parse;
            parse.filename = null;
            parse.defaults = {
              keepCase: false
            };
            var tokenize = require(34), Root = require(29), Type = require(35), Field = require(16), MapField = require(20), OneOf = require(25), Enum = require(15), Service = require(33), Method = require(22), types = require(36), util = require(37);
            var base10Re = /^[1-9][0-9]*$/, base10NegRe = /^-?[1-9][0-9]*$/, base16Re = /^0[x][0-9a-fA-F]+$/, base16NegRe = /^-?0[x][0-9a-fA-F]+$/, base8Re = /^0[0-7]+$/, base8NegRe = /^-?0[0-7]+$/, numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/, nameRe = /^[a-zA-Z_][a-zA-Z_0-9]*$/, typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/, fqTypeRefRe = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
            function parse(source, root, options) {
              if (!(root instanceof Root)) {
                options = root;
                root = new Root();
              }
              options || (options = parse.defaults);
              var preferTrailingComment = options.preferTrailingComment || false;
              var tn = tokenize(source, options.alternateCommentMode || false), next = tn.next, push = tn.push, peek = tn.peek, skip = tn.skip, cmnt = tn.cmnt;
              var head = true, pkg, imports, weakImports, syntax, isProto3 = false;
              var ptr = root;
              var applyCase = options.keepCase ? function(name) {
                return name;
              } : util.camelCase;
              function illegal(token, name, insideTryCatch) {
                var filename = parse.filename;
                insideTryCatch || (parse.filename = null);
                return Error("illegal " + (name || "token") + " '" + token + "' (" + (filename ? filename + ", " : "") + "line " + tn.line + ")");
              }
              function readString() {
                var values = [], token;
                do {
                  if ('"' !== (token = next()) && "'" !== token) throw illegal(token);
                  values.push(next());
                  skip(token);
                  token = peek();
                } while ('"' === token || "'" === token);
                return values.join("");
              }
              function readValue(acceptTypeRef) {
                var token = next();
                switch (token) {
                 case "'":
                 case '"':
                  push(token);
                  return readString();

                 case "true":
                 case "TRUE":
                  return true;

                 case "false":
                 case "FALSE":
                  return false;
                }
                try {
                  return parseNumber(token, true);
                } catch (e) {
                  if (acceptTypeRef && typeRefRe.test(token)) return token;
                  throw illegal(token, "value");
                }
              }
              function readRanges(target, acceptStrings) {
                var token, start;
                do {
                  !acceptStrings || '"' !== (token = peek()) && "'" !== token ? target.push([ start = parseId(next()), skip("to", true) ? parseId(next()) : start ]) : target.push(readString());
                } while (skip(",", true));
                skip(";");
              }
              function parseNumber(token, insideTryCatch) {
                var sign = 1;
                if ("-" === token.charAt(0)) {
                  sign = -1;
                  token = token.substring(1);
                }
                switch (token) {
                 case "inf":
                 case "INF":
                 case "Inf":
                  return Infinity * sign;

                 case "nan":
                 case "NAN":
                 case "Nan":
                 case "NaN":
                  return NaN;

                 case "0":
                  return 0;
                }
                if (base10Re.test(token)) return sign * parseInt(token, 10);
                if (base16Re.test(token)) return sign * parseInt(token, 16);
                if (base8Re.test(token)) return sign * parseInt(token, 8);
                if (numberRe.test(token)) return sign * parseFloat(token);
                throw illegal(token, "number", insideTryCatch);
              }
              function parseId(token, acceptNegative) {
                switch (token) {
                 case "max":
                 case "MAX":
                 case "Max":
                  return 536870911;

                 case "0":
                  return 0;
                }
                if (!acceptNegative && "-" === token.charAt(0)) throw illegal(token, "id");
                if (base10NegRe.test(token)) return parseInt(token, 10);
                if (base16NegRe.test(token)) return parseInt(token, 16);
                if (base8NegRe.test(token)) return parseInt(token, 8);
                throw illegal(token, "id");
              }
              function parsePackage() {
                if (pkg !== undefined) throw illegal("package");
                pkg = next();
                if (!typeRefRe.test(pkg)) throw illegal(pkg, "name");
                ptr = ptr.define(pkg);
                skip(";");
              }
              function parseImport() {
                var token = peek();
                var whichImports;
                switch (token) {
                 case "weak":
                  whichImports = weakImports || (weakImports = []);
                  next();
                  break;

                 case "public":
                  next();

                 default:
                  whichImports = imports || (imports = []);
                }
                token = readString();
                skip(";");
                whichImports.push(token);
              }
              function parseSyntax() {
                skip("=");
                syntax = readString();
                isProto3 = "proto3" === syntax;
                if (!isProto3 && "proto2" !== syntax) throw illegal(syntax, "syntax");
                skip(";");
              }
              function parseCommon(parent, token) {
                switch (token) {
                 case "option":
                  parseOption(parent, token);
                  skip(";");
                  return true;

                 case "message":
                  parseType(parent, token);
                  return true;

                 case "enum":
                  parseEnum(parent, token);
                  return true;

                 case "service":
                  parseService(parent, token);
                  return true;

                 case "extend":
                  parseExtension(parent, token);
                  return true;
                }
                return false;
              }
              function ifBlock(obj, fnIf, fnElse) {
                var trailingLine = tn.line;
                if (obj) {
                  "string" !== typeof obj.comment && (obj.comment = cmnt());
                  obj.filename = parse.filename;
                }
                if (skip("{", true)) {
                  var token;
                  while ("}" !== (token = next())) fnIf(token);
                  skip(";", true);
                } else {
                  fnElse && fnElse();
                  skip(";");
                  obj && ("string" !== typeof obj.comment || preferTrailingComment) && (obj.comment = cmnt(trailingLine) || obj.comment);
                }
              }
              function parseType(parent, token) {
                if (!nameRe.test(token = next())) throw illegal(token, "type name");
                var type = new Type(token);
                ifBlock(type, function parseType_block(token) {
                  if (parseCommon(type, token)) return;
                  switch (token) {
                   case "map":
                    parseMapField(type, token);
                    break;

                   case "required":
                   case "optional":
                   case "repeated":
                    parseField(type, token);
                    break;

                   case "oneof":
                    parseOneOf(type, token);
                    break;

                   case "extensions":
                    readRanges(type.extensions || (type.extensions = []));
                    break;

                   case "reserved":
                    readRanges(type.reserved || (type.reserved = []), true);
                    break;

                   default:
                    if (!isProto3 || !typeRefRe.test(token)) throw illegal(token);
                    push(token);
                    parseField(type, "optional");
                  }
                });
                parent.add(type);
              }
              function parseField(parent, rule, extend) {
                var type = next();
                if ("group" === type) {
                  parseGroup(parent, rule);
                  return;
                }
                if (!typeRefRe.test(type)) throw illegal(type, "type");
                var name = next();
                if (!nameRe.test(name)) throw illegal(name, "name");
                name = applyCase(name);
                skip("=");
                var field = new Field(name, parseId(next()), type, rule, extend);
                ifBlock(field, function parseField_block(token) {
                  if ("option" !== token) throw illegal(token);
                  parseOption(field, token);
                  skip(";");
                }, function parseField_line() {
                  parseInlineOptions(field);
                });
                parent.add(field);
                isProto3 || !field.repeated || types.packed[type] === undefined && types.basic[type] !== undefined || field.setOption("packed", false, true);
              }
              function parseGroup(parent, rule) {
                var name = next();
                if (!nameRe.test(name)) throw illegal(name, "name");
                var fieldName = util.lcFirst(name);
                name === fieldName && (name = util.ucFirst(name));
                skip("=");
                var id = parseId(next());
                var type = new Type(name);
                type.group = true;
                var field = new Field(fieldName, id, name, rule);
                field.filename = parse.filename;
                ifBlock(type, function parseGroup_block(token) {
                  switch (token) {
                   case "option":
                    parseOption(type, token);
                    skip(";");
                    break;

                   case "required":
                   case "optional":
                   case "repeated":
                    parseField(type, token);
                    break;

                   default:
                    throw illegal(token);
                  }
                });
                parent.add(type).add(field);
              }
              function parseMapField(parent) {
                skip("<");
                var keyType = next();
                if (types.mapKey[keyType] === undefined) throw illegal(keyType, "type");
                skip(",");
                var valueType = next();
                if (!typeRefRe.test(valueType)) throw illegal(valueType, "type");
                skip(">");
                var name = next();
                if (!nameRe.test(name)) throw illegal(name, "name");
                skip("=");
                var field = new MapField(applyCase(name), parseId(next()), keyType, valueType);
                ifBlock(field, function parseMapField_block(token) {
                  if ("option" !== token) throw illegal(token);
                  parseOption(field, token);
                  skip(";");
                }, function parseMapField_line() {
                  parseInlineOptions(field);
                });
                parent.add(field);
              }
              function parseOneOf(parent, token) {
                if (!nameRe.test(token = next())) throw illegal(token, "name");
                var oneof = new OneOf(applyCase(token));
                ifBlock(oneof, function parseOneOf_block(token) {
                  if ("option" === token) {
                    parseOption(oneof, token);
                    skip(";");
                  } else {
                    push(token);
                    parseField(oneof, "optional");
                  }
                });
                parent.add(oneof);
              }
              function parseEnum(parent, token) {
                if (!nameRe.test(token = next())) throw illegal(token, "name");
                var enm = new Enum(token);
                ifBlock(enm, function parseEnum_block(token) {
                  switch (token) {
                   case "option":
                    parseOption(enm, token);
                    skip(";");
                    break;

                   case "reserved":
                    readRanges(enm.reserved || (enm.reserved = []), true);
                    break;

                   default:
                    parseEnumValue(enm, token);
                  }
                });
                parent.add(enm);
              }
              function parseEnumValue(parent, token) {
                if (!nameRe.test(token)) throw illegal(token, "name");
                skip("=");
                var value = parseId(next(), true), dummy = {};
                ifBlock(dummy, function parseEnumValue_block(token) {
                  if ("option" !== token) throw illegal(token);
                  parseOption(dummy, token);
                  skip(";");
                }, function parseEnumValue_line() {
                  parseInlineOptions(dummy);
                });
                parent.add(token, value, dummy.comment);
              }
              function parseOption(parent, token) {
                var isCustom = skip("(", true);
                if (!typeRefRe.test(token = next())) throw illegal(token, "name");
                var name = token;
                var option = name;
                var propName;
                if (isCustom) {
                  skip(")");
                  name = "(" + name + ")";
                  option = name;
                  token = peek();
                  if (fqTypeRefRe.test(token)) {
                    propName = token.substr(1);
                    name += token;
                    next();
                  }
                }
                skip("=");
                var optionValue = parseOptionValue(parent, name);
                setParsedOption(parent, option, optionValue, propName);
              }
              function parseOptionValue(parent, name) {
                if (skip("{", true)) {
                  var result = {};
                  while (!skip("}", true)) {
                    if (!nameRe.test(token = next())) throw illegal(token, "name");
                    var value;
                    var propName = token;
                    if ("{" === peek()) value = parseOptionValue(parent, name + "." + token); else {
                      skip(":");
                      if ("{" === peek()) value = parseOptionValue(parent, name + "." + token); else {
                        value = readValue(true);
                        setOption(parent, name + "." + token, value);
                      }
                    }
                    var prevValue = result[propName];
                    prevValue && (value = [].concat(prevValue).concat(value));
                    result[propName] = value;
                    skip(",", true);
                  }
                  return result;
                }
                var simpleValue = readValue(true);
                setOption(parent, name, simpleValue);
                return simpleValue;
              }
              function setOption(parent, name, value) {
                parent.setOption && parent.setOption(name, value);
              }
              function setParsedOption(parent, name, value, propName) {
                parent.setParsedOption && parent.setParsedOption(name, value, propName);
              }
              function parseInlineOptions(parent) {
                if (skip("[", true)) {
                  do {
                    parseOption(parent, "option");
                  } while (skip(",", true));
                  skip("]");
                }
                return parent;
              }
              function parseService(parent, token) {
                if (!nameRe.test(token = next())) throw illegal(token, "service name");
                var service = new Service(token);
                ifBlock(service, function parseService_block(token) {
                  if (parseCommon(service, token)) return;
                  if ("rpc" !== token) throw illegal(token);
                  parseMethod(service, token);
                });
                parent.add(service);
              }
              function parseMethod(parent, token) {
                var commentText = cmnt();
                var type = token;
                if (!nameRe.test(token = next())) throw illegal(token, "name");
                var name = token, requestType, requestStream, responseType, responseStream;
                skip("(");
                skip("stream", true) && (requestStream = true);
                if (!typeRefRe.test(token = next())) throw illegal(token);
                requestType = token;
                skip(")");
                skip("returns");
                skip("(");
                skip("stream", true) && (responseStream = true);
                if (!typeRefRe.test(token = next())) throw illegal(token);
                responseType = token;
                skip(")");
                var method = new Method(name, type, requestType, responseType, requestStream, responseStream);
                method.comment = commentText;
                ifBlock(method, function parseMethod_block(token) {
                  if ("option" !== token) throw illegal(token);
                  parseOption(method, token);
                  skip(";");
                });
                parent.add(method);
              }
              function parseExtension(parent, token) {
                if (!typeRefRe.test(token = next())) throw illegal(token, "reference");
                var reference = token;
                ifBlock(null, function parseExtension_block(token) {
                  switch (token) {
                   case "required":
                   case "repeated":
                   case "optional":
                    parseField(parent, token, reference);
                    break;

                   default:
                    if (!isProto3 || !typeRefRe.test(token)) throw illegal(token);
                    push(token);
                    parseField(parent, "optional", reference);
                  }
                });
              }
              var token;
              while (null !== (token = next())) switch (token) {
               case "package":
                if (!head) throw illegal(token);
                parsePackage();
                break;

               case "import":
                if (!head) throw illegal(token);
                parseImport();
                break;

               case "syntax":
                if (!head) throw illegal(token);
                parseSyntax();
                break;

               case "option":
                parseOption(ptr, token);
                skip(";");
                break;

               default:
                if (parseCommon(ptr, token)) {
                  head = false;
                  continue;
                }
                throw illegal(token);
              }
              parse.filename = null;
              return {
                package: pkg,
                imports: imports,
                weakImports: weakImports,
                syntax: syntax,
                root: root
              };
            }
          }, {
            15: 15,
            16: 16,
            20: 20,
            22: 22,
            25: 25,
            29: 29,
            33: 33,
            34: 34,
            35: 35,
            36: 36,
            37: 37
          } ],
          27: [ function(require, module, exports) {
            module.exports = Reader;
            var util = require(39);
            var BufferReader;
            var LongBits = util.LongBits, utf8 = util.utf8;
            function indexOutOfRange(reader, writeLength) {
              return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
            }
            function Reader(buffer) {
              this.buf = buffer;
              this.pos = 0;
              this.len = buffer.length;
            }
            var create_array = "undefined" !== typeof Uint8Array ? function create_typed_array(buffer) {
              if (buffer instanceof Uint8Array || Array.isArray(buffer)) return new Reader(buffer);
              throw Error("illegal buffer");
            } : function create_array(buffer) {
              if (Array.isArray(buffer)) return new Reader(buffer);
              throw Error("illegal buffer");
            };
            var create = function create() {
              return util.Buffer ? function create_buffer_setup(buffer) {
                return (Reader.create = function create_buffer(buffer) {
                  return util.Buffer.isBuffer(buffer) ? new BufferReader(buffer) : create_array(buffer);
                })(buffer);
              } : create_array;
            };
            Reader.create = create();
            Reader.prototype._slice = util.Array.prototype.subarray || util.Array.prototype.slice;
            Reader.prototype.uint32 = function read_uint32_setup() {
              var value = 4294967295;
              return function read_uint32() {
                value = (127 & this.buf[this.pos]) >>> 0;
                if (this.buf[this.pos++] < 128) return value;
                value = (value | (127 & this.buf[this.pos]) << 7) >>> 0;
                if (this.buf[this.pos++] < 128) return value;
                value = (value | (127 & this.buf[this.pos]) << 14) >>> 0;
                if (this.buf[this.pos++] < 128) return value;
                value = (value | (127 & this.buf[this.pos]) << 21) >>> 0;
                if (this.buf[this.pos++] < 128) return value;
                value = (value | (15 & this.buf[this.pos]) << 28) >>> 0;
                if (this.buf[this.pos++] < 128) return value;
                if ((this.pos += 5) > this.len) {
                  this.pos = this.len;
                  throw indexOutOfRange(this, 10);
                }
                return value;
              };
            }();
            Reader.prototype.int32 = function read_int32() {
              return 0 | this.uint32();
            };
            Reader.prototype.sint32 = function read_sint32() {
              var value = this.uint32();
              return value >>> 1 ^ -(1 & value) | 0;
            };
            function readLongVarint() {
              var bits = new LongBits(0, 0);
              var i = 0;
              if (!(this.len - this.pos > 4)) {
                for (;i < 3; ++i) {
                  if (this.pos >= this.len) throw indexOutOfRange(this);
                  bits.lo = (bits.lo | (127 & this.buf[this.pos]) << 7 * i) >>> 0;
                  if (this.buf[this.pos++] < 128) return bits;
                }
                bits.lo = (bits.lo | (127 & this.buf[this.pos++]) << 7 * i) >>> 0;
                return bits;
              }
              for (;i < 4; ++i) {
                bits.lo = (bits.lo | (127 & this.buf[this.pos]) << 7 * i) >>> 0;
                if (this.buf[this.pos++] < 128) return bits;
              }
              bits.lo = (bits.lo | (127 & this.buf[this.pos]) << 28) >>> 0;
              bits.hi = (bits.hi | (127 & this.buf[this.pos]) >> 4) >>> 0;
              if (this.buf[this.pos++] < 128) return bits;
              i = 0;
              if (this.len - this.pos > 4) for (;i < 5; ++i) {
                bits.hi = (bits.hi | (127 & this.buf[this.pos]) << 7 * i + 3) >>> 0;
                if (this.buf[this.pos++] < 128) return bits;
              } else for (;i < 5; ++i) {
                if (this.pos >= this.len) throw indexOutOfRange(this);
                bits.hi = (bits.hi | (127 & this.buf[this.pos]) << 7 * i + 3) >>> 0;
                if (this.buf[this.pos++] < 128) return bits;
              }
              throw Error("invalid varint encoding");
            }
            Reader.prototype.bool = function read_bool() {
              return 0 !== this.uint32();
            };
            function readFixed32_end(buf, end) {
              return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
            }
            Reader.prototype.fixed32 = function read_fixed32() {
              if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
              return readFixed32_end(this.buf, this.pos += 4);
            };
            Reader.prototype.sfixed32 = function read_sfixed32() {
              if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
              return 0 | readFixed32_end(this.buf, this.pos += 4);
            };
            function readFixed64() {
              if (this.pos + 8 > this.len) throw indexOutOfRange(this, 8);
              return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
            }
            Reader.prototype["float"] = function read_float() {
              if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
              var value = util["float"].readFloatLE(this.buf, this.pos);
              this.pos += 4;
              return value;
            };
            Reader.prototype["double"] = function read_double() {
              if (this.pos + 8 > this.len) throw indexOutOfRange(this, 4);
              var value = util["float"].readDoubleLE(this.buf, this.pos);
              this.pos += 8;
              return value;
            };
            Reader.prototype.bytes = function read_bytes() {
              var length = this.uint32(), start = this.pos, end = this.pos + length;
              if (end > this.len) throw indexOutOfRange(this, length);
              this.pos += length;
              if (Array.isArray(this.buf)) return this.buf.slice(start, end);
              return start === end ? new this.buf.constructor(0) : this._slice.call(this.buf, start, end);
            };
            Reader.prototype.string = function read_string() {
              var bytes = this.bytes();
              return utf8.read(bytes, 0, bytes.length);
            };
            Reader.prototype.skip = function skip(length) {
              if ("number" === typeof length) {
                if (this.pos + length > this.len) throw indexOutOfRange(this, length);
                this.pos += length;
              } else do {
                if (this.pos >= this.len) throw indexOutOfRange(this);
              } while (128 & this.buf[this.pos++]);
              return this;
            };
            Reader.prototype.skipType = function(wireType) {
              switch (wireType) {
               case 0:
                this.skip();
                break;

               case 1:
                this.skip(8);
                break;

               case 2:
                this.skip(this.uint32());
                break;

               case 3:
                while (4 !== (wireType = 7 & this.uint32())) this.skipType(wireType);
                break;

               case 5:
                this.skip(4);
                break;

               default:
                throw Error("invalid wire type " + wireType + " at offset " + this.pos);
              }
              return this;
            };
            Reader._configure = function(BufferReader_) {
              BufferReader = BufferReader_;
              Reader.create = create();
              BufferReader._configure();
              var fn = util.Long ? "toLong" : "toNumber";
              util.merge(Reader.prototype, {
                int64: function read_int64() {
                  return readLongVarint.call(this)[fn](false);
                },
                uint64: function read_uint64() {
                  return readLongVarint.call(this)[fn](true);
                },
                sint64: function read_sint64() {
                  return readLongVarint.call(this).zzDecode()[fn](false);
                },
                fixed64: function read_fixed64() {
                  return readFixed64.call(this)[fn](true);
                },
                sfixed64: function read_sfixed64() {
                  return readFixed64.call(this)[fn](false);
                }
              });
            };
          }, {
            39: 39
          } ],
          28: [ function(require, module, exports) {
            module.exports = BufferReader;
            var Reader = require(27);
            (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
            var util = require(39);
            function BufferReader(buffer) {
              Reader.call(this, buffer);
            }
            BufferReader._configure = function() {
              util.Buffer && (BufferReader.prototype._slice = util.Buffer.prototype.slice);
            };
            BufferReader.prototype.string = function read_string_buffer() {
              var len = this.uint32();
              return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
            };
            BufferReader._configure();
          }, {
            27: 27,
            39: 39
          } ],
          29: [ function(require, module, exports) {
            module.exports = Root;
            var Namespace = require(23);
            ((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";
            var Field = require(16), Enum = require(15), OneOf = require(25), util = require(37);
            var Type, parse, common;
            function Root(options) {
              Namespace.call(this, "", options);
              this.deferred = [];
              this.files = [];
            }
            Root.fromJSON = function fromJSON(json, root) {
              root || (root = new Root());
              json.options && root.setOptions(json.options);
              return root.addJSON(json.nested);
            };
            Root.prototype.resolvePath = util.path.resolve;
            Root.prototype.fetch = util.fetch;
            function SYNC() {}
            Root.prototype.load = function load(filename, options, callback) {
              if ("function" === typeof options) {
                callback = options;
                options = undefined;
              }
              var self = this;
              if (!callback) return util.asPromise(load, self, filename, options);
              var sync = callback === SYNC;
              function finish(err, root) {
                if (!callback) return;
                var cb = callback;
                callback = null;
                if (sync) throw err;
                cb(err, root);
              }
              function getBundledFileName(filename) {
                var idx = filename.lastIndexOf("google/protobuf/");
                if (idx > -1) {
                  var altname = filename.substring(idx);
                  if (altname in common) return altname;
                }
                return null;
              }
              function process(filename, source) {
                try {
                  util.isString(source) && "{" === source.charAt(0) && (source = JSON.parse(source));
                  if (util.isString(source)) {
                    parse.filename = filename;
                    var parsed = parse(source, self, options), resolved, i = 0;
                    if (parsed.imports) for (;i < parsed.imports.length; ++i) (resolved = getBundledFileName(parsed.imports[i]) || self.resolvePath(filename, parsed.imports[i])) && fetch(resolved);
                    if (parsed.weakImports) for (i = 0; i < parsed.weakImports.length; ++i) (resolved = getBundledFileName(parsed.weakImports[i]) || self.resolvePath(filename, parsed.weakImports[i])) && fetch(resolved, true);
                  } else self.setOptions(source.options).addJSON(source.nested);
                } catch (err) {
                  finish(err);
                }
                sync || queued || finish(null, self);
              }
              function fetch(filename, weak) {
                if (self.files.indexOf(filename) > -1) return;
                self.files.push(filename);
                if (filename in common) {
                  if (sync) process(filename, common[filename]); else {
                    ++queued;
                    setTimeout(function() {
                      --queued;
                      process(filename, common[filename]);
                    });
                  }
                  return;
                }
                if (sync) {
                  var source;
                  try {
                    source = util.fs.readFileSync(filename).toString("utf8");
                  } catch (err) {
                    weak || finish(err);
                    return;
                  }
                  process(filename, source);
                } else {
                  ++queued;
                  self.fetch(filename, function(err, source) {
                    --queued;
                    if (!callback) return;
                    if (err) {
                      weak ? queued || finish(null, self) : finish(err);
                      return;
                    }
                    process(filename, source);
                  });
                }
              }
              var queued = 0;
              util.isString(filename) && (filename = [ filename ]);
              for (var i = 0, resolved; i < filename.length; ++i) (resolved = self.resolvePath("", filename[i])) && fetch(resolved);
              if (sync) return self;
              queued || finish(null, self);
              return undefined;
            };
            Root.prototype.loadSync = function loadSync(filename, options) {
              if (!util.isNode) throw Error("not supported");
              return this.load(filename, options, SYNC);
            };
            Root.prototype.resolveAll = function resolveAll() {
              if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function(field) {
                return "'extend " + field.extend + "' in " + field.parent.fullName;
              }).join(", "));
              return Namespace.prototype.resolveAll.call(this);
            };
            var exposeRe = /^[A-Z]/;
            function tryHandleExtension(root, field) {
              var extendedType = field.parent.lookup(field.extend);
              if (extendedType) {
                var sisterField = new Field(field.fullName, field.id, field.type, field.rule, undefined, field.options);
                sisterField.declaringField = field;
                field.extensionField = sisterField;
                extendedType.add(sisterField);
                return true;
              }
              return false;
            }
            Root.prototype._handleAdd = function _handleAdd(object) {
              if (object instanceof Field) object.extend === undefined || object.extensionField || tryHandleExtension(this, object) || this.deferred.push(object); else if (object instanceof Enum) exposeRe.test(object.name) && (object.parent[object.name] = object.values); else if (!(object instanceof OneOf)) {
                if (object instanceof Type) for (var i = 0; i < this.deferred.length; ) tryHandleExtension(this, this.deferred[i]) ? this.deferred.splice(i, 1) : ++i;
                for (var j = 0; j < object.nestedArray.length; ++j) this._handleAdd(object._nestedArray[j]);
                exposeRe.test(object.name) && (object.parent[object.name] = object);
              }
            };
            Root.prototype._handleRemove = function _handleRemove(object) {
              if (object instanceof Field) {
                if (object.extend !== undefined) if (object.extensionField) {
                  object.extensionField.parent.remove(object.extensionField);
                  object.extensionField = null;
                } else {
                  var index = this.deferred.indexOf(object);
                  index > -1 && this.deferred.splice(index, 1);
                }
              } else if (object instanceof Enum) exposeRe.test(object.name) && delete object.parent[object.name]; else if (object instanceof Namespace) {
                for (var i = 0; i < object.nestedArray.length; ++i) this._handleRemove(object._nestedArray[i]);
                exposeRe.test(object.name) && delete object.parent[object.name];
              }
            };
            Root._configure = function(Type_, parse_, common_) {
              Type = Type_;
              parse = parse_;
              common = common_;
            };
          }, {
            15: 15,
            16: 16,
            23: 23,
            25: 25,
            37: 37
          } ],
          30: [ function(require, module, exports) {
            module.exports = {};
          }, {} ],
          31: [ function(require, module, exports) {
            var rpc = exports;
            rpc.Service = require(32);
          }, {
            32: 32
          } ],
          32: [ function(require, module, exports) {
            module.exports = Service;
            var util = require(39);
            (Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
            function Service(rpcImpl, requestDelimited, responseDelimited) {
              if ("function" !== typeof rpcImpl) throw TypeError("rpcImpl must be a function");
              util.EventEmitter.call(this);
              this.rpcImpl = rpcImpl;
              this.requestDelimited = Boolean(requestDelimited);
              this.responseDelimited = Boolean(responseDelimited);
            }
            Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
              if (!request) throw TypeError("request must be specified");
              var self = this;
              if (!callback) return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);
              if (!self.rpcImpl) {
                setTimeout(function() {
                  callback(Error("already ended"));
                }, 0);
                return undefined;
              }
              try {
                return self.rpcImpl(method, requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(), function rpcCallback(err, response) {
                  if (err) {
                    self.emit("error", err, method);
                    return callback(err);
                  }
                  if (null === response) {
                    self.end(true);
                    return undefined;
                  }
                  if (!(response instanceof responseCtor)) try {
                    response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                  } catch (err) {
                    self.emit("error", err, method);
                    return callback(err);
                  }
                  self.emit("data", response, method);
                  return callback(null, response);
                });
              } catch (err) {
                self.emit("error", err, method);
                setTimeout(function() {
                  callback(err);
                }, 0);
                return undefined;
              }
            };
            Service.prototype.end = function end(endedByRPC) {
              if (this.rpcImpl) {
                endedByRPC || this.rpcImpl(null, null, null);
                this.rpcImpl = null;
                this.emit("end").off();
              }
              return this;
            };
          }, {
            39: 39
          } ],
          33: [ function(require, module, exports) {
            module.exports = Service;
            var Namespace = require(23);
            ((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";
            var Method = require(22), util = require(37), rpc = require(31);
            function Service(name, options) {
              Namespace.call(this, name, options);
              this.methods = {};
              this._methodsArray = null;
            }
            Service.fromJSON = function fromJSON(name, json) {
              var service = new Service(name, json.options);
              if (json.methods) for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i) service.add(Method.fromJSON(names[i], json.methods[names[i]]));
              json.nested && service.addJSON(json.nested);
              service.comment = json.comment;
              return service;
            };
            Service.prototype.toJSON = function toJSON(toJSONOptions) {
              var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
              var keepComments = !!toJSONOptions && Boolean(toJSONOptions.keepComments);
              return util.toObject([ "options", inherited && inherited.options || undefined, "methods", Namespace.arrayToJSON(this.methodsArray, toJSONOptions) || {}, "nested", inherited && inherited.nested || undefined, "comment", keepComments ? this.comment : undefined ]);
            };
            Object.defineProperty(Service.prototype, "methodsArray", {
              get: function get() {
                return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
              }
            });
            function clearCache(service) {
              service._methodsArray = null;
              return service;
            }
            Service.prototype.get = function get(name) {
              return this.methods[name] || Namespace.prototype.get.call(this, name);
            };
            Service.prototype.resolveAll = function resolveAll() {
              var methods = this.methodsArray;
              for (var i = 0; i < methods.length; ++i) methods[i].resolve();
              return Namespace.prototype.resolve.call(this);
            };
            Service.prototype.add = function add(object) {
              if (this.get(object.name)) throw Error("duplicate name '" + object.name + "' in " + this);
              if (object instanceof Method) {
                this.methods[object.name] = object;
                object.parent = this;
                return clearCache(this);
              }
              return Namespace.prototype.add.call(this, object);
            };
            Service.prototype.remove = function remove(object) {
              if (object instanceof Method) {
                if (this.methods[object.name] !== object) throw Error(object + " is not a member of " + this);
                delete this.methods[object.name];
                object.parent = null;
                return clearCache(this);
              }
              return Namespace.prototype.remove.call(this, object);
            };
            Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
              var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);
              for (var i = 0, method; i < this.methodsArray.length; ++i) {
                var methodName = util.lcFirst((method = this._methodsArray[i]).resolve().name).replace(/[^$\w_]/g, "");
                rpcService[methodName] = util.codegen([ "r", "c" ], util.isReserved(methodName) ? methodName + "_" : methodName)("return this.rpcCall(m,q,s,r,c)")({
                  m: method,
                  q: method.resolvedRequestType.ctor,
                  s: method.resolvedResponseType.ctor
                });
              }
              return rpcService;
            };
          }, {
            22: 22,
            23: 23,
            31: 31,
            37: 37
          } ],
          34: [ function(require, module, exports) {
            module.exports = tokenize;
            var delimRe = /[\s{}=;:[\],'"()<>]/g, stringDoubleRe = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, stringSingleRe = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
            var setCommentRe = /^ *[*\/]+ */, setCommentAltRe = /^\s*\*?\/*/, setCommentSplitRe = /\n/g, whitespaceRe = /\s/, unescapeRe = /\\(.?)/g;
            var unescapeMap = {
              0: "\0",
              r: "\r",
              n: "\n",
              t: "\t"
            };
            function unescape(str) {
              return str.replace(unescapeRe, function($0, $1) {
                switch ($1) {
                 case "\\":
                 case "":
                  return $1;

                 default:
                  return unescapeMap[$1] || "";
                }
              });
            }
            tokenize.unescape = unescape;
            function tokenize(source, alternateCommentMode) {
              source = source.toString();
              var offset = 0, length = source.length, line = 1, commentType = null, commentText = null, commentLine = 0, commentLineEmpty = false, commentIsLeading = false;
              var stack = [];
              var stringDelim = null;
              function illegal(subject) {
                return Error("illegal " + subject + " (line " + line + ")");
              }
              function readString() {
                var re = "'" === stringDelim ? stringSingleRe : stringDoubleRe;
                re.lastIndex = offset - 1;
                var match = re.exec(source);
                if (!match) throw illegal("string");
                offset = re.lastIndex;
                push(stringDelim);
                stringDelim = null;
                return unescape(match[1]);
              }
              function charAt(pos) {
                return source.charAt(pos);
              }
              function setComment(start, end, isLeading) {
                commentType = source.charAt(start++);
                commentLine = line;
                commentLineEmpty = false;
                commentIsLeading = isLeading;
                var lookback;
                lookback = alternateCommentMode ? 2 : 3;
                var commentOffset = start - lookback, c;
                do {
                  if (--commentOffset < 0 || "\n" === (c = source.charAt(commentOffset))) {
                    commentLineEmpty = true;
                    break;
                  }
                } while (" " === c || "\t" === c);
                var lines = source.substring(start, end).split(setCommentSplitRe);
                for (var i = 0; i < lines.length; ++i) lines[i] = lines[i].replace(alternateCommentMode ? setCommentAltRe : setCommentRe, "").trim();
                commentText = lines.join("\n").trim();
              }
              function isDoubleSlashCommentLine(startOffset) {
                var endOffset = findEndOfLine(startOffset);
                var lineText = source.substring(startOffset, endOffset);
                var isComment = /^\s*\/{1,2}/.test(lineText);
                return isComment;
              }
              function findEndOfLine(cursor) {
                var endOffset = cursor;
                while (endOffset < length && "\n" !== charAt(endOffset)) endOffset++;
                return endOffset;
              }
              function next() {
                if (stack.length > 0) return stack.shift();
                if (stringDelim) return readString();
                var repeat, prev, curr, start, isDoc, isLeadingComment = 0 === offset;
                do {
                  if (offset === length) return null;
                  repeat = false;
                  while (whitespaceRe.test(curr = charAt(offset))) {
                    if ("\n" === curr) {
                      isLeadingComment = true;
                      ++line;
                    }
                    if (++offset === length) return null;
                  }
                  if ("/" === charAt(offset)) {
                    if (++offset === length) throw illegal("comment");
                    if ("/" === charAt(offset)) if (alternateCommentMode) {
                      start = offset;
                      isDoc = false;
                      if (isDoubleSlashCommentLine(offset)) {
                        isDoc = true;
                        do {
                          offset = findEndOfLine(offset);
                          if (offset === length) break;
                          offset++;
                        } while (isDoubleSlashCommentLine(offset));
                      } else offset = Math.min(length, findEndOfLine(offset) + 1);
                      isDoc && setComment(start, offset, isLeadingComment);
                      line++;
                      repeat = true;
                    } else {
                      isDoc = "/" === charAt(start = offset + 1);
                      while ("\n" !== charAt(++offset)) if (offset === length) return null;
                      ++offset;
                      isDoc && setComment(start, offset - 1, isLeadingComment);
                      ++line;
                      repeat = true;
                    } else {
                      if ("*" !== (curr = charAt(offset))) return "/";
                      start = offset + 1;
                      isDoc = alternateCommentMode || "*" === charAt(start);
                      do {
                        "\n" === curr && ++line;
                        if (++offset === length) throw illegal("comment");
                        prev = curr;
                        curr = charAt(offset);
                      } while ("*" !== prev || "/" !== curr);
                      ++offset;
                      isDoc && setComment(start, offset - 2, isLeadingComment);
                      repeat = true;
                    }
                  }
                } while (repeat);
                var end = offset;
                delimRe.lastIndex = 0;
                var delim = delimRe.test(charAt(end++));
                if (!delim) while (end < length && !delimRe.test(charAt(end))) ++end;
                var token = source.substring(offset, offset = end);
                '"' !== token && "'" !== token || (stringDelim = token);
                return token;
              }
              function push(token) {
                stack.push(token);
              }
              function peek() {
                if (!stack.length) {
                  var token = next();
                  if (null === token) return null;
                  push(token);
                }
                return stack[0];
              }
              function skip(expected, optional) {
                var actual = peek(), equals = actual === expected;
                if (equals) {
                  next();
                  return true;
                }
                if (!optional) throw illegal("token '" + actual + "', '" + expected + "' expected");
                return false;
              }
              function cmnt(trailingLine) {
                var ret = null;
                if (trailingLine === undefined) commentLine === line - 1 && (alternateCommentMode || "*" === commentType || commentLineEmpty) && (ret = commentIsLeading ? commentText : null); else {
                  commentLine < trailingLine && peek();
                  commentLine !== trailingLine || commentLineEmpty || !alternateCommentMode && "/" !== commentType || (ret = commentIsLeading ? null : commentText);
                }
                return ret;
              }
              return Object.defineProperty({
                next: next,
                peek: peek,
                push: push,
                skip: skip,
                cmnt: cmnt
              }, "line", {
                get: function get() {
                  return line;
                }
              });
            }
          }, {} ],
          35: [ function(require, module, exports) {
            module.exports = Type;
            var Namespace = require(23);
            ((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";
            var Enum = require(15), OneOf = require(25), Field = require(16), MapField = require(20), Service = require(33), Message = require(21), Reader = require(27), Writer = require(42), util = require(37), encoder = require(14), decoder = require(13), verifier = require(40), converter = require(12), wrappers = require(41);
            function Type(name, options) {
              Namespace.call(this, name, options);
              this.fields = {};
              this.oneofs = undefined;
              this.extensions = undefined;
              this.reserved = undefined;
              this.group = undefined;
              this._fieldsById = null;
              this._fieldsArray = null;
              this._oneofsArray = null;
              this._ctor = null;
            }
            Object.defineProperties(Type.prototype, {
              fieldsById: {
                get: function get() {
                  if (this._fieldsById) return this._fieldsById;
                  this._fieldsById = {};
                  for (var names = Object.keys(this.fields), i = 0; i < names.length; ++i) {
                    var field = this.fields[names[i]], id = field.id;
                    if (this._fieldsById[id]) throw Error("duplicate id " + id + " in " + this);
                    this._fieldsById[id] = field;
                  }
                  return this._fieldsById;
                }
              },
              fieldsArray: {
                get: function get() {
                  return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
                }
              },
              oneofsArray: {
                get: function get() {
                  return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
                }
              },
              ctor: {
                get: function get() {
                  return this._ctor || (this.ctor = Type.generateConstructor(this)());
                },
                set: function set(ctor) {
                  var prototype = ctor.prototype;
                  if (!(prototype instanceof Message)) {
                    (ctor.prototype = new Message()).constructor = ctor;
                    util.merge(ctor.prototype, prototype);
                  }
                  ctor.$type = ctor.prototype.$type = this;
                  util.merge(ctor, Message, true);
                  this._ctor = ctor;
                  var i = 0;
                  for (;i < this.fieldsArray.length; ++i) this._fieldsArray[i].resolve();
                  var ctorProperties = {};
                  for (i = 0; i < this.oneofsArray.length; ++i) ctorProperties[this._oneofsArray[i].resolve().name] = {
                    get: util.oneOfGetter(this._oneofsArray[i].oneof),
                    set: util.oneOfSetter(this._oneofsArray[i].oneof)
                  };
                  i && Object.defineProperties(ctor.prototype, ctorProperties);
                }
              }
            });
            Type.generateConstructor = function generateConstructor(mtype) {
              var gen = util.codegen([ "p" ], mtype.name);
              for (var i = 0, field; i < mtype.fieldsArray.length; ++i) (field = mtype._fieldsArray[i]).map ? gen("this%s={}", util.safeProp(field.name)) : field.repeated && gen("this%s=[]", util.safeProp(field.name));
              return gen("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
            };
            function clearCache(type) {
              type._fieldsById = type._fieldsArray = type._oneofsArray = null;
              delete type.encode;
              delete type.decode;
              delete type.verify;
              return type;
            }
            Type.fromJSON = function fromJSON(name, json) {
              var type = new Type(name, json.options);
              type.extensions = json.extensions;
              type.reserved = json.reserved;
              var names = Object.keys(json.fields), i = 0;
              for (;i < names.length; ++i) type.add(("undefined" !== typeof json.fields[names[i]].keyType ? MapField.fromJSON : Field.fromJSON)(names[i], json.fields[names[i]]));
              if (json.oneofs) for (names = Object.keys(json.oneofs), i = 0; i < names.length; ++i) type.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
              if (json.nested) for (names = Object.keys(json.nested), i = 0; i < names.length; ++i) {
                var nested = json.nested[names[i]];
                type.add((nested.id !== undefined ? Field.fromJSON : nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : Namespace.fromJSON)(names[i], nested));
              }
              json.extensions && json.extensions.length && (type.extensions = json.extensions);
              json.reserved && json.reserved.length && (type.reserved = json.reserved);
              json.group && (type.group = true);
              json.comment && (type.comment = json.comment);
              return type;
            };
            Type.prototype.toJSON = function toJSON(toJSONOptions) {
              var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
              var keepComments = !!toJSONOptions && Boolean(toJSONOptions.keepComments);
              return util.toObject([ "options", inherited && inherited.options || undefined, "oneofs", Namespace.arrayToJSON(this.oneofsArray, toJSONOptions), "fields", Namespace.arrayToJSON(this.fieldsArray.filter(function(obj) {
                return !obj.declaringField;
              }), toJSONOptions) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", inherited && inherited.nested || undefined, "comment", keepComments ? this.comment : undefined ]);
            };
            Type.prototype.resolveAll = function resolveAll() {
              var fields = this.fieldsArray, i = 0;
              while (i < fields.length) fields[i++].resolve();
              var oneofs = this.oneofsArray;
              i = 0;
              while (i < oneofs.length) oneofs[i++].resolve();
              return Namespace.prototype.resolveAll.call(this);
            };
            Type.prototype.get = function get(name) {
              return this.fields[name] || this.oneofs && this.oneofs[name] || this.nested && this.nested[name] || null;
            };
            Type.prototype.add = function add(object) {
              if (this.get(object.name)) throw Error("duplicate name '" + object.name + "' in " + this);
              if (object instanceof Field && object.extend === undefined) {
                if (this._fieldsById ? this._fieldsById[object.id] : this.fieldsById[object.id]) throw Error("duplicate id " + object.id + " in " + this);
                if (this.isReservedId(object.id)) throw Error("id " + object.id + " is reserved in " + this);
                if (this.isReservedName(object.name)) throw Error("name '" + object.name + "' is reserved in " + this);
                object.parent && object.parent.remove(object);
                this.fields[object.name] = object;
                object.message = this;
                object.onAdd(this);
                return clearCache(this);
              }
              if (object instanceof OneOf) {
                this.oneofs || (this.oneofs = {});
                this.oneofs[object.name] = object;
                object.onAdd(this);
                return clearCache(this);
              }
              return Namespace.prototype.add.call(this, object);
            };
            Type.prototype.remove = function remove(object) {
              if (object instanceof Field && object.extend === undefined) {
                if (!this.fields || this.fields[object.name] !== object) throw Error(object + " is not a member of " + this);
                delete this.fields[object.name];
                object.parent = null;
                object.onRemove(this);
                return clearCache(this);
              }
              if (object instanceof OneOf) {
                if (!this.oneofs || this.oneofs[object.name] !== object) throw Error(object + " is not a member of " + this);
                delete this.oneofs[object.name];
                object.parent = null;
                object.onRemove(this);
                return clearCache(this);
              }
              return Namespace.prototype.remove.call(this, object);
            };
            Type.prototype.isReservedId = function isReservedId(id) {
              return Namespace.isReservedId(this.reserved, id);
            };
            Type.prototype.isReservedName = function isReservedName(name) {
              return Namespace.isReservedName(this.reserved, name);
            };
            Type.prototype.create = function create(properties) {
              return new this.ctor(properties);
            };
            Type.prototype.setup = function setup() {
              var fullName = this.fullName, types = [];
              for (var i = 0; i < this.fieldsArray.length; ++i) types.push(this._fieldsArray[i].resolve().resolvedType);
              this.encode = encoder(this)({
                Writer: Writer,
                types: types,
                util: util
              });
              this.decode = decoder(this)({
                Reader: Reader,
                types: types,
                util: util
              });
              this.verify = verifier(this)({
                types: types,
                util: util
              });
              this.fromObject = converter.fromObject(this)({
                types: types,
                util: util
              });
              this.toObject = converter.toObject(this)({
                types: types,
                util: util
              });
              var wrapper = wrappers[fullName];
              if (wrapper) {
                var originalThis = Object.create(this);
                originalThis.fromObject = this.fromObject;
                this.fromObject = wrapper.fromObject.bind(originalThis);
                originalThis.toObject = this.toObject;
                this.toObject = wrapper.toObject.bind(originalThis);
              }
              return this;
            };
            Type.prototype.encode = function encode_setup(message, writer) {
              return this.setup().encode(message, writer);
            };
            Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };
            Type.prototype.decode = function decode_setup(reader, length) {
              return this.setup().decode(reader, length);
            };
            Type.prototype.decodeDelimited = function decodeDelimited(reader) {
              reader instanceof Reader || (reader = Reader.create(reader));
              return this.decode(reader, reader.uint32());
            };
            Type.prototype.verify = function verify_setup(message) {
              return this.setup().verify(message);
            };
            Type.prototype.fromObject = function fromObject(object) {
              return this.setup().fromObject(object);
            };
            Type.prototype.toObject = function toObject(message, options) {
              return this.setup().toObject(message, options);
            };
            Type.d = function decorateType(typeName) {
              return function typeDecorator(target) {
                util.decorateType(target, typeName);
              };
            };
          }, {
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            20: 20,
            21: 21,
            23: 23,
            25: 25,
            27: 27,
            33: 33,
            37: 37,
            40: 40,
            41: 41,
            42: 42
          } ],
          36: [ function(require, module, exports) {
            var types = exports;
            var util = require(37);
            var s = [ "double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes" ];
            function bake(values, offset) {
              var i = 0, o = {};
              offset |= 0;
              while (i < values.length) o[s[i + offset]] = values[i++];
              return o;
            }
            types.basic = bake([ 1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2 ]);
            types.defaults = bake([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, "", util.emptyArray, null ]);
            types["long"] = bake([ 0, 0, 0, 1, 1 ], 7);
            types.mapKey = bake([ 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2 ], 2);
            types.packed = bake([ 1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0 ]);
          }, {
            37: 37
          } ],
          37: [ function(require, module, exports) {
            var util = module.exports = require(39);
            var roots = require(30);
            var Type, Enum;
            util.codegen = require(3);
            util.fetch = require(5);
            util.path = require(8);
            util.fs = util.inquire("fs");
            util.toArray = function toArray(object) {
              if (object) {
                var keys = Object.keys(object), array = new Array(keys.length), index = 0;
                while (index < keys.length) array[index] = object[keys[index++]];
                return array;
              }
              return [];
            };
            util.toObject = function toObject(array) {
              var object = {}, index = 0;
              while (index < array.length) {
                var key = array[index++], val = array[index++];
                val !== undefined && (object[key] = val);
              }
              return object;
            };
            var safePropBackslashRe = /\\/g, safePropQuoteRe = /"/g;
            util.isReserved = function isReserved(name) {
              return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name);
            };
            util.safeProp = function safeProp(prop) {
              if (!/^[$\w_]+$/.test(prop) || util.isReserved(prop)) return '["' + prop.replace(safePropBackslashRe, "\\\\").replace(safePropQuoteRe, '\\"') + '"]';
              return "." + prop;
            };
            util.ucFirst = function ucFirst(str) {
              return str.charAt(0).toUpperCase() + str.substring(1);
            };
            var camelCaseRe = /_([a-z])/g;
            util.camelCase = function camelCase(str) {
              return str.substring(0, 1) + str.substring(1).replace(camelCaseRe, function($0, $1) {
                return $1.toUpperCase();
              });
            };
            util.compareFieldsById = function compareFieldsById(a, b) {
              return a.id - b.id;
            };
            util.decorateType = function decorateType(ctor, typeName) {
              if (ctor.$type) {
                if (typeName && ctor.$type.name !== typeName) {
                  util.decorateRoot.remove(ctor.$type);
                  ctor.$type.name = typeName;
                  util.decorateRoot.add(ctor.$type);
                }
                return ctor.$type;
              }
              Type || (Type = require(35));
              var type = new Type(typeName || ctor.name);
              util.decorateRoot.add(type);
              type.ctor = ctor;
              Object.defineProperty(ctor, "$type", {
                value: type,
                enumerable: false
              });
              Object.defineProperty(ctor.prototype, "$type", {
                value: type,
                enumerable: false
              });
              return type;
            };
            var decorateEnumIndex = 0;
            util.decorateEnum = function decorateEnum(object) {
              if (object.$type) return object.$type;
              Enum || (Enum = require(15));
              var enm = new Enum("Enum" + decorateEnumIndex++, object);
              util.decorateRoot.add(enm);
              Object.defineProperty(object, "$type", {
                value: enm,
                enumerable: false
              });
              return enm;
            };
            util.setProperty = function setProperty(dst, path, value) {
              function setProp(dst, path, value) {
                var part = path.shift();
                if (path.length > 0) dst[part] = setProp(dst[part] || {}, path, value); else {
                  var prevValue = dst[part];
                  prevValue && (value = [].concat(prevValue).concat(value));
                  dst[part] = value;
                }
                return dst;
              }
              if ("object" !== typeof dst) throw TypeError("dst must be an object");
              if (!path) throw TypeError("path must be specified");
              path = path.split(".");
              return setProp(dst, path, value);
            };
            Object.defineProperty(util, "decorateRoot", {
              get: function get() {
                return roots["decorated"] || (roots["decorated"] = new (require(29))());
              }
            });
          }, {
            15: 15,
            29: 29,
            3: 3,
            30: 30,
            35: 35,
            39: 39,
            5: 5,
            8: 8
          } ],
          38: [ function(require, module, exports) {
            module.exports = LongBits;
            var util = require(39);
            function LongBits(lo, hi) {
              this.lo = lo >>> 0;
              this.hi = hi >>> 0;
            }
            var zero = LongBits.zero = new LongBits(0, 0);
            zero.toNumber = function() {
              return 0;
            };
            zero.zzEncode = zero.zzDecode = function() {
              return this;
            };
            zero.length = function() {
              return 1;
            };
            var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
            LongBits.fromNumber = function fromNumber(value) {
              if (0 === value) return zero;
              var sign = value < 0;
              sign && (value = -value);
              var lo = value >>> 0, hi = (value - lo) / 4294967296 >>> 0;
              if (sign) {
                hi = ~hi >>> 0;
                lo = ~lo >>> 0;
                if (++lo > 4294967295) {
                  lo = 0;
                  ++hi > 4294967295 && (hi = 0);
                }
              }
              return new LongBits(lo, hi);
            };
            LongBits.from = function from(value) {
              if ("number" === typeof value) return LongBits.fromNumber(value);
              if (util.isString(value)) {
                if (!util.Long) return LongBits.fromNumber(parseInt(value, 10));
                value = util.Long.fromString(value);
              }
              return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
            };
            LongBits.prototype.toNumber = function toNumber(unsigned) {
              if (!unsigned && this.hi >>> 31) {
                var lo = 1 + ~this.lo >>> 0, hi = ~this.hi >>> 0;
                lo || (hi = hi + 1 >>> 0);
                return -(lo + 4294967296 * hi);
              }
              return this.lo + 4294967296 * this.hi;
            };
            LongBits.prototype.toLong = function toLong(unsigned) {
              return util.Long ? new util.Long(0 | this.lo, 0 | this.hi, Boolean(unsigned)) : {
                low: 0 | this.lo,
                high: 0 | this.hi,
                unsigned: Boolean(unsigned)
              };
            };
            var charCodeAt = String.prototype.charCodeAt;
            LongBits.fromHash = function fromHash(hash) {
              if (hash === zeroHash) return zero;
              return new LongBits((charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0, (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0);
            };
            LongBits.prototype.toHash = function toHash() {
              return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
            };
            LongBits.prototype.zzEncode = function zzEncode() {
              var mask = this.hi >> 31;
              this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
              this.lo = (this.lo << 1 ^ mask) >>> 0;
              return this;
            };
            LongBits.prototype.zzDecode = function zzDecode() {
              var mask = -(1 & this.lo);
              this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
              this.hi = (this.hi >>> 1 ^ mask) >>> 0;
              return this;
            };
            LongBits.prototype.length = function length() {
              var part0 = this.lo, part1 = (this.lo >>> 28 | this.hi << 4) >>> 0, part2 = this.hi >>> 24;
              return 0 === part2 ? 0 === part1 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
            };
          }, {
            39: 39
          } ],
          39: [ function(require, module, exports) {
            var util = exports;
            util.asPromise = require(1);
            util.base64 = require(2);
            util.EventEmitter = require(4);
            util["float"] = require(6);
            util.inquire = require(7);
            util.utf8 = require(10);
            util.pool = require(9);
            util.LongBits = require(38);
            util.isNode = Boolean("undefined" !== typeof global && global && global.process && global.process.versions && global.process.versions.node);
            util.global = util.isNode && global || "undefined" !== typeof window && window || "undefined" !== typeof self && self || this;
            util.emptyArray = Object.freeze ? Object.freeze([]) : [];
            util.emptyObject = Object.freeze ? Object.freeze({}) : {};
            util.isInteger = Number.isInteger || function isInteger(value) {
              return "number" === typeof value && isFinite(value) && Math.floor(value) === value;
            };
            util.isString = function isString(value) {
              return "string" === typeof value || value instanceof String;
            };
            util.isObject = function isObject(value) {
              return value && "object" === typeof value;
            };
            util.isset = util.isSet = function isSet(obj, prop) {
              var value = obj[prop];
              if (null != value && obj.hasOwnProperty(prop)) return "object" !== typeof value || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
              return false;
            };
            util.Buffer = function() {
              try {
                var Buffer = util.inquire("buffer").Buffer;
                return Buffer.prototype.utf8Write ? Buffer : null;
              } catch (e) {
                return null;
              }
            }();
            util._Buffer_from = null;
            util._Buffer_allocUnsafe = null;
            util.newBuffer = function newBuffer(sizeOrArray) {
              return "number" === typeof sizeOrArray ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : "undefined" === typeof Uint8Array ? sizeOrArray : new Uint8Array(sizeOrArray);
            };
            util.Array = "undefined" !== typeof Uint8Array ? Uint8Array : Array;
            util.Long = util.global.dcodeIO && util.global.dcodeIO.Long || util.global.Long || util.inquire("long");
            util.key2Re = /^true|false|0|1$/;
            util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
            util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
            util.longToHash = function longToHash(value) {
              return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
            };
            util.longFromHash = function longFromHash(hash, unsigned) {
              var bits = util.LongBits.fromHash(hash);
              if (util.Long) return util.Long.fromBits(bits.lo, bits.hi, unsigned);
              return bits.toNumber(Boolean(unsigned));
            };
            function merge(dst, src, ifNotSet) {
              for (var keys = Object.keys(src), i = 0; i < keys.length; ++i) dst[keys[i]] !== undefined && ifNotSet || (dst[keys[i]] = src[keys[i]]);
              return dst;
            }
            util.merge = merge;
            util.lcFirst = function lcFirst(str) {
              return str.charAt(0).toLowerCase() + str.substring(1);
            };
            function newError(name) {
              function CustomError(message, properties) {
                if (!(this instanceof CustomError)) return new CustomError(message, properties);
                Object.defineProperty(this, "message", {
                  get: function get() {
                    return message;
                  }
                });
                Error.captureStackTrace ? Error.captureStackTrace(this, CustomError) : Object.defineProperty(this, "stack", {
                  value: new Error().stack || ""
                });
                properties && merge(this, properties);
              }
              (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;
              Object.defineProperty(CustomError.prototype, "name", {
                get: function get() {
                  return name;
                }
              });
              CustomError.prototype.toString = function toString() {
                return this.name + ": " + this.message;
              };
              return CustomError;
            }
            util.newError = newError;
            util.ProtocolError = newError("ProtocolError");
            util.oneOfGetter = function getOneOf(fieldNames) {
              var fieldMap = {};
              for (var i = 0; i < fieldNames.length; ++i) fieldMap[fieldNames[i]] = 1;
              return function() {
                for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i) if (1 === fieldMap[keys[i]] && this[keys[i]] !== undefined && null !== this[keys[i]]) return keys[i];
              };
            };
            util.oneOfSetter = function setOneOf(fieldNames) {
              return function(name) {
                for (var i = 0; i < fieldNames.length; ++i) fieldNames[i] !== name && delete this[fieldNames[i]];
              };
            };
            util.toJSONOptions = {
              longs: String,
              enums: String,
              bytes: String,
              json: true
            };
            util._configure = function() {
              var Buffer = util.Buffer;
              if (!Buffer) {
                util._Buffer_from = util._Buffer_allocUnsafe = null;
                return;
              }
              util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from || function Buffer_from(value, encoding) {
                return new Buffer(value, encoding);
              };
              util._Buffer_allocUnsafe = Buffer.allocUnsafe || function Buffer_allocUnsafe(size) {
                return new Buffer(size);
              };
            };
          }, {
            1: 1,
            10: 10,
            2: 2,
            38: 38,
            4: 4,
            6: 6,
            7: 7,
            9: 9
          } ],
          40: [ function(require, module, exports) {
            module.exports = verifier;
            var Enum = require(15), util = require(37);
            function invalid(field, expected) {
              return field.name + ": " + expected + (field.repeated && "array" !== expected ? "[]" : field.map && "object" !== expected ? "{k:" + field.keyType + "}" : "") + " expected";
            }
            function genVerifyValue(gen, field, fieldIndex, ref) {
              if (field.resolvedType) if (field.resolvedType instanceof Enum) {
                gen("switch(%s){", ref)("default:")("return%j", invalid(field, "enum value"));
                for (var keys = Object.keys(field.resolvedType.values), j = 0; j < keys.length; ++j) gen("case %i:", field.resolvedType.values[keys[j]]);
                gen("break")("}");
              } else gen("{")("var e=types[%i].verify(%s);", fieldIndex, ref)("if(e)")("return%j+e", field.name + ".")("}"); else switch (field.type) {
               case "int32":
               case "uint32":
               case "sint32":
               case "fixed32":
               case "sfixed32":
                gen("if(!util.isInteger(%s))", ref)("return%j", invalid(field, "integer"));
                break;

               case "int64":
               case "uint64":
               case "sint64":
               case "fixed64":
               case "sfixed64":
                gen("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)("return%j", invalid(field, "integer|Long"));
                break;

               case "float":
               case "double":
                gen('if(typeof %s!=="number")', ref)("return%j", invalid(field, "number"));
                break;

               case "bool":
                gen('if(typeof %s!=="boolean")', ref)("return%j", invalid(field, "boolean"));
                break;

               case "string":
                gen("if(!util.isString(%s))", ref)("return%j", invalid(field, "string"));
                break;

               case "bytes":
                gen('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', ref, ref, ref)("return%j", invalid(field, "buffer"));
              }
              return gen;
            }
            function genVerifyKey(gen, field, ref) {
              switch (field.keyType) {
               case "int32":
               case "uint32":
               case "sint32":
               case "fixed32":
               case "sfixed32":
                gen("if(!util.key32Re.test(%s))", ref)("return%j", invalid(field, "integer key"));
                break;

               case "int64":
               case "uint64":
               case "sint64":
               case "fixed64":
               case "sfixed64":
                gen("if(!util.key64Re.test(%s))", ref)("return%j", invalid(field, "integer|Long key"));
                break;

               case "bool":
                gen("if(!util.key2Re.test(%s))", ref)("return%j", invalid(field, "boolean key"));
              }
              return gen;
            }
            function verifier(mtype) {
              var gen = util.codegen([ "m" ], mtype.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected");
              var oneofs = mtype.oneofsArray, seenFirstField = {};
              oneofs.length && gen("var p={}");
              for (var i = 0; i < mtype.fieldsArray.length; ++i) {
                var field = mtype._fieldsArray[i].resolve(), ref = "m" + util.safeProp(field.name);
                field.optional && gen("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name);
                if (field.map) {
                  gen("if(!util.isObject(%s))", ref)("return%j", invalid(field, "object"))("var k=Object.keys(%s)", ref)("for(var i=0;i<k.length;++i){");
                  genVerifyKey(gen, field, "k[i]");
                  genVerifyValue(gen, field, i, ref + "[k[i]]")("}");
                } else if (field.repeated) {
                  gen("if(!Array.isArray(%s))", ref)("return%j", invalid(field, "array"))("for(var i=0;i<%s.length;++i){", ref);
                  genVerifyValue(gen, field, i, ref + "[i]")("}");
                } else {
                  if (field.partOf) {
                    var oneofProp = util.safeProp(field.partOf.name);
                    1 === seenFirstField[field.partOf.name] && gen("if(p%s===1)", oneofProp)("return%j", field.partOf.name + ": multiple values");
                    seenFirstField[field.partOf.name] = 1;
                    gen("p%s=1", oneofProp);
                  }
                  genVerifyValue(gen, field, i, ref);
                }
                field.optional && gen("}");
              }
              return gen("return null");
            }
          }, {
            15: 15,
            37: 37
          } ],
          41: [ function(require, module, exports) {
            var wrappers = exports;
            var Message = require(21);
            wrappers[".google.protobuf.Any"] = {
              fromObject: function fromObject(object) {
                if (object && object["@type"]) {
                  var name = object["@type"].substring(object["@type"].lastIndexOf("/") + 1);
                  var type = this.lookup(name);
                  if (type) {
                    var type_url = "." === object["@type"].charAt(0) ? object["@type"].substr(1) : object["@type"];
                    -1 === type_url.indexOf("/") && (type_url = "/" + type_url);
                    return this.create({
                      type_url: type_url,
                      value: type.encode(type.fromObject(object)).finish()
                    });
                  }
                }
                return this.fromObject(object);
              },
              toObject: function toObject(message, options) {
                var googleApi = "type.googleapis.com/";
                var prefix = "";
                var name = "";
                if (options && options.json && message.type_url && message.value) {
                  name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
                  prefix = message.type_url.substring(0, message.type_url.lastIndexOf("/") + 1);
                  var type = this.lookup(name);
                  type && (message = type.decode(message.value));
                }
                if (!(message instanceof this.ctor) && message instanceof Message) {
                  var object = message.$type.toObject(message, options);
                  var messageName = "." === message.$type.fullName[0] ? message.$type.fullName.substr(1) : message.$type.fullName;
                  "" === prefix && (prefix = googleApi);
                  name = prefix + messageName;
                  object["@type"] = name;
                  return object;
                }
                return this.toObject(message, options);
              }
            };
          }, {
            21: 21
          } ],
          42: [ function(require, module, exports) {
            module.exports = Writer;
            var util = require(39);
            var BufferWriter;
            var LongBits = util.LongBits, base64 = util.base64, utf8 = util.utf8;
            function Op(fn, len, val) {
              this.fn = fn;
              this.len = len;
              this.next = undefined;
              this.val = val;
            }
            function noop() {}
            function State(writer) {
              this.head = writer.head;
              this.tail = writer.tail;
              this.len = writer.len;
              this.next = writer.states;
            }
            function Writer() {
              this.len = 0;
              this.head = new Op(noop, 0, 0);
              this.tail = this.head;
              this.states = null;
            }
            var create = function create() {
              return util.Buffer ? function create_buffer_setup() {
                return (Writer.create = function create_buffer() {
                  return new BufferWriter();
                })();
              } : function create_array() {
                return new Writer();
              };
            };
            Writer.create = create();
            Writer.alloc = function alloc(size) {
              return new util.Array(size);
            };
            util.Array !== Array && (Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray));
            Writer.prototype._push = function push(fn, len, val) {
              this.tail = this.tail.next = new Op(fn, len, val);
              this.len += len;
              return this;
            };
            function writeByte(val, buf, pos) {
              buf[pos] = 255 & val;
            }
            function writeVarint32(val, buf, pos) {
              while (val > 127) {
                buf[pos++] = 127 & val | 128;
                val >>>= 7;
              }
              buf[pos] = val;
            }
            function VarintOp(len, val) {
              this.len = len;
              this.next = undefined;
              this.val = val;
            }
            VarintOp.prototype = Object.create(Op.prototype);
            VarintOp.prototype.fn = writeVarint32;
            Writer.prototype.uint32 = function write_uint32(value) {
              this.len += (this.tail = this.tail.next = new VarintOp((value >>>= 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5, value)).len;
              return this;
            };
            Writer.prototype.int32 = function write_int32(value) {
              return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) : this.uint32(value);
            };
            Writer.prototype.sint32 = function write_sint32(value) {
              return this.uint32((value << 1 ^ value >> 31) >>> 0);
            };
            function writeVarint64(val, buf, pos) {
              while (val.hi) {
                buf[pos++] = 127 & val.lo | 128;
                val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
                val.hi >>>= 7;
              }
              while (val.lo > 127) {
                buf[pos++] = 127 & val.lo | 128;
                val.lo = val.lo >>> 7;
              }
              buf[pos++] = val.lo;
            }
            Writer.prototype.uint64 = function write_uint64(value) {
              var bits = LongBits.from(value);
              return this._push(writeVarint64, bits.length(), bits);
            };
            Writer.prototype.int64 = Writer.prototype.uint64;
            Writer.prototype.sint64 = function write_sint64(value) {
              var bits = LongBits.from(value).zzEncode();
              return this._push(writeVarint64, bits.length(), bits);
            };
            Writer.prototype.bool = function write_bool(value) {
              return this._push(writeByte, 1, value ? 1 : 0);
            };
            function writeFixed32(val, buf, pos) {
              buf[pos] = 255 & val;
              buf[pos + 1] = val >>> 8 & 255;
              buf[pos + 2] = val >>> 16 & 255;
              buf[pos + 3] = val >>> 24;
            }
            Writer.prototype.fixed32 = function write_fixed32(value) {
              return this._push(writeFixed32, 4, value >>> 0);
            };
            Writer.prototype.sfixed32 = Writer.prototype.fixed32;
            Writer.prototype.fixed64 = function write_fixed64(value) {
              var bits = LongBits.from(value);
              return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
            };
            Writer.prototype.sfixed64 = Writer.prototype.fixed64;
            Writer.prototype["float"] = function write_float(value) {
              return this._push(util["float"].writeFloatLE, 4, value);
            };
            Writer.prototype["double"] = function write_double(value) {
              return this._push(util["float"].writeDoubleLE, 8, value);
            };
            var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
              buf.set(val, pos);
            } : function writeBytes_for(val, buf, pos) {
              for (var i = 0; i < val.length; ++i) buf[pos + i] = val[i];
            };
            Writer.prototype.bytes = function write_bytes(value) {
              var len = value.length >>> 0;
              if (!len) return this._push(writeByte, 1, 0);
              if (util.isString(value)) {
                var buf = Writer.alloc(len = base64.length(value));
                base64.decode(value, buf, 0);
                value = buf;
              }
              return this.uint32(len)._push(writeBytes, len, value);
            };
            Writer.prototype.string = function write_string(value) {
              var len = utf8.length(value);
              return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
            };
            Writer.prototype.fork = function fork() {
              this.states = new State(this);
              this.head = this.tail = new Op(noop, 0, 0);
              this.len = 0;
              return this;
            };
            Writer.prototype.reset = function reset() {
              if (this.states) {
                this.head = this.states.head;
                this.tail = this.states.tail;
                this.len = this.states.len;
                this.states = this.states.next;
              } else {
                this.head = this.tail = new Op(noop, 0, 0);
                this.len = 0;
              }
              return this;
            };
            Writer.prototype.ldelim = function ldelim() {
              var head = this.head, tail = this.tail, len = this.len;
              this.reset().uint32(len);
              if (len) {
                this.tail.next = head.next;
                this.tail = tail;
                this.len += len;
              }
              return this;
            };
            Writer.prototype.finish = function finish() {
              var head = this.head.next, buf = this.constructor.alloc(this.len), pos = 0;
              while (head) {
                head.fn(head.val, buf, pos);
                pos += head.len;
                head = head.next;
              }
              return buf;
            };
            Writer._configure = function(BufferWriter_) {
              BufferWriter = BufferWriter_;
              Writer.create = create();
              BufferWriter._configure();
            };
          }, {
            39: 39
          } ],
          43: [ function(require, module, exports) {
            module.exports = BufferWriter;
            var Writer = require(42);
            (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
            var util = require(39);
            function BufferWriter() {
              Writer.call(this);
            }
            BufferWriter._configure = function() {
              BufferWriter.alloc = util._Buffer_allocUnsafe;
              BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && "set" === util.Buffer.prototype.set.name ? function writeBytesBuffer_set(val, buf, pos) {
                buf.set(val, pos);
              } : function writeBytesBuffer_copy(val, buf, pos) {
                if (val.copy) val.copy(buf, pos, 0, val.length); else for (var i = 0; i < val.length; ) buf[pos++] = val[i++];
              };
            };
            BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
              util.isString(value) && (value = util._Buffer_from(value, "base64"));
              var len = value.length >>> 0;
              this.uint32(len);
              len && this._push(BufferWriter.writeBytesBuffer, len, value);
              return this;
            };
            function writeStringBuffer(val, buf, pos) {
              val.length < 40 ? util.utf8.write(val, buf, pos) : buf.utf8Write ? buf.utf8Write(val, pos) : buf.write(val, pos);
            }
            BufferWriter.prototype.string = function write_string_buffer(value) {
              var len = util.Buffer.byteLength(value);
              this.uint32(len);
              len && this._push(writeStringBuffer, len, value);
              return this;
            };
            BufferWriter._configure();
          }, {
            39: 39,
            42: 42
          } ]
        }, {}, [ 19 ]);
      })();
      cc._RF.pop();
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    1: void 0,
    10: void 0,
    11: void 0,
    12: void 0,
    13: void 0,
    14: void 0,
    15: void 0,
    16: void 0,
    17: void 0,
    18: void 0,
    2: void 0,
    20: void 0,
    21: void 0,
    22: void 0,
    23: void 0,
    24: void 0,
    25: void 0,
    26: void 0,
    27: void 0,
    28: void 0,
    29: void 0,
    3: void 0,
    30: void 0,
    31: void 0,
    32: void 0,
    33: void 0,
    34: void 0,
    35: void 0,
    36: void 0,
    37: void 0,
    38: void 0,
    39: void 0,
    4: void 0,
    40: void 0,
    41: void 0,
    42: void 0,
    43: void 0,
    5: void 0,
    6: void 0,
    7: void 0,
    8: void 0,
    9: void 0
  } ]
}, {}, [ "Game", "GameConfig", "ServerConfig", "SystemConfig", "UpdateConfig", "WebAPIConfig", "Global", "HttpFetch", "HttpRequest", "HttpXmlRequest", "Loader", "Logger", "Manager", "AnimationManager", "Audio", "AudioManager", "EventManager", "NetworkManager", "NetworkMessageTimer", "UIManager", "UpdateManager", "AudioDefine", "EventDefine", "HttpDefine", "LanguageDefine", "LanguagePathDefine", "LocalStorageDefine", "LocalizationDefine", "NetworkDefine", "SceneDefine", "UpdateDefine", "ViewDefine", "ViewLayerDefine", "ViewStyleDefine", "Localization", "HttpInterface", "ManagerInterface", "NetworkInterface", "PersistInterface", "PoolInterface", "PoolItemInterface", "SceneInterface", "UIInterface", "UpdateInterface", "ViewInterface", "WebAPIInterface", "md5", "protobuf", "Factory", "Pool", "Proto", "SceneBase", "UIBase", "ViewBase", "AccountScene", "BootScene", "HomeScene", "LoginView", "RegisterView", "LoadingClip", "MaintainView", "NumKeyboardView", "PopupsView", "RollNoticeView", "TipsView", "LoadingView", "LockTouchView", "ProgressView", "TestView", "UpdateView", "AudioEffectUtil", "CodeUtil", "LanguageUtil", "NetworkUtil", "TimeUtil", "TweenUtil", "Util" ]);
//# sourceMappingURL=index.js.map
