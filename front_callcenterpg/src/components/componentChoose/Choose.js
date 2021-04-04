// getting imports
import React from 'react';
import './Choose.css';
import { Link } from "react-router-dom";


export default function Choose() {
    function showAlert() {
        alert("MÓDULO DE CONSULTA DE RAMAIS EM DESENVOLVIMENTO!");
    }

    return (
        <>
            <div className="choose_option" id="one" onClick={showAlert}>
                <span>Ramais</span>
                <div className="overlay">

                    <span className="textOverlay">Ramais</span>
                </div>
            </div>

            <Link to={"/painel"} style={{ textDecoration: "none", padding: "5px" }}>
                <div className="choose_option" id="two">
                    <span>Monitoramentos</span>
                    <div className="overlay">
                        <span className="textOverlay">Monitoramentos</span>

                    </div>
                </div>
            </Link>


        </>

    )
};





