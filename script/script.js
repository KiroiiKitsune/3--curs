import { renderGame } from './modules/games-page-component.js';

window.globalState = {
    diffLevel: '',
};

const levelSelectEls = document.querySelectorAll('.box-level');
for (const levelSelectEl of levelSelectEls) {
    levelSelectEl.addEventListener('click', () => {
        for (const levelSelectEl of levelSelectEls) {
            levelSelectEl.classList.remove('box-level__select');
        }
        levelSelectEl.classList.add('box-level__select');
        window.globalState.diffLevel = levelSelectEl.dataset.index;
        console.log(window.globalState.diffLevel);
    });
}

const buttonStartGame = document.querySelector('.start-button');
function buttonDisabled(expectedValue) {
    if (expectedValue === '') {
        buttonStartGame.disabled = true;
    } else {
        buttonStartGame.disabled = false;
    }
}
buttonStartGame.addEventListener('click', () => {
    renderGame(window.globalState.diffLevel);
});
buttonDisabled();
