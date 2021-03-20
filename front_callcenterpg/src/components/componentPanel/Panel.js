import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Panel.css';
//import Update from '../../pages/Monitorang/Update';
import { Link } from "react-router-dom";



export default function Panel(props) {

    return (
        <div style={{ margin: '0 5px 0 px' }}>
            {console.log(props.messages)}
            <table className="table tableStyle">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Atualizar</th>
                        <th scope="col">Deletar</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        props.messages.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data}</td>
                                    <td>
                                        <Link to="/update" >
                                            <i className="bi bi-tools iconsStyle"></i>
                                        </Link>
                                    </td>
                                    <td><i className="bi bi-trash iconsStyle"></i></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div >
    )
}