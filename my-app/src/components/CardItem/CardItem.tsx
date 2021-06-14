import * as React from 'react';
import { InitialListsContext } from '../../utils/InitialListsContext';
import './CardItem.css';

export interface CardItemProps {
    id : number;
    title: string;
    type: string;
    rating?: number;
    image: string;
    categories: string[];
    dateAdded: string;
    dateCompleted?: string;
    comments?: string;
    onClickItem?: () => void;
    onDropItem: (draggableItemID: number) => void;
}

export const CardItem:  React.FC<CardItemProps> = ({id, title, image, categories, onClickItem, onDropItem}) => {      

    const {handleListAdd, draggableItemActive } = React.useContext(InitialListsContext);
    //console.log('id: '+id+' contexto: '+draggableItemActive);
    const prevent: React.DragEventHandler<HTMLDivElement> = (event) =>{
        event.preventDefault();
    }

    const preventOnDrop : React.DragEventHandler<HTMLDivElement>= (event) =>{
        event.preventDefault();
        //console.log('drop: '+id);
        
    }
    const preventOnDropUp: React.DragEventHandler<HTMLDivElement> = (event) =>{
        event.preventDefault();
        //console.log(DraggableItemActiveId);
        console.log("dropUp: "+id+" drag: "+draggableItemActive);
        deleteAndAddItem(id, draggableItemActive, true);
    }
    const preventOnDropDown: React.DragEventHandler<HTMLDivElement> = (event) =>{
        event.preventDefault();
        //console.log(DraggableItemActiveId);
        console.log("dropDown: "+id+" drag: "+draggableItemActive);
        deleteAndAddItem(id, draggableItemActive, false);
    }

    const onDragStart: React.DragEventHandler<HTMLDivElement> = (event) =>{
        onDropItem(id);
        //console.log('dragStart: '+id);
    }   

    const onDragItem: React.DragEventHandler<HTMLDivElement> = (event) =>{

    } 
    const onDragEnd: React.DragEventHandler<HTMLDivElement> = (event) =>{
        //console.log(DraggableItemActiveId);
    } 

    const deleteAndAddItem = (droppable: number, draggable: number, upOrDown: boolean) =>{
        //true = up --- false = down
        handleListAdd(droppable, draggable, upOrDown);
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
                                categories.map(elem => {
                                    return  <div 
                                    key = {elem}
                                    className="CardItem__categories--item">
                                                <span>{elem}</span>
                                            </div>
                                })
                            }
                        </div>
                    </div>
            </div>);
}