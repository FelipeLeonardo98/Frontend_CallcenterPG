// Imports
import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import './panel.css';

export default function Panel(){
    const [categories, setCategories] = useState(['']);

useEffect( () => {
    async function fetchData(){
        const response = await api.get('/categories');
         setCategories(response.data);
    }
  
    fetchData();
    
}, []);

 async function myFunction(e){
    const search = e.target.value;
    try{
        const response = await api.post('/bycategory', {search: search});

         console.log(response.data);
    }catch(error){
        console.warn(error);
    }

 }
    return(
        <>
        <span>Selecione a situação</span>
           <select onChange={myFunction}>
           {categories.map((values, index ) => {
               return <option key={index}  value={values}>{values}</option>
           } )}
           </select>
        </>
    )
}

