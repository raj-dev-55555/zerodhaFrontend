import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import{BrowserRouter, Routes,Route} from "react-router-dom"
import HomePage from './landing_page/home/HomePage'
import AboutPage from './landing_page/about/AboutPage'
import PricingPage from './landing_page/pricing/PricingPage'
import ProductsPage from './landing_page/products/ProductsPage'
// import Signup from './landing_page/signup/Signup'
import SupportPage from './landing_page/support/SupportPage'
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Notfound from './landing_page/Notfound';
import 'react-toastify/dist/ReactToastify.css';
import { Login, Signup, Home } from './pages';
import { CookiesProvider } from 'react-cookie';
import ProtectedRoute from './pages/ProtectedRoute';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  // BrowserRouter ka kam URL change karna bina page reloade kiye huye
  <BrowserRouter>
  <CookiesProvider>
  <Navbar></Navbar>
  {/* yaha Routes check karta hai ke kaun sa route match hua  or usko render karvata hai or Route unko render karte hai  */}
    <Routes>    
    <Route path='/' element={<HomePage></HomePage>}></Route>
    <Route path='/signup' element={<Signup></Signup>}></Route>
    <Route path='/about' element={<AboutPage></AboutPage>}></Route>
  
    <Route path='/pricing' element={<ProtectedRoute><PricingPage></PricingPage></ProtectedRoute>}></Route>
   
    <Route path='/products' element={<ProductsPage></ProductsPage>}></Route>
    <Route path='/support' element={<SupportPage></SupportPage>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/home' element={<Home></Home>}></Route>

    <Route path='/*' element={<Notfound></Notfound>}></Route>

   </Routes>
   <Footer></Footer>
   </CookiesProvider>
  </BrowserRouter>
);


