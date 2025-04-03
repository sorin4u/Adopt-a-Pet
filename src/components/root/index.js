import React from 'react';
import Navigation from '../navigation';
import { Outlet } from 'react-router-dom'; // Import Outlet
// import Outlet

const Root = () => {
    return (
        <>
            <Navigation/>
            {/* Add an Outlet*/}
              <Outlet />
            {/* The Outlet component will render the child routes */}
        </>
    );
};

export default Root;