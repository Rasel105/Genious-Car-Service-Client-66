import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';
const Login = () => {
     const emailRef = useRef('');
     const passwordRef = useRef('');
     const navigate = useNavigate();
     const location = useLocation();

     const [
          signInWithEmailAndPassword,
          user,
          loading,
          error,
     ] = useSignInWithEmailAndPassword(auth);

     const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

     const from = location.state?.from?.pathname || "/";

     if (loading || sending) {
          return <Loading />
     }


     if (user) {
          navigate(from, { replace: true });
     }


     const handleSubmit = event => {
          event.preventDefault();
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          signInWithEmailAndPassword(email, password);
     }

     let errorElement;
     if (error) {
          errorElement = <p className='text-danger'>Error: {error?.message}</p>
     }

     const navigateRegister = event => {
          navigate('/register');
     }

     const resetPassword = async () => {
          const email = emailRef.current.value;
          if (email) {
               await sendPasswordResetEmail(email);
               toast("Sent email")
          }
          else {
               toast("Please enter your email address")
          }
     }
     return (
          <div className='container w-50 mx-auto'>
               <PageTitle title={"Login"} />
               <h2 className='text-primary text-center mt-3'>Plase Login</h2>
               <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Control ref={passwordRef} required type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                         Login
                    </Button>
               </Form>
               {errorElement}
               <p>New to Genius Car? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
               <p>Forget Password? <button className='text-black text-decoration-none btn btn-link' onClick={resetPassword}>Reset Password</button></p>
               <SocialLogin />
               <ToastContainer />
          </div>
     );
};

export default Login;