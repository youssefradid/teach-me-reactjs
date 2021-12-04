import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import "./styles/style.css";
import Header from './header/header';

ReactDOM.render(
  <div  >
  <Header />
  <div style={{
        backgroundColor: "#ECE9F6"
    }}>
  <App />
  </div>
</div>
, document.getElementById('root'));
