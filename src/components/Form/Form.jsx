import './form.css';
import { useForm, FormProvider } from "react-hook-form";
import { NameSet, JobSet, AddressSet} from '../index';
import useEmployee from "../../hooks/useEmployee";
import { useState } from "react";
import { Popup } from "popup-lib-p14";
import {Link} from "react-router-dom";

const Form = () => {
    const methods = useForm({
        defaultValues: {
            first_name: "",
            last_name: "",
        },
    });
    const [buttonPopup, setButtonPopup] = useState(false);
    const { addEmployee } = useEmployee();
    const onSubmit = (values) => {
        addEmployee(values);
        setButtonPopup(true);
    };

    return (
        <div className='form-card'>
            <FormProvider {...methods}>
                <form className='form' onSubmit={methods.handleSubmit(onSubmit)}>
                    <label className='form-title'>Create new employe</label>
                    <NameSet/>
                    <JobSet/>
                    <AddressSet/>
                    <div className='form-buttons'>
                        <button type='submit' className='form-button'>Save</button>
                        <button type='button' className='form-button'>Cancel</button>
                    </div>
                </form>
            </FormProvider>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <span className='popupcontent-message'>Employee Created!</span>
                <span>You can see the employees list !</span>
                <Link to="employees">
                    <button className='popupcontent-button' type="button">Employees List</button>
                </Link>
            </Popup>
        </div>
    );
}
export default Form;