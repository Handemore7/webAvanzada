import * as React from 'react';
import { CardItem } from '../../components/CardItem/CardItem';
import './List.css';

interface ListProps {
    name: string;
    content?: any; //Aqui creo que deberia recibir el arreglo con los items
}

export const List:  React.FC<ListProps> = ({name, content}) => {
    return (<div className={`List`}>
        <div className={`List__title`}>
            <p>{name}</p> <span>{content.length}</span>
        </div>
        {content.map((elem: any) => {
            return <CardItem 
            id = {elem.id}
            title = {elem.title}
            type = {elem.type}
            rating = {elem.rating}
            image = {elem.image}
            category = {elem.category}
            dateAdded = {elem.dateAdded}
            dateCompleted = {elem.dateCompleted}
            comments = {elem.comments}            
            />   
        })}
    </div>);
}