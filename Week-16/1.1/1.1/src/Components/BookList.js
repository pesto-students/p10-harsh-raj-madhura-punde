import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import BookDataLoader from './BookDataLoader';

function BookList() {

  let [books,setBooks] = useState([ ])
  useEffect(()=>{
  
  },[books])

    let addBook = (newBook) => {
      this.setState((prevState) => ({
        books: [...prevState.books, newBook]
      }));
    };

    let deleteBook = (bookId) => {
      console.log(bookId)
      setBooks(()=>books.filter((book)=>book.title !==bookId))
    };
  

    let DisplayBooks = books.length && books.map((book,i)=>{
      return <li className="list-group-item d-flex justify-content-between align-items-center">
             <Link to={`/${book.title}`} key={i} state={{ from: book }}>
              {book.title} - {book.author} - {book.year}
            </Link>
            <span className="badge badge-primary badge-pill"><button className='btn btn-secondary' style={{}}
          onClick={() => deleteBook(book.title)}>Delete</button></span>
            </li>      
  })

    return (
      <div>
            <h4>Book List</h4>
            {/* <BookDataLoader /> */}
            <ul className="list-group">
            {DisplayBooks ? DisplayBooks : "Opps there are no books"}
            </ul>      
      </div>
    )
  
}

export default BookList;