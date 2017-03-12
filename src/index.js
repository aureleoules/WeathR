import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import './css/bootstrap.min.css';
import './css/styles.css';
//Components
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
