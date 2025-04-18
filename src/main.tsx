import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
  <Auth0Provider
        domain="dev-4ej6nxejlnjh2j1l.us.auth0.com"
        clientId="7KiFWzx2w9ATryAkoC477dJJmn1pbUuA"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
    >
    <App />
  </Auth0Provider>
  </React.StrictMode>
)
