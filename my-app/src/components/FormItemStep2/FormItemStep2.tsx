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
    var imgOption1 = 'Listeners.jpg';
    var imgOption2 = 'YesterdayWoUtatte.webp';
    var imgOption3 = 'OdaCinnamonNobunaga.jpg';

const [ img, setImg ] = React.useState(newObj.image);
const handleImgChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
}

const [ img1, setImg1 ] = React.useState(false);
const handleImg1Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => { 
    setAllStatesFalse();
    setImg1(value);  
    newObj.image = imgOption1;
    setInfoCard(newObj); 
}
const [ img2, setImg2 ] = React.useState(false);
const handleImg2Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setImg2(value);
    newObj.image = imgOption2;
    setInfoCard(newObj); 
}
const [ img3, setImg3 ] = React.useState(false);
const handleImg3Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setImg3(value);
    newObj.image = imgOption3;
    setInfoCard(newObj); 
}

const setAllStatesFalse = ()=>{
    setImg1(false);
    setImg2(false);
    setImg3(false);
}

    return( <div className="formStep2">
                <div className="formStep2__optionsImg">
                    <div className="formStep2__optionsImg__item">
                        <ToggleElementItem 
                        type="checkImg"
                        title="Img1" 
                        state={img1}
                        interValueChange = {handleImg1Change}
                        />
                    </div>
                    <div className="formStep2__optionsImg__item">
                        <ToggleElementItem
                        type="checkImg" 
                        title="Img2" 
                        state={img2}
                        interValueChange = {handleImg2Change}
                    />
                    </div>
                    <div className="formStep2__optionsImg__item">
                        <ToggleElementItem
                        type="checkImg" 
                        title="Img3" 
                        state={img3}
                        interValueChange = {handleImg3Change}
                        />
                    </div>
                </div>
                <button >Buscar img</button>
                {/* <img src={img} width="200" alt=""/> */}
            </div>);
}