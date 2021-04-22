import * as React from 'react';
import { InitialListsContext } from '../../utils/InitialListsContext';
import './CardItem.css';

export interface CardItemProps {
    id : number;
    title: string;
    type: string;
    rating?: number;
    image: string;
    category: string;
    dateAdded: string;
    dateCompleted?: string;
    comments?: string;
    onClickItem?: () => void;
}

export const CardItem:  React.FC<CardItemProps> = ({id, title, image, category, onClickItem}) => {  

    const { list, handleListAdd, handleListRemove } = React.useContext(InitialListsContext);
    var cardIdDraggable : number;

    var categoryArray = category.split(', '); //Aqui hago la división de las categorías pero esto no debería ser aqui
    const prevent = (event: any) =>{
        event.preventDefault();
    }

    const preventOnDrop = (event: any) =>{
        event.preventDefault();
        console.log(cardIdDraggable);
        
        console.log('drop: '+id);
        deleteAndAddItem(id, cardIdDraggable)
    }

    const onDragStart = (event: any) =>{
        cardIdDraggable = id;
        console.log('dragStart: '+id);
    }   

    const onDragItem = (event: any) =>{

    } 
    const onDragEnd = (event: any) =>{

    } 

    const deleteAndAddItem = (droppable: number, draggable: number) =>{
        handleListRemove(2);
        handleListAdd(droppable, 2);
    }

    return (<div draggable={true} onDragStart={onDragStart} onDrag={onDragItem} onClick={onClickItem} className={`CardItem`} onDragOver={prevent} onDragEnter={prevent} onDragEnd={onDragEnd} onDrop={preventOnDrop}>
        <img src={image} alt="" /> 
        <h1 className="CardItem__title">{title}</h1>
        <div className="CardItem__categories">
        {
            categoryArray.map(elem => {
                return  <div className="CardItem__categories--item">
                            <span>{elem}</span>
                        </div>
            })
        }
        </div>
        
    </div>);
}