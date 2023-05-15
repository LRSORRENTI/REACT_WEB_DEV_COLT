import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import InputForm from './01_basicsOfJSX.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <InputForm/>
  </React.StrictMode>,
)
