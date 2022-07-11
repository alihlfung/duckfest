import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/Banner';
import App from './pages/App';
import About from './components/About';
import Rights from './components/Rights';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Banner/>
    <p>something</p>
    <App/>
    <About/>
    <Rights/>
  </React.StrictMode>
)
