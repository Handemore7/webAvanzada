import * as React from 'react';
import { getImgUrl } from '../../utils/getImgUrl';
import './FormItemStep2.css';

interface FormItemStep2Props {
    infoCardReceived: any;
    setInfoCard: any;
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

export const FormItemStep2 :  React.FC<FormItemStep2Props> =({infoCardReceived, setInfoCard}) => {

    var newObj = infoCardReceived;

const [ img, setImg ] = React.useState(newObj.image);
const handleImgChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
}

const [ img1, setImg1 ] = React.useState(false);
const handleImg1Change: React.ChangeEventHandler<HTMLInputElement> = (event) => {    
}
const [ img2, setImg2 ] = React.useState(false);
const handleImg2Change: React.ChangeEventHandler<HTMLInputElement> = (event) => {
}
const [ img3, setImg3 ] = React.useState(false);
const handleImg3Change: React.ChangeEventHandler<HTMLInputElement> = (event) => {
}
    const imgSrc = getImgUrl('Shingeki.jpg')
    return( <div>
                    <input checked={img1} onChange={handleImg1Change} type="checkbox" name="Img1" id="Img1"/>
                    <label htmlFor="Img1"><img src="../Shingeki.jpg" alt=""/> </label>
                    <input checked={img2} onChange={handleImg2Change} type="checkbox" name="Img2" id="Img2"/>
                    <label htmlFor="Img2">Img2</label>
                    <input checked={img3} onChange={handleImg3Change} type="checkbox" name="Img3" id="Img3"/> 
                    <label htmlFor="Img3">Img3</label>
                <button >Buscar img</button>
                {/* <img src={img} width="200" alt=""/> */}
            </div>);
}