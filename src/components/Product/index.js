import { useDispatch, useSelector } from "react-redux";
import "./Product.scss";
import productSlice from "../../Redux/Product/ProductSlice";
import { addCartItem } from "../../Redux/Cart/CartSlice";

const Product = ()=>{

    const productData = useSelector(productSlice.getInitialState);
    const cart = useSelector(state => state.cr);
    const dispatch = useDispatch();

    
    const addToCart = (itemData)=>{
        dispatch(addCartItem(itemData));
        
    }
    console.log(cart);
    
    return (

        <div className="AllProductsWrapper">
        {
            productData.map((product,key)=>{
                return(
                    <div className="Product" key={key}>
                        <img src={require("../../assests/images/shop/"+product.pImg)}></img>
                        <a href="#" onClick={()=>addToCart(product)}>{product.pName}</a>
                        <p>${product.pPrice}</p>
                        <div className="Rating-Section">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>

                )
            })
        }
        </div>
    )
}

export default Product;