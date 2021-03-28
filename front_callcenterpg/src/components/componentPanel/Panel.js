import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Panel.css';
import ButtonCreate from '../ButtonCreate/ButtonCreate';
import { Link } from "react-router-dom";



export default function Panel(props) {

    return (
        <>
            <ButtonCreate />
            <div style={{ margin: '0 8px 0 8px' }}>

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
                            props.messages.map(({ _id, description }, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{description}</td>
                                        <td>
                                            <Link to={`/update/${_id}`}  >
                                                <i className="bi bi-pencil-square iconsStyle"></i>
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
        </>
    )
}