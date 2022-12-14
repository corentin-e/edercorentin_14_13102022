import countries from './countries.json'
import './country_selector.css'
import { useFormContext } from "react-hook-form";

const CountrySelector = () => {
    const {
        register,
    } = useFormContext();

    return (
        <div className='countryselector_address-input'>
            <label>Country</label>
            <select type="text" name="country" id="country" className='countryselector_address-input-select' {...register("country", { required: "Please select a country." })}>
                <option value="">- Select Country -</option>
                {countries.map((item) => {
                return <option key={item.country}>{item.country}</option>;
                })}
            </select>
        </div>
    );
}
export default CountrySelector;