import React from "react";
import Data from "./Data";

const SideBar = (props) => {
    let category = Data.find(props.id);
    return ( 
        <div> I am a sidebar! </div>
    );
}

export default SideBar;