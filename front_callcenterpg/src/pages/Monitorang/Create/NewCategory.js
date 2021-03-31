import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Create.css';
// Component
import RegisterCategory from './RegisterCategory';

export default function NewCategory(props) {
    const inputValue = {
        category: '',
        description: ''
    }

    function getValue(ev) {
        try {

            const { name, value } = ev.target;
            if (name === "txtCategory" && value !== "") {
                inputValue.category = value;
            } else if (name === "txtDescription" && value !== "") {
                inputValue.description = value;
            }

        } catch (error) {
            console.warn(error);
        }

    }



    return (
        <div className="containerNewCategory">
            <form>
                <input type="text" name="txtCategory" placeholder="Digite a nova categoria" onBlur={getValue} required /><br ></br>
                <textarea type="text" name="txtDescription" placeholder="Digite o novo monitoramento" onBlur={getValue} required /> <br ></br>
                <RegisterCategory objectValue={inputValue} />
            </form>

        </div>
    )
}