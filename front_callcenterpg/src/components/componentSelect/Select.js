// Imports
import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import './Select.css';
import Panel from '../componentPanel/Panel';

export default function Select() {
    const [categories, setCategories] = useState(['']);
    const [descriptions, setDescriptions] = useState(['']);

    useEffect(() => {
        async function fetchData() {
            const response = await api.get('/categories');
            setCategories(response.data);
        }

        fetchData();

    }, []);

    async function getCategories(e) {
        const search = e.target.value;
        try {
            const { data } = await api.post('/bycategory', { search: search });
            // console.log(data);
            //const descriptionMap = data.map(({ description }) => description) old, only has description
            // const descriptionMap = data.map(({ description }) => description._id); failed
            setDescriptions(data);

        } catch (error) {
            console.warn(error);
        }

    }

    return (
        <>
            <div className="selectArea">
                <span style={{ fontSize: '20px' }}>Selecione a situação: </span> <br></br>
                <select onChange={getCategories} className="list">
                    <option defaultValue="Categoria"> Categoria </option>
                    {categories.map((values, index) => {
                        return (
                            <option key={index} value={values}>{values}</option>
                        )
                    })}
                </select> <br /> <hr />
            </div>
            <Panel descriptions={descriptions} />

        </>
    )
}

