import React from "react";
import SideBar from "../Nav/SideBar.js";
const Content = (props) => {
    return (
        <div className="content">
            <SideBar id={props.match.params.id}/>
            I am the {props.match.params.id} page!
        </div>
    )
}

export default Content;