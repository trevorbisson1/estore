import "./Product.scss";

const Product = ()=>{
    const productData = [

        {
            pName:"Jacket",
            pPrice:65,
            pImg: "shop-1.jpg"
        },
        {
            pName:"Purse",
            pPrice:205,
            pImg: "shop-2.jpg"
        },
        {
            pName:"Dress",
            pPrice:85,
            pImg: "shop-3.jpg"
        },
        {
            pName:"Distressed Jeans",
            pPrice:43,
            pImg: "shop-4.jpg"
        },
        {
            pName:"Boots",
            pPrice:315,
            pImg: "shop-5.jpg"
        },
        {
            pName:"Ugly Backpack",
            pPrice:117,
            pImg: "shop-6.jpg"
        },
    ]

    return (
        <div className="AllProductsWrapper">
        {
            productData.map((product,key)=>{
                return(
                    <div className="Product">
                        <img src={require("../../assests/images/shop/"+product.pImg)}></img>
                        <a href="#">{product.pName}</a>
                        <p>${product.pPrice}</p>
                    </div>

                )
            })
        }
        </div>
    )
}

export default Product;