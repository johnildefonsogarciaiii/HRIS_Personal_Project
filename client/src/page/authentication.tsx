
import React , { Suspense } from 'react';
import Loader from '../components/loader/loader';
import { useState } from 'react'


const SignUpForm = React.lazy(() => import('../layout/auth/signUpForm'));
const LoginForm = React.lazy(() => import("../layout/auth/loginForm"));



const Authentication: React.FC = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(false)

  
  
    return (
      <>
      <Suspense fallback={Loader()}>
    {isSignUp ?  <SignUpForm setIsSignUp={setIsSignUp}/> : <LoginForm setIsSignUp={setIsSignUp}/>}
    </Suspense>
      </>
    );
  }
  

  export default Authentication;