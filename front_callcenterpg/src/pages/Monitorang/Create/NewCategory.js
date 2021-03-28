import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Create.css';
//import api from '../../../service/api';
// Component
import Register from './Register';

export default function NewCategory(props) {



    return (
        <div className="containerNewCategory">
            <input type="text" name="txtCategory" placeholder="Digite a nova categoria" required /><br ></br>
            <textarea type="text" name="txtDescription" placeholder="Digite o novo monitoramento" required /> <br ></br>
            <Register />

        </div>
    )
}