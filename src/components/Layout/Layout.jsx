import './layout.css';

const Layout = ({children}) => {
    return (
        <div>
            Layout components
            <div className='layout-children'>
                {children}
            </div>
        </div>
    );
}
export default Layout;