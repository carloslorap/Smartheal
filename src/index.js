import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
  
    <ToastContainer
    theme="dark"
    position="top-right"
    autoClose={5000}
    closeOnClick
    pauseOnHover={false}

/>
    <App />
   
    </BrowserRouter>
  </React.StrictMode>
  </Provider>

);


