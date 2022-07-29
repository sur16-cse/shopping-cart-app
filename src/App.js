import './App.css';

import NavbarComponent from './components/Navbar/Navbar.component';
import {Routes, Route, Link} from 'react-router-dom';
import SingleItemComponent from './components/single/singleItem.component';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import Home from './route/home.component';
function App({current}) {
  return (
    <Fragment>
      <Routes>
          <Route path="/" element={<NavbarComponent/>}>
              <Route index element={<Home/>}/>
          </Route>
           {!current ? 
            <Route
            path="*"
            element={<Navigate to="/" replace />}
            />
           : 
            <Route path="/product/:id" element={<SingleItemComponent/>}/>
          } 
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
