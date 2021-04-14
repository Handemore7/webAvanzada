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
    onDeleteItem?: () => void;
    onDragItem?: () => void; 
    onAddItem?: () => void;
    onClickItem?: () => void;
}

export const CardItem:  React.FC<CardItemProps> = ({title, image, category, onDeleteItem, onDragItem, onAddItem, onClickItem}) => {  

    var categoryArray = category.split(', '); //Aqui hago la división de las categorías pero esto no debería ser aqui
    

    return (<div draggable={true} onDragStart={onDeleteItem} onDrag={onDragItem} onDragEnd={onAddItem} onClick={onClickItem} className={`CardItem`}>
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