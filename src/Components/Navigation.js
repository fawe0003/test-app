import React, {Component} from "react";
import { Link } from "react-router-dom";

class Navigation extends Component{
    render(){
        return(
            <div className="sidebar-content">
                <div><Link to="/">Produkt</Link></div>
                <div><Link to="/betriebspunkte">Betriebspunkte</Link></div>
                <div><Link to="/fanliste">Fanliste</Link></div>
            </div>
        )
    }
}

export default Navigation;