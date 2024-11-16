import React, { useState } from 'react';
import './App.css';
import Animalshow from './Animalshow';

function getRandomAnimal(){

const animals=['Dog', 'Cat','Bird','Cow']
return animals[Math.floor(Math.random()*animals.length)];

}

console.log(getRandomAnimal());

function App() {

  const [animals,setAnimals]=useState([]);

  const handleclick =()=>{
    // animals.push(getRandomAnimal());
    setAnimals([...animals, getRandomAnimal()])
  };

const renderAnimals = animals.map((animal, index)=>{
return(
  <Animalshow type={animal} key={index}/>
)
})

  return (
    <div className="App">
     <button onClick={handleclick}>Add Animal</button>
     <div className='animal-list'>{renderAnimals}</div>
    </div>
  );
}

export default App;
