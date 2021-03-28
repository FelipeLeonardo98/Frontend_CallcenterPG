import React from 'react';
import Routes from './routes/routes';
import './global/global.css'
import Header from './components/componentHeader/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
