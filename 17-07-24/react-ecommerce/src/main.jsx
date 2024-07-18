import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import Cart from './pages/Cart.jsx'
import './index.css'
import DefaultLayout from './Layout.jsx'
import UserPage from './pages/UserPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />
      },
    
  {
    path: "cart",
    element: <Cart />
  },

  {
    path: "products/:id",
    element: <UserPage />
  },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
