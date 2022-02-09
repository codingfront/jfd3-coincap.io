import { Link } from "react-router-dom";
import "./style.css"
import { Button } from "antd";
import { SearchOutlined, SettingFilled } from "@ant-design/icons";
export function HeaderTools(){
    return(
        <ul>
            <li><Link to="/"><SearchOutlined/></Link></li>
            <li><Link to="/"><SettingFilled/></Link></li>
            <li>
                <Link to="/">
                <Button type="primary">Connect Wallet</Button>
                </Link>
            </li>
        </ul>
    )
}
export default HeaderTools;