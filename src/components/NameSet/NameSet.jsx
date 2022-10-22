import './name_set.css';

const NameSet = () => {
    return (
        <div className='nameset_profil'>
            <span className='nameset_profil-title'>Employee profil</span>
            <div className='nameset_profil-input'>
                <label>First Name</label>
                <input type="text" name="first name" id="first_name"/>
            </div>
            <div className='nameset_profil-input'>
                <label>Last Name</label>
                <input type="text" name="last name" id="last_name"/>
            </div>
            <div className='nameset_profil-input'>
                <label>Date of Birth</label>
                <input type="date" name="date of birth" id="birth_date"/>
            </div>
        </div>
    );
}
export default NameSet;