import { renderGamePage } from './components/game-page-component.js';

window.globalState = {
    diffLevel: '',
};

export const renderMainPage = () => {
    /*Рендерим стартовую страницу с выбором сложности */
    const appEl = document.getElementById('app');
    const appHtml = `
    <div class="start-select-box">
                <h1 class="difficult-text">Выбери сложность</h1>
                <section class="difficult-checkbox">
                    <div class="difficult-item" data-index='1'>1</div>
                    <div class="difficult-item" data-index='2'>2</div>
                    <div class="difficult-item" data-index='3'>3</div>
                </section>
                <button id="start-button" class="start-game-button">Старт</button>
            </div>
    `;
    appEl.innerHTML = appHtml;

    /* Добавляем интерактивности выбору сложности. При нажатии на кнопку сложности, она сохраняется в переменную */
    const levelSelectEls = document.querySelectorAll('.difficult-item');
    for (const levelSelectEl of levelSelectEls) {
        levelSelectEl.addEventListener('click', () => {
            for (const levelSelectEl of levelSelectEls) {
                levelSelectEl.classList.remove('difficult-item-select');
            }
            levelSelectEl.classList.add('difficult-item-select');
            window.globalState.diffLevel = levelSelectEl.dataset.index;
            console.log(window.globalState.diffLevel);
        });
    }

    /* Добавляем обработчик события на кнопку начала игры */
    const buttonStartGame = document.querySelector('.start-game-button');
    buttonStartGame.addEventListener('click', () => {
        if (window.globalState.diffLevel) {
            renderGamePage(window.globalState.diffLevel);
        }
    });
};

renderMainPage();
