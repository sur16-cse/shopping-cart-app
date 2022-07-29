 import { useNavigate,Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
//import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './product.styles.css'
import * as actionTypes from '../../redux/actions.jsx'
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';

const useStyles = makeStyles({
    root: {
      maxWidth: 325,
      marginBottom:'1%'
    },
    media: {
      height: '38vh',
    },
    cardstyle:{
      height:'35vh'
    }
  });
const Product = ({product,addToCart,loadCurrentItem})=>{
     const history=useNavigate()
    const classes=useStyles()
    const handleOnClick=()=>{
        loadCurrentItem(product)
        history(`/product/${product.id}`) 
    }
    return(
      <Fragment>
      <Outlet/>
        <Card className={classes.root}>
      
          <CardMedia
            className={classes.media}
            image={product.image}   
          />
          <CardContent className={classes.cardstyle}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{height: '25vh'}}>
              {product.description}
            </Typography>
            <br/>
            <Typography variant="h5" align='center' color="textPrimary" >
              {product.price}&nbsp;₹
            </Typography>
          </CardContent>
       
        <CardActions >
      
          <Button  size="small" align='center' color="primary" onClick={handleOnClick}>
            View Item
          </Button>
          
          <Button size="small" color="primary" onClick={() => addToCart(product.id)}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      </Fragment>
    )
 }

 const mapDispatchToProps=(dispatch)=>{
    return{
        loadCurrentItem:(item)=>dispatch({type:actionTypes.LOAD_CURRENT_ITEM,payload:{item:item}}),
        addToCart:(id)=>dispatch({type:actionTypes.ADD_TO_CART,payload:{id:id}})
    }
 }
 export default connect(null,mapDispatchToProps)(Product)