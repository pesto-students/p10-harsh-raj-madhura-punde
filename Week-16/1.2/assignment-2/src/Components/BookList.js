import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import WithLogging from './WithLogging';
import BookForm from './BookForm';
import BookDetail from './BookDetail';
class BookList extends React.PureComponent {

    constructor(){
        super();
        this.state = {
             books : [
                { title: "Book 1", author: "Author 1", year: 2020 },
                // { title: "Book 2", author: "Author 2", year: 2018 },
                // { title: "Book 3", author: "Author 3", year: 2022 },
                { title: "Think Like A Monk", author: "Jay Shetty", year: 2022 },
                { title: "Think and Grow Rich", author: "Napoleon Hill", year: 2022 }
                // Add more books if you'd like
              ]
        }
    }
    addBook = (newBook) => {
      this.setState((prevState) => ({
        books: [...prevState.books, newBook]
      }));
    };

    deleteBook = (bookId) => {
      this.setState((prevState) => ({
        books: prevState.books.filter((book) => book.title !== bookId),
      }));
    };
  

  render() {
   
    let DisplayBooks = this.state.books.length && this.state.books.map((book,i)=>{
      return <li className="list-group-item d-flex justify-content-between align-items-center">
             <Link to={`/${book.title}`} key={i} state={{ from: book }}>
              {book.title} - {book.author} - {book.year}
            </Link>
            <span className="badge badge-primary badge-pill"><button className='btn btn-secondary' style={{}}
          onClick={() => this.deleteBook(book.title)}>Delete</button></span>
            </li>      
  })


    return (
      <div>
            <h4>Book List</h4>
            <ul className="list-group">
            {DisplayBooks ? DisplayBooks : "Opps there are no books"}
            </ul>
           

            <BookForm onAddBook={this.addBook} />
           
      </div>
    )
  }
}


const BookListWithLogging = WithLogging(BookList);
export default BookListWithLogging;