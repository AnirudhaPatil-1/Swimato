import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import {IMG_CDN_URL} from './components/constants.js';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Error from './components/Error.js'
import About from './components/About.js'
import Home from './components/Home.js'
import Contact from './components/Contact.js'


const AppLayout = () => {
    return (
        <>
            <Header/>   
            <Outlet/>
            <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        errorElement: <ErrorElement/>,
        children: [
            {
                path: '/body',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            
        ]
        },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);
