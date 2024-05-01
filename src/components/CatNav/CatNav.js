import {  useSelector, useDispatch } from "react-redux";
import "./CatNav.scss"
import { useEffect } from "react";
import { getCategories } from "../../Redux/Category/actions";
const CatNav = () => {

    const categories = ["Men's","Women's","Kid's","Best Deals!","All"];

     return(
        <div className="CatNav">
            <ul>
                {
                    categories.map((cats)=>{
                        return (
                            <li className="CatNavItem"><a href="#">{cats}</a></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CatNav;