import * as React from 'react';
import { getImgUrl } from '../../utils/getImgUrl';
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
    onAddItem: () => void;
    onClickItem: () => void;
}

export const CardItem:  React.FC<CardItemProps> = ({id, title, type, rating, image, category, dateAdded, dateCompleted, comments, onDeleteItem, onDragItem, onAddItem, onClickItem}) => {  

    const imgSrc = getImgUrl(image);
    return (<div draggable={true} onDragStart={onDeleteItem} onDrag={onDragItem} onDragEnd={onAddItem} onClick={onClickItem} className={`CardItem`}>
        <h1>{title}</h1>
        <img src={imgSrc} alt="" /> 
        <p>id: {id}</p>
        <p>{comments}</p>
        <p>{category}</p>
    </div>);
}