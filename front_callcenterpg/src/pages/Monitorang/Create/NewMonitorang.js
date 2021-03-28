import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Create.css';
import api from '../../../service/api';

export default function NewMonitorang(props) {

    const [categories, setCategories] = useState(['']);

    //load categories, from API /categories
    useEffect(() => {
        async function loadCategories() {
            try {
                const responseCategory = await api.get('/categories');
                setCategories(responseCategory.data);
            } catch (error) {
                console.warn(error);
            }
        }

        loadCategories();
    }, []);


    return (
        <div className="containerNewMonitorang">
            <select name="listCategories" className="list">
                <option defaultValue="Categoria"> Categoria </option>
                {categories.map((values, index) => {
                    return (
                        <option key={index} value={values}>{values}</option>
                    )
                })}
            </select> <br></br>
            <textarea type="text" name="txtMonitorang" placeholder="Digite o novo monitoramento" required /> <br ></br>


        </div>
    )
}