import React from "react";
import SearchBar from "./Search";
import "./Header.css"
import { useSelector } from "react-redux";


function Header(){

    const cartItemCount = useSelector(state=>state.cr.totalQuantity);

    return (
        <div className="Header">
            <div className="Header-Name">
                <h1>EStore!</h1>
                <SearchBar/>
                <div className="SeachBar-Icons">
                    <i className="fa fa-user"/>
                    <h5><a href="#">Login</a></h5>
                    <h5><a href="#">Register</a></h5> 
                    <i className="fa fa-heart"/>
                    <div className="cart-n-counter">
                        <i className="fa fa-shopping-cart"/>
                        {
                            
                            cartItemCount !==0 ? 
                        <div id="cart-item-counter">
                        <p>{cartItemCount}</p> 
                        </div>
                        
                        : <></>
                        
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;