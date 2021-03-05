// Imports
import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import './Select.css';
//import Panel from '../componentPanel/Panel';

export default function Select() {
    const [categories, setCategories] = useState(['']);
    // const [descriptions, setDescriptions] = useState(['']);
    var vetor = [];
    // var vetorSplit;
    // const response = {};

    useEffect(() => {
        async function fetchData() {
            const response = await api.get('/categories');
            setCategories(response.data);
        }

        fetchData();

    }, []);

    async function MyFunction(e) {
        const search = e.target.value;
        try {
            const { data } = await api.post('/bycategory', { search: search });
            // console.log(data);


            data.map((datas, index) => {
                //  return (console.log(`Index: ${index} - Descrição: ${datas.description}`))
                return (vetor.push(datas.description))

                // setDescriptions(datas.description);

            })

            // console.log(`Valor do useState: ${descriptions}`)
            //var vetorSplit = vetor.split(",");
            console.log(`Retorno do vetor: ${vetor}`);
            //  console.log("outro retorno: " + vetorSplit);

        } catch (error) {
            console.warn(error);
        }

    }

    return (
        <>
            <span>Selecione a situação</span>
            <select onChange={MyFunction}>
                <option selected disabled> Categoria </option>
                {categories.map((values, index) => {
                    return (
                        <option key={index} value={values}>{values}</option>
                    )
                })}
            </select> <br /> <hr />
            {
                console.log(vetor)
            }

        </>
    )
}

