// getting imports
import React from 'react';
import css from './choose.css';
import { Link } from "react-router-dom";


function Choose() {

    return (
        <>
        
            <div class="choose_option" id="one">
              
                <span>Ramais</span>  
            </div>
            

        <Link to={"/painel"} style={{textDecoration:"none",padding:"5px"}}>
            <div class="choose_option" id="two">
              <span>Monitoramentos</span>  
            </div>
        </Link>
        </>

    )
};





export default Choose;