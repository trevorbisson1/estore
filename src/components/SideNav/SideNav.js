import { useSelector } from "react-redux";
import "./SideNav.scss"
import accordianSice from "../../Redux/Accordian/AccordianSlice";

const SideNav = () => {

    const accordianData = useSelector(accordianSice.getInitialState)
    return (
        <div className="SideNav">
            <h3 className="SectionTitle">Categories</h3>

            <div className='accordion'>
                {
                    accordianData.map((accordianCategory,key)=>{
                        return (
                            <div className='accordion-item individual-category' >
                                <div className='accordion-header'>
                                    <button className='accordion-button' data-bs-target={"#collapse"+key} data-bs-toggle="collapse">
                                        <div className='category-title'>
                                            <a href='#'>{accordianCategory.category}</a>
                                        </div>
                                    </button>
                                </div>
                                <div className='accordion-collapse collapse show' id={"collapse"+key}>
                                    <div className='accordion-body'>
                                        <ul>
                                            {
                                                accordianCategory.items.map((item)=>{
                                                    return <li className='sub-items'> <a href='#'>{item}</a> </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        )

                    })
                }
            </div>
        
        </div>


    )
}

export default SideNav;