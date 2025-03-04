import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import QueryProvider from './libs/react-query/query-provider.tsx'
import { AuthProvider } from './context/auth-context.tsx'
import { ToastProvider } from './context/toast-context.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <QueryProvider>
          <AuthProvider>
            <Theme>
              <App />
            </Theme>
          </AuthProvider>
        </QueryProvider>
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
)
