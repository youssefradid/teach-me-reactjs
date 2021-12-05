import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import "./styles/style.css";
import Header from './header/header';

ReactDOM.render(
  <div  >
  <Header />
  <div style={{
        backgroundColor: "#f9f9f9"
    }}>
  <App />
  </div>
</div>
, document.getElementById('root'));
