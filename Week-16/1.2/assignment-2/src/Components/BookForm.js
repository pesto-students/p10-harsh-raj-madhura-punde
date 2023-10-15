import React, { Component } from 'react';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      year: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, year } = this.state;
    const newBook = {
      title,
      author,
      year,
      id: Date.now(),
    };
    console.log(newBook);
    this.props.onAddBook(newBook); // Call the parent component's function to add the book
    this.setState({ title: '', author: '', year: '' }); // Clear the form
  };

  render() {
    const { title, author, year } = this.state;

    return (
      <div>
        <h4 className='h4'>Add A New Book</h4>
        <br/>
        <section className='form-row'>
        <div className='col-md-6' style={{margin:"0 auto" }}>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={title} placeholder="Book Title"
                onChange={this.handleInputChange} className="form-control" required/>
            </div>

            <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" name="author" value={author} placeholder="Author Name"
                onChange={this.handleInputChange} className="form-control" required/>
            </div>

            <div className="form-group">
                <label htmlFor="year">Year of Publication:</label>
                <input type="number" id="year" name="year" value={year}
                onChange={this.handleInputChange} className="form-control" required/>
            </div>
            <br/>
            <button type="submit" className='btn btn-dark'>Add Book</button>

        </form>
        </div>
        </section>
       
      </div>
    );
  }
}

export default BookForm;
