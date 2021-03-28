import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Alert.css';


export default function Alert(props) {


    return (
        <div className="alert" style={{ backgroundColor: `${props.color}` }}>
            {props.message}

        </div>
    )
}