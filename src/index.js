import React from 'react';
import { render } from 'react-dom';
import Router from './routes';
import registerServiceWorker from './registerServiceWorker';

render(<Router />, document.getElementById('root'));
registerServiceWorker();
