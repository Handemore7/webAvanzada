import * as React from 'react';
import { CardItem, CardItemProps } from '../../components/CardItem/CardItem';
import { useHistory } from 'react-router';
import './List.css';

export interface ListProps {
    id: number;
    name: string;
    content: CardItemProps[];
    draggableItem: (value: any)=>void;
}

export const List:  React.FC<ListProps> = ({id, name, content, draggableItem}) => {

    const history = useHistory();

    const interOnDrop = (draggableItemID: number) =>{
        draggableItem(draggableItemID);
    }
    
    return (<div className={`List List${id}`} > 
        <div className={`List__title`}>
            <p>{name}</p> <span>{content.length}</span>
        </div>
        <div className="List__content">
        {content.map((elem: CardItemProps) => {

            const interClickItem = () =>{
                history.push(`card/${elem.id}`);
            }
             
            return <CardItem 
            key = {`c${elem.id}`}
            id = {elem.id}
            title = {elem.title}
            type = {elem.type}
            rating = {elem.rating}
            image = {elem.image}
            categories = {elem.categories}
            dateAdded = {elem.dateAdded}
            dateCompleted = {elem.dateCompleted}
            comments = {elem.comments}   
            onClickItem = {interClickItem}
            onDropItem = {interOnDrop}
            />   
        })}
        </div>
    </div>);
}