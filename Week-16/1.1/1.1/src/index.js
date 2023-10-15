import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { UseTheme } from './Components/CustomeHooks/UseTheme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
    <App />
    </BrowserRouter>
    

);

// problem statement:-
// https://github.com/pesto-students/Plus-Program-Assignments/blob/master/React%20-%20Assignments/01-Intro%20%26%20Setup%20React/assignment/01-assignment-Intro-To-React.md


//https://github.com/pesto-students/Plus-Program-Assignments/blob/master/React%20-%20Assignments/02-Components%20Deep%20Dive/02-assignment-Components.md
