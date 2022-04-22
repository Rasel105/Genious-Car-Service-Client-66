import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
     // let getYear = () => {
     //      let currentYear = new Date().getFullYear();
     //      return currentYear;
     // };

     const today = new Date();
     const year = today.getFullYear();

     return (
          <footer className='row'>
               <p className='text-center mt-5 col-md-6'>Genius Cart Services &copy; <span>{year}</span> All Rights Reserved.</p>
          </footer>
     );
};

export default Footer;