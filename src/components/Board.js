import React, {useState} from 'react'
import Square from './Square'



function Board(props) {
 const [squares,setSquares] = useState(Array(9).fill(null));
 const [xIsNext, setXIsNext] = useState(true);

 const handleClick = (i) => {
  console.log('hellur!');
   const _squares = squares; 
   _squares[i] = xIsNext ? 'X': 'O';
   console.log(squares)
    setSquares(_squares);
    setXIsNext(!xIsNext);
 }
 const renderSquare = (i) => {
   return <Square value={squares[i]} onClick={() => {handleClick(i)}}/>;
 }
 const status = 'Next Player X';
 return (
  <div className="board" >
   <h1>board</h1>
   <div className="board-row">
     {renderSquare(0)}
     {renderSquare(1)}
     {renderSquare(2)}
   </div>
    <div className="board-row">
     {renderSquare(3)}
     {renderSquare(4)}
     {renderSquare(5)}
   </div>
   <div className="board-row">
     {renderSquare(6)}
     {renderSquare(7)}
     {renderSquare(8)}
   </div>
  </div>
 )
}

export default Board
