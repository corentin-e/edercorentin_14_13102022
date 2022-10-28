import './popup.css';
import {Link} from "react-router-dom"

const Popup = (props) => {
    return (props.trigger) ? (
        <div className='popup'>
            <span className='popup-message'>Employee Created!</span>
            <span>You can see the employees list !</span>
            <Link to="employees">
                <button className='popup-button' type="button">Employees List</button>
            </Link>
            <button className='popup-button' type="button" onClick={() => props.setTrigger(false)}>Close</button>
        </div>
    ) : "";
}
export default Popup;
