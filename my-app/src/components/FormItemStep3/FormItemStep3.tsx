import * as React from 'react';
import './FormItemStep3.css';

interface FormItemStep3Props {
    infoCardReceived: any;
    setInfoCard: any;
}

export const FormItemStep3 :  React.FC<FormItemStep3Props> =({infoCardReceived, setInfoCard}) => {

const [ categories, setCategories ] = React.useState('');
const handleCategoriesChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setCategories(event.target.value);
}
  
const [ list, setList ] = React.useState('');
const handleListChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setList(event.target.value);
}

const [ comments, setComments ] = React.useState('');
const handleCommentsChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setComments(event.target.value);
}

    return( <div>
                <div className="inputInfoCard">Categorias: <input value={categories} onChange={handleCategoriesChange}type="text"/> </div>
                <div className="inputInfoCard">Lista: <input value={list} onChange={handleListChange} type="number"/> </div>
                <div className="inputInfoCard">Comentarios: <input value={comments} onChange={handleCommentsChange} type="text"/> </div>
                {/* <div className="inputInfoCard">Comentarios<textarea value={comments} placeholder="Comentarios..."></textarea></div> */}
            </div>);
}