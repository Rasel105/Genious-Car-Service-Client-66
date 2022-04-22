import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Register = () => {
     const [agree, setAgree] = useState(false)
     const [
          createUserWithEmailAndPassword,
          user,
          loading,
          error,
     ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
     const [updateProfile, updating, updateError] = useUpdateProfile(auth);

     const navigate = useNavigate();
     const navigateLogin = () => {
          navigate('/login')
     }

     if (loading || updating) {
          return <Loading />
     }

     if (user) {
          console.log("User", user)
     }

     const handleRegister = async (event) => {
          event.preventDefault();
          // console.log(event.target.name.value, event.target.email.value)
          // console.log(event.target.password.value);
          // const name = event.target.name.value;
          // console.log(name)     

          const name = event.target.name.value;
          const email = event.target.email.value;
          const password = event.target.password.value;
          // const agree = event.target.terms.checked;

          await createUserWithEmailAndPassword(email, password);
          await updateProfile({ displayName: name });
          console.log('Updated profile');
          navigate('/home')
     }

     return (
          <div className='register-form'>
               <PageTitle title={'Register'} />
               <h2 className='text-center text-primary m-3'>Please Register</h2>
               <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="" placeholder='Your Name' />

                    <input type="email" name="email" id="" placeholder='Your email' required />

                    <input placeholder='Your password ' required type="password" name="password" id="" />
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                    {/* <label className={agree ? "ps-2 text-primary" : "ps-2"} htmlFor="terms">Accept Genius Terms and Conditions</label> */}

                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Terms and Conditions</label>

                    <input
                         disabled={!agree}
                         className='w-50 mx-auto btn btn-primary mt-3' type="submit" value="Register" />
               </form>
               <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
               <SocialLogin />
          </div>
     );
};

export default Register;