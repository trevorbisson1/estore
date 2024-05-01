import { useDispatch, useSelector } from "react-redux";

const Cart = ()=>{

    const cart = useSelector(state => state.cr);
    const dispatch = useDispatch();

    return (
        <div className="CartComponent">
            
        </div>
    )
}

export default Cart;