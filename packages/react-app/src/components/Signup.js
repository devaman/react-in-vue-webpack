import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp({ onSignIn }) {

  return (
   <div>
       Signup React
       <Link to='/signin'>Signin</Link>
   </div>
  );
}