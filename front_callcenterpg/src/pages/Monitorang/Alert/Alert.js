import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Alert.css';


export default function Alert(props) {
    //var componentAlert = document.getElementById('alertNotification');


    /*setTimeout(() => {
        alert("Era para div desaparecer agora");
    }, 1000)*/


    return (
        <div className="alert" id="alertNotification" style={{ backgroundColor: `${props.color}` }}>
            {props.message}

        </div>
    )
}