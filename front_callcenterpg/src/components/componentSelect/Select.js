// Imports
import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import './Select.css';
//import Panel from '../componentPanel/Panel';

export default function Select() {
    const [categories, setCategories] = useState(['']);
    const [descriptions, setDescriptions] = useState(['']);
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
            const result = await api.post('/bycategory', { search: search });
            const apoio = result.data;
            //console.log(result.data);
            //setDescriptions(data.description);
            // console.log(`Teste: ${descriptions}`);
            apoio.map((datas) => {
                //     vetor.push(datas.description)
                setDescriptions(datas.description);
                return (console.log(`Teste: ${descriptions}`))
            })

        } catch (error) {
            console.warn(error);
        }

    }


    /* async function MyFunction(e) {
         const search = e.target.value;
         try {
             const { data } = await api.post('/bycategory', { search: search });
             // console.log(data);
 
 
             data.map((datas, index) => {
                 //  return (console.log(`Index: ${index} - Descrição: ${datas.description}`))
                 //   return (vetor.push(datas.description))
 
                 setDescriptions(datas.description);
                 return (console.log(`Retorno do map: ${descriptions}`))
 
             })
 
             // console.log(`Valor do useState: ${descriptions}`)
             //var vetorSplit = vetor.split(",");
             console.log(`Retorno do vetor: ${descriptions}`);
             //  console.log("outro retorno: " + vetorSplit);
 
         } catch (error) {
             console.warn(error);
         }
 
     }*/

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
            <ul>

            </ul>

        </>
    )
}

