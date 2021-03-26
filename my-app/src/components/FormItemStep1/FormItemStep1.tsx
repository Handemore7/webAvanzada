import * as React from 'react';
import { useHistory } from 'react-router';
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
  const handleOvaChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {    
      setOva(event.target.checked);
      setPelicula(false);
      setAnime(false);
      newObj.type = setTypes(event.target.checked, false, false);
        setInfoCard(newObj);
  }
  const [ anime, setAnime ] = React.useState(false);
  const handleAnimeChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setAnime(event.target.checked);
    setPelicula(false);
    setOva(false); 
    newObj.type = setTypes(false, event.target.checked, false);
        setInfoCard(newObj);
  }
  const [ pelicula, setPelicula ] = React.useState(false);
  const handlePeliculaChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setPelicula(event.target.checked);
      setOva(false);
      setAnime(false);
      newObj.type = setTypes(false, false, event.target.checked);
        setInfoCard(newObj);
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
                <div className="inputInfoCard">
                    <input checked={ova} onChange={handleOvaChange} type="checkbox" name="OVA" id="ova"/>
                    <label htmlFor="ova">OVA</label>
                    <input checked={anime} onChange={handleAnimeChange} type="checkbox" name="Anime" id="anime"/>
                    <label htmlFor="anime">Anime</label>
                    <input checked={pelicula} onChange={handlePeliculaChange} type="checkbox" name="Pelicula" id="pelicula"/> 
                    <label htmlFor="pelicula">Pelicula</label>
                </div>
                <div className="inputInfoCard">Nombre {`${ova ? 'del Ova': anime ? 'del Anime' : 'de la pelicula'}`}<input value={title} onChange={handleTitleChange} type="text"/> </div>
            </div>);
}