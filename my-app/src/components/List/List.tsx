import * as React from 'react';
import { CardItem, CardItemProps } from '../../components/CardItem/CardItem';
import './List.css';

interface ListProps {
    id: number;
    name: string;
    content: CardItemProps[];
    handleDeleteItem: (id: number) => void;
    handleListAdd: (listId: any, cardId: any) => void;

}


var lastItem: number ; 
export const List:  React.FC<ListProps> = ({id, name, content, handleDeleteItem, handleListAdd}) => {
    
    //console.log('hola');
    return (<div className={`List`}>
        <div className={`List__title`}>
            <p>{name}</p> <span>{content.length}</span>
        </div>
        {content.map((elem: any) => {
            const interDeleteItem = () =>{
                handleDeleteItem(elem.id);
                //console.log(lastItem);
                lastItem = elem.id;
                //console.log(lastItem);
            }
            const interListAdd = () =>{
                //console.log(id, lastItem);
                handleListAdd(id, lastItem); //Dropear sobre una lista, no sobre una carta
            }
            return <CardItem 
            id = {elem.id}
            title = {elem.title}
            type = {elem.type}
            rating = {elem.rating}
            image = {elem.image}
            category = {elem.category}
            dateAdded = {elem.dateAdded}
            dateCompleted = {elem.dateCompleted}
            comments = {elem.comments}   
            onDeleteItem = {interDeleteItem} 
            onAddItem = {interListAdd}        
            />   
        })}
    </div>);
}