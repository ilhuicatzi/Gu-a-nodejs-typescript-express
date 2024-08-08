import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider } from "./contexts/ThemeProvider.tsx"
import { HashRouter } from 'react-router-dom'
import './index.css'
//import '@fontsource-variable/inconsolata';
import '@fontsource-variable/inter';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
