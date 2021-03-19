import * as React from 'react';
import { useParams } from 'react-router';
import { getImgUrl } from '../../utils/getImgUrl';
import { CardItemProps } from '../CardItem/CardItem';
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';
import './MainItem.css';

interface MainItemProps {
    contentList: any;
}

export const MainItem :  React.FC<MainItemProps> =({ contentList}) => {
    
    const {cardID} = useParams<{cardID: string}>();
    
    const cardElem = contentList.find((elem: any) => {
        return elem.id == cardID;
    });
    
    const img = getImgUrl(cardElem.image);

    return(<div className={`MainItem`}>
                <Link to="/"><div className="MainItem--background"></div></Link>
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