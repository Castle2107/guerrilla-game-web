import React from 'react';
import ReactDOM from 'react-dom';
import './app/style/index.css';
import App from './app/components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
