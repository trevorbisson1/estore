import { useSelector } from "react-redux";
import "./cart.scss"
const Cart = ()=>{

    const cart = useSelector(state => state.cr);

    return (
        <div className="cartComponent">
            {
                cart.cartItems.length === 0 ?
                <div className="emptyCart">
                    <h3>Your cart is empty!</h3>
                    <hr/>
                    <a className="returnHome" href="/">Back To Shopping</a>
                </div>
                :
                <div className="FilledCart">
                    {
                        cart.cartItems.map((products,key)=>{
                            return(
                                <div className="checkoutItem">
                                    <span>{products.pName}</span>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Cart;