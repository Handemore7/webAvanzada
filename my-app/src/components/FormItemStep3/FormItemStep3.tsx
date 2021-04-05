import * as React from 'react';
import { ToggleElementItem } from '../ToggleElement/ToggleElement';
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
  

const [ list1, setList1 ] = React.useState(false);
const handleList1Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setList1(value);
}
const [ list2, setList2 ] = React.useState(false);
const handleList2Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setList2(value);
}
const [ list3, setList3 ] = React.useState(false);
const handleList3Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setList3(value);
}
const [ list4, setList4 ] = React.useState(false);
const handleList4Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setList4(value);
}
const [ list5, setList5 ] = React.useState(false);
const handleList5Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setList5(value);
}

const [ comments, setComments ] = React.useState('');
const handleCommentsChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setComments(event.target.value);
}

const setAllStatesFalse = ()=>{
    setList1(false);
    setList2(false);
    setList3(false);
    setList4(false);
    setList5(false);
}

/* const handleSetStateInProps = (id: any) =>{
    switch (id) {
        case 1:
            return list1;
        case 2:
            return list2;
        case 3:
            return list3;
        case 4:
            return list4;
        case 5:
            return list5;
    }
}

const handleSetChangeState = (id: any) =>{
    switch (id) {
        case 1:
            return interhandleList1Change;
        case 2:
            return interhandleList2Change;
        case 3:
            return interhandleList3Change;
        case 4:
            return interhandleList4Change;
        case 5:
            return interhandleList5Change;
    }
}

const interhandleList1Change = (value:any) =>{
    handleList1Change(value)
}
const interhandleList2Change = (value:any) =>{
    handleList2Change(value)
}
const interhandleList3Change = (value:any) =>{
    handleList3Change(value)
}
const interhandleList4Change = (value:any) =>{
    handleList4Change(value)
}
const interhandleList5Change = (value:any) =>{
    handleList5Change(value)
}
 */
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