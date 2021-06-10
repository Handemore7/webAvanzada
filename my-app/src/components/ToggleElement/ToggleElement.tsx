import * as React from 'react';
import './ToggleElement.css';

export interface ToggleElementItemProps {
    type: string;
    title: string;
    state: boolean;
    imgURL?: string;
    interValueChange: (value:any)=>void;
}

export const ToggleElementItem:  React.FC<ToggleElementItemProps> = ({title, state, imgURL, interValueChange, type}) => {  
    const onValueChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>{
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
                        <label className="toggleImgOption__label" htmlFor={title}><img className="imgCheck" src={imgURL} alt=""/></label>
                    </div>);
    }
    return <div>Algo salió mal e.e</div>;
}