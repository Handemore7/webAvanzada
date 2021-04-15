import * as React from 'react';
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

  var initialValueOva: any = false;
  var initialValuePelicula: any = false;
  var initialValueAnime: any = false;

  const setInitialValue = (type: any) =>{
    switch (type) {
      case 'ova':
        initialValueOva = true;
        break;
      case 'anime':
        initialValueAnime = true;
        break;
      case 'pelicula':
        initialValuePelicula = true;
        break;
      default:
        break;
    }
  }

  setInitialValue(newObj.type);

  const [ ova, setOva ] = React.useState(initialValueOva);
  const handleOvaChange: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {    
    setStatesFalse();
    setOva(value);
    newObj.type = setTypes(value, false, false);
    setInfoCard(newObj);
  }
  const [ anime, setAnime ] = React.useState(initialValueAnime);
  const handleAnimeChange: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {    
    setStatesFalse();
    setAnime(value); 
    newObj.type = setTypes(false, value, false);
    setInfoCard(newObj);
  }

  const [ pelicula, setPelicula ] = React.useState(initialValuePelicula);
  const handlePeliculaChange: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setStatesFalse();
    setPelicula(value);
    newObj.type = setTypes(false, false, value);
    setInfoCard(newObj);
}

const setStatesFalse = () => {
  setPelicula(false);
  setAnime(false);
  setOva(false);
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
                <h1>Qué quieres agregar?</h1>
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
                <div className="formStep1__inputInfoCard">Nombre {`${ova ? 'del Ova': anime ? 'del Anime' : 'de la pelicula'}`}<input value={title} onChange={handleTitleChange} type="text"/> </div>
            </div>);
}