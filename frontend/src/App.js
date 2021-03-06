import React from 'react';
import {BrowserRouter} from "react-router-dom"
import {Route} from "react-router-dom"
import {Link} from "react-router-dom"
// import './App.css';
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from "./screens/RegisterScreen"
import ProductsScreen from "./screens/ProductsScreen"
import { useSelector } from 'react-redux';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

function App() {

    const userSignin = useSelector(state=>state.userSignin)
    const {userInfo} = userSignin
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  
//   comment for commit
  return (
<BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                {/* <button onClick={openMenu}>
                    &#9776;
                </button> */}
                <Link to="/">nozamA</Link>
            </div>
            <div className="header-links">
                {
                    userInfo ? <Link to="/profile">{userInfo.name}</Link>:
                    <Link to='/signin'>Sign In</Link>
                }
                
                <Link to="/cart"> Cart</Link>
            </div>
        </header>
        <aside className="sidebar">
            <h3>
                Shopping Categories
            </h3>
            <button className="sidebar-close-button" onClick={closeMenu}>
                x
            </button>
            <ul>
                <li>
                    <a href="">Pants</a>
                </li>
                <li>
                    <a href="">Shirts</a>
                </li>
                <br></br>
                <li>Oops! the functionality for this sidebar hasn't been completed yet. Sorry!</li>
            </ul>
        </aside>
        <main className="main">
            <div className="content">
                <Route path='/products' component={ProductsScreen}/>
                <Route path='/placeorder' component={PlaceOrderScreen}/>
                <Route path='/payment' component={PaymentScreen}/>
                <Route path='/shipping' component={ShippingScreen}/>
                <Route path='/signin' component={SigninScreen}/>
                <Route path='/register' component={RegisterScreen}/>
                <Route path="/product/:id" component={ProductScreen}/>
                <Route path ="/cart/:id?" component={CartScreen}/>
                <Route path ="/" exact={true} component={HomeScreen}/>
            </div>
        </main>
        <footer className="footer">
            All Rights Reserved
        </footer>
    </div>
</BrowserRouter>
  );
}

export default App;
