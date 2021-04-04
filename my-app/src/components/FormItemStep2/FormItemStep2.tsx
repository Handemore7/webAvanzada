import * as React from 'react';
import { getImgUrl } from '../../utils/getImgUrl';
import { ToggleElementItem } from '../ToggleElement/ToggleElement';
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
                    <ToggleElementItem 
                    type="checkImg"
                    title="Img1" 
                    state={img1}
                    interValueChange = {handleImg1Change}
                    />
                    <ToggleElementItem
                    type="checkImg" 
                    title="Img2" 
                    state={img2}
                    interValueChange = {handleImg2Change}
                    />
                    <ToggleElementItem
                    type="checkImg" 
                    title="Img3" 
                    state={img3}
                    interValueChange = {handleImg3Change}
                    />
                <button >Buscar img</button>
                {/* <img src={img} width="200" alt=""/> */}
            </div>);
}