import * as React from 'react';
import './MainItem.css';

interface MainItemProps {
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

export const MainItem :  React.FC<MainItemProps> =({ id, title, type, rating, image, category, dateAdded, dateCompleted, comments}) => {

    return(<div className={`MainItem`}>
        <img src={image} alt="" />
        <div className={`content`}>
        <h1>{title}</h1>
        <p>{comments}</p>
        </div>
    </div>);
}