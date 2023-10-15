import { useMemo } from 'react';

function useBookSorter(books, sortingCriteria) {
  const sortedBooks = useMemo(() => {
    return [...books].sort((a, b) => {
      if (sortingCriteria === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortingCriteria === 'author') {
        return a.author.localeCompare(b.author);
      } else if (sortingCriteria === 'publicationYear') {
        return a.publicationYear - b.publicationYear;
      }
      return 0; // Default sorting if criteria is not recognized
    });
  }, [books, sortingCriteria]);

  return sortedBooks;
}

export default useBookSorter;
