import React from 'react';
import { CardItem } from '../../components/CardItem/CardItem';
import { List } from '../../components/List/List';

const initialCards = [
    {
        id: 0,
        title: 'Braindead',
        type: 'serie',
        rating: 5,
        image: 'imgURL',
        category: 'Acción, Comedia',
        dateAdded: '50000000000',
        dateCompleted: '50000005000',
        comments: 'hola uwu',
    },
    {
        id: 1,
        title: 'The Good Doctor',
        type: 'serie',
        rating: 4,
        image: 'imgURL2',
        category: 'Suspenso, Comedia',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'K onda bb',
    },
    {
        id: 2,
        title: 'xd la pelicula',
        type: 'pelicula',
        rating: 4,
        image: 'imgURL3',
        category: 'Terror, Thriller',
        dateAdded: '5000000000000',
        dateCompleted: '5000000500000',
        comments: 'Nooooo alta movie wacho',
    }
  ];

export const App = () => {
    return (<main>
        <List />
        <List />
        <List />
        <List />
        <List />
    </main>);
}