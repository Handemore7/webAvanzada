import * as React from 'react';
import { CardItem } from '../../components/CardItem/CardItem';
import { LateralBar } from '../../components/LateralBar/LateralBar';
import { InitialListsContext } from '../../utils/InitialListsContext';
import './FiltersView.css';

interface FiltersViewProps {

}

export const FiltersView:  React.FC<FiltersViewProps> = ({}) => {  
    
    const { listCards, handleFilterList } = React.useContext(InitialListsContext);

    const [contentMain, setContentMain] = React.useState(listCards);     
    
    const interListClickedID = (id: number) =>{
        setContentMain(renderSwitch(id)!);
    }
    
    const renderSwitch = (key: number)=>{
        switch (key) {
            case 1:
                let returnItem1 = handleFilterList(key);                                 
            return  returnItem1;
            case 2:
                let returnItem2 = handleFilterList(key);                                 
            return  returnItem2;
            case 3:
                let returnItem3 = handleFilterList(key);                             
            return  returnItem3;
            case 4:
                let returnItem4 = handleFilterList(key);                             
            return  returnItem4;
            case 5:
                let returnItem5 = handleFilterList(key);                 
            return  returnItem5;
            default:
                return listCards;
        }
    }
    const interOnDrop = (draggableItemID: number) =>{
        console.log(draggableItemID);
    }

    return (<div className="filtersView">
        <LateralBar 
            onListClickedID = {interListClickedID}
        />
        <div className="filterView__container">
    {
        contentMain.map(({id, title, type, rating, image, category, dateAdded, dateCompleted, comments}) => {  
            return  <div className="filterView__card"><CardItem 
                        key = {id}
                        id = {id}
                        title = {title}
                        type = {type}
                        rating = {rating}
                        image = {image}
                        category = {category}
                        dateAdded = {dateAdded}
                        dateCompleted = {dateCompleted}
                        comments = {comments}   
                        onDropItem = {interOnDrop}
                    />   
                        </div>})
    }
        </div>

    </div>);
}