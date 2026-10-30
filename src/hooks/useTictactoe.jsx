import { useState } from 'react'

const useTictactoe = () => {
    const initialBoard = Array(9).fill(null)
    const [board, setBoard] = useState(initialBoard)
    const [isXNext, setXnext] = useState(true)
    const [winner, setWinner] = useState(false)
    const resetGame = () => {
        setBoard(initialBoard)
    }

    const handleClick = (index) => {
        if (board[index] || calculateWinner()) return
        const newBoard = [...board]
        newBoard[index] = isXNext ? 'X' : 'O'
        setBoard(newBoard)
        setXnext(!isXNext)
    }
    const calculateWinner = () => {
        const WINNING_COMBINATIONS = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
            const [a, b, c] = WINNING_COMBINATIONS[i]
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a]
            }
            
        }
        return null
    }
    const getStatusMessage = () => {
        const winner = calculateWinner()
        
        if(winner){
            return `the winner is ${winner}`
        }
        if (board.every((cell)=>cell !== null)){
            return 'it\'s a draw '
        }
        
       return isXNext ? 'it\'s X turn ' : 'it\s O turn'
    }

    return { board, resetGame, isXNext, handleClick, calculateWinner, getStatusMessage, winner }
}

export default useTictactoe