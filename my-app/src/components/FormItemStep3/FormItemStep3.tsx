import * as React from 'react';
import './FormItemStep3.css';

interface FormItemStep3Props {
    infoCardReceived: any;
    setInfoCard: any;
    listContent: any;
}

export const FormItemStep3 :  React.FC<FormItemStep3Props> =({infoCardReceived, setInfoCard, listContent}) => {

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

const [ list1, setList1 ] = React.useState(false);

    return( <div>
                <div className="inputInfoCard">Categorias: <input value={categories} onChange={handleCategoriesChange}type="text"/> </div>
                <div className="inputInfoCard">Lista: 
                {
                }
                
                    <label htmlFor="List1">List1</label> </div>
                <div className="inputInfoCard">Comentarios: <input value={comments} onChange={handleCommentsChange} type="text"/> </div>
                {/* <div className="inputInfoCard">Comentarios<textarea value={comments} placeholder="Comentarios..."></textarea></div> */}
            </div>);
}