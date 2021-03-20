import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Update(props) {

    return (
        <div>
            Here will be Update! {props.match.params}
        </div>
    )
}