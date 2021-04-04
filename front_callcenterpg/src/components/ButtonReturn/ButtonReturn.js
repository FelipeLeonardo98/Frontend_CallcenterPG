import React from 'react';
import './ButtonReturn.css';
import { Link } from 'react-router-dom'

export default function ButtonReturn(props) {
    return (
        <Link to={"/painel"} style={{ textDecoration: "none" }}>
            <div className="buttonReturn">
                Painel
        </div>
        </Link>
    )

}