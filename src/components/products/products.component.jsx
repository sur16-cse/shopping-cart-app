import { connect } from "react-redux/es/exports";
import Product from "../product/product.component";
import './products.styles.css'
const Products=({products})=>{
    return (
        <div className="products">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
    );
}
const mapStateToProps=(state)=>{
    return{
        products:state.products
    }
}

export default connect(mapStateToProps)(Products);