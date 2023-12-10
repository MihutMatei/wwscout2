import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
import {ListingsPage} from "./goodfront.jsx"
import {Register} from "./Register.jsx"
import {Login} from "./LogIn.jsx"
import {PeerContacting} from "./Peers.jsx"
import './LogIN.css'
import ShowInfo from './HelpfulInfo.jsx';
import './HelpfulInfo.css'; // Import your CSS file

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/main",
    element: <ListingsPage />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/peers",
    element: <PeerContacting />
  },
  {
    path: "/HelpfulInfo",
    element: <ShowInfo />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Login/>
    </RouterProvider>
  </React.StrictMode>,
)

