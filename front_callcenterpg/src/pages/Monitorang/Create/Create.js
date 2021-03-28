import React, { useState } from 'react';
import './Create.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import NewCategory from './NewCategory';
import NewMonitorang from './NewMonitorang';


export default function Create(props) {

    const [isChecked, setIsChecked] = useState([]);
    function handleCheck(event) {
        const { name } = event.target;
        setIsChecked(name);

    }

    return (
        <div className="containerCreate">
            <h4>Cadastro de novas categorias ou novas descrições</h4>

            <div className="custom-control custom-checkbox my-1 mr-sm-2 checkboxStyle">
                <input type="checkbox" className="custom-control-input" id="customCheckInline1" name="CheckOne" onChange={handleCheck} />
                <label className="custom-control-label" htmlFor="customCheckInline1"> Nova Categoria</label>
            </div>

            <div className="custom-control custom-checkbox my-1 mr-sm-2 checkboxStyle">
                <input type="checkbox" className="custom-control-input" id="customCheckInline2" name="CheckTwo" onChange={handleCheck} />
                <label className="custom-control-label" htmlFor="customCheckInline2">Somente novo Monitoramento </label>
            </div>

            {isChecked === "CheckOne" ? <NewCategory /> : <NewMonitorang />}
        </div>
    )
}