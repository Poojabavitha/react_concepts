import React from 'react';
import './App.css';
import { useState } from 'react';
 import BookCreate from './component/BookCreate';
 import BookList from './component/BookList';

function App() {
  const [books, setBooks]=useState([]);

  const editBookById =(id,newTitle)=>{
     const updateBooks = books.map((book)=>{
      if (book.id===id){
        return{...book, title:newTitle};
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

  const createBook =(title)=>{
   const updateBooks =[
    ...books,
    {id:Math.round(Math.random()*9999), title}
   ];
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
