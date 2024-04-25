import "./CatNav.scss"

const CatNav = () => {
    return(
        <div className="CatNav">
            <ul>
                <li className="CatNavItem"><a href="#">Men's</a></li>
                <li className="CatNavItem"><a href="#">Women's</a></li>
                <li className="CatNavItem"><a href="#">Kid's</a></li>
                <li className="CatNavItem"><a href="#">Sales</a></li>
            </ul>
        </div>
    )
}

export default CatNav;