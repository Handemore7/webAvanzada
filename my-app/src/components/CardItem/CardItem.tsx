import * as React from 'react';
import { InitialListsContext } from '../../utils/InitialListsContext';
import { DragAndDropItems } from '../../utils/DragAndDropItems';
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
    onDropItem: (draggableItemID: number) => void;
}

export const CardItem:  React.FC<CardItemProps> = ({id, title, image, category, onClickItem, onDropItem}) => {  

    const { list, handleListAdd, handleListRemove, draggableItemActive } = React.useContext(InitialListsContext);
    console.log('id: '+id+' contexto: '+draggableItemActive);
    
    
    var categoryArray = category.split(', '); //Aqui hago la división de las categorías pero esto no debería ser aqui
    const prevent = (event: any) =>{
        event.preventDefault();
    }

    const preventOnDrop = (event: any) =>{
        event.preventDefault();
        //console.log('drop: '+id);
        
        console.log("drop: "+id+" drag: "+draggableItemActive);
        deleteAndAddItem(id, draggableItemActive)
    }
    const preventOnDropUp = (event: any) =>{
        event.preventDefault();
        //console.log(DraggableItemActiveId);
        
        //console.log('dropup: '+id);
    }
    const preventOnDropDown = (event: any) =>{
        event.preventDefault();
        //console.log(DraggableItemActiveId);
        
        //console.log('dropdown: '+id);
    }

    const onDragStart = (event: any) =>{
        
        //console.log('dragStart: '+id);
    }   

    const onDragItem = (event: any) =>{

    } 
    const onDragEnd = (event: any) =>{
        //console.log(DraggableItemActiveId);
        onDropItem(id);
    } 

    const deleteAndAddItem = (droppable: number, draggable: number) =>{
        handleListRemove(draggable);
        handleListAdd(droppable, draggable);
    }

    return (
    <div className={`CardItem`} draggable={true} onDragStart={onDragStart} onDrag={onDragItem} onClick={onClickItem} onDragOver={prevent} onDragEnter={prevent} onDragEnd={onDragEnd} onDrop={preventOnDrop}>
        
                <div className='CardItem__zone CardItem__zone--up' onDragOver={prevent} onDragEnter={prevent} onDrop={preventOnDropUp}></div>
                <div className='CardItem__zone CardItem__zone--down' onDragOver={prevent} onDragEnter={prevent} onDrop={preventOnDropDown}></div>
                    <div>
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
                    </div>
            </div>);
}