import './layout.css';
import Logo from '../../assets/Logo.jpg';
import {Link} from "react-router-dom"
import HomeIcon from '../../assets/home-icon.png'
import ListIcon from '../../assets/list-icon.png'

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <div className='layout-topbar'>
                <div className='layout-website_name'>
                    <img src={Logo} alt="logo" className='layout-logo' width="40" height="40" rel="preload"/>
                    <span className='layout-logo_title'>WEALTH HEALTH</span>
                </div>
                <div className='layout-navbar'>
                    <Link to="/" className='layout-link'>
                        <div className='layout-ongle'>
                            <img src={HomeIcon} alt="home icon" className='layout-icon'/>
                            <div className='layout-ongle_tag tag-small'>
                                <label className='layout-ongle_tag-name'> Homes </label>
                            </div>
                        </div> 
                    </Link>
                    <Link to="employees" className='layout-link'>
                        <div className='layout-ongle'>
                            <img src={ListIcon} alt="home icon" className='layout-icon'/>
                            <div className='layout-ongle_tag tag-large'>
                                <label className='layout-ongle_tag-name'> Employees List  </label>
                            </div>
                        </div> 
                    </Link>
                </div>
            </div>
            {children}
        </div>
    );
}
export default Layout;