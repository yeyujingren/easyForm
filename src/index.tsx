import React from 'react';
import ReactDom from 'react-dom';

const App = () => (
  <div>
    EasyForm
  </div>
);

ReactDom.render(<App />, window.document.querySelector('#root') as HTMLElement);
