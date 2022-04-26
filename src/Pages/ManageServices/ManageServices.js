import React from 'react';
import { toast } from 'react-toastify';
import useService from '../../hooks/useServices';

const ManageServices = () => {
     const [services, setServices] = useService()
     const handleDelete = id => {
          const proceed = window.confirm("Are you sure to delete the data?");
          if (proceed) {
               const url = `https://afternoon-inlet-05262.herokuapp.com/service/${id}`
               fetch(url, {
                    method: 'DELETE',
               })
                    .then(res => res.json())
                    .then(result => {
                         toast("Service Deleted!")
                         console.log("Data Deleted", result);
                         const remainig = services.filter(service => service._id !== id);
                         setServices(remainig)
                    })
          }
          console.log("delete button working", id);
     }
     return (
          <div className='w-50 mx-auto'>
               <h2 className='display-4 text-center mb-3 text-info'>Manage your services</h2>
               <div className='text-center border p-4'>
                    {
                         services.map(service => <div key={service._id}>
                              <h5 className='border p-3'>
                                   <img style={{ width: '80px', borderRadius: '80px', marginRight: " 20px" }} src={service.img} alt="" />
                                   {service.name}
                                   <button onClick={() => handleDelete(service._id)} className='btn btn-danger ms-3'>Delete</button>
                              </h5>
                         </div>)
                    }
               </div>
          </div>
     );
};

export default ManageServices;