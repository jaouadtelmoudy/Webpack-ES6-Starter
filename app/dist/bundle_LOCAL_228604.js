/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Produit = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _produit = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var service = void 0;

var Produit = exports.Produit = function () {
    function Produit(ref, lib, prix) {
        _classCallCheck(this, Produit);

        this.reference = ref;
        this.libelle = lib;
        this.prix = prix;
        if (!service) {
            this.service = new _produit.ProduitService();
        } else {
            this.service = service;
        }
    }

    _createClass(Produit, [{
        key: 'getReference',
        value: function getReference() {
            return this.reference;
        }
    }, {
        key: 'setReference',
        value: function setReference(ref) {
            this.reference = ref;
        }
    }, {
        key: 'getLibelle',
        value: function getLibelle() {
            return this.libelle;
        }
    }, {
        key: 'setLibelle',
        value: function setLibelle(lib) {
            this.libelle = lib;
        }
    }, {
        key: 'getPrix',
        value: function getPrix() {
            return this.prix;
        }
    }, {
        key: 'setPrix',
        value: function setPrix(prix) {
            this.prix = prix;
        }
    }]);

    return Produit;
}();

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var intance = void 0;

var ProduitService = exports.ProduitService = function () {
    function ProduitService() {
        _classCallCheck(this, ProduitService);
    }

    _createClass(ProduitService, [{
        key: 'getAllProduit',
        value: function getAllProduit() {
            return [{ reference: '11111', libelle: 'Lait', prix: '1' }, { reference: '11112', libelle: 'Viande', prix: '3' }, { reference: '11113', libelle: 'Poulet', prix: '3' }, { reference: '11114', libelle: 'Dessert', prix: '2' }];
        }
    }], [{
        key: 'getInstance',
        value: function getInstance() {
            if (!intance) {
                intance = this;
                return intance;
            }
            return instance;
        }
    }]);

    return ProduitService;
}();

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _produit = __webpack_require__(0);

var p = new _produit.Produit("111111", "Lait", "1");
console.log(p.service.getAllProduit());

/***/ })
/******/ ]);