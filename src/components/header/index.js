import { Fragment } from "react";
import HeaderTools from "./headerTools";
import Logo from "./logo";
import Menu from "./menu";
import "./style.css"
export function Header(){
    return(
        <Fragment>
            <Menu/>
            <Logo/>
            <HeaderTools/>
        </Fragment>
    )
}
export default Header;