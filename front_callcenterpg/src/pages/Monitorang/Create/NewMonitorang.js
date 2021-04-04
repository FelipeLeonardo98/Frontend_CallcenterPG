import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Create.css';
import api from '../../../service/api';
//Component
import RegisterMonitorang from './RegisterMonitorang';
import ButtonReturn from '../../../components/ButtonReturn/ButtonReturn';

export default function NewMonitorang(props) {
    const [categories, setCategories] = useState(['']);

    const inputValue = {
        category: '',
        description: ''
    }

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

    function getCategory(ev) {
        inputValue.category = ev.target.value;
    }

    function getValue(ev) {
        try {

            const { name, value } = ev.target;
            if (name === "txtMonitorang" && value !== "") {
                inputValue.description = value;
            }

        } catch (error) {
            console.warn(error);
        }

    }

    return (
        <div className="containerNewMonitorang">
            <select name="listCategories" className="list" onChange={getCategory}>
                <option defaultValue="Categoria"> Categoria </option>
                {categories.map((values, index) => {
                    return (
                        <option key={index} value={values}>{values}</option>
                    )
                })}
            </select> <br></br>
            <textarea type="text" name="txtMonitorang" placeholder="Digite o novo monitoramento" onBlur={getValue} required /> <br ></br>
            <RegisterMonitorang objectValue={inputValue} />
            <ButtonReturn />

        </div>
    )
}