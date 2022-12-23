import './job_set.css';
import { useFormContext } from "react-hook-form";

const JobSet = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className='jobset_job'>
            <span className='jobset_job-title'>Employee job</span>
            <div className='jobset_job-inputs'>
                <div className='jobset_job-input'>
                    <label>Date of begining</label>
                    <input type="date" name="start date" id="start_date" {...register("startDate", { required: "Please enter a date of begining in your job." })} aria-label="date of begining"/>
                </div>
                <span className='jobset_error-message'>{errors.startDate?.message}</span>
                <div className='jobset_job-input'>
                    <label>Department</label>
                    <select type="text" name="department" id="department" {...register("department", { required: "Please select a department." })} aria-label="department of job">
                        <option value="">- Select Department -</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Legal">Legal</option>
                    </select>
                </div>
                <span className='jobset_error-message'>{errors.department?.message}</span>
            </div>
        </div>
    );
}
export default JobSet;