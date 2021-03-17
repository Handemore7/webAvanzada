import * as React from 'react';
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
    onAddItem: () => void;
}

export const CardItem:  React.FC<CardItemProps> = ({ id, title, type, rating, image, category, dateAdded, dateCompleted, comments, onDeleteItem, onAddItem }) => {    
    
    
    return (<div onMouseDown={onDeleteItem} onMouseUp={onAddItem} className={`CardItem`}>
        <h1>{title}</h1>
        <img src={image} alt="" /> 
        <p>id: {id}</p>
        <p>{comments}</p>
        <p>{category}</p>
    </div>);
}