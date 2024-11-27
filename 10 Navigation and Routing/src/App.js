import React from 'react';
import './App.css';
import Button from './Button';
import { GoBell } from "react-icons/go";


function App() {
  const handleClick =()=>{
    console.log('click');
    
  };
  return (
    <div >
<div><Button primary rounded outline className="mb-5" onClick={handleClick}><GoBell/>Click me</Button></div>
<div><Button secondary outline>share</Button></div>
<div><Button success rounded > something</Button></div>
<div><Button danger outline>click</Button></div>
<div><Button warning>return</Button></div>
      
          </div>
  );
}

export default App;
