import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './redux/Store'
import {BrowserRouter} from 'react-router-dom'
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
           <Provider store={store}> 
              <App />
              <Toaster/>
           </Provider>
        </BrowserRouter>
  </React.StrictMode>,
)
