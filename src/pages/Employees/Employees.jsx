import './employees.css';
import useEmployee from "../../hooks/useEmployee";

const Employees = () => {
    const { data } = useEmployee()

    return (
        <div>
            Employees number {data}
        </div>
    );
}
export default Employees;