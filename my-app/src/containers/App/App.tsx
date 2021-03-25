import { listenerCount } from 'node:events';
import React from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';
import { CardItem } from '../../components/CardItem/CardItem';
import { List } from '../../components/List/List';
import { MainItem } from '../../components/MainItem/MainItem';
import { detectMouseMovement } from '../../utils/detectMouseMovement';
import { CreateElement } from '../CreateElement/CreateElement';
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

export const App = () => {

    const history = useHistory();
    //console.log(history);
    
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
        console.log(listId, cardId);
        
        const index = cards.findIndex((elem) => {
            return elem.id === cardId;
        });
        const copy = cards.slice();
        copy[index].list = listId;
        setCards(copy);
    }

    var mousePos: any;
    const handleDragItem = (id:number) =>{
        //console.log('id, '+id);
        mousePos = detectMouseMovement();
        console.log(mousePos);
    }

    const handleCreateCard = (title1: string, type1: string, category1: string, list1:any, comments1: string) =>{
        console.log(title1, type1, category1, list1, comments1);
        
        const copy = cards.slice();
        var newObj = {
            id: copy.length,
            title: title1,
            type: type1,
            list: parseInt(list1),
            rating: 5,
            image: 'defaultCardImg.png',
            category: category1,
            dateAdded: '50000000000',
            dateCompleted: '50000005000',
            comments: comments1,
        };
        copy.push(newObj);
        setCards(copy);
    }

    const interDropback = () =>{
        console.log(history);
        history.push("/5");
    }

    const handleFilterList = (list: any) => { //Usar la funcion filter
        var arrayList: any = [];
        cards.forEach(elem => {
                if(elem.list === list){
                    //arrayList.unshift(elem);
                    arrayList.push(elem);                
                }
            });
            return (arrayList);
    }
    
    return (<main className="AppMain">

        <HashRouter basename={process.env.PUBLIC_URL}>

            <Route path="/">
                {
                    lists.map(({listName, id}) => {  
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
                
            <Route path="/card/:cardID" render={() => <MainItem 
                contentList = {cards}
                />} />

            <Route path="/createElement" render={() => <CreateElement 
                handleCreateCard = {handleCreateCard}
                listContent = {lists}
                />} />

            <Link to="/createElement"><button className="buttonAddCard">
                +            
            </button></Link>

        </HashRouter>
    </main>);
}