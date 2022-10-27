import './address_set.css';
import countries from './countries.json'

const AddressSet = () => {
    return (
        <div className='addressset_address'>
            <span className='addressset_address-title'>Employee address</span>
            <div className='addressset_address-inputs'>
                <div className='addressset_address-input'>
                    <label>Street</label>
                    <input type="text" name="street" id="street"/>
                </div>
                <div className='addressset_address-input'>
                    <label>City</label>
                    <input type="text" name="city" id="city"/>
                </div>
                <div className='addressset_address-input'>
                    <label>State</label>
                    <input type="text" name="state" id="state"/>
                </div>
                <div className='addressset_address-input'>
                    <label>Zip Code</label>
                    <input type="number" name="zip code" id="zip_code"/>
                </div>
                <div className='addressset_address-input'>
                    <label>Country</label>
                    <select type="text" name="department" id="department" className='addressset_address-input-select'>
                        <option value="">- Select Country -</option>
                        {countries.map((item) => {
                        return <option key={item.country}>{item.country}</option>;
                        })}
                    </select>
                </div>
            </div>
        </div>
    );
}
export default AddressSet;