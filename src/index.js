import React from 'react';
import ReactDOM from 'react-dom';
import './app/styles/index.css';
// import App from './app/components/App';
import Routes from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
