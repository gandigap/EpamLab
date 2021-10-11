/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.categories = null;
    this.titles = null;
    this.createListDropDown('categories');
    this.currentData = null;
    this.dropDownCategories = document.getElementById('categories');
    this.dropDownCategoriesContent = document.getElementById('categories__content');
    this.dropDownTitlesContent = document.getElementById('titles__content');
    this.dropDownTitles = document.getElementById('titles');
  }

  _createClass(App, [{
    key: "getArrayFilterData",
    value: function getArrayFilterData(data) {
      return this.currentData.entries.map(function (item) {
        return data === 'categories' ? item.Category : item.API;
      }).filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
    }
  }, {
    key: "createListDropDown",
    value: function () {
      var _createListDropDown = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(type) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(type === 'categories')) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return this.getData();

              case 3:
                if (this.currentData === null || this.currentData.length === 0) {
                  document.getElementById('other-content').innerHTML = "\n        <h3 class=\"title-error\">App don't have data</h3>\n        ";
                } else {
                  this.categories = this.getArrayFilterData('categories');
                  this.categories.forEach(function (category) {
                    create('p', 'dropdown__content__link category', "".concat(category), _this.dropDownCategoriesContent);
                  });
                  this.addEventListenerForDropDown('category');
                }

                _context.next = 7;
                break;

              case 6:
                if (type === 'titles') {
                  this.dropDownTitlesContent.innerHTML = '';
                  this.titles.forEach(function (title) {
                    create('p', 'dropdown__content__link title', "".concat(title.toUpperCase()), _this.dropDownTitlesContent);
                  });
                  this.addEventListenerForDropDown('title');
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createListDropDown(_x) {
        return _createListDropDown.apply(this, arguments);
      }

      return createListDropDown;
    }()
  }, {
    key: "addEventListenerForDropDown",
    value: function addEventListenerForDropDown(info) {
      var _this2 = this;

      if (info === 'category') {
        var categoryLinks = document.querySelectorAll('.category');
        categoryLinks.forEach(function (categoryLink) {
          categoryLink.addEventListener('click', _this2.checkElement.bind(_this2), false);
        });
      } else if (info === 'title') {
        var titleLinks = document.querySelectorAll('.title');
        titleLinks.forEach(function (titleLink) {
          titleLink.addEventListener('click', _this2.checkElement.bind(_this2), false);
        });
      }
    }
  }, {
    key: "getData",
    value: function () {
      var _getData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this3 = this;

        var queryString,
            _args2 = arguments;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                queryString = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : '';
                _context2.next = 3;
                return fetch("https://api.publicapis.org/entries?".concat(queryString)).then(function (response) {
                  if (response.ok) {
                    return response.json();
                  } else {
                    throw new Error('Something went wrong');
                  }
                }).then(function (data) {
                  _this3.currentData = data;
                }).catch(function (error) {
                  console.error('There has been a problem with your fetch operation:', error);
                  _this3.currentData = null;
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getData() {
        return _getData.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: "checkElement",
    value: function () {
      var _checkElement = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
        var targetInfo;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                targetInfo = event.target.textContent.split(' ')[0].toLowerCase();

                if (!event.target.classList.contains('category')) {
                  _context3.next = 10;
                  break;
                }

                this.dropDownTitles.style.display = 'block';
                _context3.next = 5;
                return this.getData("category=".concat(targetInfo, "&https=true"));

              case 5:
                this.titles = this.getArrayFilterData('titles');
                this.createListDropDown('titles');
                console.log('c');
                _context3.next = 14;
                break;

              case 10:
                if (!event.target.classList.contains('title')) {
                  _context3.next = 14;
                  break;
                }

                _context3.next = 13;
                return this.getData("title=".concat(targetInfo));

              case 13:
                this.renderData();

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function checkElement(_x2) {
        return _checkElement.apply(this, arguments);
      }

      return checkElement;
    }()
  }, {
    key: "renderData",
    value: function renderData() {
      var otherContent = document.getElementById('other-content');
      otherContent.innerHTML = '';

      var _ref = _toConsumableArray(this.currentData.entries),
          data = _ref[0];

      console.log(data);
      create('div', 'api-info', " \n      <h3 class=\"api-info__title\">".concat(data.API, "</h3>\n      <div class=\"api-info__description\">").concat(data.Description, "</div>\n      <a class=\"api-info__link\" href=\"\">").concat(data.Link, "</a>"), otherContent);
    }
  }]);

  return App;
}();

var app = new App();

function create(el) {
  var _element$classList;

  var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var child = arguments.length > 2 ? arguments[2] : undefined;
  var parent = arguments.length > 3 ? arguments[3] : undefined;
  var element = null;

  try {
    element = document.createElement(el);
  } catch (error) {
    throw new Error('Unable to create HTMLElement! You should give a proper HTML tag name');
  }

  if (classNames) (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classNames.split(' ')));

  if (child && Array.isArray(child)) {
    child.forEach(function (childElement) {
      return childElement && element.appendChild(childElement);
    });
  } else if (child && _typeof(child) === 'object') {
    element.appendChild(child);
  } else if (typeof child === 'string') {
    element.innerHTML = child;
  }

  if (parent) {
    parent.appendChild(element);
  }

  for (var _len = arguments.length, dataAttr = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    dataAttr[_key - 4] = arguments[_key];
  }

  if (dataAttr.length) {
    dataAttr.forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          attrName = _ref3[0],
          attrValue = _ref3[1];

      if (attrValue === '') {
        element.setAttribute(attrName, '');
        return;
      }

      if (attrName.match(/value|id|placeholder|type|value|cols|rows|src/i)) {
        element.setAttribute(attrName, attrValue);
      } else {
        element.dataset[attrName] = attrValue;
      }
    });
  }

  return element;
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map