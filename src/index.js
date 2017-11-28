import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader'
import registerServiceWorker from './registerServiceWorker';

export default App

if (typeof document !== 'undefined') {
  const render = Comp => {
    ReactDOM.render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.getElementById('root'),
    )
  };

  // Render!
  render(App)
  registerServiceWorker();
  // Hot Module Replacement
  // if (module.hot) {
  //   module.hot.accept('./App', () => {
  //     render(require('./App').default)
  //   })
  // }

}


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
