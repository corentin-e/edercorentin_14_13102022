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
            {/* Exemple */}
            Home page
            <button onClick={add}> +</button>
            {/* Code */}
            <Form/>
        </div>
    );
}
export default Home;