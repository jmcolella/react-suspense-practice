import React from 'react';
import ReactDOM from 'react-dom';
import { setConfig } from 'react-hot-loader';

import App from './containers/App';

setConfig({ pureSFC: true });

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
