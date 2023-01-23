import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Templates from './Components/Templates';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Builder from './Components/Builder';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
        </Route>
        <Route path="builder" element={<Builder />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
