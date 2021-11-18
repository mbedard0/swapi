import './App.css';
import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Starships from '../Starships/Starships';

function App() {
  const [navTitle, setNavTitle] = useState([{
    url: "/", name: "Star Wars Starships"
  }])

  return (
    <div className="App">
      <NavBar navTitle={navTitle}/>
      <Routes>
        <Route path="/" element={<Starships />} />
      </Routes>
    </div>
  );
}

export default App;
