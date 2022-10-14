import './form.css';
import { useForm } from "react-hook-form";
import { NameSet, JobSet, AddressSet } from '../index';

const Form = () => {
    const { register, handleSubmit } = useForm();
    return (
        <div>
            Form components
            <NameSet/>
            <JobSet/>
            <AddressSet/>
        </div>
    );
}
export default Form;