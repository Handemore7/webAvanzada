import * as React from 'react';
import './CardItem.css';

interface CardItemProps {
    id : number;
    title: string;
    type: string;
    rating?: number;
    image: string;
    category: string;
    dateAdded: string;
    dateCompleted?: string;
    comments?: string;
}

export const CardItem:  React.FC<CardItemProps> = ({ id, title, type, rating, image, category, dateAdded, dateCompleted, comments }) => {    
    return (<div className={`CardItem`}>
        <h1>{comments}</h1>
        <p>{title}</p>
        <p>{category}</p>
    </div>);
}