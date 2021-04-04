import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Panel.css';
// Components
import ButtonCreate from '../ButtonCreate/ButtonCreate';
import ButtonReturn from '../ButtonReturn/ButtonReturn'
import { Link } from "react-router-dom";
import api from '../../service/api';



export default function Panel(props) {
    const { descriptions } = props;

    // Delete Function
    async function deleteNow(id) {
        var r = window.confirm("Deseja excluir o monitoramento?");
        try {
            if (r) {
                await api.post('/delete', { _id: id });
                alert("Monitoramento excluído com sucesso");
            } else {
                alert("Operação cancelada");
            }
        } catch (error) {
            alert(`Erro de exclusão: ${error}`);

        }

    }

    return (
        <>
            <ButtonCreate />
            <div style={{ margin: '0 8px 0 8px' }}>

                <table className="table tableStyle">
                    <thead className="thead-dark">
                        <tr className="tableHeadText">
                            <th scope="col">ID</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Atualizar</th>
                            <th scope="col">Deletar</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            descriptions.map(({ _id, description }, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{description}</td>
                                        <td>
                                            <Link to={`/update/${_id}`}  >
                                                <i className="bi bi-pencil-square iconsStyle"></i>
                                            </Link>
                                        </td>
                                        <td><i className="bi bi-trash iconsStyle" onClick={() => deleteNow(_id)}></i></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div >

            <ButtonReturn />
        </>
    )
}