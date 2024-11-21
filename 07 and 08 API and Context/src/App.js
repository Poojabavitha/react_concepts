import React from 'react';
import './App.css';
import { useState ,useEffect} from 'react';
 import BookCreate from './component/BookCreate';
 import BookList from './component/BookList';
import axios from 'axios';

function App() {
  const [books, setBooks]=useState([]);

  const fetchbooks = async ()=>{
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  };

  useEffect(()=>{
    fetchbooks(); 
  },[]);

  const editBookById =async (id,newTitle)=>{
  const response=await axios.put(`http://localhost:3001/books/${id}`,{
    title:newTitle,
  });

  console.log(response);
  

     const updateBooks = books.map((book)=>{
      if (book.id===id){
        return{...book, ...response.data};
      }
      return book;
     });
     setBooks(updateBooks);
  };
  
  const deleteBookById =(id)=>{
    const updateBooks = books.filter((book)=>{
      return book.id !== id;
    });
setBooks(updateBooks);
  };

  const createBook =async (title)=>{
 const response=await axios.post('http://localhost:3001/books',{
  title:title
});

const updateBooks =[
    ...books,
    response.data
]
  setBooks(updateBooks);  
  }

  return (
    <div className="App">
      <h1>Reading list</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
    <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
