import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ onSignIn }) {

  return (
   <div>
       Home
       <Link to='/signup'>Signup</Link>
   </div>
  );
}