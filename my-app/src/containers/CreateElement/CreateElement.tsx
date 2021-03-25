import * as React from 'react';
import './CreateElement.css';
import { Redirect, useHistory, useParams } from 'react-router';
import { FormItemStep1 } from '../../components/FormItemStep1/FormItemStep1';
import { FormItemStep2 } from '../../components/FormItemStep2/FormItemStep2';
import { FormItemStep3 } from '../../components/FormItemStep3/FormItemStep3';

interface CreateElementProps {
    handleCreateCard: (title:any, type:any, categories:any, list:any, comments:string) => void;
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

    const interDropback = () =>{    
        history.push("/");
    }


    const interCreateCard = (title2:any, type2:any, categories2:any, list2:any, comments2:string) => {
        console.log('interCreateadd'+title2, type2, categories2, list2);
        handleCreateCard(title2, type2, categories2, list2, comments2);
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
        console.log(title, type);
        
            if (formStep == 3) {
                console.log('crear elemento lets gooooo'+title+type);
                interCreateCard(title,type,"asd",2,"comments");
                history.push("/")
                console.log(title, type);
                
            }else{
                    if (next) {
                        var newFormStep = formStep + 1;
                        setFormStep(newFormStep);
                        
                    }else{
                        if (formStep > 1) {
                            var newFormStep = formStep - 1;
                            setFormStep(newFormStep);
                           
                        }
                    }
                }
    }

    const nextClicked = (event:any) =>{
        console.log('cliqueao Next');
        handleChangeFormStep(true);
        interNextStep(event);
    }

    const interNextStep = (event:any) =>{
        console.log(event);
    }

    const backClicked = () =>{
        console.log('cliqueao Back');
        handleChangeFormStep(false);
    }

    const renderSwitch = (step: number) => {
        switch (step) {
            case 1: 
                return <FormItemStep1 
                        onCreateCard = {interSetCardStep1}
                        onNextStep = {formStep}
                        /> 
            case 2:
                return <FormItemStep2 
                /* onCreateCard = {interCreateCard}
                listContent = {listContent} */
                /> 
            case 3:
                return <FormItemStep3 
                /* onCreateCard = {interCreateCard}
                listContent = {listContent} */
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