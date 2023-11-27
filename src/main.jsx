// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './Pages/Login';
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
        
      
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />

  </React.StrictMode>,
);
