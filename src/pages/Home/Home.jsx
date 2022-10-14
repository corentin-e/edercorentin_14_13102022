import {Link} from "react-router-dom"
import { Form } from '../../components';
import './home.css';

import useEmployee from "../../hooks/useEmployee";




const Home = () => {
    const { setData, data } = useEmployee()

    const add = () => {
        setData(data + 1)
    }
    console.log(data)

    return (
        <div>
            <Link to="employees"> Employees </Link>
            Home page
            <button onClick={add}> +</button>
        </div>
    );
}
export default Home;