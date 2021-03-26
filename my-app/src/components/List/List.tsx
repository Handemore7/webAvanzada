import * as React from 'react';
import { CardItem, CardItemProps } from '../../components/CardItem/CardItem';
import { detectMouseMovement } from '../../utils/detectMouseMovement';
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';
import { Redirect, useHistory, useParams } from 'react-router';
import './List.css';

export interface ListProps {
    id: number;
    name: string;
    content: CardItemProps[];
    handleDeleteItem: (id: number) => void;
    handleDragItem: (id: number) => void;
    handleListAdd: (listId: any, cardId: any) => void;
}

var lastItem: number|undefined ; //No debe almacenarlo para siempre
var listID2: number;
export const List:  React.FC<ListProps> = ({id, name, content, handleDeleteItem, handleListAdd, handleDragItem}) => {

    console.log(content);
    
    const history = useHistory();
    const prevent = (event: any) =>{
        event.preventDefault();
    }
    const preventOnDrop = (event: any) =>{
        event.preventDefault();
        listID2= id;
    }
    return (<div className="List" onDragOver={prevent} onDragEnter={prevent} onDrop={preventOnDrop}> 
        <div className={`List__title`}>
            <p>{name}</p> <span>{content.length}</span>
        </div>
        {content.map((elem: any) => {
            const interDeleteItem = () =>{
                console.log('Elimine el item');
                //console.log(elem.list);
            }

            const interDragItem = () =>{
                //console.log('En medio del drag');
            }

            const interClickItem = () =>{
                //console.log('Me estan clickeandooo!!!');
                history.push(`card/${elem.id}`);
            }

            const interListAdd = () =>{
                //console.log('El drag termina');
                handleDeleteItem(elem.id);
                lastItem = elem.id;
                handleListAdd(listID2, lastItem);
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
            onDragItem = {interDragItem}
            onAddItem = {interListAdd}
            onClickItem = {interClickItem}
            />   
        })}
    </div>);
}