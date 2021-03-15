import * as React from 'react';
import { CardItem } from '../../components/CardItem/CardItem';
import './List.css';

interface ListProps {
    name: string;
    content?: any; //Aqui creo que deberia recibir el arreglo con los items
}

export const List:  React.FC<ListProps> = ({name, content}) => {
    console.log(content);
    return (<div className={`List`}>
        <div className={`List__title`}>
            <p>{name}</p> <span>{content.length}</span>
        </div>
        {content.map((elem: any) => {
            console.log(elem);
            return <CardItem 
            id = {elem.id}
            title = {elem.title}
            type = 'serie'
            rating = {5}
            image = 'imgURL'
            category = {elem.category}
            dateAdded = '50000000000'
            dateCompleted = '50000005000'
            comments = {elem.comments}            
            />   
        })}
        <p>Soy el elemento List y tengo </p>
    </div>);
}