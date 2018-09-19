import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from 'src/components/App';
import registerServiceWorker from 'src/registerServiceWorker';
import { injectGlobal } from 'src/styled-components';

// TODO: Typescript complains if you don't assign it to a variable
// @ts-ignore
const ig = injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
