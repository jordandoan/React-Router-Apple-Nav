import React from "react";
import {Link} from "react-router-dom";
const NavBar = () => {
    return (
        <div className="nav-bar">
            <div>
                <Link to ="/">Home</Link>
            </div>
            <div>
                <Link to ="/mac">Mac</Link>
            </div>
            <div>
                <Link to ="/ipad">iPad</Link>
            </div>
            <div>
                <Link to ="/iphone">iPhone</Link>
            </div>
            <div>
                <Link to ="/watch">Watch</Link>
            </div>
            <div>
                <Link to ="/tv">TV</Link>
            </div>
            <div>
                <Link to ="/music">Music</Link>
            </div>
        </div>
    )
}

export default NavBar;