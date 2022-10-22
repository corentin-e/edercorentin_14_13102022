import './form.css';
import { useForm, FormProvider } from "react-hook-form";
import { NameSet, JobSet, AddressSet, Popup } from '../index';
/* import useEmployee from "../../hooks/useEmployee"; */
import { useState } from "react";

const Form = () => {
    const methods = useForm();
    const [buttonPopup, setButtonPopup] = useState(false);
    /* const { addEmployee } = useEmployee(); */
    const onSubmit = (values) => {
        /* addEmployee(values); */
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
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
        </div>
    );
}
export default Form;