import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@mui/material/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    tool:{
        position:"relative"
    }
  }));

    
const Navbar=({cart=[]})=>{
    const classes = useStyles();
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
      let count = 0;
      cart.forEach((item) => {
        count += item.qty;
      });
  
      setCartCount(count);
    }, [cart, cartCount]);
    return (
      <Fragment>
        <div className={classes.root}>
        <AppBar style={{backgroundColor:'#badc58'}} position="static">
          <Toolbar className={classes.tool}>
            
            <Typography variant="h6" className={classes.title}>
              <Link to='/' style={{color:'#2f3542'}}>
              Redux Shopping
              </Link>
            </Typography>
            <Link to='/cart' style={{color:'#2f3542'}}>
            <Button color="inherit">Cart<ShoppingCartIcon style={{marginLeft:'12%', marginRight:'1%'}}/><span className='cartNumber' style={{}}>{cartCount}</span></Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      <Outlet/>
      </Fragment>
    )
}

const mapStateToProps=(state)=>{
    return{
        cart:state.cart
    }
}

export default connect(mapStateToProps)(Navbar)