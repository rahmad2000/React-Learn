import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Posts, { loader as postsloader} from './routes/Posts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './routes/RootLayout'
import NewPost, {action as newPostAction} from './routes/NewPost'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: '/',
        element: <Posts></Posts>,
        loader: postsloader,
        children: [
          {
            path: '/create-post',
            element: <NewPost></NewPost>,
            action: () => {}
          }
        ]
      },
    ]
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
