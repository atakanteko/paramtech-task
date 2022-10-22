import { Layout } from "antd";
import {useSelector} from "react-redux";
import Logo from "../../assets/images/logo.svg";
import Avatar from "../../assets/images/avatar.svg";

const { Header } = Layout;

function HeaderSection(){
    const { user } = useSelector((store) => store.user)
    return(
        <Header className="pt-header">
            <figure>
                <img src={Logo} alt="site logo"/>
            </figure>
            <div className="user-info">
                <figure>
                    <img src={Avatar} alt="user avatar"/>
                </figure>
                <span>{user.fullName}</span>
            </div>
        </Header>
    )
}

export default HeaderSection;