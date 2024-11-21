import { useState } from "react"
import "./index.css"
import confetti from "canvas-confetti"

import { Square } from "./components/Square"
import { TURNS } from "./Constants"
import { checkWinnerFrom, checkEndGame} from "./logic/Board"
import { WinnerModal } from "./components/WinnerModal"

function App() {

  const [board, setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : (Array(9).fill(null))
  })

  const [turn, setTurn] = useState(()=>{
    const turnFromstorage =  window.localStorage.getItem('turn')
    return turnFromstorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null) // null hay ganador, false es empate

  const resetGame = ()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('item')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index)=>{

    if(board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // guardar aqui partida
    window.localStorage.setItem("board", JSON.stringify(newBoard))
    window.localStorage.setItem("turn", newTurn)
    // si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner)
    } // check if game is over
    else if(checkEndGame(newBoard)){
      setWinner(false) // empate
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reinicar juego</button>
      <section className="game">
        {
          board.map((square, index) =>{
            return(
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.Y}>
          {TURNS.O}
        </Square>
      </section>
        <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
