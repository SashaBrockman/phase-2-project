import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './routes';

const router = createBrowserRouter(routes)

document.body.style = 'background: #2784db; font-family: Verdana, Geneva, Tahoma, sans-serif;';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);
