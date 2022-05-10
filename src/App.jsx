import React from 'react';
import './App.css';
import DhanusPosters from './components/DhanusPosters/DhanusPosters';
import Footer from './components/Footer/Footer';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Home />
      {/*<DhanusPosters />*/}
      <Footer />
    </div>
  );
}

export default App;
