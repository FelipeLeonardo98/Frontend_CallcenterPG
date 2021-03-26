import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../service/api';


export default function Update(props) {
    var index = props.match.params._id;
    const [newDescription, setNewDescription] = useState(['']);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await api.post('/selectone', { _id: index });
                setNewDescription(data);
            } catch (error) {
                console.warn(error)
            }

        }

        fetchData();

    }, []);

    async function executeUpdate(event) {

        try {
            const newDescriptionValue = event.target.value;
            const { data } = await api.put(`/update/${index}`, { description: newDescriptionValue });
            console.log(`Opa, deu certo ${data}`)
        } catch (error) {
            console.warn(error)
        }

    }
    return (
        <div>
            <form>
                <input type="text" defaultValue={newDescription.description} size="300" onBlur={executeUpdate} /> <br ></br>
                <button onClick={executeUpdate}> UPDATE NOW </button>
            </form>

        </div>
    )
}