import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function BookDetail(props) {

   const location = useLocation()
   let { bookTitle } = useParams();

    let {book}= props;
    //    console.log(location);
    //    console.log(location.state.from.author);
    let [isExpanded, setIsExpanded] = useState(false);

    let toggleDetails = () => {
        console.log(isExpanded)
        setIsExpanded(current=>!current);
      };

  return (
    <section>
        {/* <h3>Book Title - {bookTitle}</h3>
        <p>Author: {location.state.from.author}</p>
        <p>Published: {location.state.from.year}</p> */}
        <div className="row" style={{marginTop:"50px" }}>
            <div className="col-sm-12 col-lg-8" style={{margin:"0 auto" }}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{bookTitle}</h5>
                        <p className="card-text"><strong>Author Name - </strong>{location.state.from.author}</p>
                        <p className="card-text"><strong>Published Year - </strong>{location.state.from.year}</p>
                        {/* Toggle button to show/hide additional details */}
                        <button className='btn  btn-secondary' onClick={()=>toggleDetails()}>
                    {isExpanded ? 'Hide Details' : 'Show Details'}</button>
                    {/* Conditional rendering of additional details */}
                    {isExpanded && (<div>
                        {/* <p>Description: {book.description}</p> */}
                        <p className='card-text'><strong>Description - </strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p><strong>Genre: </strong>Adding some static Genre: Fiction, Novel, Mystry, Thriller</p>
                        </div>
                    )}
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default BookDetail