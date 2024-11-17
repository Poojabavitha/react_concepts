import React, { useState } from 'react';


function Searchbar ({onSubmit}){

const [term,setTerm] = useState('');

 const handleFormSubmit =(event)=>{
    event.preventDefault();
    onSubmit(term);
    
 };

 const handleChange =(event)=>{
setTerm(event.target.value);

 };


  return(
    <div>

        <form onSubmit={handleFormSubmit}>
        
   <input value={term} onChange={handleChange}/>
   {/* {term.length<3 && 'Term must be longer'} */}
   </form>
   </div>
  )  
}

export default Searchbar;