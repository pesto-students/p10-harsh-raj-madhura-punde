import './App.css';
import BookList from './Components/BookList';
import Book from './Components/Book';
import {
  Routes,
  Route,
} from "react-router-dom";
import { UseTheme } from './Components/CustomeHooks/UseTheme';

function App() {
  const useThemeInstance = UseTheme()
  return (
    <div className="App">
      <useThemeInstance value={'light'}>
      <Routes>
          {/* <h1>Learn React</h1> */}
          <Route path="/" element={<BookList/>} />
          <Route path="/:bookTitle" element={<Book/>} />
      </Routes>
    </useThemeInstance>
    </div>
  );
}

export default App;
