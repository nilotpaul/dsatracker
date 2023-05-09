import React from 'react';
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import Homepage from "./components/Homepage"
import Array from "./components/Array"
import String from "./components/String"
import Linkedlist from './components/Linkedlist'
import Matrix from "./components/Matrix"
import Searchsort from "./components/Searchsort"
import Stackqueue from "./components/Stackqueue"
import Problem from './components/Problem';
import Todo from './components/todo'
import "../src/App.css"



const App = () => {

  return (
  <div>
   <Header/>
   <div className="container">
    <Routes>
        <Route exact path= "/" element={<Homepage/>}/>
        <Route path= "/array" element={<Array/>}/>
        <Route path='/string' element={<String/>}/>
        <Route path='/linkedlist' element={<Linkedlist/>}/>
        <Route path='/matrix' element={<Matrix/>}/>
        <Route path='/searchsort' element={<Searchsort/>}/>
        <Route path='/stackqueue' element={<Stackqueue/>}/>
        <Route path='/daily-questions' element={<Problem/>}/>
        <Route path='/todolist' element={<Todo/>}/>
        </Routes>
        </div>
   </div>
  )
}

export default App