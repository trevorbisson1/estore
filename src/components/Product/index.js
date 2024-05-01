import { useSelector } from "react-redux";
import "./Product.scss";
import productSlice from "../../Redux/Product/ProductSlice";

const Product = ()=>{

    const productData = useSelector(productSlice.getInitialState);

    return (
        <div className="AllProductsWrapper">
        {
            productData.map((product,key)=>{
                return(
                    <div className="Product">
                        <img src={require("../../assests/images/shop/"+product.pImg)}></img>
                        <a href="#">{product.pName}</a>
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