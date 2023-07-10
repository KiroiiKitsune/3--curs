

import { renderGame } from "./modules/games-page-component.js";

let globalState = {
    diffLevel: '',
}

const levelSelectEls = document.querySelectorAll('.box-level');
for (const levelSelectEl of levelSelectEls) {
    levelSelectEl.addEventListener('click', () => {
        for (const levelSelectEl of levelSelectEls) {
                levelSelectEl.classList.remove('box-level__select');
        }
        levelSelectEl.classList.add('box-level__select');
        globalState.diffLevel = levelSelectEl.dataset.index;
        console.log(globalState.diffLevel);
    })
}

const buttonStartGame = document.querySelector('.start-button');
buttonStartGame.addEventListener('click', () => {
    renderGame(globalState.diffLevel);
})