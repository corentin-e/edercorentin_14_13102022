import './employees.css';
import React from 'react';

const List = React.lazy(() => import('../../components/List/List'));

const Employees = () => {

    return (
        <div className='employeeslist'>
            <List/>
        </div>
    );
}
export default Employees;