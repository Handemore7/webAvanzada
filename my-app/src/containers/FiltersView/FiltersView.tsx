import * as React from 'react';
import { CardItem } from '../../components/CardItem/CardItem';
import { LateralBar } from '../../components/LateralBar/LateralBar';
import { CardItemType } from '../../utils/cardItemType';
import { InitialListsContext } from '../../utils/InitialListsContext';
import './FiltersView.css';

interface FiltersViewProps {

}

export const FiltersView:  React.FC<FiltersViewProps> = ({}) => {  
    
    const { list, listCards, handleFilterList } = React.useContext(InitialListsContext);

    const [contentMain, setContentMain] = React.useState(listCards);
    console.log(contentMain);

    const [idListClicked, setIdListClicked] = React.useState(0);
    console.log(idListClicked);
    
    const interListClickedID = (id: number) =>{
        setIdListClicked(id);
        setContentMain(renderSwitch(id)!);
    }
    
    const renderSwitch = (key: number)=>{
        switch (key) {
            case 1:
                let returnItem1 = handleFilterList(key);
                 console.log(returnItem1); 
                
            return  returnItem1;
            case 2:
                let returnItem2 = handleFilterList(key);
                 console.log(returnItem2); 
                
            return  returnItem2;
            case 3:
                let returnItem3 = handleFilterList(key);
                 console.log(returnItem3); 
            
            return  returnItem3;
            case 4:
                let returnItem4 = handleFilterList(key);
                 console.log(returnItem4); 
            
            return  returnItem4;
            case 5:
                let returnItem5 = handleFilterList(key);
                 console.log(returnItem5); 
            return  returnItem5;
            default:
                return listCards;
        }
    }
    
    

    return (<div className="filtersView">
        <LateralBar 
            onListClickedID = {interListClickedID}
        />
        <div className="filterView__container">
    {
        contentMain.map(({id, title, type, rating, image, category, dateAdded, dateCompleted, comments}) => {  
            return  <div className="filterView__card"><CardItem 
                        id = {id}
                        title = {title}
                        type = {type}
                        rating = {rating}
                        image = {image}
                        category = {category}
                        dateAdded = {dateAdded}
                        dateCompleted = {dateCompleted}
                        comments = {comments}   
                    />   
                        </div>})
    }
        </div>

    </div>);
}