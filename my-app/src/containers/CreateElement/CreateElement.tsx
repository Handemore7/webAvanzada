import * as React from 'react';
import './CreateElement.css';
import { Redirect, useHistory, useParams } from 'react-router';
import { FormItemStep1 } from '../../components/FormItemStep1/FormItemStep1';

interface CreateElementProps {
    handleCreateCard: (title:any, type:any, categories:any, list:any) => void;
    listContent: any;
}

export const CreateElement :  React.FC<CreateElementProps> =({handleCreateCard, listContent}) => {

    const history = useHistory();

    const interDropback = () =>{    
        history.push("/");
    }

    const interCreateCard = (title:any, type:any, categories:any, list:any) => {
        console.log('interCreateadd'+title, type, categories, list);
        
        handleCreateCard(title, type, categories, list);
    }

    return( <div className="CreateElement">
                <div onClick={interDropback} className="CreateElement--background"></div>
                <div className="CreateElement--content">
                    <FormItemStep1 
                    onCreateCard = {interCreateCard}
                    listContent = {listContent}
                    /> 
                </div>
            </div>);
}