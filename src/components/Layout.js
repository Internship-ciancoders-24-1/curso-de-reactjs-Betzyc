import React from 'react';
import Navbar from './Navbar';

function Layout(props){

    //const children = props.children;

    return (
        <React.Fragment> //es un componente de react que no renderiza nada
            <Navbar />
            {props.children}
        </React.Fragment>
    );
}

export default Layout;