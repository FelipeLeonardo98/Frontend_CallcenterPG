// Imports
import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import './Select.css';
import Panel from '../componentPanel/Panel';

export default function Select() {
    const [categories, setCategories] = useState(['']);
    // const response = {};

    useEffect(() => {
        async function fetchData() {
            const response = await api.get('/categories');
            setCategories(response.data);
        }

        fetchData();

    }, []);

    async function myFunction(e) {
        const search = e.target.value;
        try {
            //const response = await api.post('/bycategory', { search: search });
            // console.log(search);
            <Panel parametro={search} />
            // console.log(response.data);
        } catch (error) {
            console.warn(error);
        }

    }
    return (
        <>
            <span>Selecione a situação</span>
            <select onChange={myFunction}>
                <option selected disabled> Categoria </option>
                {categories.map((values, index) => {
                    return (

                        <option key={index} value={values}>{values}</option>
                    )

                })}
            </select>
            <Panel />

        </>
    )
}

