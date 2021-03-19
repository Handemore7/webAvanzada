import { listenerCount } from 'node:events';
import React from 'react';
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';
import { CardItem } from '../../components/CardItem/CardItem';
import { List } from '../../components/List/List';
import { MainItem } from '../../components/MainItem/MainItem';
import { detectMouseMovement } from '../../utils/detectMouseMovement';
import './App.css';

const initialCards = [
    {
        id: 0,
        title: 'Braindead',
        type: 'serie',
        list: 1,
        rating: 5,
        image: 'defaultCardImg.png',
        category: 'Acción, Comedia',
        dateAdded: '50000000000',
        dateCompleted: '50000005000',
        comments: 'hola',
    },
    {
        id: 1,
        title: 'The Good Doctor',
        type: 'serie',
        list: 3,
        rating: 4,
        image: 'defaultCardImg.png',
        category: 'Suspenso, Comedia',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'maso',
    },
    {
        id: 2,
        title: 'La pelicula',
        type: 'pelicula',
        list: 5,
        rating: 4,
        image: 'defaultCardImg.png',
        category: 'Terror, Thriller',
        dateAdded: '5000000000000',
        dateCompleted: '5000000500000',
        comments: 'Nooooo alta movie ',
    },
    {
        id: 3,
        title: 'pelicula4',
        type: 'serie',
        list: 4,
        rating: 4,
        image: 'defaultCardImg.png',
        category: 'Suspenso, Comedia',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'Alta movie man',
    },
    {
        id: 4,
        title: 'pelicula5',
        type: 'serie',
        list: 2,
        rating: 4,
        image: 'defaultCardImg.png',
        category: 'Suspenso, Comedia',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'Alta movie man',
    },
    {
        id: 5,
        title: 'pelicula6',
        type: 'serie',
        list: 1,
        rating: 4,
        image: 'defaultCardImg.png',
        category: 'Suspenso, Comedia',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'Alta movie man',
    },
    {
        id: 6,
        title: 'pelicula7',
        type: 'serie',
        list: 3,
        rating: 4,
        image: 'defaultCardImg.png',
        category: 'Suspenso, Comedia',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'Alta movie man',
    },
    {
        id: 7,
        title: 'pelicula8',
        type: 'serie',
        list: 4,
        rating: 4,
        image: 'defaultCardImg.png',
        category: 'Suspenso, Comedia',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'Alta movie man',
    },
    ];
const initialLists = [
    {
        id: 1,
        listName: 'En espera',
    },
    {
        id: 2,
        listName: 'Planeado',
    },
    {
        id: 3,
        listName: 'En proceso',
    },
    {
        id: 4,
        listName: 'Abandonado',
    },
    {
        id: 5,
        listName: 'Completado',
    },
    ];

const handleFilterList = (list: any) => { //Usar la funcion filter
    var arrayList: any = [];
    initialCards.forEach(elem => {
            if(elem.list === list){
                //arrayList.unshift(elem);
                arrayList.push(elem);                
            }
        });
        return (arrayList);
}


export const App = () => {
    
    const [lists, setLists] = React.useState(initialLists);
    const [cards, setCards] = React.useState(initialCards);

    const handleListRemove = (id: number) => {
        const index = cards.findIndex((elem) => {
            return elem.id === id;
        });
        const copy = cards.slice();
        copy[index].list *= -1;
        setCards(copy);
        } 

    const handleListAdd = (listId: number, cardId: number) => {
        const index = cards.findIndex((elem) => {
            return elem.id === cardId;
        });

        //const item = cards.find((elem) => elem.id === cardId);

        const copy = cards.slice();
        copy[index].list = listId;
        setCards(copy);
        //console.log('listId: '+listId + '. cardId: ' + cardId);
    }

    var mousePos: any;
    const handleDragItem = (id:number) =>{
        //console.log('id, '+id);
        mousePos = detectMouseMovement();
        console.log(mousePos);
    }
    
    return (<main className="appMain">

        <BrowserRouter>

            <Route path="/">
                {
                    lists.map(({listName, id}) => {  
                        <button >Holaaaa</button>
                        return <List 
                        id = {id}
                        name = {listName}
                        content = {handleFilterList(id)}
                        handleDeleteItem = {handleListRemove}
                        handleListAdd = {handleListAdd}
                        handleDragItem = {handleDragItem}
                        />
                    }
                    )}

            </Route>
                    
                
            <Route path="/:cardID" render={() => <MainItem 
                contentList = {cards}
                />} />
                {/* <MainItem 
                id={1} 
                title="Titulo del item"
                type="Serie"
                image="/images/defaultCardImg.png"
                category="suspenso"
                dateAdded="aklsjdasd"
                comments="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam illum, nemo iste maiores commodi veniam dignissimos exercitationem ratione neque praesentium delectus repellendus cumque corporis, quibusdam omnis. Asperiores harum porro assumenda."
                /> */}
            
        </BrowserRouter>
    </main>);
}