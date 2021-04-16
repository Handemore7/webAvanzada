import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import { List } from '../../components/List/List';
import { MainItem } from '../../components/MainItem/MainItem';
import { InitialListsContext } from '../../utils/InitialListsContext';
import { CreateElement } from '../CreateElement/CreateElement';
import { FiltersView } from '../FiltersView/FiltersView';
import './App.css';

const initialCards = [
    {
        id: 1,
        title: 'Horimiya',
        type: 'Anime',
        list: 3,
        rating: 4,
        image: 'https://image.tmdb.org/t/p/w500//zLNnCb6SL2HxyiRsDJ4t4S1mb91.jpg',
        category: 'Escolares, Recuentos de la vida, Romance, Shounen, Comedia',
        dateAdded: '500000000000',
        dateCompleted: '500000050000',
        comments: 'Aunque admirada en la escuela por su amabilidad y destreza académica, la estudiante de preparatoria Kyouko Hori ha estado escondiendo otro lado de ella. Con sus padres a menudo fuera de casa debido al trabajo, Hori tiene que cuidar de su hermano menor y hacer las tareas del hogar, sin tener tiempo para socializar fuera de la escuela. Mientras tanto, Izumi Miyamura es visto como un inquietante otaku que usa anteojos. Sin embargo, en realidad es una persona amable e inepta para estudiar. Además, tiene nueve piercings escondidos detrás de su largo cabello, y un tatuaje a lo largo de su espalda y hombro izquierdo. Por pura casualidad, Hori y Miyamura se cruzan fuera de la escuela, ninguno luciendo como el otro lo esperaría. Estos polos aparentemente opuestos se convierten en amigos, compartiendo un lado que nunca le han mostrado a nadie.',
    },
    {
        id: 0,
        title: 'Adachi To Shimamura',
        type: 'Anime',
        list: 1,
        rating: 5,
        image: 'https://image.tmdb.org/t/p/w500//teSwoEFkqWFdmL2EdSvGVLU6sse.jpg',
        category: 'Acción, Comedia',
        dateAdded: '50000000000',
        dateCompleted: '50000005000',
        comments: 'Adachi y Shimamura, dos chicas que asisten a la misma preparatoria y que son amigas inseparables. Ya sea jugando tenis, platicar sobre sus programas de televisión favoritos, o solo relajándose, siempre están juntas. Cuando Adachi se da cuenta de que siente una atracción física por Shimamura, toda su relación comenzará a cambiar, ¿será para bien o para mal?',
    },
    {
        id: 2,
        title: 'Kaifuku Jutsushi no Yarinaoshi',
        type: 'Anime',
        list: 5,
        rating: 4,
        image: 'https://image.tmdb.org/t/p/w500//hynFI7MltF1BBvroh3iJplnBZyc.jpg',
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
        image: 'https://image.tmdb.org/t/p/w500//oktwnQKdZpoBycT77XcDKmnT9XW.jpg',
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
        image: 'https://image.tmdb.org/t/p/w500//oBgRCpAbtMpk1v8wfdsIph7lPQE.jpg',
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
        image: 'https://image.tmdb.org/t/p/w500//34lop73ePoJKTqsqkqyi7aZAtvY.jpg',
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
        image: 'https://image.tmdb.org/t/p/w500//fB5WHX8NNThiMcLT0zMIeiiAjEO.jpg',
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
        image: 'https://image.tmdb.org/t/p/w500//eUYgm7JQIDojyOSWc14yc1RTWzn.jpg',
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
        image: 'https://image.tmdb.org/t/p/w500//OwV2Uogjh7bhNI2IIzycrIeFCB.jpg',
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
        const copy = cards.slice();
        copy[index].list = listId;
        setCards(copy);
    }

    const handleDragItem = (id:number) =>{
    }

    const handleCreateCard = (title1: string, type1: string, category1: string, list1:number , comments1: string, img1: string) =>{  
        
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

    const handleFilterList = (list: number) => {
        var arrayList: any = [];
        cards.forEach(elem => {
                if(elem.list === list){
                    arrayList.push(elem);                
                }
            });
            return (arrayList);
    }
    
    return (<main className="AppMain">

        <HashRouter basename={process.env.PUBLIC_URL}>

            <InitialListsContext.Provider value={{list: lists, listCards: cards, handleFilterList: handleFilterList}}>

                <Route path={['/', '/card/:cardID', '/createElement']} exact >
                    {
                        lists.map(({listName, id}) => {  
                            return <List 
                            key = {`l${id}`}
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

                <Route path="/filters" render={() => <FiltersView 
                    />} />

                <Link to="/createElement"><button className="btn btnAddCard">
                    +            
                </button></Link>

                <Link to="/filters"><button className="btn btnChangeView">
                    C            
                </button></Link>
            </InitialListsContext.Provider>
        </HashRouter>
    </main>);
}