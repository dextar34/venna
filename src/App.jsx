import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Root from './pages/Root';
import Home from './pages/Home';
import AboutUS from './pages/AboutUS';
import Contact from './pages/Contact';
import Cart from './pages/Cart';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<AboutUS/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Route>
  )
);






const App = () => {
  return (
    <div className='font-popins'>
      <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
    </div>
  )
}

export default App
