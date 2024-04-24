import React from "react";
import SearchBar from "./Search";
import "../App.css"


function Header(){
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
                    <i className="fa fa-shopping-cart"/>
                </div>
            </div>
        </div>
    )
}

export default Header;