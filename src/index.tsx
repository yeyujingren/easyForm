import React from 'react';
import ReactDom from 'react-dom';
import RoutesConf from './Router';

const App = () => (
  <RoutesConf />
);

ReactDom.render(<App />, window.document.querySelector('#root') as HTMLElement);
