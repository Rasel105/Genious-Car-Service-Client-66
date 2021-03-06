import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
     const [services, setServices] = useState([]);
     useEffect(() => {
          fetch('https://afternoon-inlet-05262.herokuapp.com/service')
               .then(res => res.json())
               .then(data => setServices(data));
     }, [])

     return (
          <div id='service' className='container'>
               <div className="row">
                    <h1 className='service-title my-5 text-primary text-center'>Our Servises: {services.length}</h1>
                    <div className='services-container'>
                         {
                              services.map(service => <Service
                                   key={service._id}
                                   service={service}
                              />)
                         }
                    </div>
               </div>
          </div>
     );
};

export default Services;