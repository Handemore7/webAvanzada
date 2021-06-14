import * as React from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import { CardItemType } from '../../utils/cardItemType';
import { ANIME__COLLECTION } from '../../utils/firebase';
import { InitialListsContext } from '../../utils/InitialListsContext';
import './MainItem.css';

interface MainItemProps {
    contentList: CardItemType[];
}

export const MainItem :  React.FC<MainItemProps> =({contentList}) => {
    
    const {cardID} = useParams<{cardID: string}>();
    const history = useHistory();
    const [toggle, setToggle] = React.useState(true);
    
    const { handleDeleteCard } = React.useContext(InitialListsContext);
    
    console.log(cardID);
    const cardElem = contentList.find((elem: CardItemType) => {
        return elem.id === parseInt(cardID);
    });
    
    const [comments, setComments] = React.useState(cardElem?.comments);
    

    const interDropback = () =>{    
        history.push("/");
    }

    const onDeleteItem: React.MouseEventHandler<HTMLButtonElement> = (event) =>{
        handleDeleteCard(cardID);
    }

    const toggleOn:React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setComments(event.target.value);
    }

    // el verdadero tipado de esto es React.KeyboardEventHandler<HTMLInputElement> pero no se porque no me deja acceder a event.target.value si igual es un htmlinputevent
    const toggleOff:React.KeyboardEventHandler<HTMLInputElement>  = (event: any) =>{
        
        if (event.key === 'Enter' || event.key === 'Escape') {
            setToggle(true);
            event.preventDefault();
            event.stopPropagation();
            ANIME__COLLECTION.doc(cardID).update({comments: event.target.value})
        }
    }
    const toggleOffFocus:React.FocusEventHandler<HTMLInputElement> = (event) =>{
        setToggle(true);
        event.preventDefault();
        event.stopPropagation();
        ANIME__COLLECTION.doc(cardID).update({comments: event.target.value})
    }
    if (cardElem === undefined) {
        return <Redirect to="/"/>
    } 
    
    const img = cardElem.image;

    return(<div className={`MainItem`}>
                <div onClick={interDropback} className="MainItem--background"></div>
                <div className="MainItem--content">
                    <img src={img} alt="" />
                    <div className={`MainItem--content--info`}>
                        <h1>{cardElem.title}</h1>
                        <h2>tipo: {cardElem.type}</h2>
                        <h3>id: {cardID}</h3>
                        {toggle? 
                        (<p onDoubleClick={()=> {setToggle(false)}}>{comments}</p>) : 
                        (<input type='text' value={comments} onChange={toggleOn} onKeyDown={toggleOff} onBlur={toggleOffFocus}/>)}
                        <p><strong> Order: {cardElem.order}</strong></p>
                        <button onClick={onDeleteItem}>Eliminar</button>
                    </div>
                </div>
            </div>);
}