import './name_set.css';
import { useFormContext } from "react-hook-form";

const NameSet = () => {

    const {
        register,
    } = useFormContext();

    return (
        <div className='nameset_profil'>
            <span className='nameset_profil-title'>Employee profil</span>
            <div className='nameset_profil-inputs'>
                <div className='nameset_profil-input'>
                    <label>First Name</label>
                    <input type="text" name="first name" id="first_name" {...register("firstName")}/>
                </div>
                <div className='nameset_profil-input'>
                    <label>Last Name</label>
                    <input type="text" name="last name" id="last_name" {...register("lastName")}/>
                </div>
                <div className='nameset_profil-input'>
                    <label>Date of Birth</label>
                    <input type="date" name="date of birth" id="birth_date" {...register("birthDate")}/>
                </div>
            </div>
        </div>
    );
}
export default NameSet;