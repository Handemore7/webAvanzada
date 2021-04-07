import * as React from 'react';
import './CreateElement.css';
import { Redirect, useHistory, useParams } from 'react-router';
import { FormItemStep1 } from '../../components/FormItemStep1/FormItemStep1';
import { FormItemStep2 } from '../../components/FormItemStep2/FormItemStep2';
import { FormItemStep3 } from '../../components/FormItemStep3/FormItemStep3';

interface CreateElementProps {
    handleCreateCard: (title:any, type:any, categories:any, list:any, comments:string, img:string) => void;
    listContent: any;
}
var title:any;
var type:any;
var categories:any;
var list:any;
var image:any;

export const CreateElement :  React.FC<CreateElementProps> =({handleCreateCard, listContent}) => {

    const history = useHistory();

    const [formStep, setFormStep] = React.useState(1);

    const [ infoCard, setInfoCard ] = React.useState({
        title: '',
        type: '',
        category: '',
        list: 2,
        comments: '',
        image: 'empty',
    });


    const interDropback = () =>{    
        history.push("/");
    }


    const interCreateCard = (objCard: any) => {
        handleCreateCard(objCard.title, objCard.type,objCard.category, objCard.list, objCard.comments, objCard.image);
    }

    const interSetCardStep1= (titleReceived: any, typeReceived: any)=>{
        console.log(titleReceived, typeReceived);
        title = titleReceived;
        type = typeReceived;
    }

    const interSetCardStep2= (imgReceived: any)=>{
        console.log(imgReceived);
        image =imgReceived;
    }

    const interSetCardStep3= (titleReceived: any, typeReceived: any)=>{
        console.log(titleReceived, typeReceived);
        title = titleReceived;
        type = typeReceived;
    }

    const handleChangeFormStep= (next: boolean) =>{        
                    if (next) {
                        var newFormStep = formStep + 1;
                        setFormStep(newFormStep);
                        console.log(newFormStep);
                        
                        if (newFormStep == 4) {
                            console.log(infoCard);
                            interCreateCard(infoCard);
                            history.push("/")
                        }
                    }else{
                        if (formStep > 1) {
                            var newFormStep = formStep - 1;
                            setFormStep(newFormStep);
                            console.log(newFormStep);
                        }
                    }
                
    }

    const nextClicked = () =>{
        console.log('cliqueao Next');
        handleChangeFormStep(true);
    }

    const backClicked = () =>{
        console.log('cliqueao Back');
        handleChangeFormStep(false);
    }

    const renderSwitch = (step: number) => {
        switch (step) {
            case 1: 
                return <FormItemStep1 
                        infoCardReceived = {infoCard}
                        setInfoCard = {setInfoCard}
                        /> 
            case 2:
                return <FormItemStep2 
                        infoCardReceived = {infoCard}
                        setInfoCard = {setInfoCard}
                        /> 
            case 3:
                return <FormItemStep3 
                        infoCardReceived = {infoCard}
                        setInfoCard = {setInfoCard}
                        listContent = {listContent}
                /> 
            default:
                break;
        }
        
    }

    return( <div className="CreateElement">
                <div onClick={interDropback} className="CreateElement--background"></div>
                <div className="CreateElement--content">
                    { renderSwitch(formStep) }
                </div>
                <div className="navButtons">
                    <button onClick={backClicked} className="NavButton NavButton--back">Atras</button>
                    <button onClick={nextClicked} className="NavButton NavButton--next">Siguiente</button>
                </div>
            </div>);
}