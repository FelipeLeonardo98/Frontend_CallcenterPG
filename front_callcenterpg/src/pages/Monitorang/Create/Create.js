import React from 'react';
import './Create.css'
import NewCategory from './NewCategory';
//import api from '../../../service/api';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Create(props) {
    var r1 = document.getElementById('customRadioInline1');
    const r2 = document.getElementById('customRadioInline2');
    function handleRadio(event) {
        const { name } = event.target;
        // name === "radioOne" ? r2.disabled = true : r1.disabled = true

    }

    return (
        <div className="containerCreate">
            <h4>Cadastro de novas categorias ou novas descrições</h4>

            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline1" name="radioOne" className="custom-control-input" value="asasas" onChange={handleRadio} />
                <label className="custom-control-label" htmlFor="customRadioInline1">Nova Categoria</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="radioTwo" className="custom-control-input" onChange={handleRadio} />
                <label className="custom-control-label" htmlFor="customRadioInline2">Somente nova Descrição</label>
            </div>
            {r1.checked ? <NewCategory /> : ' '}
        </div>
    )
}