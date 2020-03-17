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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/CSS/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/CSS/index.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#form {\\r\\n    color: rgb(88, 6, 241);\\r\\n}\\r\\n#form1 {\\r\\n    color: rgb(73, 53, 94);\\r\\n}\\r\\n#scroll {\\r\\n    background-color: rgb(73, 53, 94);\\r\\n}\\r\\n#scrollBar {\\r\\n    height: 15px;\\r\\n    width: 1%;\\r\\n    background-color: skyblue;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/CSS/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/CSS/index.css":
/*!***************************!*\
  !*** ./src/CSS/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/CSS/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/CSS/index.css?");

/***/ }),

/***/ "./src/DS/linkedList.js":
/*!******************************!*\
  !*** ./src/DS/linkedList.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var linkedList = (function(){\r\n    var sList ={};\r\n    var dList = {};\r\n    var node = function(val){\r\n        this.val = val;\r\n        this.next = null;\r\n        this.prev = null;\r\n    };\r\n    var linkedListCycle = function(sList){\r\n        var slowNode = sList.head.next;\r\n        var fastNode = slowNode.next;\r\n        while(fastNode){\r\n            if(slowNode === fastNode){\r\n                return true;\r\n            }\r\n            slowNode = slowNode.next;\r\n            fastNode = fastNode.next.next;\r\n        }\r\n        return false;\r\n    }\r\n    var printReversed=function(){\r\n        var node  = sList.head;\r\n        var rec = function(node){\r\n            if(node === null)return;\r\n            rec(node.next);\r\n            console.log('linkedList',node.val);\r\n        }\r\n        rec(node);\r\n    };\r\n    var cloneList = function(sList){\r\n        let map = new Map();\r\n        let currentNode = sList.head;\r\n        let newHead = new node(currentNode.val);\r\n        let newList = {};\r\n        newList.head = newHead;\r\n        let newListNode = newList.head;\r\n        while(currentNode.next){\r\n            let cNode = map.get(currentNode.next.val);\r\n            if(cNode){\r\n                newListNode.next = cNode;\r\n            }else{\r\n               let newNode = new node(currentNode.next.val);\r\n               map.set(newNode.val,newNode);\r\n               newListNode.next = newNode;\r\n            }\r\n            currentNode = currentNode.next;\r\n            newListNode = newListNode.next;\r\n        } \r\n        currentNode = sList.head;\r\n        newListNode = newList.head;\r\n        if(currentNode.random){\r\n            while(currentNode){\r\n                let cNode = map.get(currentNode.random.val);\r\n                if(cNode){\r\n                    newListNode.random = cNode;\r\n                }\r\n                currentNode = currentNode.next;\r\n                newListNode = newListNode.next;\r\n            } \r\n        };\r\n        //console.log(newList === sList);\r\n        return newList;\r\n    }\r\n    var deleteItem = function(val){\r\n        var currentNode = sList.head;\r\n        var tempNode;\r\n        if(sList.head.val === val){\r\n            sList.head = sList.head.next;\r\n        }else{\r\n            while(currentNode){\r\n                if(currentNode.next.val === val){\r\n                    tempNode = currentNode.next;\r\n                    currentNode.next = tempNode.next;\r\n                    break;\r\n                }\r\n                currentNode = currentNode.next;\r\n            } \r\n        }\r\n        console.log('linkedList',sList);\r\n        return sList;\r\n    };\r\n    var addItem = function(val){\r\n        var newNode = new node(val);\r\n        if(sList.head){\r\n            var currentNode = sList.head;\r\n            while(currentNode){\r\n                if(currentNode.next === null){\r\n                    currentNode.next = newNode;\r\n                    break;\r\n                }else{\r\n                    currentNode = currentNode.next;\r\n                }\r\n            }\r\n        }else{\r\n            sList.head = newNode;\r\n        }\r\n        console.log('linkedList',sList);\r\n        return sList;\r\n    };\r\n    var start = function(){\r\n        addItem(12);\r\n        addItem(13);\r\n        addItem(14);\r\n        addItem(15);\r\n        addItem(16);\r\n        deleteItem(12);\r\n        console.log(linkedListCycle(sList));\r\n        console.log(cloneList(sList));\r\n        printReversed();\r\n    };\r\n    return {\r\n        addItem:addItem,\r\n        start:start\r\n    }\r\n})();\r\nmodule.exports = linkedList;\n\n//# sourceURL=webpack:///./src/DS/linkedList.js?");

/***/ }),

/***/ "./src/DS/tree.js":
/*!************************!*\
  !*** ./src/DS/tree.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var tree = (function(){\r\n    var tree = {};\r\n    var node = function(val){\r\n        this.val = val;\r\n        this.left = null;\r\n        this.right = null;\r\n    };\r\n    var insertNode = function(valu){\r\n        var newNode = new node(valu);\r\n        if(tree.root){\r\n            var currentNode = tree.root;\r\n            //insert(currentNode);\r\n            while(currentNode){\r\n                if(valu <= currentNode.val){\r\n                    if(currentNode.left === null){\r\n                        currentNode.left = newNode;\r\n                        break;\r\n                    }\r\n                    currentNode = currentNode.left;\r\n                }else if(valu > currentNode.val){\r\n                    if(currentNode.right === null){\r\n                        currentNode.right = newNode;\r\n                        break;\r\n                    }\r\n                    currentNode = currentNode.right;\r\n                }\r\n            }\r\n        }else{\r\n            tree.root = newNode;\r\n        }\r\n        print();\r\n        return tree;\r\n    };\r\n    var findNode = function(valu){\r\n        var currentNode = tree.root;\r\n        var dNode = null;\r\n        function inorder(currentNode){\r\n            if(currentNode === null)return null;\r\n            if(valu === currentNode.val){\r\n                return currentNode;\r\n            }\r\n            if(valu < currentNode.val){\r\n                if(currentNode.left === null){\r\n                   return null;\r\n                }\r\n                currentNode = currentNode.left;\r\n            }else if(valu > currentNode.val){\r\n                if(currentNode.right === null){\r\n                    return null;\r\n                }\r\n                currentNode = currentNode.right;\r\n            }\r\n            return inorder(currentNode);\r\n        };\r\n        dNode = inorder(currentNode);\r\n        console.log(dNode);\r\n        return dNode;\r\n    };\r\n    var deleteNode = function(valu){\r\n        var dNode = findNode(valu);\r\n        if(dNode === null){\r\n            console.log('Node not found');\r\n            return tree;\r\n        }else{\r\n            if(dNode.left === null){\r\n                set(dNode.right);\r\n            }else if(dNode.right === null){\r\n                set(dNode.left);\r\n            }else{\r\n                //find smallest to the right subtree;\r\n                var cNode = dNode.right;\r\n                var pNode = cNode;\r\n                while(cNode.left){\r\n                    if(cNode.left){\r\n                        pNode = cNode;\r\n                    }\r\n                    cNode = cNode.left;\r\n                }\r\n                dNode.val = cNode.val;\r\n                pNode.left = cNode.right;\r\n            }\r\n            function set(newNode){\r\n                dNode.val = newNode.val;\r\n                newNode.val = null;\r\n            }\r\n        }\r\n        print();\r\n        return tree;\r\n    };\r\n    var print = function(){\r\n        var arr = [];\r\n        var node = tree.root;\r\n        function inorder(cNode){\r\n            if(cNode){\r\n                inorder(cNode.left);\r\n                arr.push(cNode.val);\r\n                inorder(cNode.right);\r\n            }      \r\n        }\r\n        inorder(node);\r\n        console.log(arr);\r\n    };\r\n    var start = function(){\r\n        insertNode(10);\r\n        insertNode(6);\r\n        insertNode(8);\r\n        insertNode(7);\r\n        insertNode(9);\r\n        insertNode(5);\r\n        insertNode(14);\r\n        insertNode(13);\r\n        insertNode(18);\r\n        insertNode(16);\r\n        insertNode(17);\r\n        deleteNode(14);\r\n        deleteNode(6);\r\n        print();\r\n        //deleteNode(723);\r\n    };\r\n    return{\r\n        start:start\r\n    }\r\n})();\r\nmodule.exports = tree;\n\n//# sourceURL=webpack:///./src/DS/tree.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _getText; });\n// (function(){\r\n//     function _putText(){\r\n//         console.log('hello');\r\n//         var node = document.getElementById('form');\r\n//         node.innerHTML = 'Hello World';\r\n//     }\r\n//     return {\r\n//         putText:_putText\r\n//     }\r\n// }());\r\nclass _getText{\r\n    constructor(textVal,putId){\r\n        this.textVal = textVal\r\n        this.putId = putId \r\n    };\r\n    insertText(){\r\n        var node = document.getElementById(this.putId);\r\n        node.innerHTML = this.textVal;\r\n    } \r\n};\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll.js */ \"./src/scroll.js\");\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ \"./src/list.js\");\n/* harmony import */ var _service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service.js */ \"./src/service.js\");\n/* harmony import */ var _tables_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tables.js */ \"./src/tables.js\");\n/* harmony import */ var _DS_linkedList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DS/linkedList.js */ \"./src/DS/linkedList.js\");\n/* harmony import */ var _DS_linkedList_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_DS_linkedList_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _DS_tree_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DS/tree.js */ \"./src/DS/tree.js\");\n/* harmony import */ var _DS_tree_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_DS_tree_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _CSS_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CSS/index.css */ \"./src/CSS/index.css\");\n/* harmony import */ var _CSS_index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_CSS_index_css__WEBPACK_IMPORTED_MODULE_7__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// class _putText{\r\n//     constructor(textVal,putId){\r\n//         this.textVal = textVal\r\n//         this.putId = putId \r\n//     };\r\n//     insertText(){\r\n//         var node = document.getElementById(this.putId);\r\n//         node.innerHTML = this.textVal;\r\n//     }\r\n//     validateForm(){\r\n//         console.log('here');\r\n//         //window.location.href = \"http://localhost:8080/action.html\";\r\n//     }\r\n// }\r\n\r\n// var myText = new _putText('Hello World shalmal','form');\r\n// myText.insertText();\r\n// var gText = new _getText('something','form1');\r\n// gText.insertText();\r\n// return myText;\r\n\r\nvar validate = (function(){\r\n    var gText;\r\n    var scroll1;\r\n    var list1;\r\n    var content1;\r\n    var table1;\r\n    var validateForm = function(event){\r\n        event.preventDefault()\r\n        var value1 = document.getElementById('nameInput').value;\r\n        scroll1.increaseWidth(25);\r\n        insertText('Validated','form1');\r\n        list1.insertItem(value1);\r\n    };\r\n    var checkLog = function(){\r\n    };\r\n    var insertText = function(textVal,putId){\r\n        // var node = document.getElementById(putId);\r\n        // node.innerHTML = textVal;\r\n        gText = new _home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](textVal,putId);\r\n        gText.insertText();\r\n    };\r\n    var searchBar = function(){\r\n        let node = document.getElementById('toDo');\r\n        let holder = document.createElement('DIV');\r\n        holder.innerHTML = 'SEARCH';\r\n        let bar = document.createElement('INPUT');\r\n        bar.id = 'searchBar';\r\n        holder.appendChild(bar);\r\n        node.appendChild(holder);\r\n        list1.searchList();\r\n    };\r\n    var init = function(){\r\n        list1 = new _list_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n        scroll1 = new _scroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n        content1 = new _service_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n        table1 = new _tables_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\n        var data1 = content1.get();\r\n        _DS_linkedList_js__WEBPACK_IMPORTED_MODULE_5___default.a.start();\r\n        _DS_tree_js__WEBPACK_IMPORTED_MODULE_6___default.a.start();\r\n        data1.then((data)=>{\r\n            table1.setData(data);\r\n        });\r\n        var nodeForm = document.getElementById('form3');\r\n        insertText('Hello Shalmal','form');\r\n        searchBar();\r\n        nodeForm.addEventListener(\"submit\", validateForm,false);\r\n    }\r\n    return {\r\n        validateForm:validateForm,\r\n        checkLog:checkLog,\r\n        init:init(),\r\n    };\r\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _list; });\nclass _list{\r\n    constructor(){\r\n         this.first=true;\r\n         this.searchFilter = function(){\r\n           let val= document.getElementById('searchBar').value.toUpperCase();\r\n           let ul = document.getElementById(\"myUL\");\r\n           let li = ul.getElementsByTagName(\"li\");\r\n           let len = li.length;\r\n           var txtValue;\r\n           for(let i =0;i<len;i++){\r\n                console.log(li[i].innerText || li[i].innerHTML);\r\n                txtValue = li[i].innerText || li[i].innerHTML;\r\n                if (txtValue.toUpperCase().indexOf(val) > -1) {\r\n                    li[i].style.display = \"\";\r\n                } else {\r\n                    li[i].style.display = \"none\";\r\n                }\r\n           }\r\n        };\r\n    };\r\n    insertItem(putItem){\r\n        if(this.first){\r\n            let node = document.getElementById('toDo');\r\n            let unList = document.createElement('UL');\r\n            unList.id = 'myUL';\r\n            node.appendChild(unList);\r\n            this.first = false;\r\n        }\r\n        var unList = document.getElementById('myUL');\r\n        let unItem = document.createElement('LI');\r\n        unItem.innerText = putItem;\r\n        unList.appendChild (unItem);\r\n    };\r\n    searchList(){\r\n        var searchBar = document.getElementById('searchBar');\r\n        searchBar.addEventListener('keyup',this.searchFilter);\r\n    }\r\n    \r\n};\n\n//# sourceURL=webpack:///./src/list.js?");

/***/ }),

/***/ "./src/scroll.js":
/*!***********************!*\
  !*** ./src/scroll.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return scroll; });\nclass scroll{\r\n    constructor(){\r\n        this.val = 1;\r\n    };\r\n    increaseWidth(val){\r\n        var node = document.getElementById('scrollBar');\r\n        node.style.width = this.val+'%';\r\n        this.val = this.val+5;\r\n    } \r\n};\n\n//# sourceURL=webpack:///./src/scroll.js?");

/***/ }),

/***/ "./src/service.js":
/*!************************!*\
  !*** ./src/service.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _getContent; });\n\r\n\r\nclass _getContent{\r\n    constructor(){\r\n        \r\n    };\r\n    get(){\r\n        var content;\r\n        \r\n            let myFirstPromise = new Promise((resolve,reject)=>{\r\n                try {\r\n                    var xhttp = new XMLHttpRequest();\r\n                    xhttp.onreadystatechange = function() {\r\n                        if (this.readyState == 4 && this.status == 200) {\r\n                            resolve(this.responseText)\r\n                        }\r\n                    };\r\n                    xhttp.open(\"GET\", \"dist/mock/content.json\", true);\r\n                    xhttp.send();\r\n                } catch (error) {\r\n                    console.log(error);\r\n                    }\r\n                });\r\n                //myFirstPromise.then((content)=>{\r\n                return myFirstPromise;\r\n            //})\r\n            \r\n        \r\n    } \r\n};\n\n//# sourceURL=webpack:///./src/service.js?");

/***/ }),

/***/ "./src/tables.js":
/*!***********************!*\
  !*** ./src/tables.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _tables; });\nclass _tables{\r\n    constructor(){\r\n        this.sortIt = function(val){\r\n            var table, rows, switching, i, x, y, shouldSwitch;\r\n            var n = val.target.getAttribute('name');\r\n            table = document.getElementById(\"myTable\");\r\n            switching = true;\r\n            while (switching) {\r\n                switching = false;\r\n                rows = table.rows;\r\n                for (i = 1; i < (rows.length - 1); i++) {\r\n                  shouldSwitch = false;\r\n                  x = rows[i].getElementsByTagName(\"TD\")[n];\r\n                  y = rows[i + 1].getElementsByTagName(\"TD\")[n];\r\n                  if(x&&y){\r\n                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {\r\n                        //if so, mark as a switch and break the loop:\r\n                        shouldSwitch= true;\r\n                        break;\r\n                      }\r\n                  } \r\n                }\r\n                if (shouldSwitch) {\r\n                  rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);\r\n                  switching = true;     \r\n                }\r\n            }\r\n        }\r\n        this.appenIntable = function(obj,table){\r\n            var row = document.createElement('TR');\r\n            var i = 0;\r\n            for(var key in obj){\r\n                var col = document.createElement('TH');\r\n                col.addEventListener('click',this.sortIt);\r\n                col.setAttribute('name',i);\r\n                i++;\r\n                col.innerHTML = obj[key].question;\r\n                row.appendChild(col); \r\n            }\r\n            table.appendChild(row);\r\n            var obj1 = obj.q1;\r\n            var obj2 = obj.q2;\r\n\r\n            obj1.options.forEach((element,i) => {\r\n                let row = document.createElement('TR');\r\n                let col1 = document.createElement('td');\r\n                let col2 = document.createElement('td');\r\n                col1.innerHTML = element;\r\n                col2.innerHTML = obj2.options[i];\r\n                row.appendChild(col1);\r\n                row.appendChild(col2);\r\n                table.appendChild(row);\r\n            });\r\n        }\r\n        \r\n    }\r\n    setData(data){\r\n        var dataStr = JSON.parse(data);\r\n        var node = document.getElementById('tableIn');\r\n        var table = document.createElement('TABLE');\r\n        table.id = 'myTable';\r\n        for(var key in dataStr.quiz){\r\n            this.appenIntable(dataStr.quiz[key],table);\r\n        }\r\n        node.appendChild(table);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/tables.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });