import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {MultiStepProvider} from './components/multi-form/MultiStepContext.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultiStepProvider>
    <App /> 
    </MultiStepProvider>
  </React.StrictMode>,
)
