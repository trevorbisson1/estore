import "./Product.scss";

const Product = ()=>{
    return (
        <div className="Product">
            <img src={require("../../assests/images/shop/shop-1.jpg")}></img>
            <a href="#">Jacket</a>
            <p>$45</p>
        </div>
    )
}

export default Product;