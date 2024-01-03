import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements,} from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import IndexPage from './pages/IndexPage.jsx';
import axios from 'axios';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>

      {/* Homepage */}
      <Route 
      index 
      element={<IndexPage/>}
      loader={async () => {
        const res = await axios.get('/api/venders');
        return {venders: res.data};
      }}
      />
      

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
