import './popup_content.css';
import {Link} from "react-router-dom"

const PopupContent = () => {
    <div>
        <span className='popupcontent-message'>Employee Created!</span>
        <span>You can see the employees list !</span>
        <Link to="employees">
            <button className='popupcontent-button' type="button">Employees List</button>
        </Link>
    </div>
}
export default PopupContent;
