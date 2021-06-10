import * as React from 'react';
import { InitialListsContext } from '../../utils/InitialListsContext';
import './LateralBar.css';

interface LateralBarProps {
    onListClickedID: (id: number) => void;
}

export const LateralBar:  React.FC<LateralBarProps> = ({onListClickedID}) => {  

    const { list } = React.useContext(InitialListsContext);
    
    const interClickList:React.MouseEventHandler<HTMLDivElement> = (event: any) =>{
        onListClickedID(parseInt(event.target.id));
    }

    return (<div className="LateralBar">
        {
            list.map(({listName, id}) => {  
                let newID = `${id}`;
                return  <div onClick={interClickList} className="LateralBar__item" id={newID}>
                            <span>{listName}</span>
                        </div>
            })
        }
    </div>);
}