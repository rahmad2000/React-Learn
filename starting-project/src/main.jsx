import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPost from './components/NewPost'

const router = createBrowserRouter([
  {path: '/', element: <App></App>},
  {path: '/create-post', element: <NewPost></NewPost>}
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
