import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
     const { register, handleSubmit } = useForm();
     const onSubmit = data => {
          console.log(data)

          const url = `http://localhost:5000/service`;
          fetch(url, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify(data)
          })
               .then(res => res.json())
               .then(result => {
                    console.log('Success:', result);
                    toast("Thank you. Service added!")

               })
     };
     return (
          <div className='w-50 mx-auto'>
               <h2>Please add a Service</h2>
               <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Your name' {...register("name", { required: true })} />
                    <textarea className='mb-2' placeholder='Description' {...register("description")} />
                    <input className='mb-2' placeholder='Pirce' type="number" {...register("price")} />
                    <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                    <input className='mb-2' type="submit" value="Add Service" />
               </form>
               <ToastContainer />
          </div>
     );
};

export default AddService;