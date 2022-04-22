import React from 'react';
import notfound from '../../../images/not-found.jpg'
const NotFound = () => {
     return (
          <div>
               <h2 className='text-primary text-center'>Machnic is Sleeping</h2>
               <img className='img-fluid w-100' src={notfound} alt="" />
          </div>
     );
};

export default NotFound;