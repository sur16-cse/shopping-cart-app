import './App.css';

import NavbarComponent from './components/Navbar/Navbar.component';
import {Routes, Route, Link} from 'react-router-dom';
import SingleItemComponent from './components/single/singleItem.component';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import Home from './route/home.component';
import Cart from './components/cart/cart.component';
function App({current}) {
  return (
    <Fragment>
      <Routes>
          <Route path="/" element={<NavbarComponent/>}>
              <Route index element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
              {!current ? 
                <Route
                path="*"
                element={<Navigate to="/" replace />}
                />
              : 
                <Route path="/product/:id" element={<SingleItemComponent/>}/>
              }
          </Route> 
      </Routes>
    </Fragment>
  );
}

const mapStateToProps=(state)=>{
  return{
    current:state.currentItem
  }
}
export default connect(mapStateToProps)(App);
