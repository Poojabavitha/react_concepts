import Searchbar from './components/Searchbar';
import './App.css';
import SearchImages from './api';
import ImageList from './components/Imagelist';
import { useState } from 'react';

function App() {

const [images,setImages]=useState([]);
  const handleSubmit = async (term)=>{
    // console.log('Do a search with',term );
   const result=  await SearchImages(term);
   setImages(result);
   
  }

  return (
    <div className="App">
     <Searchbar onSubmit={handleSubmit}/>
     <ImageList images={images}/>
    </div>
  );
}

export default App;
