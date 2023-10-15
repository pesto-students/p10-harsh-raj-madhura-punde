import './App.css';
import { Routes,Route } from 'react-router-dom';
import BookList from './Components/BookList';
import BookDetail from './Components/BookDetail';
import BookForm from './Components/BookForm';

function App() {
  return (
   
    <div className="App">
     <Routes>
        <Route path="/" element={ <BookList/> } />
        <Route path="/addbook" exact element={<BookForm />} />
        <Route path="/:bookTitle" exact element={<BookDetail />} />
       
      </Routes>
    </div>
   
  );
}

export default App;
