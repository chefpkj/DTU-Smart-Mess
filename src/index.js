import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import Login from './component/Login';
import Home from './component/Home';
import Contact from './component/Contact';
import { Provider } from 'react-redux';
import store from './utils/store';
import Details from './component/Details';
import ScannerPage from './component/ScannerPage';
import MessLogin from './component/MessLogin';
import MessHome from './component/MessHome';


const AppLayout=()=>{
  return (
    <Provider store={store}>
      <>
      <Outlet/>
      </>
    </Provider>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/details",
        element:<Details/>
      },
      {
        path:"/scanner",
        element:<ScannerPage/>
      },
      {
        path:'/messLogin',
        element:<MessLogin/>
      },
      {
        path:'/messHome',
        element:<MessHome/>
      }

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
