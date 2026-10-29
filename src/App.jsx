import { useState } from 'react'

import './App.css'

const initialBoard = Array(9).fill(null)
  function Tic_tac_toe() {
    const [board, setBoard] = useState(initialBoard)
    const [winner , setWinner] = useState(true)
    return (
      <>
        <div className='game'>
          <div className='status'>
            <p>the winner is {winner ? 'X' : 'O'}</p>  
          </div>
          <div className='board'>
            {
              board.map((_,index)=>{
                return <button className='cell' key={index}></button>
              })
            }
          </div>
        </div>
      </>
    )
  }

export default Tic_tac_toe
