import React from 'react'

function Square({value, onClick}) {
 
 return (
  <div>
   <button className="square" 
   
   onClick={onClick}
   disabled={value}
   >{value}</button>
  </div>
 )
}

export default Square
