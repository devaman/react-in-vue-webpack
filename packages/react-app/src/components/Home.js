import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
export default function Home({ onSignIn }) {

  return (
    <div className="container-center"> 
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="100"/>
       Home 

       <Link to='/signup'>Signup</Link>
       <Link to='/signin'>Signin</Link>
       <Link to='/auth'>Signin</Link>
   </div>
  );
}