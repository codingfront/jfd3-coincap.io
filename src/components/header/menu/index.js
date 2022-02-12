import { Link } from "react-router-dom";
import "./style.js";
import  styled  from "styled-components";
import { Fragment } from "react";
import Style from "./style.js";
export function Menu(){
    return(
        <Style>
            <ul>
                <li><Link to="/">Coins</Link></li>
                <li><Link to="/">Exchanges</Link></li>
                <li><Link to="/">Swap</Link></li>
            </ul>
        </Style>
    )
}
export default Menu;