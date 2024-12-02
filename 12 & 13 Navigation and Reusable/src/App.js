import React from 'react';
import Sidebar from './components/Sidebar';
import AccordionPage from './pages/AccordianPage';
import DropdownPage from './pages/Dropdowmpage';
import Route from './components/Route';
import ButtonPage from './components/Button';
import ModalPage from './pages/ModalPage';


function App(){
  return(
  
  <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
    
    <Sidebar/>
    <div className='col-span-5'> 
      <Route path="/accordion"><AccordionPage/></Route>
      <Route path="/dropdown"><DropdownPage/></Route>
      <Route path="/buttons"><ButtonPage/></Route>
      <Route path="/modal"><ModalPage/></Route>
    </div>
    
  </div>
 
  // <DropdownPage/>
  // // <AccordionPage/>
)}

export default App;