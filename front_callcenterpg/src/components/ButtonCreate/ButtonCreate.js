import React from 'react';
import './ButtonCreate.css';
import { Link } from 'react-router-dom'

export default function ButtonCreate() {
    return (
        <Link to={"/create"}>
            <div className="buttonCreate">
                Cadastrar Categoria/Descrição
        </div>
        </Link>
    )

}