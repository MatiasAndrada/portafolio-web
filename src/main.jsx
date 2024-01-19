import React from 'react'
/* import ReactDOM from "react-dom"; */
import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import App from './App'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Unable to find #root element')
}

createRoot(rootElement).render(<App />)
