import { Layout } from "antd";
import {useSelector, useDispatch} from "react-redux";
import Logo from "../../assets/images/logo.svg";
import Avatar from "../../assets/images/avatar.svg";
import {logoutUser} from "../../features/user/userSlice";
const { Header } = Layout;

function HeaderSection(){
    const dispatch = useDispatch();
    const { user } = useSelector((store) => store.user)

    const handleLogout = () =>{
        dispatch(logoutUser())
    }

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
                <div className="logout" onClick={()=> {handleLogout()}}>
                    <span>Çıkış Yap</span>
                </div>
            </div>
        </Header>
    )
}

export default HeaderSection;