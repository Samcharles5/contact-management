import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ParticlesBackground from './ParticlesBackground';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="full">
    <React.StrictMode>
      <ParticlesBackground/>
         <div style={{ position: "relative", zIndex: 1 }}>
          <App />
        </div>
      </React.StrictMode>
  </div>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

