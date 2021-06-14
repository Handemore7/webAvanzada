import * as React from 'react';
import { cardItemSimple} from '../../utils/cardItemType';
import { ToggleElementItem } from '../ToggleElement/ToggleElement';
import './FormItemStep3.css';

interface FormItemStep3Props {
    infoCardReceived: cardItemSimple;
    setInfoCard: React.Dispatch<React.SetStateAction<cardItemSimple>>;
}

export const FormItemStep3 :  React.FC<FormItemStep3Props> =({infoCardReceived, setInfoCard}) => {
    var newObj = infoCardReceived;

    var initialValueList1: boolean = false;
    var initialValueList2: boolean = false;
    var initialValueList3: boolean = false;
    var initialValueList4: boolean = false;
    var initialValueList5: boolean = false;

const setInitialValue = (listType: Number) =>{
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

const [ categories, setCategories ] = React.useState([] as string[]);
const handleCategoriesChange: React.KeyboardEventHandler<HTMLInputElement> = (event: any) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
        let newArray = newObj.categories.slice();
        newArray.push(event.target.value)
        newObj.categories = newArray;
        setInfoCard(newObj);
        event.target.value = '';
        event.preventDefault();
        event.stopPropagation();
    }
}

const setAllStatesFalse = ()=>{
    setList1(false);
    setList2(false);
    setList3(false);
    setList4(false);
    setList5(false);
}
    return( <div>
                <div className="inputInfoCard">Categorias: <input  onKeyDown={handleCategoriesChange}type="text"/> </div>
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
            </div>);
}