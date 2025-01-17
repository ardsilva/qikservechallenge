import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import '@/styles/global.css'
import { AppProvider } from '@/context/AppContext.tsx'
import '@/i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
