import './App.css'
import {useState} from 'react'
import useTictactoe from './hooks/useTictactoe'
  function Tic_tac_toe() {
    const {board,resetGame , handleClick  , getStatusMessage  } = useTictactoe()
    return (
      <>
        <div className='game'>
          <button onClick={resetGame}><img src="https://img.icons8.com/?size=100&id=3150&format=png&color=000000" alt="" /></button>
          <div className='status'>
            {getStatusMessage()}
          </div>
          <div className='board'>
            {
              board.map((val,index)=>{
                return <button 
                className={`cell ${val === 'X' ? 'x' : val === 'O' ? 'o' : ''}`}
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
