import React from 'react';
import ReactDOM from 'react-dom';

import './content.css';

const Main = () => {
  return <div></div>;
};

const app = document.createElement('div');
app.id = 'my-extension-root';
document.body.appendChild(app);
ReactDOM.render(<Main />, app);
