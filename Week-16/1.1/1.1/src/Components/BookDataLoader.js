import React, { useEffect } from 'react';

function BookDataLoader({ onLoadData }) {
  
    const initialBooks = [
        {
          id: 1,
          title: 'Book 1',
          author: 'Author 1',
          publicationYear: 2022,
          description: 'Description of Book 1',
          genre: 'Fiction'
        },
        { id:2, 
          title: "Think Like A Monk", 
          author: "Jay Shetty", 
          publicationYear: 2022,
          description: 'Description of This book',
          genre: 'Novel'
      },
      { id:3,
          title: "Think and Grow Rich", 
          author: "Napoleon Hill", 
          publicationYear: 2022,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
          genre: 'Fiction' 
      }
        // Add more initial book objects as needed
      ];
    useEffect(() => {
    onLoadData(initialBooks);
  }, [onLoadData]);

  return null;
}

export default BookDataLoader;
