import * as React from 'react';
import { CardItem } from '../../components/CardItem/CardItem';
import './List.css';

interface ListProps {
    name: string;
    content?: any; //Aqui creo que deberia recibir el arreglo con los items
}

export const List:  React.FC<ListProps> = ({name, content }) => {
    console.log(content);
    return (<div className={`List`}>
        <div className={`List__title`}>
            <p>{name}</p> <span>5</span>
        </div>
        <CardItem 
        id = {content[1].id}
        title = {content[1].title}
        type = 'serie'
        rating = {5}
        image = 'imgURL'
        category = {content[1].category}
        dateAdded = '50000000000'
        dateCompleted = '50000005000'
        comments = 'hola uwu'
        />
        <p>Soy el elemento List y tengo </p>
    </div>);
}