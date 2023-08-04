/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./script/modules/game-page-opone-card.js":
/*!************************************************!*\
  !*** ./script/modules/game-page-opone-card.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRenderLevelGame: () => (/* binding */ initRenderLevelGame)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./script/modules/utils.js");

function initRenderLevelGame(difficulty) {
    const app = document.getElementById('app');
    let memoryTimeoutId = [];
    const shuffledCards = shuffle([..._utils_js__WEBPACK_IMPORTED_MODULE_0__.cards, ..._utils_js__WEBPACK_IMPORTED_MODULE_0__.cards]);

    const appHtml = `
    <div class="top-container center">
  <header class="container center">
           <div class="head__box">
          <span class="head__time-new">min </span>
          <span class="head__time-new">sek</span>
          </div> 
          <div class="head center"> 
          <span class="head__time" id="seconds">00.00</span>
          <button id="start-button" class="start-button">Начать заново</button>
          </div> 
          </header>
    <div id="card" class="cards">
     ${renderCards(difficulty, shuffledCards)}
       </div>
       <div class="finish__game">
       </div>
       </div>
       `;
    app.innerHTML = appHtml;

    const cardElements = document.querySelectorAll('.card');

    cardElements.forEach((card) => {
        card.addEventListener('click', flipCard);
    });

    memoryTimeoutId = setTimeout(() => {
        cardElements.forEach((card) => {
            card.classList.remove('flipped');
        });
    }, 5000);

    cardElements.forEach((card) => {
        card.classList.add('flipped');
    });

    const startTime = new Date().getTime();
    const headTime = document.querySelector('.head__time');
    const timerInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime;
        const minutes = Math.floor(elapsedTime / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(
            seconds,
        ).padStart(2, '0')}`;
        headTime.textContent = formattedTime;
    }, 1000);

    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', () => {
        clearInterval(timerInterval);
        clearTimeout(memoryTimeoutId);
        cardElements.forEach((card) => {
            card.classList.remove('flipped');
        });
        initRenderLevelGame(difficulty);
    });

    function renderCards(difficulty, cards) {
        const numCards = getNumCards(difficulty) * 2;
        const selectedCards = cards.slice(0, Math.floor(numCards / 2));
        const duplicatedCards = [...selectedCards, ...selectedCards];
        const shuffledCards = shuffle(duplicatedCards);
        let cardsHtml = '';
        for (let i = 0; i < shuffledCards.length; i++) {
            const card = shuffledCards[i];
            const cardHtml = `
    <div data-card-name="${card.name}" class="card">
      <div  class="card__back">
        <img src="${card.front}" alt="">
      </div>
      <div class="card__front">
        <img src="${card.back}" alt="">
      </div>
    </div>
  `;
            cardsHtml += cardHtml;
        }
        return cardsHtml;
    }
}

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}
function getNumCards(difficulty) {
    switch (difficulty) {
        case 'easy':
            return 3;
        case 'medium':
            return 6;
        case 'hard':
            return 9;
        default:
            return 3;
    }
}

function flipCard(event) {
    const currentCard = event.currentTarget;

    if (
        currentCard.classList.contains('flipped') ||
        document.querySelectorAll('.flipped').length === 2
    ) {
        return;
    }

    currentCard.classList.toggle('flipped');

    const flippedCards = document.querySelectorAll('.flipped');

    if (flippedCards.length === 2) {
        const flippedCard1 = flippedCards[0];
        const flippedCard2 = flippedCards[1];

        if (flippedCard1?.dataset.cardName === flippedCard2?.dataset.cardName) {
            alert('Вы победили!');
        } else {
            setTimeout(() => {
                flippedCards.forEach((card) => {
                    card.classList.toggle('flipped', false);
                });
            }, 1000);
        }
    }
}


/***/ }),

/***/ "./script/modules/games-page-component.js":
/*!************************************************!*\
  !*** ./script/modules/games-page-component.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMainComponent: () => (/* binding */ renderMainComponent)
/* harmony export */ });
/* harmony import */ var _game_page_opone_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-page-opone-card.js */ "./script/modules/game-page-opone-card.js");


const renderMainComponent = () => {
    const app = document.getElementById('app');
    const appHtml = `
    <div class="box">
    <div class="box-games">
    <h3 class="box-text">Выбор сложности</h3>

    <div class="box-games-selection">
        <div class="box-level-selection-games">
            <input
                data-index="1"
                class="box-level"
                type="radio"
                value="easy"
                id="game-1"
                name="difficulty"
            />
            <label for="game-1">1</label>

            <input
                data-index="2"
                class="box-level"
                type="radio"
                name="difficulty"
                value="medium"
                id="game-2"
            />
            <label for="game-2">2</label>

            <input
                data-index="3"
                class="box-level"
                type="radio"
                name="difficulty"
                value="hard"
                id="game-3"
            />
            <label for="game-3">3</label>
        </div>
    </div>
    <button id="game-button" class="start-button">Старт</button>
</div>
    </div>
    
    `;

    app.innerHTML = appHtml;

    const levelData = {
        difficulty: '',
        numCards: '',
    };

    const difficultyInputs = document.querySelectorAll(
        '.box-games-selection input[name="difficulty"]',
    );

    const gameButton = document.getElementById('game-button');

    function levelNumCards() {
        switch (levelData.difficulty) {
            case 'easy':
                levelData.numCards = 3;
                break;
            case 'medium':
                levelData.numCards = 6;
                break;
            case 'hard':
                levelData.numCards = 9;
                break;
        }
    }

    difficultyInputs.forEach((input) => {
        input.addEventListener('change', () => {
            levelData.difficulty = input.value;
            levelNumCards();
        });
    });

    gameButton.addEventListener('click', () => {
        levelGame(levelData.difficulty);
    });

    function levelGame(difficulty) {
        (0,_game_page_opone_card_js__WEBPACK_IMPORTED_MODULE_0__.initRenderLevelGame)(difficulty);
    }
};


/***/ }),

/***/ "./script/modules/utils.js":
/*!*********************************!*\
  !*** ./script/modules/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cards: () => (/* binding */ cards)
/* harmony export */ });
const cards = [
    {
        front: './static/img/6_Clubs.jpg',
        back: './static/img/shirt.jpg',
        name: 'card1',
    },
    {
        front: './static/img/7_Clubs.jpg',
        back: './static/img/shirt.jpg',
        name: 'card2',
    },
    {
        front: './static/img/8_Clubs.jpg',
        back: './static/img/shirt.jpg',
        name: 'card3',
    },
    {
        front: './static/img/9_Clubs.jpg',
        back: './static/img/shirt.jpg',
        name: 'card4',
    },
    {
        front: './static/img/10_Clubs.jpg',
        back: './static/img/shirt.jpg',
        name: 'card5',
    },
    {
        front: './static/img/6_Diamonds.jpg',
        back: './static/img/shirt.jpg',
        name: 'card6',
    },
    {
        front: './static/img/7_Diamonds.jpg',
        back: './static/img/shirt.jpg',
        name: 'card7',
    },
    {
        front: './static/img/8_Diamonds.jpg',
        back: './static/img/shirt.jpg',
        name: 'card8',
    },
    {
        front: './static/img/9_Diamonds.jpg',
        back: './static/img/shirt.jpg',
        name: 'card9',
    },
    {
        front: './static/img/10_Diamonds.jpg',
        back: './static/img/shirt.jpg',
        name: 'card10',
    },
    {
        front: './static/img/6_Hearts.jpg',
        back: './static/img/shirt.jpg',
        name: 'card11',
    },
    {
        front: './static/img/7_Hearts.jpg',
        back: './static/img/shirt.jpg',
        name: 'card12',
    },
    {
        front: './static/img/8_Hearts.jpg',
        back: './static/img/shirt.jpg',
        name: 'card13',
    },
    {
        front: './static/img/9_Hearts.jpg',
        back: './static/img/shirt.jpg',
        name: 'card14',
    },
    {
        front: './static/img/10_Hearts.jpg',
        back: '/img/shirt.jpg',
        name: 'card15',
    },
    {
        front: './static/img/6_Spades.jpg',
        back: './static/img/shirt.jpg',
        name: 'card16',
    },
    {
        front: './static/img/7_Spades.jpg',
        back: './static/img/shirt.jpg',
        name: 'card17',
    },
    {
        front: './static/img/8_Spades.jpg',
        back: './static/img/shirt.jpg',
        name: 'card18',
    },
    {
        front: './static/img/9_Spades.jpg',
        back: './static/img/shirt.jpg',
        name: 'card19',
    },
    {
        front: './static/img/10_Spades.jpg',
        back: './static/img/shirt.jpg',
        name: 'card20',
    },
    {
        front: './static/img/A_Clubs.jpg',
        back: './static/img/shirt.jpg',
        name: 'card21',
    },
    {
        front: './static/img/A_Diamonds.jpg',
        back: './static/img/shirt.jpg',
        name: 'card22',
    },
    {
        front: './static/img/A_Hearts.jpg',
        back: './static/img/shirt.jpg',
        name: 'card23',
    },
    {
        front: './static/img/A_Spades.jpg',
        back: './static/img/shirt.jpg',
        name: 'card24',
    },
    {
        front: './static/img/K_Clubs.jpg',
        back: './static/img/shirt.jpg',
        name: 'card25',
    },
    {
        front: './static/img/K_Diamonds.jpg',
        back: './static/img/shirt.jpg',
        name: 'card26',
    },
    {
        front: './static/img/K_Hearts.jpg',
        back: './static/img/shirt.jpg',
        name: 'card27',
    },
    {
        front: './static/img/K_Spades.jpg',
        back: './static/img/shirt.jpg',
        name: 'card28',
    },
    {
        front: './static/img/Q_Clubs.jpg',
        back: './static/img/shirt.jpg',
        name: 'card29',
    },
    {
        front: './static/img/Q_Diamonds.jpg',
        back: './static/img/shirt.jpg',
        name: 'card30',
    },
    {
        front: './static/img/Q_Hearts.jpg',
        back: './static/img/shirt.jpg',
        name: 'card31',
    },
    {
        front: './static/img/Q_Spades.jpg',
        back: './static/img/shirt.jpg',
        name: 'card32',
    },
    {
        front: './static/img/J_Clubs.jpg',
        back: './static/img/shirt.jpg',
        name: 'card33',
    },
    {
        front: './static/img/J_Diamonds.jpg',
        back: './static/img/shirt.jpg',
        name: 'card34',
    },
    {
        front: './static/img/J_Hearts.jpg',
        back: './static/img/shirt.jpg',
        name: 'card35',
    },
    {
        front: './static/img/J_Spades.jpg',
        back: './static/img/shirt.jpg',
        name: 'card36',
    },
];


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_games_page_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/games-page-component.js */ "./script/modules/games-page-component.js");


(0,_modules_games_page_component_js__WEBPACK_IMPORTED_MODULE_0__.renderMainComponent)();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map