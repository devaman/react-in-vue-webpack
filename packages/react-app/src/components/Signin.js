import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn({ onSignIn }) {

  return (
   <div>
       SignIn React
       <Link to='/signup'>Signup</Link>
       <Link to='/'>Home</Link>
   </div>
  );
}