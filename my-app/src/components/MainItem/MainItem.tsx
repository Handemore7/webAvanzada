import * as React from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import { getImgUrl } from '../../utils/getImgUrl';
import { CardItemProps } from '../CardItem/CardItem';
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';
import './MainItem.css';

interface MainItemProps {
    contentList: any;
}

export const MainItem :  React.FC<MainItemProps> =({ contentList}) => {
    
    const {cardID} = useParams<{cardID: string}>();
    const history = useHistory();

    const cardElem = contentList.find((elem: any) => {
        return elem.id === parseInt(cardID);
    });
    
    
    const interDropback = () =>{
        history.push("/");
    }
    
    if (cardElem == undefined) {
        return <Redirect to="/"/>
    }
    
    const img = getImgUrl(cardElem.image);

    return(<div className={`MainItem`}>
            {/* No usar la etiqueta link, usar un onClick a el useHistory y seguramente como goBack */}
                <div onClick={interDropback} className="MainItem--background"></div>
                <div className="MainItem--content">
                    <img src={img} alt="" />
                    <div className={`content`}>
                        <h1>{cardElem.title}</h1>
                        <h2>id: {cardID}</h2>
                        <p>{cardElem.comments}</p>
                    </div>
                </div>
            </div>);
}