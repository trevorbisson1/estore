
import "./CatNav.scss"

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