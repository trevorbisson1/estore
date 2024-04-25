import React from "react";
import "./Header.css"



function SearchBar(){
    return(
        <div className="SearchBar">
            <select className="SelectBar">
                <option>Men's</option>
                <option>Women's</option>
                <option>Kid's</option>
            </select>
            <input className="searchInput" placeholder="Search!"></input>
            <button ><i className="fa fa-search"/></button>
        </div>
    )
}

export default SearchBar;