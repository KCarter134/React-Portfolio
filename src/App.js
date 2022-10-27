import React from 'react';
import Nav from './components/Nav/navbar';
import About from './components/About/about';
import Portfolio from './components/portfolio';
// import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Portfolio />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
