import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Loadable from 'react-loadable'

Loadable.preloadReady().then(() => {
  ReactDOM.render(<App/>, document.getElementById('root'));
});
registerServiceWorker();
