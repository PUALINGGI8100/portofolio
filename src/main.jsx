import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import routes from './routes.js';
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter(routes, {
  hydrationData: window.__staticRouterHydrationData,
});

hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
