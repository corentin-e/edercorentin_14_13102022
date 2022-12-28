import './home.css';
import React from 'react';

const Form = React.lazy(() => import('../../components/Form/Form'));

const Home = () => {
    return (
        <div className='home'>
            <Form/>
        </div>
    );
}
export default Home;