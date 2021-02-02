import React from 'react';
import ReactDom from 'react-dom';
import RoutesConf from './Router';
import 'antd/dist/antd.css';

const App = () => (
  <RoutesConf />
);

ReactDom.render(<App />, window.document.querySelector('#root') as HTMLElement);
