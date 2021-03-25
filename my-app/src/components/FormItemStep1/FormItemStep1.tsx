import * as React from 'react';
import { useHistory } from 'react-router';
import './FormItemStep1.css';

interface FormItemStep1Props {
    onCreateCard: (title:any, type:any) => void;
    onNextStep: any; //tipo evento creo que es esto
}

export const FormItemStep1 :  React.FC<FormItemStep1Props> =({onCreateCard, onNextStep}) => {

    console.log(onNextStep);
    
    const sendInfoCard = ()=>{
        var typee = setTypes(ova, anime, pelicula)
        onCreateCard(title, typee);
    }

    const [ title, setTitle ] = React.useState('');
  const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
    sendInfoCard();
  }

  const [ ova, setOva ] = React.useState(false);
  const handleOvaChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {    
      setOva(event.target.checked);
      setPelicula(false);
      setAnime(false);
      sendInfoCard();
  }
  const [ anime, setAnime ] = React.useState(false);
  const handleAnimeChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setAnime(event.target.checked);
    setPelicula(false);
    setOva(false); 
    sendInfoCard();
  }
  const [ pelicula, setPelicula ] = React.useState(false);
  const handlePeliculaChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setPelicula(event.target.checked);
      setOva(false);
      setAnime(false);
      sendInfoCard();
  }

  const setTypes = (ova: any, anime: any, pelicula: any) =>{
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

    return( <div>
                <h1>Formulario?</h1>
                <div className="inputInfoCard">Tipo de contenido: 
                    <input checked={ova} onChange={handleOvaChange} type="checkbox" name="OVA" id=""/>
                    <input checked={anime} onChange={handleAnimeChange} type="checkbox" name="Anime" id=""/>
                    <input checked={pelicula} onChange={handlePeliculaChange} type="checkbox" name="Pelicula" id=""/> 
                </div>
                <div className="inputInfoCard">Nombre {`${ova ? 'del Ova': anime ? 'del Anime' : 'de la pelicula'}`}<input value={title} onChange={handleTitleChange} type="text"/> </div>
            </div>);
}