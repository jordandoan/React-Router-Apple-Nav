import React from "react";
import Data from "./Data";

const SideBar = (props) => {
    let category = Data.find(cat => cat.id == props.id);
    return (
        <div className="secondary-nav-bar">
            {category.sidebar.map((product) => 
                <div key={product.text} className="product">
                    <img src={product.img}/>
                    <p>{product.text}</p>
                </div>
            )}
        </div>
    )
};

export default SideBar;