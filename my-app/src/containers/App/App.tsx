import { listenerCount } from 'node:events';
import React from 'react';
import { CardItem } from '../../components/CardItem/CardItem';
import { List } from '../../components/List/List';

const initialCards = [
    {
        id: 0,
        title: 'Braindead',
        type: 'serie',
        list: '1',
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
        list: '3',
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
        list: '5',
        rating: 4,
        image: 'imgURL3',
        category: 'Terror, Thriller',
        dateAdded: '5000000000000',
        dateCompleted: '5000000500000',
        comments: 'Nooooo alta movie wacho',
    },
    {
        id: 3,
        title: 'pelicula4',
        type: 'serie',
        list: '4',
        rating: 4,
        image: 'imgURL2',
        category: 'Suspenso, Comedia',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'Alta movie man',
    },
    {
        id: 4,
        title: 'pelicula5',
        type: 'serie',
        list: '2',
        rating: 4,
        image: 'imgURL2',
        category: 'Suspenso, Comedia',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'Alta movie man',
    },
    {
        id: 5,
        title: 'pelicula6',
        type: 'serie',
        list: '1',
        rating: 4,
        image: 'imgURL2',
        category: 'Suspenso, Comedia',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'Alta movie man',
    },
    {
        id: 6,
        title: 'pelicula7',
        type: 'serie',
        list: '3',
        rating: 4,
        image: 'imgURL2',
        category: 'Suspenso, Comedia',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'Alta movie man',
    },
    {
        id: 7,
        title: 'pelicula8',
        type: 'serie',
        list: '4',
        rating: 4,
        image: 'imgURL2',
        category: 'Suspenso, Comedia',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'Alta movie man',
    },
    ];
const initialLists = [
    {
        id: 0,
        listName: 'En espera',
    },
    {
        id: 1,
        listName: 'Planeado',
    },
    {
        id: 2,
        listName: 'En proceso',
    },
    {
        id: 3,
        listName: 'Abandonado',
    },
    {
        id: 4,
        listName: 'Completado',
    },
    ];

    

const handleFilterList = (list: any) => {
    var arrayList: any = [];
    console.log(list);
    initialCards.forEach(elem => {
            if(elem.list == list){
                arrayList.push(elem);
            }
        });
        return (arrayList);
}


export const App = () => {
    var arrayList1 = handleFilterList(1); //console.log(arrayList1);
    var arrayList2 = handleFilterList(2); //console.log(arrayList2);
    var arrayList3 = handleFilterList(3); //console.log(arrayList3);
    var arrayList4 = handleFilterList(4); //console.log(arrayList4);
    var arrayList5 = handleFilterList(5); //console.log(arrayList5);
    
    return (<main>
    
        {
            initialLists.map(({listName}) => {
                return <List 
                name = {listName}
                content = {initialCards}
                />
            }
            
        )}
    </main>);
}