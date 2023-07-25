/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./script/modules/game-page-opone-card.js":
/*!************************************************!*\
  !*** ./script/modules/game-page-opone-card.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initRenderLevelGame: () => (/* binding */ initRenderLevelGame)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./script/modules/utils.js\");\n\r\nfunction initRenderLevelGame(difficulty) {\r\n    const app = document.getElementById('app');\r\n    let memoryTimeoutId = [];\r\n    const shuffledCards = shuffle([..._utils_js__WEBPACK_IMPORTED_MODULE_0__.cards, ..._utils_js__WEBPACK_IMPORTED_MODULE_0__.cards]);\r\n\r\n    const appHtml = `\r\n    <div class=\"top-container center\">\r\n  <header class=\"container center\">\r\n           <div class=\"head__box\">\r\n          <span class=\"head__time-new\">min </span>\r\n          <span class=\"head__time-new\">sek</span>\r\n          </div> \r\n          <div class=\"head center\"> \r\n          <span class=\"head__time\" id=\"seconds\">00.00</span>\r\n          <button id=\"start-button\" class=\"start-button\">Начать заново</button>\r\n          </div> \r\n          </header>\r\n    <div id=\"card\" class=\"cards\">\r\n     ${renderCards(difficulty, shuffledCards)}\r\n       </div>\r\n       <div class=\"finish__game\">\r\n       </div>\r\n       </div>\r\n       `;\r\n    app.innerHTML = appHtml;\r\n\r\n    const cardElements = document.querySelectorAll('.card');\r\n\r\n    cardElements.forEach((card) => {\r\n        card.addEventListener('click', flipCard);\r\n    });\r\n\r\n    memoryTimeoutId = setTimeout(() => {\r\n        cardElements.forEach((card) => {\r\n            card.classList.remove('flipped');\r\n        });\r\n    }, 5000);\r\n\r\n    cardElements.forEach((card) => {\r\n        card.classList.add('flipped');\r\n    });\r\n\r\n    const startTime = new Date().getTime();\r\n    const headTime = document.querySelector('.head__time');\r\n    const timerInterval = setInterval(() => {\r\n        const currentTime = new Date().getTime();\r\n        const elapsedTime = currentTime - startTime;\r\n        const minutes = Math.floor(elapsedTime / 60000);\r\n        const seconds = Math.floor((elapsedTime % 60000) / 1000);\r\n        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(\r\n            seconds,\r\n        ).padStart(2, '0')}`;\r\n        headTime.textContent = formattedTime;\r\n    }, 1000);\r\n\r\n    const startButton = document.getElementById('start-button');\r\n    startButton.addEventListener('click', () => {\r\n        clearInterval(timerInterval);\r\n        clearTimeout(memoryTimeoutId);\r\n        cardElements.forEach((card) => {\r\n            card.classList.remove('flipped');\r\n        });\r\n        initRenderLevelGame(difficulty);\r\n    });\r\n\r\n    function renderCards(difficulty, cards) {\r\n        const numCards = getNumCards(difficulty) * 2;\r\n        const selectedCards = cards.slice(0, Math.floor(numCards / 2));\r\n        const duplicatedCards = [...selectedCards, ...selectedCards];\r\n        const shuffledCards = shuffle(duplicatedCards);\r\n        let cardsHtml = '';\r\n        for (let i = 0; i < shuffledCards.length; i++) {\r\n            const card = shuffledCards[i];\r\n            const cardHtml = `\r\n    <div data-card-name=\"${card.name}\" class=\"card\">\r\n      <div  class=\"card__back\">\r\n        <img src=\"${card.front}\" alt=\"\">\r\n      </div>\r\n      <div class=\"card__front\">\r\n        <img src=\"${card.back}\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  `;\r\n            cardsHtml += cardHtml;\r\n        }\r\n        return cardsHtml;\r\n    }\r\n}\r\n\r\nfunction shuffle(array) {\r\n    let currentIndex = array.length,\r\n        randomIndex;\r\n    while (currentIndex !== 0) {\r\n        randomIndex = Math.floor(Math.random() * currentIndex);\r\n        currentIndex--;\r\n        [array[currentIndex], array[randomIndex]] = [\r\n            array[randomIndex],\r\n            array[currentIndex],\r\n        ];\r\n    }\r\n\r\n    return array;\r\n}\r\nfunction getNumCards(difficulty) {\r\n    switch (difficulty) {\r\n        case 'easy':\r\n            return 6;\r\n        case 'medium':\r\n            return 12;\r\n        case 'hard':\r\n            return 18;\r\n        default:\r\n            return 6;\r\n    }\r\n}\r\n\r\nfunction flipCard(event) {\r\n    const currentCard = event.currentTarget;\r\n\r\n    if (\r\n        currentCard.classList.contains('flipped') ||\r\n        document.querySelectorAll('.flipped').length === 2\r\n    ) {\r\n        return;\r\n    }\r\n\r\n    currentCard.classList.toggle('flipped');\r\n\r\n    const flippedCards = document.querySelectorAll('.flipped');\r\n\r\n    if (flippedCards.length === 2) {\r\n        const flippedCard1 = flippedCards[0];\r\n        const flippedCard2 = flippedCards[1];\r\n\r\n        if (flippedCard1?.dataset.cardName === flippedCard2?.dataset.cardName) {\r\n            alert('Вы победили!');\r\n        } else {\r\n            setTimeout(() => {\r\n                flippedCards.forEach((card) => {\r\n                    card.classList.toggle('flipped', false);\r\n                });\r\n            }, 1000);\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://cart-game/./script/modules/game-page-opone-card.js?");

/***/ }),

/***/ "./script/modules/games-page-component.js":
/*!************************************************!*\
  !*** ./script/modules/games-page-component.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMainComponent: () => (/* binding */ renderMainComponent)\n/* harmony export */ });\n/* harmony import */ var _game_page_opone_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-page-opone-card.js */ \"./script/modules/game-page-opone-card.js\");\n\r\n\r\nconst renderMainComponent = () => {\r\n    const app = document.getElementById('app');\r\n    const appHtml = `\r\n    <div class=\"box\">\r\n    <div class=\"box-games\">\r\n    <h3 class=\"box-text\">Выбор сложности</h3>\r\n\r\n    <div class=\"box-games-selection\">\r\n        <div class=\"box-level-selection-games\">\r\n            <input\r\n                data-index=\"1\"\r\n                class=\"box-level\"\r\n                type=\"radio\"\r\n                value=\"easy\"\r\n                id=\"game-1\"\r\n                name=\"difficulty\"\r\n            />\r\n            <label for=\"game-1\">1</label>\r\n\r\n            <input\r\n                data-index=\"2\"\r\n                class=\"box-level\"\r\n                type=\"radio\"\r\n                name=\"difficulty\"\r\n                value=\"medium\"\r\n                id=\"game-2\"\r\n            />\r\n            <label for=\"game-2\">2</label>\r\n\r\n            <input\r\n                data-index=\"3\"\r\n                class=\"box-level\"\r\n                type=\"radio\"\r\n                name=\"difficulty\"\r\n                value=\"hard\"\r\n                id=\"game-3\"\r\n            />\r\n            <label for=\"game-3\">3</label>\r\n        </div>\r\n    </div>\r\n    <button id=\"game-button\" class=\"start-button\">Старт</button>\r\n</div>\r\n    </div>\r\n    \r\n    `;\r\n\r\n    app.innerHTML = appHtml;\r\n\r\n    const levelData = {\r\n        difficulty: '',\r\n        numCards: '',\r\n    };\r\n\r\n    const difficultyInputs = document.querySelectorAll(\r\n        '.box-games-selection input[name=\"difficulty\"]',\r\n    );\r\n\r\n    const gameButton = document.getElementById('game-button');\r\n\r\n    function levelNumCards() {\r\n        switch (levelData.difficulty) {\r\n            case 'easy':\r\n                levelData.numCards = 6;\r\n                break;\r\n            case 'medium':\r\n                levelData.numCards = 12;\r\n                break;\r\n            case 'hard':\r\n                levelData.numCards = 18;\r\n                break;\r\n        }\r\n    }\r\n\r\n    difficultyInputs.forEach((input) => {\r\n        input.addEventListener('change', () => {\r\n            levelData.difficulty = input.value;\r\n            levelNumCards();\r\n        });\r\n    });\r\n\r\n    gameButton.addEventListener('click', () => {\r\n        levelGame(levelData.difficulty);\r\n    });\r\n\r\n    function levelGame(difficulty) {\r\n        (0,_game_page_opone_card_js__WEBPACK_IMPORTED_MODULE_0__.initRenderLevelGame)(difficulty);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://cart-game/./script/modules/games-page-component.js?");

/***/ }),

/***/ "./script/modules/utils.js":
/*!*********************************!*\
  !*** ./script/modules/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cards: () => (/* binding */ cards)\n/* harmony export */ });\nconst cards = [\r\n    { front: '/img/6_Clubs.jpg', back: '/img/shirt.jpg', name: 'card1' },\r\n    { front: '/img/7_Clubs.jpg', back: '/img/shirt.jpg', name: 'card2' },\r\n    { front: '/img/8_Clubs.jpg', back: '/img/shirt.jpg', name: 'card3' },\r\n    { front: '/img/9_Clubs.jpg', back: '/img/shirt.jpg', name: 'card4' },\r\n    { front: '/img/10_Clubs.jpg', back: '/img/shirt.jpg', name: 'card5' },\r\n    { front: '/img/6_Diamonds.jpg', back: '/img/shirt.jpg', name: 'card6' },\r\n    { front: '/img/7_Diamonds.jpg', back: '/img/shirt.jpg', name: 'card7' },\r\n    { front: '/img/8_Diamonds.jpg', back: '/img/shirt.jpg', name: 'card8' },\r\n    { front: '/img/9_Diamonds.jpg', back: '/img/shirt.jpg', name: 'card9' },\r\n    { front: '/img/10_Diamonds.jpg', back: '/img/shirt.jpg', name: 'card10' },\r\n    { front: '/img/6_Hearts.jpg', back: '/img/shirt.jpg', name: 'card11' },\r\n    { front: '/img/7_Hearts.jpg', back: '/img/shirt.jpg', name: 'card12' },\r\n    { front: '/img/8_Hearts.jpg', back: '/img/shirt.jpg', name: 'card13' },\r\n    { front: '/img/9_Hearts.jpg', back: '/img/shirt.jpg', name: 'card14' },\r\n    { front: '/img/10_Hearts.jpg', back: '/img/shirt.jpg', name: 'card15' },\r\n    { front: '/img/6_Spades.jpg', back: '/img/shirt.jpg', name: 'card16' },\r\n    { front: '/img/7_Spades.jpg', back: '/img/shirt.jpg', name: 'card17' },\r\n    { front: '/img/8_Spades.jpg', back: '/img/shirt.jpg', name: 'card18' },\r\n    { front: '/img/9_Spades.jpg', back: '/img/shirt.jpg', name: 'card19' },\r\n    { front: '/img/10_Spades.jpg', back: '/img/shirt.jpg', name: 'card20' },\r\n    { front: '/img/A_Clubs.jpg', back: '/img/shirt.jpg', name: 'card21' },\r\n    { front: '/img/A_Diamonds.jpg', back: '/img/shirt.jpg', name: 'card22' },\r\n    { front: '/img/A_Hearts.jpg', back: '/img/shirt.jpg', name: 'card23' },\r\n    { front: '/img/A_Spades.jpg', back: '/img/shirt.jpg', name: 'card24' },\r\n    { front: '/img/K_Clubs.jpg', back: '/img/shirt.jpg', name: 'card25' },\r\n    { front: '/img/K_Diamonds.jpg', back: '/img/shirt.jpg', name: 'card26' },\r\n    { front: '/img/K_Hearts.jpg', back: '/img/shirt.jpg', name: 'card27' },\r\n    { front: '/img/K_Spades.jpg', back: '/img/shirt.jpg', name: 'card28' },\r\n    { front: '/img/Q_Clubs.jpg', back: '/img/shirt.jpg', name: 'card29' },\r\n    { front: '/img/Q_Diamonds.jpg', back: '/img/shirt.jpg', name: 'card30' },\r\n    { front: '/img/Q_Hearts.jpg', back: '/img/shirt.jpg', name: 'card31' },\r\n    { front: '/img/Q_Spades.jpg', back: '/img/shirt.jpg', name: 'card32' },\r\n    { front: '/img/J_Clubs.jpg', back: '/img/shirt.jpg', name: 'card33' },\r\n    { front: '/img/J_Diamonds.jpg', back: '/img/shirt.jpg', name: 'card34' },\r\n    { front: '/img/J_Hearts.jpg', back: '/img/shirt.jpg', name: 'card35' },\r\n    { front: '/img/J_Spades.jpg', back: '/img/shirt.jpg', name: 'card36' },\r\n];\r\n\n\n//# sourceURL=webpack://cart-game/./script/modules/utils.js?");

/***/ }),

/***/ "./script/script.js":
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_games_page_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/games-page-component.js */ \"./script/modules/games-page-component.js\");\n\n\n(0,_modules_games_page_component_js__WEBPACK_IMPORTED_MODULE_0__.renderMainComponent)();\n\n\n//# sourceURL=webpack://cart-game/./script/script.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script/script.js");
/******/ 	
/******/ })()
;