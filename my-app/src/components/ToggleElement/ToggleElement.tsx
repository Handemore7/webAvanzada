import * as React from 'react';
import { getImgUrl } from '../../utils/getImgUrl';
import './ToggleElement.css';

export interface ToggleElementItemProps {
    type: string;
    title: string;
    state: any;
    interValueChange: (value:any)=>void;
}

export const ToggleElementItem:  React.FC<ToggleElementItemProps> = ({title, state, interValueChange, type}) => {  
    const onValueChange = (event: any)=>{
        interValueChange(event.target.checked);
    }
    
    switch (type) {
        case "checkbox":
            return (<div className="toggleElemOption">
                        <input className="toggleElemOption__input" checked={state} onChange={onValueChange} type="checkbox" name={title} id={title}/> 
                        <label className="toggleElemOption__label" htmlFor={title}>{title}</label>
                    </div>);
    
        case "checkImg":
            return (<div className="toggleImgOption">
                        <input className="toggleImgOption__input" checked={state} onChange={onValueChange} type="checkbox" name={title} id={title}/> 
                        <label className="toggleImgOption__label" htmlFor={title}><img className="imgCheck" src={getImgUrl('Listeners.jpg')} alt=""/></label>
                    </div>);
    }
{/* <img className="imgCheck" src={getImgUrl(img)} alt=""/> */}
    return <div>Algo salió mal e.e</div>;
}