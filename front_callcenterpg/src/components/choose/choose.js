// getting imports
import React from 'react';
import  './choose.css';
import { Link } from "react-router-dom";


function Choose() {

    return (
        <>
        
            <div className="choose_option" id="one">
              
                <span>Ramais</span>  
            </div>
            

        <Link to={"/painel"} dado="infor" style={{textDecoration:"none",padding:"5px"}}>
            <div className="choose_option" id="two">
              <span>Monitoramentos</span>  
            </div>
        </Link>
        </>

    )
};





export default Choose;