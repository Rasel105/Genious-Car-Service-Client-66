import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../api/axiosPrivate';
import auth from '../../../firebase.init';

const Orders = () => {
    const [orders, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `https://afternoon-inlet-05262.herokuapp.com/order?email=${email}`;
            try{
                const { data } = await axiosPrivate.get(url);
                setOrder(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 403 || error.response.status === 401){
                    signOut(auth);
                    navigate('/login');
                }   
            }
        }
        getOrders();

        // fetch()
        // .then(res => res.json())
        // .then(data => setOrder(data))
    }, [user])
    return (
        <div>
            <h2 className='text-center'>Your Orders: {orders.length}</h2>
           <div className="text-center"> 
           {
                orders.map(order => <div key={order._id}>
                    <p>{order.email} :  {order.service}</p>
                </div>)
            }
            
           </div>
        </div>
    );
};

export default Orders;