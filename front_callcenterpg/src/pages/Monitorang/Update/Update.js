import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Update.css';
import api from '../../../service/api';
// Component
import Alert from '../Alert/Alert';

export default function Update(props) {
    const index = props.match.params._id;
    const [newDescription, setNewDescription] = useState(['']);
    const [categories, setCategories] = useState(['']);
    const [isUpdatedSuccess, setIsUpdatedSuccess] = useState([]);

    //load register, searching by parameter
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

    }, [index]);

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


    //Update API
    async function executeUpdate(event) {

        try {
            const newValues = {
                category: '',
                description: ''
            }
            const { name, value } = event.target;
            if (name === "listCategories") {
                newValues.category = value;
                await api.put(`/update/${index}`, { category: newValues.category });
                // console.log("Category updated!")
                setIsUpdatedSuccess("Categoria foi atualizada com sucesso!");
            } else if (name === "txtUpdate") {
                newValues.description = value;
                await api.put(`/update/${index}`, { description: newValues.description });
                // console.log("Description updated");
                setIsUpdatedSuccess("Descrição foi atualizada com sucesso!");
            }

        } catch (error) {
            console.warn(error)
        }

    }
    return (
        <div className="containerUpdate">
            <h4>Alteração de descrição</h4>
            <p id="updateTip">As informações são salvas automaticamente após clicar com o cursor em qualquer canto da tela.
            <strong> Se atente na mensagem de sucesso ou falha.</strong>
            </p>
            <select name="listCategories" className="list" onChange={executeUpdate}>
                <option defaultValue={newDescription.category}> {newDescription.category} </option>
                {categories.map((values, index) => {
                    return (
                        <option key={index} value={values}>{values}</option>
                    )
                })}
            </select> <br></br>
            <textarea type="text" name="txtUpdate" defaultValue={newDescription.description} onBlur={executeUpdate} /> <br ></br>
            {
                isUpdatedSuccess.length === 0 ? '' : <Alert color="#82F266" message={isUpdatedSuccess} />

            }

        </div>
    )
}