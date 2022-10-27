import './layout.css';
import Logo from '../../assets/Logo.jpg';
import {Link} from "react-router-dom"

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <div className='layout-topbar'>
                <div className='layout-website_name'>
                    <img src={Logo} alt="logo" className='layout-logo'/>
                    <span className='layout-logo_title'>WEALTH HEALTH</span>
                </div>
                <div className='layout-navbar'>
                    <Link to="/"> Homes </Link>
                    <Link to="employees"> Employees List </Link>
                </div>
            </div>
            {children}
        </div>
    );
}
export default Layout;