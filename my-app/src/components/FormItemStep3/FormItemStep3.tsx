import * as React from 'react';
import { ToggleElementItem } from '../ToggleElement/ToggleElement';
import './FormItemStep3.css';

interface FormItemStep3Props {
    infoCardReceived: any;
    setInfoCard: any;
    listContent: any;
}

export const FormItemStep3 :  React.FC<FormItemStep3Props> =({infoCardReceived, setInfoCard, listContent}) => {

    var newObj = infoCardReceived;

const [ categories, setCategories ] = React.useState('');
const handleCategoriesChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setCategories(event.target.value);
    newObj.category = event.target.value;
    setInfoCard(newObj);
}

const [ list1, setList1 ] = React.useState(false);
const handleList1Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setList1(value);
    newObj.list = 1;
    setInfoCard(newObj);
}
const [ list2, setList2 ] = React.useState(false);
const handleList2Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setList2(value);
    newObj.list = 2;
    setInfoCard(newObj);
}
const [ list3, setList3 ] = React.useState(false);
const handleList3Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setList3(value);
    newObj.list = 3;
    setInfoCard(newObj);
}
const [ list4, setList4 ] = React.useState(false);
const handleList4Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setList4(value);
    newObj.list = 4;
    setInfoCard(newObj);
}
const [ list5, setList5 ] = React.useState(false);
const handleList5Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setList5(value);
    newObj.list = 5;
    setInfoCard(newObj);
}

const [ comments, setComments ] = React.useState('');
const handleCommentsChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setComments(event.target.value);
    newObj.comments = event.target.value;
    setInfoCard(newObj);
}

const setAllStatesFalse = ()=>{
    setList1(false);
    setList2(false);
    setList3(false);
    setList4(false);
    setList5(false);
}
    return( <div>
                <div className="inputInfoCard">Categorias: <input value={categories} onChange={handleCategoriesChange}type="text"/> </div>
                <div className="inputInfoCard">Lista: 
                    <div>
                                    <ToggleElementItem 
                                        type= "checkbox"
                                        title= "En espera"
                                        state= {list1}
                                        interValueChange = {handleList1Change}
                                    />
                                    <ToggleElementItem 
                                        type= "checkbox"
                                        title= "Planeado"
                                        state= {list2}
                                        interValueChange = {handleList2Change}
                                    />
                                    <ToggleElementItem 
                                        type= "checkbox"
                                        title= "En proceso"
                                        state= {list3}
                                        interValueChange = {handleList3Change}
                                    />
                                    <ToggleElementItem 
                                        type= "checkbox"
                                        title= "Abandonado"
                                        state= {list4}
                                        interValueChange = {handleList4Change}
                                    />
                                    <ToggleElementItem 
                                        type= "checkbox"
                                        title= "Completado"
                                        state= {list5}
                                        interValueChange = {handleList5Change}
                                    />
                                </div>
                </div>
                <div className="inputInfoCard">Comentarios: <input value={comments} onChange={handleCommentsChange} type="text"/> </div>
                {/* <div className="inputInfoCard">Comentarios<textarea value={comments} placeholder="Comentarios..."></textarea></div> */}
            </div>);
}