import './name_set.css';
import { useFormContext } from "react-hook-form";

const NameSet = () => {

    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className='nameset_profil'>
            <span className='nameset_profil-title'>Employee profil</span>
            <div className='nameset_profil-inputs'>
                <div className='nameset_profil-input'>
                    <label>First Name</label>
                    <input type="text" name="first name" id="first_name" {...register("firstName", { required: "Please enter a first name." })} aria-labelledby="first name"/>
                </div>
                <span className='nameset_error-message'>{errors.firstName?.message}</span>
                <div className='nameset_profil-input'>
                    <label>Last Name</label>
                    <input type="text" name="last name" id="last_name" {...register("lastName", { required: "Please enter a last name." })} aria-labelledby="last name"/>
                </div>
                <span className='nameset_error-message'>{errors.lastName?.message}</span>
                <div className='nameset_profil-input'>
                    <label>Date of Birth</label>
                    <input type="date" name="date of birth" id="birth_date" {...register("birthDate", { required: "Please enter a birthdate." })} aria-labelledby="birth date"/>
                </div>
                <span className='nameset_error-message'>{errors.birthDate?.message}</span>
            </div>
        </div>
    );
}
export default NameSet;