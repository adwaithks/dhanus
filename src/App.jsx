import React from 'react';
import './App.css';
import DhanusPosters from './components/DhanusPosters/DhanusPosters';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <DhanusPosters />
      <Events />
    </div>
  );
}

export default App;
