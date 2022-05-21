import React from 'react';
import notfound from '../../Assets/images/notfound/notfound.gif'

const NotFound = () => {
    return (
        <div>
            <img className='w-screen h-screen'  src={notfound} alt="" />
        </div>
    );
};

export default NotFound;