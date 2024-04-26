import { useSelector } from "react-redux";
import "./CatNav.scss"
import categorySlice from "../../store/slices/categorySlice/CategorySlice";

const CatNav = () => {

    const categories = useSelector(categorySlice.getInitialState);

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