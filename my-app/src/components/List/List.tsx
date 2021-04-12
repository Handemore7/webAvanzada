import * as React from 'react';
import { CardItem, CardItemProps } from '../../components/CardItem/CardItem';
import { useHistory } from 'react-router';
import './List.css';

export interface ListProps {
    id: number;
    name: string;
    content: CardItemProps[];
    handleDeleteItem: (id: number) => void;
    handleDragItem: (id: number) => void;
    handleListAdd: (listId: any, cardId: any) => void;
}

var lastItem: number|undefined ; //No debe almacenarlo para siempre
var listID2: number;
export const List:  React.FC<ListProps> = ({id, name, content, handleDeleteItem, handleListAdd, handleDragItem}) => {

    const history = useHistory();
    const prevent = (event: any) =>{
        event.preventDefault();
    }
    const preventOnDrop = (event: any) =>{
        event.preventDefault();
        listID2= id;
    }
    return (<div className={`List List${id}`} onDragOver={prevent} onDragEnter={prevent} onDrop={preventOnDrop}> 
        <div className={`List__title`}>
            <p>{name}</p> <span>{content.length}</span>
        </div>
        <div className="List__content">
        {content.map((elem: any) => {
            const interDeleteItem = () =>{
            }

            const interDragItem = () =>{
            }

            const interClickItem = () =>{
                history.push(`card/${elem.id}`);
            }

            const interListAdd = () =>{
                handleDeleteItem(elem.id);
                lastItem = elem.id;
                handleListAdd(listID2, lastItem);
            }
             
            return <CardItem 
            key = {`c${elem.id}`}
            id = {elem.id}
            title = {elem.title}
            type = {elem.type}
            rating = {elem.rating}
            image = {elem.image}
            category = {elem.category}
            dateAdded = {elem.dateAdded}
            dateCompleted = {elem.dateCompleted}
            comments = {elem.comments}   
            onDeleteItem = {interDeleteItem} 
            onDragItem = {interDragItem}
            onAddItem = {interListAdd}
            onClickItem = {interClickItem}
            />   
        })}
        </div>
    </div>);
}