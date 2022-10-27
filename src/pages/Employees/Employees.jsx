import './employees.css';
import useEmployee from "../../hooks/useEmployee";
import { List } from '../../components';

const Employees = () => {
    const { data } = useEmployee()

    return (
        <div>
            {/* Employees number {data} */}
            <List/>
        </div>
    );
}
export default Employees;