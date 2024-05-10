import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import CreateBook from './components/CreateBook.js'
import ShowBookList from './components/ShowBookList.js'
import ShowBookDetails from './components/ShowBookDetails.js'
import UpdateBookInfo from './components/UpdateBookInfo.js'

const router=createBrowserRouter([
  {path:'/',element:<ShowBookList/>},
  {path:'/create-book',element:<CreateBook/>},
  {path:'/show-book/:id',element:<ShowBookDetails/>},
  {path:'/edit-book/:id',element:<UpdateBookInfo/>},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
