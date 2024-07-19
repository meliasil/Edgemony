import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import DefaultLayout from './layout/DefaultLayout.jsx'
import BookProvider from './providers/BookContext.jsx'
import Favourites from './pages/Favourites.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "favourites",
        element: <Favourites />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <BookProvider>
    <RouterProvider router={router}/>
    </BookProvider>
)
