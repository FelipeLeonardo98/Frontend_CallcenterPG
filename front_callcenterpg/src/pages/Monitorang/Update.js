import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../service/api';


export default function Update(props) {
    const searchKey = props.match.params._id;
    const [selected, setSelected] = useState(['']);

    useEffect(() => {
        async function fetchData() {
            const { data } = await api.post('/selectone', { _id: searchKey });
            setSelected(data);
            // console.log(selected);
        }

        fetchData();

    }, []);

    async function executeUpdate(e) {
        const { data } = await api.post(`/update/${searchKey}`, {});
    }





    return (
        <div>
            <input type="text" value={selected.description} />
            <button onClick={executeUpdate()}> UPDATE NOW</button>
        </div>
    )
}