

export function renderGame(level) {
    const appEl = document.getElementById('app');
    let  messageLevel 
    switch (level) {
        case '1':
            messageLevel = 'легкий'
            break;
        case '2':
            messageLevel = 'средний'
            break;
        case '3':
            messageLevel = 'сложный'
            break;
        default:
            break;
    }
    const appHtml = `
    <div class="box-games">
                <h3 class="box-text">Вы выбрали ${messageLevel} уровень сложности</h3>
            </div>
    `
    appEl.innerHTML = appHtml;
    
}