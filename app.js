// put gameBoard and displayController in modules
// put players in factory


// need to have listeners for every td
// when a td is clicked, if its player x's turn then put an x in that position in the array and call gameboard.display. else put a O




const gameBoard = (() => {
    const board = ['','','','','','','','','']

    const setField = (index, sign) => {
        if (index > board.length) return
        board[index] = sign
    }

    const getField = (index, sign) => {
        if (index > board.length) return
        return board[index]
    }

    const reset = () => {
        for (let i =0; i < board.length; i++) {
            board[i] = ""
        }
    }

    return {setField, getField, reset}
})();





