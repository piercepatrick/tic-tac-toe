
const gameBoard = (() => {
    let board = new Array(9);
    const display = (a) => {
        let items = document.getElementsByTagName('td');
        for (var i = 0; i <= items.length; i++) {
            items[i].innerHTML = a[i];
        }
    }
    return {board,display}
})();
gameBoard.display(['x','x','x','x','x','x','x','x','x'])