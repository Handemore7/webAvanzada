import * as React from 'react';
import { CardItem } from '../../components/CardItem/CardItem';
import './List.css';

interface ListProps {
    name: string;
    content?: any; //Aqui creo que deberia recibir el arreglo con los items
}

export const List:  React.FC<ListProps> = ({name, content }) => {
    return (<div className={`List`}>
        <div className={`List__title`}>
            <p>{name}</p> <span>4</span>
        </div>
        <CardItem 
        id = {0}
        title = 'Braindead'
        type = 'serie'
        rating = {5}
        image = 'imgURL'
        category = 'Acción, Comedia'
        dateAdded = '50000000000'
        dateCompleted = '50000005000'
        comments = 'hola uwu'
        />
        <p>Soy el elemento List</p>
    </div>);
}