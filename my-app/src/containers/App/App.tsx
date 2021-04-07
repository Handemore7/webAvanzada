import React from 'react';
import { Redirect, useHistory} from 'react-router';
import { HashRouter, Route, Link } from 'react-router-dom';
import { List } from '../../components/List/List';
import { MainItem } from '../../components/MainItem/MainItem';
import { detectMouseMovement } from '../../utils/detectMouseMovement';
import { CreateElement } from '../CreateElement/CreateElement';
import './App.css';

const initialCards = [
    {
        id: 0,
        title: 'Adachi To Shimamura',
        type: 'Anime',
        list: 1,
        rating: 5,
        image: 'AdachiToShimamura.jpg',
        category: 'Acción, Comedia',
        dateAdded: '50000000000',
        dateCompleted: '50000005000',
        comments: 'Adachi y Shimamura, dos chicas que asisten a la misma preparatoria y que son amigas inseparables. Ya sea jugando tenis, platicar sobre sus programas de televisión favoritos, o solo relajándose, siempre están juntas. Cuando Adachi se da cuenta de que siente una atracción física por Shimamura, toda su relación comenzará a cambiar, ¿será para bien o para mal?',
    },
    {
        id: 1,
        title: 'Horimiya',
        type: 'Anime',
        list: 3,
        rating: 4,
        image: 'Horimiya.jpg',
        category: 'Escolares, Recuentos de la vida, Romance, Shounen, Comedia',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'Aunque admirada en la escuela por su amabilidad y destreza académica, la estudiante de preparatoria Kyouko Hori ha estado escondiendo otro lado de ella. Con sus padres a menudo fuera de casa debido al trabajo, Hori tiene que cuidar de su hermano menor y hacer las tareas del hogar, sin tener tiempo para socializar fuera de la escuela. Mientras tanto, Izumi Miyamura es visto como un inquietante otaku que usa anteojos. Sin embargo, en realidad es una persona amable e inepta para estudiar. Además, tiene nueve piercings escondidos detrás de su largo cabello, y un tatuaje a lo largo de su espalda y hombro izquierdo. Por pura casualidad, Hori y Miyamura se cruzan fuera de la escuela, ninguno luciendo como el otro lo esperaría. Estos polos aparentemente opuestos se convierten en amigos, compartiendo un lado que nunca le han mostrado a nadie.',
    },
    {
        id: 2,
        title: 'Kaifuku Jutsushi no Yarinaoshi',
        type: 'Anime',
        list: 5,
        rating: 4,
        image: 'Wtf.jpg',
        category: 'Ecchi, Fantasia',
        dateAdded: '5000000000000',
        dateCompleted: '5000000500000',
        comments: 'Wtf .-.',
    },
    {
        id: 3,
        title: 'Wonder Egg priority',
        type: 'Anime',
        list: 4,
        rating: 4,
        image: 'WonderEggPriority.jpg',
        category: 'Recuentos de la vida',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'La historia de este anime original comienza cuando la protagonista, una chica de 14 años llamada Ohto Ai, escucha una misteriosa voz mientras camina por la noche en su pueblo natal. Esa voz le otorga un huevo y le indica: “Si deseas cambiar el futuro, solo tienes que elegir ahora. Ahora, cree en ti misma y rompe el huevo”. Lo que le espera a Ai después de romper el huevo...',
    },
    {
        id: 4,
        title: 'Yakusoku no Neverland 2nd Season',
        type: 'Anime',
        list: 2,
        rating: 4,
        image: 'Neverland.jpg',
        category: 'Ciencia ficcion, Misterio, Psicologico, Shounen, Suspenso',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'Segunda temporada de Yakusoku no Neverland',
    },
    {
        id: 5,
        title: 'Higurashi no Naku Koro ni',
        type: 'OVA',
        list: 1,
        rating: 4,
        image: 'HigurashiNoNakuKoroNi.webp',
        category: 'Suspenso, Comediademencia, Misterio, Psicologico, Sobrenatural, Terror',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'Un cálido día de verano en 1983, el estudiante transferido Maebara Keiichi llega a un pacífico pueblo rural en Hinamizawa. Allí, se hace amigo de sus compañeras de clase Rena, Mion, Rika y Satoko. Aceptado como un miembro oficial del “club”, Keiichi y la pandilla realizan diversas actividades como juegos de cartas y de mesa, así como a las escondidas. Pero justo cuando Keiichi comenzaba a acostumbrarse a la vida en el campo, se encuentra con la oscura historia detrás de Hinamizawa. Mientras Keiichi va desentrañando este oscuro misterio, descubrirá que sus nuevos amigos podrían no ser lo que aparentan.',
    },
    {
        id: 6,
        title: 'Yesterday wo Utatte',
        type: 'Anime',
        list: 3,
        rating: 4,
        image: 'YesterdayWoUtatte.webp',
        category: 'Drama, Recuentos de la vida, Romance, Seinen',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'Después de la universidad, Rikuo Uozumi, un niño sin mucha ambición en la vida, toma un trabajo en una tienda de conveniencia. Los días pasan sin incidentes para Rikuo hasta que conoce a su ex novia y compañera de clase, pero especialmente gracias a la inusual Haru Nonaka y su mascota cuervo ...',
    },
    {
        id: 7,
        title: 'Listeners',
        type: 'Anime',
        list: 4,
        rating: 4,
        image: 'Listeners.jpg',
        category: 'Ciencia Ficcion, Musica',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'La “gran sinfonía adolescente” se desarrolla en un mundo donde no existe nada llamado “música”. Un chico se encuentra con Mu, una chica misteriosa con un conector de entrada de audio en su cuerpo. Cuando ella está enchufada a un amplificador, algo que cambiará el mundo se pone en marcha… “Así comienza un viaje de sonido que nunca será olvidado”.',
    },
    {
        id: 8,
        title: 'Oda Cinnamon Nobunaga',
        type: 'Anime',
        list: 4,
        rating: 4,
        image: 'OdaCinnamonNobunaga.jpg',
        category: 'Comedia, Historico, Recuentos de la vida, Seinen',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'Una chica adopta a un perro y lo lleva a casa, ¡pero resulta que en su vida anterior, ese perro era Oda Nobunaga! Esta obra nos cuenta la historia del famoso personaje, ahora renacido como un perro akita.',
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
        mousePos = detectMouseMovement();
    }

    const handleCreateCard = (title1: string, type1: string, category1: string, list1:number , comments1: string, img1: string) =>{        
        console.log(title1, type1, category1, list1, comments1, img1);
        
        const copy = cards.slice();
        var newObj = {
            id: copy.length,
            title: title1,
            type: type1,
            list: list1,
            rating: 5,
            image: img1,
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