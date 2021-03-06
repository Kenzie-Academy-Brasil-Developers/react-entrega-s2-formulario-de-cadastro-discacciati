import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

ReactDom.render(
  <BrowserRouter>
  <React.StrictMode>
    <ToastContainer
            position="bottom-center"
            autoClose={1500}
          />
     <App/>
  </React.StrictMode>,
  </BrowserRouter>,
  document.getElementById("root")
);


/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
