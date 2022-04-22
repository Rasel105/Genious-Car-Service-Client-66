import React from 'react';
import google from '../../../images/social/google_logo.png'
import facebook from '../../../images/social/facebook-logo.png'
import github from '../../../images/social/github_logo.png'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
const SocialLogin = () => {
     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
     const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
     const navigate = useNavigate();
     let errorElement;
     if (error || error1) {
          errorElement = <p className='text-danger '>Error: {error?.message} {error1?.message}</p>
     }

     if (loading || loading1) {
          return <Loading />
     }

     if (user || user1) {
          navigate('/home')
     }

     return (
          <div>
               <div className='d-flex align-items-center justify-content-center'>
                    <div style={{ height: "1px" }} className='bg-primary w-50 '></div>
                    <p className='mt-2 px-3'>or</p>
                    <div style={{ height: "1px" }} className='bg-primary w-50 '></div>
               </div >
               {errorElement}
               <div>
                    <button
                         onClick={() => signInWithGoogle()}
                         className='btn btn-info d-block mx-auto my-2 w-50'>
                         <img style={{ width: '30px' }} src={google} alt="" />
                         <span className='px-1'>Google Sign In</span>
                    </button>
               </div>
               <div>
                    <button className='btn btn-info d-block mx-auto my-2 w-50'>
                         <img style={{ width: '30px' }} src={facebook} alt="" />
                         <span className='px-1'>Facebook Sign In</span>
                    </button>
               </div>
               <div>
                    <button
                         onClick={() => signInWithGithub()}
                         className='btn btn-info d-block mx-auto w-50'>
                         <img style={{ width: '30px' }} src={github} alt="" />
                         <span className='px-1'>Github Sign In</span>
                    </button>
               </div>
          </div>
     );
};

export default SocialLogin;