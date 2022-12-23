import './address_set.css';
import { useFormContext } from "react-hook-form";
import { CountrySelector } from '../../components';

const AddressSet = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className='addressset_address'>
            <span className='addressset_address-title'>Employee address</span>
            <div className='addressset_address-inputs'>
                <div className='addressset_address-input'>
                    <label>Street</label>
                    <input type="text" name="street" id="street" {...register("street", { required: "Please enter a street." })} aria-label="street"/>
                </div>
                <span className='addressset_error-message'>{errors.street?.message}</span>
                <div className='addressset_address-input'>
                    <label>City</label>
                    <input type="text" name="city" id="city" {...register("city", { required: "Please enter a city." })} aria-label="city"/>
                </div>
                <span className='addressset_error-message'>{errors.city?.message}</span>
                <CountrySelector/>
                <span className='countryselector_error-message'>{errors.country?.message}</span>
                <div className='addressset_address-input'>
                    <label>Zip Code</label>
                    <input type="number" name="zip code" id="zip_code" {...register("zipCode", { required: "Please enter a zip code." })} aria-label="zip code"/>
                </div>
                <span className='addressset_error-message'>{errors.zipCode?.message}</span>

            </div>
        </div>
    );
}
export default AddressSet;