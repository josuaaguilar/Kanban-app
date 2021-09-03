import React from 'react';
import ReactDOM from 'react-dom';
import App from './Componentes/App';
import Provider from './Componentes/Provider'

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <Provider><App /></Provider>,
  document.getElementById('app')
);
