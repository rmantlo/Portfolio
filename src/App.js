import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <NavBar />
      </Router>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
