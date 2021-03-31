import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Create.css';
import api from '../../../service/api';
import Alert from '../Alert/Alert';

export default function RegisterMonitorang(props) {

    const [notification, setNotification] = useState([]);
    const { objectValue } = props;

    async function atSubmitTime() {
        try {
            if (objectValue.category === "" || objectValue.description === "") {
                setNotification("PREENCHA TODOS OS CAMPOS!")
            } else {
                await api.post('/insert', { category: objectValue.category, description: objectValue.description });
                setNotification("NOVA CATEGORIA COM MONITORAMENTO SALVA COM SUCESSO!")
            }
            // objectValue.category = "";
            objectValue.description = "";

        } catch (error) {
            console.warn(error);
        }
    }


    return (
        <div>
            <div id="buttonRegister" onClick={atSubmitTime}>
                Cadastrar
            </div>
            {notification.length === 0 ? '' : notification === "PREENCHA TODOS OS CAMPOS!" ? <Alert color="#f34336" message={notification} /> : <Alert color="#82F266" message={notification} />}

        </div>
    )
}