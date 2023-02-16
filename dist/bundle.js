/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainHeader": () => (/* binding */ mainHeader)
/* harmony export */ });
/* harmony import */ var _mainHeader_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _images_imagesFolder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);




class mainHeader {

    constructor (args)
    {
        this.mainHeaderTemplate= document.createElement('div');
        this.mainHeaderTemplate.className = `${_mainHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].headerWrapper}`;

        let globalOptionsTemplate = ``;

        for (const [key, value] of Object.entries(_images_imagesFolder_js__WEBPACK_IMPORTED_MODULE_1__.globalOptionsLogo)) {
            
            if(key=="Offers")
            globalOptionsTemplate += `
            <div class = "${_mainHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].globalOption}">
                <span>${value}</span>
                <span>${key}</span> 
                <span class="${_mainHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].newTag}">NEW</span>
            </div>
            `;
            else
            globalOptionsTemplate += `
            <div class = "${_mainHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].globalOption}">
                <span>${value}</span>
                <span>${key}</span> 
            </div>
            `;
        }

        this.mainHeaderTemplate.innerHTML = `
        <div class="${_mainHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].mainHeader}">
            <div class= "${_mainHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].wrapper}">
                <a href="${args.logoURL}" class = "${_mainHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].logo} ${_mainHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].logoImage}" >
                    ${args.logoSvg}
                </a>
                <div class = "${_mainHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].userLocation}">
                    <span class=${_mainHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].preciseLocation} id = "preciseLocation">Sector 42</span>
                    <span class=${_mainHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].locationValue} id = "locationValue">Gurugram, Haryana 122002, India</span>
                    <span class="${_mainHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].locationDropDown}">
                    ${_images_imagesFolder_js__WEBPACK_IMPORTED_MODULE_1__.locationDropDown}
                    </span>
                </div>
            </div>
            <div class = "${_mainHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].globalOptionsMenu}">
                ${globalOptionsTemplate}
            </div>
        </div>
        `;


        let changeLocationValue = () => {
            let newArea = prompt("enter your exact area where you reside");
            let newAddress = prompt("enter your city and state name");
            newArea = newArea.length ? newArea: 'sector 42';
            newAddress = newAddress.length ? newAddress: 'Gurugram, Haryana 122002, India';

            this.mainHeaderTemplate.querySelector('#preciseLocation').innerHTML = newArea;
            this.mainHeaderTemplate.querySelector('#locationValue').innerHTML = newAddress;
        }

        this.mainHeaderTemplate.querySelector(`.${_mainHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].userLocation}`).addEventListener('click', changeLocationValue, false);
    }

    get () {
        return this.mainHeaderTemplate;
    }

}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_mainHeader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_mainHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_mainHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_mainHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_mainHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 3 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 4 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 5 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 8 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 9 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".H2NPdT_uDBxpThy1UOJD {\n    background-color: white;\n    position:sticky;\n    top:0px;\n    z-index:1;\n    min-height: 80px;\n    padding: 0px 20px;\n}\n\n.TIIeTZcwn8BkQosE76ed {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin:0px auto;\n    max-width: 1200px;\n    min-width: 1200px;\n    height:80px;\n    background: white;\n}\n\n.YDVIs_FMsYPP6MSOIzrB {\n    display: flex;\n    align-items: center;\n}\n\n.POqybUUFjyFdsQ1ue3Au {\n    background: white;\n    height: 50px;\n    margin-right:16px;\n}\n\n.WAuYZFb4E3yHV7F7nQuY {\n    margin-right: 16px;\n    background: white;\n    height: 50px;\n    width:auto;\n    transition: transform 0.3s;\n}\n\n.WAuYZFb4E3yHV7F7nQuY:hover {\n    cursor: pointer;\n    transform:scale(1.1);\n}\n\n\n.e0SlavpRYsUpqDnE2Vuz {\n    background: white;\n    color: #686b78;\n    margin:16px;\n}\n\n.e0SlavpRYsUpqDnE2Vuz:hover {\n    cursor: pointer;\n}\n\n.e0SlavpRYsUpqDnE2Vuz:hover .N2IJ5tipSEMfjVRDCHFY {\n    color:#fc8018;\n}\n\n.e0SlavpRYsUpqDnE2Vuz:hover .N2IJ5tipSEMfjVRDCHFY::after {\n    background:#fc8018;\n}\n\n.e0SlavpRYsUpqDnE2Vuz:hover .oO3rpCmkOm8iHHWBVpRm {\n    color: #93959f;\n}\n\n.oO3rpCmkOm8iHHWBVpRm {\n    margin-left:4px;\n    margin-right:4px;\n    line-height: 1.2;\n    align-items: center;\n    background: white;\n    font-size: 14px;\n}\n\n.ikmFLBV6VMgNfSuo36mj svg{\n    height:13px;\n    width: 12.6px;\n}\n\n\n.N2IJ5tipSEMfjVRDCHFY {\n    content: \"Sector 42\";\n    display: inline-block;\n    font-size: 14px;\n    font-weight: 100;\n    color: #3D4152;\n    font-weight: bolder;\n    height: 15px;\n    min-width:30px;\n    margin-left: 16px;\n    position: relative;\n    top:0;\n}\n\n.N2IJ5tipSEMfjVRDCHFY:after {\n    content: \"\";\n    position: absolute;\n    height: 2px;\n    left: 0;\n    bottom: -5px;\n    width: 100%;\n    background: #3d4152;\n}\n\n.ERHcojh36YefytpU3nGV {\n    background: white;\n    height: 100%;\n    display:flex;\n    justify-content: space-between;\n    flex-direction: row-reverse;\n    align-items: center;\n    min-width: 20%;\n}\n\n.j_HE90uE6hGN6AffCOD_ {\n    color: #ffa700;\n    font-size: 10px;\n    top: 0px;\n    font-weight: 600;\n    position: absolute;\n    right: -24px;\n    text-transform: uppercase;\n}\n\n.jj1xLNwer5bvbyrW8BST {\n    position: relative;\n    background-color: white;\n    font-weight: 500;\n    font-size: 16px;\n    color: #3D4152;\n    font-family: ProximaNova,arial,Helvetica Neue,sans-serif;\n    letter-spacing: 0;\n    line-height: 1.2;\n    margin-right:60px;\n    align-items: center;\n    display: flex;\n    gap: 8px;\n}\n\n.jj1xLNwer5bvbyrW8BST:first-child {\n    margin-right:0px;\n}\n\n.jj1xLNwer5bvbyrW8BST:hover {\n    cursor: pointer;\n    color: #fc8018;\n}\n\n.jj1xLNwer5bvbyrW8BST:hover svg{\n    fill:#fc8018;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"headerWrapper": "H2NPdT_uDBxpThy1UOJD",
	"mainHeader": "TIIeTZcwn8BkQosE76ed",
	"wrapper": "YDVIs_FMsYPP6MSOIzrB",
	"logo": "POqybUUFjyFdsQ1ue3Au",
	"logoImage": "WAuYZFb4E3yHV7F7nQuY",
	"userLocation": "e0SlavpRYsUpqDnE2Vuz",
	"preciseLocation": "N2IJ5tipSEMfjVRDCHFY",
	"locationValue": "oO3rpCmkOm8iHHWBVpRm",
	"locationDropDown": "ikmFLBV6VMgNfSuo36mj",
	"globalOptionsMenu": "ERHcojh36YefytpU3nGV",
	"newTag": "j_HE90uE6hGN6AffCOD_",
	"globalOption": "jj1xLNwer5bvbyrW8BST"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 10 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 11 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globalOptionsLogo": () => (/* binding */ globalOptionsLogo),
/* harmony export */   "locationDropDown": () => (/* binding */ locationDropDown),
/* harmony export */   "logoSvg": () => (/* binding */ logoSvg),
/* harmony export */   "offerImages": () => (/* binding */ offerImages)
/* harmony export */ });

const offerImages = [
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep",
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t",
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym",
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v",
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"

];

const logoSvg = `<svg class="logoSvgClass" viewBox="0 0 559 825" height="49" width="34" fill="#fc8019">
<path fill-rule="evenodd" clip-rule="evenodd" d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z" fill="url(#paint0_linear_19447_66107)"></path>
<defs>
    <linearGradient id="paint0_linear_19447_66107" x1="445.629" y1="63.8626" x2="160.773" y2="537.598" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FF993A"></stop>
        <stop offset="1" stop-color="#F15700"></stop>
    </linearGradient>
</defs>
</svg>`;


const locationDropDown = `<svg width="67px" height="67px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fc8018" stroke="#fc8018" stroke-width="102.4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.048"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>`;

const globalOptionsLogo = {
    'Cart':`<svg class="_1GTCc _2MSid" viewBox="-1 0 37 32" height="20" width="20" fill="white" stroke="#686b78" stroke-width="3px" stroke-line-join="round"><path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path></svg>`,
    'Sign In':`<svg class="_1GTCc" viewBox="6 0 12 24" height="19" width="18" fill="#686b78"><path d="M11.9923172,11.2463768 C8.81761115,11.2463768 6.24400341,8.72878961 6.24400341,5.62318841 C6.24400341,2.5175872 8.81761115,0 11.9923172,0 C15.1670232,0 17.740631,2.5175872 17.740631,5.62318841 C17.740631,8.72878961 15.1670232,11.2463768 11.9923172,11.2463768 Z M11.9923172,9.27536232 C14.0542397,9.27536232 15.7257581,7.64022836 15.7257581,5.62318841 C15.7257581,3.60614845 14.0542397,1.97101449 11.9923172,1.97101449 C9.93039471,1.97101449 8.25887628,3.60614845 8.25887628,5.62318841 C8.25887628,7.64022836 9.93039471,9.27536232 11.9923172,9.27536232 Z M24,24 L0,24 L1.21786143,19.7101449 L2.38352552,15.6939891 C2.85911209,14.0398226 4.59284263,12.7536232 6.3530098,12.7536232 L17.6316246,12.7536232 C19.3874139,12.7536232 21.1256928,14.0404157 21.6011089,15.6939891 L22.9903494,20.5259906 C23.0204168,20.63057 23.0450458,20.7352884 23.0641579,20.8398867 L24,24 Z M21.1127477,21.3339312 L21.0851024,21.2122487 C21.0772161,21.1630075 21.0658093,21.1120821 21.0507301,21.0596341 L19.6614896,16.2276325 C19.4305871,15.4245164 18.4851476,14.7246377 17.6316246,14.7246377 L6.3530098,14.7246377 C5.4959645,14.7246377 4.55444948,15.4231177 4.32314478,16.2276325 L2.75521062,21.6811594 L2.65068631,22.0289855 L21.3185825,22.0289855 L21.1127477,21.3339312 Z"></path></svg>`,
    'Help':`<svg class="_1GTCc" viewBox="6 -1 12 25" height="19" width="19" fill="#686b78"><path d="M21.966903,13.2244898 C22.0156989,12.8231523 22.0408163,12.4145094 22.0408163,12 C22.0408163,11.8357822 22.036874,11.6724851 22.029079,11.5101984 L17.8574333,11.5102041 C17.8707569,11.6717062 17.877551,11.8350597 17.877551,12 C17.877551,12.4199029 17.8335181,12.8295214 17.749818,13.2244898 L21.966903,13.2244898 Z M21.5255943,15.1836735 L16.9414724,15.1836735 C15.8950289,16.8045422 14.0728218,17.877551 12,17.877551 C9.92717823,17.877551 8.1049711,16.8045422 7.05852762,15.1836735 L2.47440565,15.1836735 C3.80564362,19.168549 7.56739481,22.0408163 12,22.0408163 C16.4326052,22.0408163 20.1943564,19.168549 21.5255943,15.1836735 Z M21.7400381,9.55102041 C20.6468384,5.18931674 16.7006382,1.95918367 12,1.95918367 C7.2993618,1.95918367 3.3531616,5.18931674 2.25996187,9.55102041 L6.6553883,9.55102041 C7.58404845,7.5276442 9.62792376,6.12244898 12,6.12244898 C14.3720762,6.12244898 16.4159515,7.5276442 17.3446117,9.55102041 L21.7400381,9.55102041 Z M2.03309705,13.2244898 L6.25018203,13.2244898 C6.16648186,12.8295214 6.12244898,12.4199029 6.12244898,12 C6.12244898,11.8350597 6.1292431,11.6717062 6.14256675,11.5102041 L1.97092075,11.5102041 C1.96312595,11.6724851 1.95918367,11.8357822 1.95918367,12 C1.95918367,12.4145094 1.98430112,12.8231523 2.03309705,13.2244898 Z M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,15.9183673 C14.1640545,15.9183673 15.9183673,14.1640545 15.9183673,12 C15.9183673,9.83594547 14.1640545,8.08163265 12,8.08163265 C9.83594547,8.08163265 8.08163265,9.83594547 8.08163265,12 C8.08163265,14.1640545 9.83594547,15.9183673 12,15.9183673 Z"></path></svg>`,
    'Offers':`<svg class="_1GTCc" viewBox="0 0 32 32" height="19" width="19" fill="#686b78"><path d="M14.2 2.864l-1.899 1.38c-0.612 0.447-1.35 0.687-2.11 0.687h-2.352c-0.386 0-0.727 0.248-0.845 0.613l-0.728 2.238c-0.235 0.721-0.691 1.348-1.302 1.79l-1.905 1.385c-0.311 0.226-0.442 0.626-0.323 0.991l0.728 2.241c0.232 0.719 0.232 1.492-0.001 2.211l-0.727 2.237c-0.119 0.366 0.011 0.767 0.323 0.994l1.906 1.384c0.61 0.445 1.064 1.070 1.3 1.79l0.728 2.24c0.118 0.365 0.459 0.613 0.844 0.613h2.352c0.759 0 1.497 0.24 2.107 0.685l1.9 1.381c0.313 0.227 0.736 0.227 1.048 0.001l1.9-1.38c0.613-0.447 1.349-0.687 2.11-0.687h2.352c0.384 0 0.726-0.248 0.845-0.615l0.727-2.235c0.233-0.719 0.688-1.346 1.302-1.794l1.904-1.383c0.311-0.226 0.442-0.627 0.323-0.993l-0.728-2.239c-0.232-0.718-0.232-1.49 0.001-2.213l0.727-2.238c0.119-0.364-0.012-0.765-0.324-0.992l-1.901-1.383c-0.614-0.445-1.070-1.074-1.302-1.793l-0.727-2.236c-0.119-0.366-0.461-0.614-0.845-0.614h-2.352c-0.76 0-1.497-0.239-2.107-0.685l-1.903-1.382c-0.313-0.227-0.736-0.226-1.047-0.001zM16.829 0.683l1.907 1.385c0.151 0.11 0.331 0.168 0.521 0.168h2.352c1.551 0 2.927 1 3.408 2.475l0.728 2.241c0.057 0.177 0.169 0.332 0.321 0.442l1.902 1.383c1.258 0.912 1.784 2.531 1.304 4.006l-0.726 2.234c-0.058 0.182-0.058 0.375-0.001 0.552l0.727 2.237c0.48 1.477-0.046 3.096-1.303 4.007l-1.9 1.38c-0.153 0.112-0.266 0.268-0.324 0.447l-0.727 2.237c-0.48 1.477-1.856 2.477-3.408 2.477h-2.352c-0.19 0-0.37 0.058-0.523 0.17l-1.904 1.383c-1.256 0.911-2.956 0.911-4.213-0.001l-1.903-1.384c-0.15-0.11-0.332-0.168-0.521-0.168h-2.352c-1.554 0-2.931-1.001-3.408-2.477l-0.726-2.234c-0.059-0.18-0.173-0.338-0.324-0.448l-1.902-1.381c-1.258-0.912-1.784-2.53-1.304-4.008l0.727-2.235c0.058-0.179 0.058-0.373 0.001-0.551l-0.727-2.236c-0.481-1.476 0.046-3.095 1.302-4.006l1.905-1.385c0.151-0.11 0.264-0.265 0.323-0.444l0.727-2.235c0.478-1.476 1.855-2.477 3.408-2.477h2.352c0.189 0 0.371-0.059 0.523-0.17l1.902-1.383c1.256-0.911 2.956-0.911 4.212 0zM18.967 23.002c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM18.967 20.307c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM10.545 14.549c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM10.545 11.855c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM17.78 7.882l2.331 1.352-7.591 13.090-2.331-1.352 7.591-13.090z"></path></svg>`,
    'Search':`<svg class="_1GTCc" viewBox="5 -1 12 25" height="17" width="17" fill="#686b78"><path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path></svg>`,
};



/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "offersHeader": () => (/* binding */ offersHeader)
/* harmony export */ });
/* harmony import */ var _offersHeader_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);

// import rightArrowSrc from "../../images/rightArrowNav.png";

class offersHeader {

    constructor (...args)
    {
        let val = [...args];
        
        let offersCards =``;
        for(let index = 0; index != val.length ;index++)
        {
            offersCards += `<span class="${_offersHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].cards}">
                <img src = "${val[index]}" alt="offer number ${index}" width="260px" height="260px"/>
            </span>`;
        }

        this.offersHeaderTemplate = document.createElement('div');
        this.offersHeaderTemplate.className = _offersHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].offerSpace;
        this.offersHeaderTemplate.innerHTML = `
            <div class="${_offersHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].buttonWrapper}">
            <div class = "${_offersHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].offerHeader}">
                <div class="${_offersHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].offerWrapper}" id="offerWrapper">
                        ${offersCards}
                </div>
            </div>
            <button class = "${_offersHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].rightArrowKey}" id="rightScroll">
                <img class = "${_offersHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].rightArrowKeyImage}" src = "https://img.icons8.com/ios-filled/2x/long-arrow-right.png" alt="rightScroll" id="rightScrollImage"/>
            </button>
            <button class = "${_offersHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].leftArrowKey}" id="leftScroll">
                <img class = "${_offersHeader_css__WEBPACK_IMPORTED_MODULE_0__["default"].leftArrowKeyImage}" src = "https://img.icons8.com/ios-filled/2x/long-arrow-right.png" id="leftScrollImage" alt="leftScroll"/>
            </button>
            </div>
        `;

        let scrollValue = 0, offset=310;
        let leftScrollHandler = () => {
            let offerWrapper = this.offersHeaderTemplate.querySelector('#offerWrapper');
            console.log(offerWrapper.scrollLeft)
            scrollValue += offset;
            scrollValue = Math.min(scrollValue, 0)
            offerWrapper.style.marginLeft = scrollValue +'px';
            console.log("scroll value",scrollValue);
            this.offersHeaderTemplate.querySelector("#leftScroll").style.display = scrollValue<0 ? 'block':'none';
            this.offersHeaderTemplate.querySelector("#leftScrollImage").style.display = scrollValue<0 ? 'block':'none';
            this.offersHeaderTemplate.querySelector("#rightScroll").style.display = scrollValue > (-offset * (val.length - 3)) ? 'block':'none';
            this.offersHeaderTemplate.querySelector("#rightScrollImage").style.display = scrollValue > (-offset * (val.length - 3)) ? 'block':'none';
        };

        let rightScrollHandler = () => {
            let offerWrapper = this.offersHeaderTemplate.querySelector('#offerWrapper');
            console.log(offerWrapper.scrollLeft)
            scrollValue -= offset;
            scrollValue = Math.max(scrollValue,-offset * (val.length - 1));
            offerWrapper.style.marginLeft = scrollValue +'px';
            this.offersHeaderTemplate.querySelector("#leftScroll").style.display = scrollValue<0 ? 'block':'none';
            this.offersHeaderTemplate.querySelector("#leftScrollImage").style.display = scrollValue<0 ? 'block':'none';
            this.offersHeaderTemplate.querySelector("#rightScroll").style.display = scrollValue > (-offset * (val.length - 3)) ? 'block':'none';
            this.offersHeaderTemplate.querySelector("#rightScrollImage").style.display = scrollValue > (-offset * (val.length - 3)) ? 'block':'none';
            console.log(scrollValue);
        };

        this.offersHeaderTemplate.querySelector('#rightScroll').addEventListener('click', rightScrollHandler);
        this.offersHeaderTemplate.querySelector('#leftScroll').addEventListener('click', leftScrollHandler);
        
    }

    get () {
        return this.offersHeaderTemplate;
    }

}


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_offersHeader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_offersHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_offersHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_offersHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_offersHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 15 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".HzaSNn5MaC55JdgvAhMk {\n    height:340px;\n    background: #181a29;\n    align-content: center;\n    display:flex;\n    align-items: center;\n    padding: 0 20px;\n    min-width: fit-content;\n}\n\n.oeeUHtBa_4Ugg3eJjQla {\n    position:relative;\n    width: 1200px;\n    overflow: hidden;\n}\n\n.Wj5OiDPHPjBl6AHWGCn_ {\n    position:relative;\n    margin: auto;\n    width: 1200px;\n    height: 300px;\n    overflow: visible;\n    \n}\n\n.W_Zq0tJcUww1PNjfSJYE {\n    overflow:hidden;\n    white-space: nowrap;\n    transition: all 0.5s ease; \n    transform: translateX(0%);\n    height: 100%;\n}\n\n\n.HXo_NN67UD_qopA6y0cx {\n    display:inline-block;\n    padding:20px 0px;\n    height:260px;\n    width:260px;\n    margin-right: 50px;\n    transition: transform 0.3s;\n    overflow: hidden;\n}\n\n.HXo_NN67UD_qopA6y0cx:hover {\n    cursor: pointer;\n    transform:scale(1.05);\n}\n\n.jhSJdCm6XC4Zf4sa9H0k {\n    background: white;\n    text-align: center;\n    justify-items: center;\n    position: absolute;\n    top:50%;\n    right:-23.5px;\n    margin-top: -23.5px;\n    height: 47px;\n    width: 47px;\n    border-radius: 50%;\n    border: 0;\n    padding-top: 4px;\n}\n\n.jhSJdCm6XC4Zf4sa9H0k:hover .VBnTTMQ6QZZgtkkX5mvn{\n    cursor: pointer;\n    transform: translateX(8px);\n}\n\n.VBnTTMQ6QZZgtkkX5mvn {\n    transition: transform 0.2s;\n    width: 25px;\n    position: absolute;\n    top: 11px;\n    left: 11px;\n    border-radius: 50%;\n}\n\n.BkyRS9nYujPqQfh5BGEp {\n    display: none;\n    background: white;\n    text-align: center;\n    justify-items: center;\n    position: absolute;\n    top:50%;\n    margin-top:-23.5px;\n    left:-23.5px;\n    height: 47px;\n    width: 47px;\n    border-radius: 50%;\n    border: 0;\n    padding-top: 4px;\n}\n\n.BkyRS9nYujPqQfh5BGEp:hover .DqkQVjNzVT0xKusbvXx_{\n    cursor: pointer;\n    transform: translateX(8px);\n}\n\n.DqkQVjNzVT0xKusbvXx_{\n    display: none;\n    rotate: 180deg;\n    width: 25px;\n    position: absolute;\n    top: 11px;\n    right: 11px;\n    border-radius: 50%;\n    transition: transform 0.2s;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"offerSpace": "HzaSNn5MaC55JdgvAhMk",
	"offerHeader": "oeeUHtBa_4Ugg3eJjQla",
	"buttonWrapper": "Wj5OiDPHPjBl6AHWGCn_",
	"offerWrapper": "W_Zq0tJcUww1PNjfSJYE",
	"cards": "HXo_NN67UD_qopA6y0cx",
	"rightArrowKey": "jhSJdCm6XC4Zf4sa9H0k",
	"rightArrowKeyImage": "VBnTTMQ6QZZgtkkX5mvn",
	"leftArrowKey": "BkyRS9nYujPqQfh5BGEp",
	"leftArrowKeyImage": "DqkQVjNzVT0xKusbvXx_"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 17 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n    margin: 0px;\n}\n\n*{\n    font-size: 16px;\n    font-weight:300px;\n    font-family: ProximaNova,arial,Helvetica Neue,sans-serif;\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allRestaurantsContainer": () => (/* binding */ allRestaurantsContainer)
/* harmony export */ });
/* harmony import */ var _allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _RestaurantsDetails_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);



class allRestaurantsContainer {
    constructor(args) {
        this.allRestaurantsTemplate = document.createElement('div');
        this.allRestaurantsTemplate.className = `${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].allRestaurantsContainer}`;

        let validate = (validateStr, defaultVal) => {
            let validStr = validateStr.length > 0 ? validateStr: defaultVal;
            return validStr;
        }

        let vas = `${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].dontDisplay}`;

        let validatingPromotion = (i, cardIndex) =>{
            if(validate(_RestaurantsDetails_js__WEBPACK_IMPORTED_MODULE_1__.RestaurantDetails[i+cardIndex].RestaurantPromotionTag,'').length >0)
            {
                let promotionStrText = `
                <div class="${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].RestaurantPromotionTag}">${_RestaurantsDetails_js__WEBPACK_IMPORTED_MODULE_1__.RestaurantDetails[i+cardIndex].RestaurantPromotionTag}</div>
                <span class="${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].RestaurantPromotionBanner}"></span>
                `;
                return promotionStrText;
            }
            return `<div class="${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].dontDisplay}"></div>`;
        }
        let cardIndex = 0, outerString=``;
        for(let i =0; i<_RestaurantsDetails_js__WEBPACK_IMPORTED_MODULE_1__.RestaurantDetails.length;i+=4)
        {
            outerString += `<div class=${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].outerCont}>`;
            let innerString = ``;
            while(cardIndex < 4)
            {
                innerString += `<div class="${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].Card}">
                    <img class= ${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].RestaurantCardImage} src="${validate(_RestaurantsDetails_js__WEBPACK_IMPORTED_MODULE_1__.RestaurantDetails[i+cardIndex].RestaurantImageSrc, _RestaurantsDetails_js__WEBPACK_IMPORTED_MODULE_1__.defaultImage)}" alt="hi" />
                    <div class="${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].RestaurantName}">${validate(_RestaurantsDetails_js__WEBPACK_IMPORTED_MODULE_1__.RestaurantDetails[i+cardIndex].RestaurantName,'Restaurant Name')}</div>
                    <div class="${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].RestaurantDishes}">${validate(_RestaurantsDetails_js__WEBPACK_IMPORTED_MODULE_1__.RestaurantDetails[i+cardIndex].RestaurantDishes,'No dishes')}</div>
                    <div class="${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].InnerWrapper}">
                        <div class="${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].ratingWrapper}">
                            ${_RestaurantsDetails_js__WEBPACK_IMPORTED_MODULE_1__.starImageSVG}
                            <div class="${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].RestaurantRating}">
                            ${validate(_RestaurantsDetails_js__WEBPACK_IMPORTED_MODULE_1__.RestaurantDetails[i+cardIndex].RestaurantRating,'0.0')}
                            </div>
                        </div>
                        <span>•</span>
                        <div class="${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].RestaurantTime}">${validate(_RestaurantsDetails_js__WEBPACK_IMPORTED_MODULE_1__.RestaurantDetails[i+cardIndex].RestaurantTime,'10 MINS')}</div>
                        <span>•</span>
                        <div class="${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].RestaurantServingSize}">${validate(_RestaurantsDetails_js__WEBPACK_IMPORTED_MODULE_1__.RestaurantDetails[i+cardIndex].RestaurantServingSize,'₹500 FOR TWO')}</div>
                    </div>
                    ${validatingPromotion(i,cardIndex)}
                    <div class="${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].RestaurantOffers}">
                        ${_RestaurantsDetails_js__WEBPACK_IMPORTED_MODULE_1__.discountImageSVG}
                        <div class="${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].offerSyntax}">${validate(_RestaurantsDetails_js__WEBPACK_IMPORTED_MODULE_1__.RestaurantDetails[i+cardIndex].RestaurantOffers,'50% Off | Use WELCOME50')}</div>                    
                    </div>
                    <div class="${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].quickView}">QUICK VIEW</div>
                </div>`;
                cardIndex++;
            }
            outerString += innerString + `</div>`;
            cardIndex=0;

        }

        this.allRestaurantsTemplate.innerHTML = `
        <div class=${_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_0__["default"].RestaurantWrapper}>
            ${outerString}
        </div>
        `;

    }
    
    get() {
        return this.allRestaurantsTemplate;
    }
}

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_allRestaurantsContainer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 20 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".kWBHP9MZ78_ezbnYJ0Vg {\n    width: 100%;\n    min-height: calc(100vh - 340px);\n}\n\n.YEbNcwe1tudV2EpFBaJs {\n    margin: auto;\n    width: 1300px;\n    padding: 12px 30px;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n}\n\n.UKHI0wtVPS7xr3yhs9Ec {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 40px;\n    height: 380px;\n}\n\n.sm7DtUECQWzgWrEqa4o6 {\n    height: fit-content;\n    width: 254px;\n    padding: 20px;\n    padding-bottom: 10px;\n    background: white;\n    position: relative;\n    cursor: pointer;\n    border: 1px solid white;\n}\n\n.sm7DtUECQWzgWrEqa4o6:hover {\n    border: 1px solid #d9d9db;\n}\n\n\n.sm7DtUECQWzgWrEqa4o6:hover .gYjGuymoYMX_x5lvf1Uf {\n    display: block;\n}\n\n.K72XqITQLX3RIV8vrMZE {\n    width: 254px;\n    display: block;\n}\n\n.yluMPY43JvSc8HltqFzh{\n    margin-top: 14px;\n    font-size: 17px;\n    font-weight: 500;\n}\n\n.aPNnH6KhG3_8jowCB9O6{\n    font-size: 13px;\n    margin-top:4px;\n    color: #686b78;\n}\n\n.xbmQXGWgDhQJFZMy1LeJ {\n    display: flex;\n    margin: 18px 0px;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 12px;\n}\n\n.If9o2e6miSc2U7oA11HU, ._rhIzJtPq7TGWpHXChkc, .xbmQXGWgDhQJFZMy1LeJ>span {\n    text-transform: uppercase;\n    color: #535665;\n    font-size: 12px;\n    font-weight: 300;\n}\n\n.W86jA4k043i9HtBUaDA7 {\n    background-color: #48c479;\n    height: 20px;\n    width: 42px;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.uqXv8W_DxSPw7Wao9ncS{\n    font-size: 12px;\n    text-align: center;\n    color: white;\n}\n\n.FrKvjtiRVjI8rDfC1DCj {\n    color: white;\n    position: absolute;\n    font-weight: 300;\n    font-size: 12px;\n    top: 20px;\n    left: 12px;\n    background: rgb(58, 60, 65);\n    padding: 6px 10px;\n}\n\n.KewhAyt79SaZbPlNbOFH {    \n    position: absolute;\n    top: 46px;\n    left:12px;\n    border-left: 8px solid transparent;\n    border-top: 8px solid rgb(58, 60, 65);;\n}\n\n.mkRuzEA_IFjVddabVK2D {\n    display: flex;\n    gap: 4px;\n    height: 20px;\n    align-items: flex-start;\n    color: #926459;\n    margin: 14px 0px 10px;\n    padding-top: 14px;\n    border-top: 1px solid #e9e9eb;\n}\n\n.mPtOyYJG1WiHJkKnbzfb {\n    text-overflow: ellipsis;\n    font-size: 14px;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.gYjGuymoYMX_x5lvf1Uf {\n    display: none;\n    text-align: center;\n    color: #5d8ed5;\n    font-size: 12px;\n    font-weight: bold;\n    height: 20px;\n    text-transform: uppercase;\n    padding-top: 14px;\n    border-top: 1px solid #e9e9eb;\n}\n\n.gYjGuymoYMX_x5lvf1Uf:hover {\n    color:#5f616d;\n}\n\n.HzilLAaKMdI6xKeViLAz {\n    display: none;\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"allRestaurantsContainer": "kWBHP9MZ78_ezbnYJ0Vg",
	"RestaurantWrapper": "YEbNcwe1tudV2EpFBaJs",
	"outerCont": "UKHI0wtVPS7xr3yhs9Ec",
	"Card": "sm7DtUECQWzgWrEqa4o6",
	"quickView": "gYjGuymoYMX_x5lvf1Uf",
	"RestaurantCardImage": "K72XqITQLX3RIV8vrMZE",
	"RestaurantName": "yluMPY43JvSc8HltqFzh",
	"RestaurantDishes": "aPNnH6KhG3_8jowCB9O6",
	"InnerWrapper": "xbmQXGWgDhQJFZMy1LeJ",
	"RestaurantTime": "If9o2e6miSc2U7oA11HU",
	"RestaurantServingSize": "_rhIzJtPq7TGWpHXChkc",
	"ratingWrapper": "W86jA4k043i9HtBUaDA7",
	"RestaurantRating": "uqXv8W_DxSPw7Wao9ncS",
	"RestaurantPromotionTag": "FrKvjtiRVjI8rDfC1DCj",
	"RestaurantPromotionBanner": "KewhAyt79SaZbPlNbOFH",
	"RestaurantOffers": "mkRuzEA_IFjVddabVK2D",
	"offerSyntax": "mPtOyYJG1WiHJkKnbzfb",
	"dontDisplay": "HzilLAaKMdI6xKeViLAz"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantDetails": () => (/* binding */ RestaurantDetails),
/* harmony export */   "defaultImage": () => (/* binding */ defaultImage),
/* harmony export */   "discountImageSVG": () => (/* binding */ discountImageSVG),
/* harmony export */   "starImageSVG": () => (/* binding */ starImageSVG)
/* harmony export */ });
const RestaurantDetails = [
    {
        RestaurantImageSrc : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wwnotez8tcfpq0lezgln",
        RestaurantName: "Tamil Nadu Dosa Corner",
        RestaurantDishes: "Dosa, Idli, South-Indian, Medu-vada",
        RestaurantRating: "4.0",
        RestaurantTime: "20 MINS",
        RestaurantServingSize: "₹200 for one",
        RestaurantPromotionTag: "PROMOTED",
        RestaurantOffers: "",
    },
    {
        RestaurantImageSrc : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/moas53o6l9xnic3cuvzd",
        RestaurantName: "Om Sweet and Snacks",
        RestaurantDishes: "Sweets, NorthIndian, FastFoods, South Indian, Chinese, Snacks",
        RestaurantRating: "3.7",
        RestaurantTime: "25 mins",
        RestaurantServingSize: "₹500 for two",
        RestaurantPromotionTag: "PROMOTED",
        RestaurantOffers: "",
    },
    {
        RestaurantImageSrc : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cacobvnojvnoi7jlvmee",
        RestaurantName: "Call Chotu - Your Everyday Food Genie",
        RestaurantDishes: "Gujarati, Rajasthani, Non-veg dishes, Sweets",
        RestaurantRating: "4.1",
        RestaurantTime: "5 mins",
        RestaurantServingSize: "₹50 for one",
        RestaurantPromotionTag: "",
        RestaurantOffers: "",
    },
    {
        RestaurantImageSrc : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/1293a58ab5610f4c730c3d8cb6ac1b65",
        RestaurantName: "Chef Mantra",
        RestaurantDishes: "Chinese, Mexican, Continental dishes",
        RestaurantRating: "5.0",
        RestaurantTime: "12 mins",
        RestaurantServingSize: "₹450 for one",
        RestaurantPromotionTag: "PROMOTED",
        RestaurantOffers: "",
    },
    {
        RestaurantImageSrc : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fd2a31fe2e06a5d0aa084bfdd348ec87",
        RestaurantName: "Dilli Tiffin",
        RestaurantDishes: "",
        RestaurantRating: "2.0",
        RestaurantTime: "30 mins",
        RestaurantServingSize: "₹60 for two",
        RestaurantPromotionTag: "PROMOTED",
        RestaurantOffers: "",
    },
    {
        RestaurantImageSrc : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/h7wbfbhtwsagfa4ecklk",
        RestaurantName: "Domino's",
        RestaurantDishes: "Pizza, Cold-drinks, Cookies",
        RestaurantRating: "3.9",
        RestaurantTime: "",
        RestaurantServingSize: "₹225 for one",
        RestaurantPromotionTag: "",
        RestaurantOffers: "",
    },
    {
        RestaurantImageSrc : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/traf3mulmi6o9gnjgm6y",
        RestaurantName: "StarBucks",
        RestaurantDishes: "Coffee, Snacks, Cake, Sandwich",
        RestaurantRating: "4.7",
        RestaurantTime: "15 mins",
        RestaurantServingSize: "₹400 for one",
        RestaurantPromotionTag: "PROMOTED",
        RestaurantOffers: "",
    },
    {
        RestaurantImageSrc : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/f1e0621ea2395caeaa0a2d80f0274a2b",
        RestaurantName: "Burger King",
        RestaurantDishes: "Burger, Soft-drinks, French-fries",
        RestaurantRating: "4.8",
        RestaurantTime: "12 mins",
        RestaurantServingSize: "₹200 for one",
        RestaurantPromotionTag: "",
        RestaurantOffers: "Buy 2 get 1 free",
    },
    {
        RestaurantImageSrc : "",
        RestaurantName: "",
        RestaurantDishes: "",
        RestaurantRating: "",
        RestaurantTime: "",
        RestaurantServingSize: "",
        RestaurantPromotionTag: "PROMOTED",
        RestaurantOffers: "",
    },
    {
        RestaurantImageSrc : "",
        RestaurantName: "",
        RestaurantDishes: "",
        RestaurantRating: "",
        RestaurantTime: "",
        RestaurantServingSize: "",
        RestaurantPromotionTag: "",
        RestaurantOffers: "",
    },
    {
        RestaurantImageSrc : "",
        RestaurantName: "",
        RestaurantDishes: "",
        RestaurantRating: "",
        RestaurantTime: "",
        RestaurantServingSize: "",
        RestaurantPromotionTag: "PROMOTED",
        RestaurantOffers: "",
    },
    {
        RestaurantImageSrc : "",
        RestaurantName: "",
        RestaurantDishes: "",
        RestaurantRating: "",
        RestaurantTime: "",
        RestaurantServingSize: "",
        RestaurantPromotionTag: "",
        RestaurantOffers: "",
    },
];

/* Template for restaurant information */
// {
//     RestaurantImageSrc : "",
//     RestaurantName: "",
//     RestaurantDishes: "",
//     RestaurantRating: "",
//     RestaurantTime: "",
//     RestaurantServingSize: "",
//     RestaurantPromotionTag: "",
//     RestaurantOffers: "",
// },

const starImageSVG = `<svg height="10px" width="10px" version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xml:space="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-#ffffffidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#ffffff;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg>
`;

const discountImageSVG = `<svg width="16px" height="16px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" id="discount" class="icon glyph" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"><path d="M21.59,9.83A4.21,4.21,0,0,1,21.17,9,4.73,4.73,0,0,1,21,8.07a4.19,4.19,0,0,0-.64-2.16,4.15,4.15,0,0,0-1.87-1.28,4.36,4.36,0,0,1-.84-.43A4.55,4.55,0,0,1,17,3.54a4.29,4.29,0,0,0-1.81-1.4A4.19,4.19,0,0,0,13,2.21a4.24,4.24,0,0,1-1.94,0A4.19,4.19,0,0,0,8.8,2.14,4.29,4.29,0,0,0,7,3.54a4.55,4.55,0,0,1-.66.66,4.36,4.36,0,0,1-.84.43A4.15,4.15,0,0,0,3.62,5.91,4.19,4.19,0,0,0,3,8.07,4.73,4.73,0,0,1,2.83,9a4.21,4.21,0,0,1-.42.81A4.3,4.3,0,0,0,1.64,12a4.3,4.3,0,0,0,.77,2.17,4.21,4.21,0,0,1,.42.81,4.73,4.73,0,0,1,.15.95,4.19,4.19,0,0,0,.64,2.16,4.15,4.15,0,0,0,1.87,1.28,4.36,4.36,0,0,1,.84.43,4.55,4.55,0,0,1,.66.66,4.29,4.29,0,0,0,1.81,1.4,2.91,2.91,0,0,0,.87.13,6,6,0,0,0,1.36-.2,4.24,4.24,0,0,1,1.94,0,4.19,4.19,0,0,0,2.23.07A4.29,4.29,0,0,0,17,20.46a4.55,4.55,0,0,1,.66-.66,4.36,4.36,0,0,1,.84-.43,4.15,4.15,0,0,0,1.87-1.28A4.19,4.19,0,0,0,21,15.93a4.73,4.73,0,0,1,.15-.95,4.21,4.21,0,0,1,.42-.81A4.3,4.3,0,0,0,22.36,12,4.3,4.3,0,0,0,21.59,9.83ZM9.5,8A1.5,1.5,0,1,1,8,9.5,1.5,1.5,0,0,1,9.5,8Zm5,8A1.5,1.5,0,1,1,16,14.5,1.5,1.5,0,0,1,14.5,16Zm1.21-6.29-6,6a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42l6-6a1,1,0,0,1,1.42,1.42Z" style="fill:#8b584b"></path></g></svg>`;

const defaultImage = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAA1BMVEWorLJXzBBHAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuA8XLAAFcyH30AAAAAElFTkSuQmCC`;



/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "restaurantNavigation": () => (/* binding */ restaurantNavigation)
/* harmony export */ });
/* harmony import */ var _restaurantNavigation_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);


class restaurantNavigation {
    constructor (args) {
        this.NavigationTemplate = document.createElement('div');
        this.NavigationTemplate.className = _restaurantNavigation_css__WEBPACK_IMPORTED_MODULE_0__["default"].restaurantNavigation;

        this.NavigationTemplate.innerHTML  = `
        <div class=${_restaurantNavigation_css__WEBPACK_IMPORTED_MODULE_0__["default"].navigationWrapper}>
            <div class="${_restaurantNavigation_css__WEBPACK_IMPORTED_MODULE_0__["default"].restaurantCount}">100 restaurants</div>
            <div class="${_restaurantNavigation_css__WEBPACK_IMPORTED_MODULE_0__["default"].filtersWrapper}">
                <div class="${_restaurantNavigation_css__WEBPACK_IMPORTED_MODULE_0__["default"].filterOptions}">Relevance</div>
                <div class="${_restaurantNavigation_css__WEBPACK_IMPORTED_MODULE_0__["default"].filterOptions}">Delivery Time</div>
                <div class="${_restaurantNavigation_css__WEBPACK_IMPORTED_MODULE_0__["default"].filterOptions}">Rating</div>
                <div class="${_restaurantNavigation_css__WEBPACK_IMPORTED_MODULE_0__["default"].filterOptions}">Cost: Low to High</div>
                <div class="${_restaurantNavigation_css__WEBPACK_IMPORTED_MODULE_0__["default"].filterOptions}">Cost: Low to High</div>
                <div class="${_restaurantNavigation_css__WEBPACK_IMPORTED_MODULE_0__["default"].filterOptions}">
                    <span>Filters</span>
                    <span class="${_restaurantNavigation_css__WEBPACK_IMPORTED_MODULE_0__["default"].filterImageWrapper}">
                        <img src="https://as1.ftcdn.net/v2/jpg/04/02/77/08/1000_F_402770898_3yxaOfo0e8sTJ6mgebY1KaOPcwgWKSHE.jpg" alt="hi" class="${_restaurantNavigation_css__WEBPACK_IMPORTED_MODULE_0__["default"].filterImage}"/>
                    </span>
                </div>
            </div>
        </div>
        `;
    }
    get() {
        return this.NavigationTemplate;
    }
}



/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_restaurantNavigation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_restaurantNavigation_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_restaurantNavigation_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_restaurantNavigation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_restaurantNavigation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 24 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".c5T6CwoXDDz_buuHxNn2 {\n    box-sizing: border-box;\n    background: white;\n    position: sticky;\n    height: 72px;\n    top: 0px;\n    margin:10px 0px;\n    z-index:1;\n    left: 0;\n}\n\n.ooAbLE2XPxiAI2CZxxcB{\n    box-sizing: border-box;\n    height: 100%;\n    display: flex;\n    align-items: end;\n    justify-content: space-between;\n    width: 1200px;\n    border-bottom: 1px solid #e9e9eb;\n    margin:auto;\n}\n\n.ERqgMbaWsV49NC4dEFbi {\n    box-sizing: border-box;\n    color:black;\n    font-size: 28px;\n    font-weight: 600;\n    padding-bottom: 10px;\n    text-align: end;\n}\n\n.a6wU4xsg02ZmyFfGUQdw {\n    box-sizing: border-box;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: flex-end;\n    margin-top: 8px;\n}\n\n.AQuauSZy1TCnBf5oqOan {\n    box-sizing: border-box;\n    margin-left:36px;\n    padding-bottom: 12px;\n    color: grey;\n    font-size: 16px;\n    border-bottom: 1px solid transparent;\n}\n\n.AQuauSZy1TCnBf5oqOan:hover {\n    cursor: pointer;\n    border-bottom: 1px solid grey;\n}\n\n.AQuauSZy1TCnBf5oqOan:last-child {\n    font-weight: bold;\n    color:black;\n}\n\n.vB99kcGo5EIjT5mqqCrt {\n    height: 20px;\n    width: 20px;\n    rotate: 90deg;\n    border-radius: 50%;\n    color: orange;\n    padding: 2px;\n}\n\n.AQuauSZy1TCnBf5oqOan:last-child:hover {\n    color: orange;\n    border-bottom: 1px solid transparent;\n}\n\n.AQuauSZy1TCnBf5oqOan > span:first-of-type {\n    padding-right: 8px;\n}\n\n.KBGhNOoS_ibGecf8x2hS {\n    position: relative;\n    top: 4px;\n    display: inline-block;\n    height: 25px;\n    width: 25px;\n    border: 2px solid orange;\n    border-radius: 50%;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"restaurantNavigation": "c5T6CwoXDDz_buuHxNn2",
	"navigationWrapper": "ooAbLE2XPxiAI2CZxxcB",
	"restaurantCount": "ERqgMbaWsV49NC4dEFbi",
	"filtersWrapper": "a6wU4xsg02ZmyFfGUQdw",
	"filterOptions": "AQuauSZy1TCnBf5oqOan",
	"filterImage": "vB99kcGo5EIjT5mqqCrt",
	"filterImageWrapper": "KBGhNOoS_ibGecf8x2hS"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })
/******/ 	]);
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_mainHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Header_offersHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _images_imagesFolder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _AllRestaurants_allRestaurantsContainer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _AllRestaurants_restaurantNavigation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);







const body = document.getElementById('body');

// favicon for Swiggy Clone
const head = document.getElementById('head');
head.innerHTML +=`<link rel="icon" type="image/x-icon" href="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg">`;

let header = new _Header_mainHeader_js__WEBPACK_IMPORTED_MODULE_0__.mainHeader({logoURL:'https://www.swiggy.com/',logoSvg:_images_imagesFolder_js__WEBPACK_IMPORTED_MODULE_3__.logoSvg});
let offersSpace = new _Header_offersHeader_js__WEBPACK_IMPORTED_MODULE_1__.offersHeader(..._images_imagesFolder_js__WEBPACK_IMPORTED_MODULE_3__.offerImages);
let combinedHeader = document.createElement('div');
combinedHeader.className = _styles_main_css__WEBPACK_IMPORTED_MODULE_2__["default"].header;
combinedHeader.append(header.get());
combinedHeader.append(offersSpace.get());
body.append(combinedHeader);



let RestaurantHeader = new _AllRestaurants_restaurantNavigation_js__WEBPACK_IMPORTED_MODULE_5__.restaurantNavigation();
let allRestaurants = new _AllRestaurants_allRestaurantsContainer_js__WEBPACK_IMPORTED_MODULE_4__.allRestaurantsContainer();
let combinedBody = document.createElement('div');
combinedBody.append(RestaurantHeader.get());
combinedBody.append(allRestaurants.get());
body.append(combinedBody);

})();

/******/ })()
;