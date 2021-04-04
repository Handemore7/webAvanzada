import * as React from 'react';
import { useHistory } from 'react-router';
import { ToggleElementItem } from '../ToggleElement/ToggleElement';
import './FormItemStep1.css';

interface FormItemStep1Props {
    infoCardReceived: any;
    setInfoCard: any;
}

export const FormItemStep1 :  React.FC<FormItemStep1Props> =({infoCardReceived, setInfoCard}) => {
    var newObj = infoCardReceived;

    const [ title, setTitle ] = React.useState(newObj.title);
  const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setTitle(event.target.value);
      newObj.title = event.target.value;
      newObj.type = setTypes(ova, anime, pelicula);
        setInfoCard(newObj);
  }

  const [ ova, setOva ] = React.useState(false);
  const handleOvaChange: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {    
      setOva(value);
      setPelicula(false);
      setAnime(false);
      newObj.type = setTypes(value, false, false);
        setInfoCard(newObj);
  }
  const [ anime, setAnime ] = React.useState(false);
  const handleAnimeChange: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {    
    setAnime(value);
    setPelicula(false);
    setOva(false); 
    newObj.type = setTypes(false, value, false);
        setInfoCard(newObj);
  }

  const [ pelicula, setPelicula ] = React.useState(false);
  const handlePeliculaChange: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setPelicula(value);
    setOva(false);
    setAnime(false);
    newObj.type = setTypes(false, false, value);
    setInfoCard(newObj);
}

  const setTypes = (ova: boolean, anime: boolean, pelicula: boolean) =>{
    if (ova) {
        return 'ova';
    }
    if (anime) {
        return 'anime';
    }
    if (pelicula) {
        return 'pelicula';
    }
  }

    return( <div className="formStep1">
                <h1>Formulario?</h1>
                <div className="formStep1__inputElems">
                    <ToggleElementItem 
                    type="checkbox"
                    title="Pelicula" 
                    state={pelicula}
                    interValueChange = {handlePeliculaChange}
                    />
                    <ToggleElementItem
                    type="checkbox" 
                    title="Anime" 
                    state={anime}
                    interValueChange = {handleAnimeChange}
                    />
                    <ToggleElementItem
                    type="checkbox" 
                    title="Ova" 
                    state={ova}
                    interValueChange = {handleOvaChange}
                    />
                </div>
                <div className="inputInfoCard">Nombre {`${ova ? 'del Ova': anime ? 'del Anime' : 'de la pelicula'}`}<input value={title} onChange={handleTitleChange} type="text"/> </div>
            </div>);
}