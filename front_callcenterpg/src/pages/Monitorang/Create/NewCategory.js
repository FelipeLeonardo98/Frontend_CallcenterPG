import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Create.css';
import api from '../../../service/api';

export default function NewCategory(props) {



    return (
        <div className="containerNewCategory">
            <input type="text" name="txtCategory" /><br ></br>
            <textarea type="text" name="txtDescription" /> <br ></br>


        </div>
    )
}