import * as React from 'react';
import { getImageSrcFromFilename } from '../../utils/getImgUrl';
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
    onDeleteItem: () => void;
    onDragItem: () => void;
    onAddItem: (listId:any) => void;
    onClickItem: () => void;
}

export const CardItem:  React.FC<CardItemProps> = ({id, title, type, rating, image, category, dateAdded, dateCompleted, comments, onDeleteItem, onDragItem, onAddItem, onClickItem}) => {  
    const interOnAddItem = () =>{
        onAddItem(5);
    }  

    const imgSrc = getImageSrcFromFilename(image);
    //Tal vez con el evento onMouseLeave se puede hacer que al salir de la ventana la carta vuelva a la lista de la que salió onMouseLeave={onDeleteItem} Pero esto no deberia hacerlo aqui sino en Lists, porque debe activarse mientras el este mouseDown
    return (<div draggable={true} onDragStart={onDeleteItem} onDrag={onDragItem} onDragEnd={interOnAddItem} onClick={onClickItem} className={`CardItem`}>
        <h1>{title}</h1>
        <img src={imgSrc} alt="" /> 
        <p>id: {id}</p>
        <p>{comments}</p>
        <p>{category}</p>
    </div>);
}