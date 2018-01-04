/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/quincysoeliman/Sites/card_game/node_modules/pixi.js/lib/index.js'\n    at Error (native)");

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameScene = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pixi = __webpack_require__(10);

var PIXI = _interopRequireWildcard(_pixi);

var _AssetLoader = __webpack_require__(195);

var _Scene2 = __webpack_require__(198);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameScene = exports.GameScene = function (_Scene) {
  _inherits(GameScene, _Scene);

  function GameScene() {
    _classCallCheck(this, GameScene);

    return _possibleConstructorReturn(this, (GameScene.__proto__ || Object.getPrototypeOf(GameScene)).call(this));
  }

  _createClass(GameScene, [{
    key: 'preload',
    value: function preload() {
      var _this2 = this;

      PIXI.loader.add(['assets/images/squirrel.png']).load(function () {
        return _this2.setup();
      });
    }
  }, {
    key: 'setup',
    value: function setup() {
      this.player = _AssetLoader.AssetLoader.loadSprite('assets/images/squirrel.png');
      if (this.player) {
        this.player.anchor.set(0.5);
        this.player.x = 150;
        this.player.y = 150;

        this.addChild(this.player);
      }
    }
  }, {
    key: 'update',
    value: function update(delta) {
      if (this.player) {
        this.player.rotation += 0.1 * delta;
      }
    }
  }]);

  return GameScene;
}(_Scene2.Scene);

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssetLoader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pixi = __webpack_require__(10);

var PIXI = _interopRequireWildcard(_pixi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AssetLoader = exports.AssetLoader = function () {
  function AssetLoader() {
    _classCallCheck(this, AssetLoader);
  }

  _createClass(AssetLoader, null, [{
    key: 'loadSprite',


    /**
     * Loads an existing sprite.
     *
     * @param reference
     *  The reference to the sprite.
     *
     * @returns
     *  Returns a PIXI.Sprite if the sprite exists.
     *  Returns a false if the sprite doesn't exist.
     */
    value: function loadSprite(reference) {
      var resource = PIXI.loader.resources[reference];
      if (!resource) {
        return false;
      }
      return new PIXI.Sprite(resource.texture);
    }
  }]);

  return AssetLoader;
}();

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = undefined;

var _pixi = __webpack_require__(10);

var PIXI = _interopRequireWildcard(_pixi);

var _AssetLoader = __webpack_require__(195);

var _Scene2 = __webpack_require__(198);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuScene = exports.MenuScene = function (_Scene) {
  _inherits(MenuScene, _Scene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _possibleConstructorReturn(this, (MenuScene.__proto__ || Object.getPrototypeOf(MenuScene)).call(this));
  }

  return MenuScene;
}(_Scene2.Scene);

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scene = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pixi = __webpack_require__(10);

var PIXI = _interopRequireWildcard(_pixi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scene = exports.Scene = function (_PIXI$Container) {
  _inherits(Scene, _PIXI$Container);

  /**
   * The Scene's constructor.
   */
  function Scene() {
    _classCallCheck(this, Scene);

    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

    _this.preload();
    return _this;
  }

  /**
   * Preload assets.
   */


  _createClass(Scene, [{
    key: 'preload',
    value: function preload() {
      var _this2 = this;

      PIXI.loader.load(function () {
        return _this2.setup();
      });
    }

    /**
     * Setup the scene.
     */

  }, {
    key: 'setup',
    value: function setup() {}

    /**
     * Update the scene.
     */

  }, {
    key: 'update',
    value: function update(delta) {}
  }]);

  return Scene;
}(PIXI.Container);

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SceneManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pixi = __webpack_require__(10);

var PIXI = _interopRequireWildcard(_pixi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneManager = exports.SceneManager = function (_PIXI$Container) {
  _inherits(SceneManager, _PIXI$Container);

  /**
   * The SceneManager's constructor.
   */
  function SceneManager() {
    _classCallCheck(this, SceneManager);

    return _possibleConstructorReturn(this, (SceneManager.__proto__ || Object.getPrototypeOf(SceneManager)).call(this));
  }

  /**
   * Resets the container and plays a new scene.
   *
   * @param scene
   *  The scene to play.
   */


  _createClass(SceneManager, [{
    key: 'play',
    value: function play(scene) {
      if (this.currentScene) {
        this.removeChild(this.currentScene);
      }

      this.currentScene = scene;
      this.addChild(this.currentScene);
    }
  }]);

  return SceneManager;
}(PIXI.Container);

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(91);

// The settings of the game.
var settings = {
  width: 800,
  height: 600,
  antialias: true,
  resolution: 1
};

// Start the game.
// Import the game.
new _Game.Game('game', settings).init();

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// Import the engine.


// Import scenes.


var _pixi = __webpack_require__(10);

var PIXI = _interopRequireWildcard(_pixi);

var _SceneManager = __webpack_require__(199);

var _GameScene = __webpack_require__(194);

var _MenuScene = __webpack_require__(197);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = exports.Game = function () {

  /**
   * The Game's constructor.
   *
   * @param el
   *  The element to append the game to.
   *
   * @param settings
   *  The settings of the game.
   */
  function Game(el, settings) {
    _classCallCheck(this, Game);

    this.el = document.getElementById(el);
    this.app = new PIXI.Application(settings);
    this.sceneManager = new _SceneManager.SceneManager();
  }

  /**
   * Initializes the game.
   */


  _createClass(Game, [{
    key: 'init',
    value: function init() {
      this.el.appendChild(this.app.view);
      this.app.stage.addChild(this.sceneManager);

      // Play the game scene on launch.
      var gameScene = new _GameScene.GameScene();
      this.sceneManager.play(gameScene);

      this.update();
    }

    /**
     * Updates the game.
     */

  }, {
    key: 'update',
    value: function update() {
      var _this = this;

      // Update the current scene.
      this.app.ticker.add(function (delta) {
        if (_this.sceneManager.currentScene) {
          _this.sceneManager.currentScene.update(delta);
        }
      });
    }
  }]);

  return Game;
}();

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map