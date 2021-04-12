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

    var initialValueList1: boolean = false;
    var initialValueList2: boolean = false;
    var initialValueList3: boolean = false;
    var initialValueList4: boolean = false;
    var initialValueList5: boolean = false;

const setInitialValue = (listType: any) =>{
    switch (listType) {
        case 1:
            initialValueList1 = true;
        break;
        case 2:
            initialValueList2 = true;
        break;
        case 3:
            initialValueList3 = true;
        break;
        case 4:
            initialValueList4 = true;
        break;
        case 5:
            initialValueList5 = true;
        break;
        default:
        break;
    }
}

setInitialValue(newObj.list);

const [ list1, setList1 ] = React.useState(initialValueList1);
const handleList1Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setList1(value);
    newObj.list = 1;
    setInfoCard(newObj);
}
const [ list2, setList2 ] = React.useState(initialValueList2);
const handleList2Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setList2(value);
    newObj.list = 2;
    setInfoCard(newObj);
}
const [ list3, setList3 ] = React.useState(initialValueList3);
const handleList3Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setList3(value);
    newObj.list = 3;
    setInfoCard(newObj);
}
const [ list4, setList4 ] = React.useState(initialValueList4);
const handleList4Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setList4(value);
    newObj.list = 4;
    setInfoCard(newObj);
}
const [ list5, setList5 ] = React.useState(initialValueList5);
const handleList5Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setList5(value);
    newObj.list = 5;
    setInfoCard(newObj);
}

const [ comments, setComments ] = React.useState(newObj.comments);
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

const setStateAndAHandleInToggle = (id: number, both: any) =>{
    switch (id) {
        case 1:
            if (both) {
                return list1;
            }else{
                return handleList1Change;
            }
        break;
        case 2:
            if (both) {
                return list2;
            }else{
                return handleList2Change;
            }
        break;
        case 3:
            if (both) {
                return list3;
            }else{
                return handleList3Change;
            }
        break;
        case 4:
            if (both) {
                return list4;
            }else{
                return handleList4Change;
            }
        break;
        case 5:
            if (both) {
                return list5;
            }else{
                return handleList5Change;
            }
        break;
        default:
        break;
    }
}

    return( <div>
                <div className="inputInfoCard">Categorias: <input value={categories} onChange={handleCategoriesChange}type="text"/> </div>
                <div className="inputInfoCard">Lista: 
                    <div>
                        {
                          listContent.map(({listName, id}:any) => {  
                            return <ToggleElementItem 
                                        type= "checkbox"
                                        title= {listName}
                                        state= {setStateAndAHandleInToggle(id, true)}
                                        interValueChange = {setStateAndAHandleInToggle(id, false)}
                                    />
                        })}
                    </div>
                </div>
                <div className="inputInfoCard">Comentarios: <input value={comments} onChange={handleCommentsChange} type="text"/> </div>
            </div>);
}