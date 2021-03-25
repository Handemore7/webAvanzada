import * as React from 'react';
import './FormItemStep2.css';

interface FormItemStep2Props {
}

const interOnClickSearchImg = () =>{
    /* fetch("https://animenewsnetwork.p.rapidapi.com/api.xml", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "74d53471abmshc2d8ff3f2a6b801p1b87dbjsn8577cdc7236e",
            "x-rapidapi-host": "animenewsnetwork.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    }); */ 
};

export const FormItemStep2 :  React.FC<FormItemStep2Props> =({}) => {

    return( <div>
                <button >Buscar img</button>
                {/* <img src={img} width="200" alt=""/> */}
            </div>);
}