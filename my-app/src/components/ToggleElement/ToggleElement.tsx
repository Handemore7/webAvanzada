import * as React from 'react';
import './ToggleElement.css';

export interface ToggleElementItemProps {
    title: string;
    state: any;
    interValueChange: (value:any)=>void;
}

export const ToggleElementItem:  React.FC<ToggleElementItemProps> = ({title, state, interValueChange}) => {  
    const onValueChange = (event: any)=>{
        interValueChange(event.target.checked);
    }

    
    return (<div>
        <input checked={state} onChange={onValueChange} type="checkbox" name={title} id={title}/> 
                    <label htmlFor={title}>{title}</label>
    </div>);
}