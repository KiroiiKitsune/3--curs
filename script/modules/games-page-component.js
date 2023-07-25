import { initRenderLevelGame } from './game-page-opone-card.js';

export const renderMainComponent = () => {
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
        initRenderLevelGame(difficulty);
    }
};
