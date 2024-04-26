import Product from "../Product";
import SideNav from "../SideNav/SideNav";
import "./MainComponent.scss";

const MainComponent = () => {
    return(
        <div className="MainComponent">
            <SideNav></SideNav>
            <Product></Product>
        </div>
    )
}

export default MainComponent;