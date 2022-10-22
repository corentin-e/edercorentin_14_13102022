import './job_set.css';

const JobSet = () => {
    return (
        <div className='jobset_job'>
            <span className='jobset_job-title'>Employee job</span>
            <div className='jobset_job-inputs'>
                <div className='jobset_job-input'>
                    <label>Date of begining</label>
                    <input type="date" name="start date" id="start_date"/>
                </div>
                <div className='jobset_job-input'>
                    <label>Department</label>
                    <select type="text" name="department" id="department">
                        <option value="">- Select Department -</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Legal">Legal</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
export default JobSet;