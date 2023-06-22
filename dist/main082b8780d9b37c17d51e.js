/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function buttonCreator() {
  var buttons = document.createElement("div");
  buttons.classList.add("buttons");
  for (var i = 0; i < 3; i++) {
    var button = document.createElement("button");
    var classListArray = ["home", "menu", "contact"];
    button.classList.add(classListArray[i]);
    button.textContent = classListArray[i].toUpperCase();
    buttons.appendChild(button);
  }
  return buttons;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonCreator);

/***/ }),

/***/ "./src/clearContent.js":
/*!*****************************!*\
  !*** ./src/clearContent.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function clearMainContent(content) {
  while (content.firstChild) {
    content.firstChild.remove();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearMainContent);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_account_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/account.svg */ "./src/assets/account.svg");

function contactPageFunction(container) {
  var contactPageContent = document.createElement("div");
  contactPageContent.classList.add("contact-content");
  container.appendChild(contactPageContent);
  var Person = function Person(personImgSrc, name, rank, phoneNumber) {
    return {
      personImgSrc: personImgSrc,
      name: name,
      rank: rank,
      phoneNumber: phoneNumber
    };
  };
  var bigBrother = new Person(_assets_account_svg__WEBPACK_IMPORTED_MODULE_0__, "Thor", "Chef", "(+90)123 456 78 90");
  var littleBrother = new Person(_assets_account_svg__WEBPACK_IMPORTED_MODULE_0__, "Baldur", "Chef", "(+90)987 654 32 10");
  var me = new Person(_assets_account_svg__WEBPACK_IMPORTED_MODULE_0__, "Fatih Karaoğlu", "Intern Chef", "(+90)554 514 42 95");
  var people = [bigBrother, littleBrother, me];
  for (var i = 0; i < 3; i++) {
    var person = document.createElement("div");
    person.classList.add("person");
    var _personImg = document.createElement("img");
    _personImg.setAttribute("src", people[i].personImgSrc);
    var name = document.createElement("p");
    name.textContent = people[i].name;
    var rank = document.createElement("p");
    rank.textContent = people[i].rank;
    var phoneNumber = document.createElement("p");
    phoneNumber.textContent = people[i].phoneNumber;
    var personArray = [_personImg, name, rank, phoneNumber];
    for (var j = 0; j < 4; j++) {
      person.appendChild(personArray[j]);
    }
    contactPageContent.appendChild(person);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPageFunction);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function homePageFunction(container) {
  var homePageContent = document.createElement("div");
  homePageContent.classList.add("homepage-content");
  container.appendChild(homePageContent);
  var review = document.createElement("div");
  review.classList.add("review");
  homePageContent.appendChild(review);
  var reviewTitle = document.createElement("div");
  reviewTitle.textContent = "About";
  reviewTitle.classList.add("review-title");
  review.appendChild(reviewTitle);
  var reviewText = document.createElement("div");
  reviewText.textContent = "Kayseri, which has a rich culinary culture, has a multicultural structure in terms of both civilizations and tastes. Its cuisine, which consists mainly of floury and meaty foods, forms the center of unique dishes. As Kayseri Cuisine, we prepare our products carefully and give priority to their taste in this way we set out to preserve traditional flavors and share them with everyone. Our menu, which we have developed on the basis of a rich cuisine, consists of only dishes that we are masters of. In addition, our brand and products are always in a position of development.";
  reviewText.classList.add("review-text");
  review.appendChild(reviewText);
  var visit = document.createElement("div");
  visit.classList.add("visit");
  homePageContent.appendChild(visit);
  var visitTitle = document.createElement("div");
  visitTitle.textContent = "Visit Us";
  visitTitle.classList.add("visit-title");
  visit.appendChild(visitTitle);
  var visitText = document.createElement("div");
  visitText.textContent = "We are located in the heart of Ankara at Dikmen Valley. We are open through the week from 8 a.m. to 12 p.m. Join us for an unforgettable dining experience in a world where fantasy meets flavor.";
  visitText.classList.add("visit-text");
  visit.append(visitText);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePageFunction);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_mant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/mantı.jpg */ "./src/assets/mantı.jpg");
/* harmony import */ var _assets_ya_lama_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/yağlama.jpeg */ "./src/assets/yağlama.jpeg");
/* harmony import */ var _assets_past_rma_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/pastırma.jpg */ "./src/assets/pastırma.jpg");



function menuPageFunction(container) {
  var menuPageContent = document.createElement("div");
  menuPageContent.classList.add("menupage-content");
  container.appendChild(menuPageContent);
  var Dish = function Dish(dishImgSrc, dishName, dishInfo) {
    return {
      dishImgSrc: dishImgSrc,
      dishName: dishName,
      dishInfo: dishInfo
    };
  };
  var mantı = new Dish(_assets_mant_jpg__WEBPACK_IMPORTED_MODULE_0__, "Mantı", "Mantı is a dish made by putting ground meat flavored with various spices into small pieces of dough and boiling these pieces of dough in water. Mantı, which is a part of Turkish cuisine as well as Central Asian cuisines, is a popular food in the former USSR countries.");
  var yağlama = new Dish(_assets_ya_lama_jpeg__WEBPACK_IMPORTED_MODULE_1__, "Yağlama", "Yağlama is a dish consisting of şebit, minced meat, tomato paste sauce and yoghurt. It is made by placing the shabits on top of each other and putting plenty of juicy and tomato paste mince between each layer.");
  var pastırma = new Dish(_assets_past_rma_jpg__WEBPACK_IMPORTED_MODULE_2__, "Pastırma", "Pastırma is a food made in Turkish cuisine by drying raw meat with various spices and salt. Today, Kayseri is known as the pastırma production city. Pastırma is an old Turkish food. It is known that the first to make pastırma were the Huns in Central Asia.");
  var dishes = [mantı, yağlama, pastırma];
  for (var i = 0; i < 3; i++) {
    var dish = document.createElement("div");
    dish.classList.add("dish");
    var dishImg = document.createElement("img");
    dishImg.setAttribute("src", dishes[i].dishImgSrc);
    var dishName = document.createElement("p");
    dishName.classList.add("dish-name");
    dishName.textContent = dishes[i].dishName;
    var dishText = document.createElement("p");
    dishText.textContent = dishes[i].dishInfo;
    var dishArray = [dishImg, dishName, dishText];
    for (var j = 0; j < 3; j++) {
      dish.appendChild(dishArray[j]);
    }
    menuPageContent.appendChild(dish);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPageFunction);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/kayseri_mutfagi.jpg */ "./src/assets/kayseri_mutfagi.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root,
body,
.container {
	height: 100%;
	width: 100%;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	color: white;
}

.container {
	display: grid;
	grid-template-rows: 12.5% 80% 7.5%;
	background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	background-size: cover;
	background-repeat: no-repeat;
}

.header {
	grid-row: 1/2;
	display: grid;
	background-color: rgba(0, 0, 0, 1);
	grid-template-columns: 1.75fr 1fr;
	grid-template-rows: 1fr;
}

.title {
	justify-self: flex-start;
	font-size: 60px;
	color: orange;
	font-weight: bold;
	margin-left: 25px;
}

.title,
.buttons {
	display: flex;
	align-items: center;
}

.buttons {
	justify-content: space-evenly;
}

button {
	background-color: orange;
	font-weight: bold;
	height: 60px;
	width: 155px;
	font-size: 25px;
	border-radius: 30px;
	color: white;
	border: 5px solid white;
}

button:hover {
	background-color: white;
	color: orange;
	border: 5px solid white;
}

button:active {
	scale: 1.15;
	border: 5px solid orange;
}

.main-content {
	background-color: rgba(0, 0, 0, 0.85);
	width: 100%;
	overflow-y: auto;
	grid-row: 2/3;
	height: 100%;
}

.homepage-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
}

.review,
.visit {
	padding: 20px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.review-text,
.visit-text {
	width: min(75ch, 50%);
	line-height: 35px;
	border-radius: 50px 100px 50px 100px;
	text-align: justify;
	font-size: 25px;
}

.review-title,
.visit-title {
	font-size: 40px;
	color: orange;
	font-weight: bold;
}

.footer {
	display: flex;
	grid-row: 3/4;
	background-color: rgba(0, 0, 0, 1);
	font-size: 30px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: orange;
	font-weight: bold;
	font-style: italic;
}

.contact-content,
.homepage-content,
.menupage-content {
	height: 100%;
}

.contact-content {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 100%;
}

.contact-content img {
	width: auto;
	height: 40%;
}

.person {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
}

.person > * {
	font-size: 30px;
}

.menupage-content {
	padding: 50px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 100%;
	column-gap: 40px;
}

.dish {
	display: flex;
	margin-top: 50px;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	font-size: 22px;
	text-align: justify;
}

.dish-name {
	color: orange;
	font-size: 40px;
}

.menupage-content img {
	width: 70%;
	height: 50%;
}
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;;;CAGC,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,SAAS;CACT,UAAU;CACV,sBAAsB;CACtB,YAAY;AACb;;AAEA;CACC,aAAa;CACb,kCAAkC;CAClC,mDAA8C;CAC9C,sBAAsB;CACtB,4BAA4B;AAC7B;;AAEA;CACC,aAAa;CACb,aAAa;CACb,kCAAkC;CAClC,iCAAiC;CACjC,uBAAuB;AACxB;;AAEA;CACC,wBAAwB;CACxB,eAAe;CACf,aAAa;CACb,iBAAiB;CACjB,iBAAiB;AAClB;;AAEA;;CAEC,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,6BAA6B;AAC9B;;AAEA;CACC,wBAAwB;CACxB,iBAAiB;CACjB,YAAY;CACZ,YAAY;CACZ,eAAe;CACf,mBAAmB;CACnB,YAAY;CACZ,uBAAuB;AACxB;;AAEA;CACC,uBAAuB;CACvB,aAAa;CACb,uBAAuB;AACxB;;AAEA;CACC,WAAW;CACX,wBAAwB;AACzB;;AAEA;CACC,qCAAqC;CACrC,WAAW;CACX,gBAAgB;CAChB,aAAa;CACb,YAAY;AACb;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,6BAA6B;AAC9B;;AAEA;;CAEC,aAAa;CACb,WAAW;CACX,aAAa;CACb,sBAAsB;CACtB,mBAAmB;AACpB;;AAEA;;CAEC,qBAAqB;CACrB,iBAAiB;CACjB,oCAAoC;CACpC,mBAAmB;CACnB,eAAe;AAChB;;AAEA;;CAEC,eAAe;CACf,aAAa;CACb,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,aAAa;CACb,kCAAkC;CAClC,eAAe;CACf,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,aAAa;CACb,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;;;CAGC,YAAY;AACb;;AAEA;CACC,aAAa;CACb,qCAAqC;CACrC,wBAAwB;AACzB;;AAEA;CACC,WAAW;CACX,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,aAAa;CACb,qCAAqC;CACrC,wBAAwB;CACxB,gBAAgB;AACjB;;AAEA;CACC,aAAa;CACb,gBAAgB;CAChB,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;CACT,eAAe;CACf,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,eAAe;AAChB;;AAEA;CACC,UAAU;CACV,WAAW;AACZ","sourcesContent":[":root,\nbody,\n.container {\n\theight: 100%;\n\twidth: 100%;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\tcolor: white;\n}\n\n.container {\n\tdisplay: grid;\n\tgrid-template-rows: 12.5% 80% 7.5%;\n\tbackground: url(../assets/kayseri_mutfagi.jpg);\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n}\n\n.header {\n\tgrid-row: 1/2;\n\tdisplay: grid;\n\tbackground-color: rgba(0, 0, 0, 1);\n\tgrid-template-columns: 1.75fr 1fr;\n\tgrid-template-rows: 1fr;\n}\n\n.title {\n\tjustify-self: flex-start;\n\tfont-size: 60px;\n\tcolor: orange;\n\tfont-weight: bold;\n\tmargin-left: 25px;\n}\n\n.title,\n.buttons {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.buttons {\n\tjustify-content: space-evenly;\n}\n\nbutton {\n\tbackground-color: orange;\n\tfont-weight: bold;\n\theight: 60px;\n\twidth: 155px;\n\tfont-size: 25px;\n\tborder-radius: 30px;\n\tcolor: white;\n\tborder: 5px solid white;\n}\n\nbutton:hover {\n\tbackground-color: white;\n\tcolor: orange;\n\tborder: 5px solid white;\n}\n\nbutton:active {\n\tscale: 1.15;\n\tborder: 5px solid orange;\n}\n\n.main-content {\n\tbackground-color: rgba(0, 0, 0, 0.85);\n\twidth: 100%;\n\toverflow-y: auto;\n\tgrid-row: 2/3;\n\theight: 100%;\n}\n\n.homepage-content {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-evenly;\n}\n\n.review,\n.visit {\n\tpadding: 20px;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n.review-text,\n.visit-text {\n\twidth: min(75ch, 50%);\n\tline-height: 35px;\n\tborder-radius: 50px 100px 50px 100px;\n\ttext-align: justify;\n\tfont-size: 25px;\n}\n\n.review-title,\n.visit-title {\n\tfont-size: 40px;\n\tcolor: orange;\n\tfont-weight: bold;\n}\n\n.footer {\n\tdisplay: flex;\n\tgrid-row: 3/4;\n\tbackground-color: rgba(0, 0, 0, 1);\n\tfont-size: 30px;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: orange;\n\tfont-weight: bold;\n\tfont-style: italic;\n}\n\n.contact-content,\n.homepage-content,\n.menupage-content {\n\theight: 100%;\n}\n\n.contact-content {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tgrid-template-rows: 100%;\n}\n\n.contact-content img {\n\twidth: auto;\n\theight: 40%;\n}\n\n.person {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 20px;\n}\n\n.person > * {\n\tfont-size: 30px;\n}\n\n.menupage-content {\n\tpadding: 50px;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tgrid-template-rows: 100%;\n\tcolumn-gap: 40px;\n}\n\n.dish {\n\tdisplay: flex;\n\tmargin-top: 50px;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 20px;\n\tfont-size: 22px;\n\ttext-align: justify;\n}\n\n.dish-name {\n\tcolor: orange;\n\tfont-size: 40px;\n}\n\n.menupage-content img {\n\twidth: 70%;\n\theight: 50%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ "./src/assets/account.svg":
/*!********************************!*\
  !*** ./src/assets/account.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "account.svg";

/***/ }),

/***/ "./src/assets/kayseri_mutfagi.jpg":
/*!****************************************!*\
  !*** ./src/assets/kayseri_mutfagi.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "kayseri_mutfagi.jpg";

/***/ }),

/***/ "./src/assets/mantı.jpg":
/*!******************************!*\
  !*** ./src/assets/mantı.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mantı.jpg";

/***/ }),

/***/ "./src/assets/pastırma.jpg":
/*!*********************************!*\
  !*** ./src/assets/pastırma.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pastırma.jpg";

/***/ }),

/***/ "./src/assets/yağlama.jpeg":
/*!*********************************!*\
  !*** ./src/assets/yağlama.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "yağlama.jpeg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/buttons.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearContent */ "./src/clearContent.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






var container = document.querySelector(".container");
var header = document.createElement("div");
header.classList.add("header");
var title = document.createElement("div");
title.textContent = "Welcome to Kayseri Cuisine";
title.classList.add("title");
header.appendChild(title);
header.appendChild((0,_buttons__WEBPACK_IMPORTED_MODULE_1__["default"])());
container.appendChild(header);
var buttonsArray = Array.from(document.querySelectorAll("button"));
buttonsArray.forEach(function (button) {
  button.addEventListener("click", function (event) {
    (0,_clearContent__WEBPACK_IMPORTED_MODULE_3__["default"])(mainContent);
    if (event.target.textContent === "HOME") {
      (0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])(mainContent);
    } else if (event.target.textContent === "MENU") {
      (0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])(mainContent);
    } else if (event.target.textContent === "CONTACT") {
      (0,_contact__WEBPACK_IMPORTED_MODULE_5__["default"])(mainContent);
    }
  });
});
var mainContent = document.createElement("div");
mainContent.classList.add("main-content");
container.appendChild(mainContent);
(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])(mainContent);
var footer = document.createElement("div");
footer.classList.add("footer");
footer.textContent = "@ 2023 Kayseri Cuisine. All rights reserved.";
container.appendChild(footer);
})();

/******/ })()
;
//# sourceMappingURL=main082b8780d9b37c17d51e.js.map