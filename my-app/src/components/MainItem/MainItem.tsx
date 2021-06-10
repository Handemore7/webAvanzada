import * as React from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import { CardItemType } from '../../utils/cardItemType';
import './MainItem.css';

interface MainItemProps {
    contentList: CardItemType[];
}

export const MainItem :  React.FC<MainItemProps> =({ contentList}) => {
    
    const {cardID} = useParams<{cardID: string}>();
    const history = useHistory();

    const cardElem = contentList.find((elem: CardItemType) => {
        return elem.id === parseInt(cardID);
    });
    
    const interDropback = () =>{    
        history.push("/");
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
                        <p>{cardElem.comments}</p>
                    </div>
                </div>
            </div>);
}