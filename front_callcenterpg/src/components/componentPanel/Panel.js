import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Panel(props) {

    return (
        <div>
            {console.log(props.messages)}
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">U</th>
                        <th scope="col">D</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        props.messages.map((data, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data}</td>
                                    <td> Alteração </td>
                                    <td>Excluir</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}