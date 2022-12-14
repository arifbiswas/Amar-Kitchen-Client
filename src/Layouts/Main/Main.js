import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Headers from '../../Components/Headers/Headers/Headers';

const Main = () => {
   
    return (
        <div>
            
            <Headers></Headers>
            <Outlet></Outlet>
            <div className='z-10 mt-12'>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;