import './App.css'
import {useState} from 'react'
import useTictactoe from './hooks/useTictactoe'
  function Tic_tac_toe() {
    const {board,resetGame , handleClick  , getStatusMessage  } = useTictactoe()
    return (
      <>
        <div className='game'>
          <button onClick={resetGame}>new game</button>
          <div className='status'>
            {getStatusMessage()}
          </div>
          <div className='board'>
            {
              board.map((val,index)=>{
                return <button 
                className='cell' 
                key={index} 
                onClick={()=>handleClick(index)}>
                  {val}
                </button>
              })
            }
          </div>
        </div>
      </>
    )
  }

export default Tic_tac_toe
