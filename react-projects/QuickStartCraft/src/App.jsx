// pages/index.js
import {useState} from 'react'
//import Button from '@mui/material/Button';
import Board from './components/Board';
import './App.css'
export default function App() {
  const [knightPos, setKnightPos] = useState([0,0]);
  
  const handleMove = (x,y)=>{
    setKnightPos([x,y])
  }
  return (
    <div >
      <h1>Let`s play chess</h1>
      
      <div className='boardContainer'>
        
          <Board knightPosition={knightPos} handleMove={handleMove}/>
        
      </div>
      
      
      
    </div>
  );
}
