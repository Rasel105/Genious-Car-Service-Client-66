import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useServiceDetails from '../../../hooks/userServiceDetails';

const CheckOut = () => {
     const { serviceId } = useParams();
     const [service] = useServiceDetails(serviceId);
     const [user] = useAuthState(auth);
     
     // console.log(user)
     // this code is for Controlled input filed 

     // const [user, setUser] = useState({
     //      name: "Akbar the Great",
     //      email: "akbar@mono.taz",
     //      address: 'Tajmohol Road Md.pur',
     //      phone: '011111111111',
     // });

     // const handleAddressChange = e => {
     //      console.log(e.target.value)
     //      const {address, ...rest} = user;
     //      const newAddress = e.target.value;
     //      const newUser = {address: newAddress, ...rest} 
     //      console.log(newUser)
     //      setUser(newUser)
     // }

     const handlePlaceOrder = event => {
          event.preventDefault();
          const order = {
               email: user.email,
               service: service.name,
               serviceId: serviceId,
               address: event.target.address.value,
               phone: event.target.phone.value,
          }

          axios.post('https://afternoon-inlet-05262.herokuapp.com/order', order)
              .then(response => {
                   const {data} = response;
                   if(data.insertedId){
                        toast("Order placed");
                        event.target.reset();
                        
                   }
              })
     }

     return (
          <div className='w-50 mx-auto'>
               <h2>Please Order
                    <span className='text-primary ms-1'>
                         {service.name}
                    </span>
               </h2>
               <form onSubmit={handlePlaceOrder}>
                    <input className='w-100 mb-2' type="text" value={user?.displayName} name='name' placeholder='Name' required readOnly />
                    <br />
                    <input className='w-100 mb-2' type="email" value={user?.email} name='email' placeholder='Email' required readOnly disabled />
                    <br />
                    <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='Service' readOnly required />
                    <br />
                    <input className='w-100 mb-2' type="text" name='address' placeholder='Address' autoComplete='off' required />
                    <br />
                    <input className='w-100 mb-2' type="text" value={user?.phone} name='phone' placeholder='Phone' required />
                    <br />
                    <input className='btn btn-primary' type="submit" value="Place Order" />
               </form>
          </div>
     );
};

export default CheckOut;