import * as React from 'react';
import { useHistory } from 'react-router';
import './FormItemStep1.css';

interface FormItemStep1Props {
    onCreateCard: (title:any, type:any, categories:any, list:any) => void;
    listContent: any;
}

export const FormItemStep1 :  React.FC<FormItemStep1Props> =({onCreateCard, listContent}) => {

    const history = useHistory();

    const [ title, setTitle ] = React.useState('');
  const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  }

  const [ ova, setOva ] = React.useState(false);
  const handleOvaChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {    
      setOva(event.target.checked);
      setPelicula(false);
      setAnime(false);

  }
  const [ anime, setAnime ] = React.useState(false);
  const handleAnimeChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setAnime(event.target.checked);
    setPelicula(false);
    setOva(false);    
      
  }
  const [ pelicula, setPelicula ] = React.useState(false);
  const handlePeliculaChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setPelicula(event.target.checked);
      setOva(false);
      setAnime(false);
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

  const [ categories, setCategories ] = React.useState('');
  const handleCategoriesChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setCategories(event.target.value);
  }
  
  const [ list, setList ] = React.useState('');
  const handleListChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setList(event.target.value);
  }

  const [ img, setImg ] = React.useState('');

    const interClicked = () =>{    
        //console.log(title, type, categories, list);
        if (title != '' && list <= listContent.length && categories != '' ) {  
            var type = setTypes(ova, anime, pelicula);
            onCreateCard(title, type, categories, list);
            history.push('/');
        }else{
            alert('La lista seleccionada no existe');
        }
    }

    const interOnClickSearchImg = () =>{
        /* fetch("https://animenewsnetwork.p.rapidapi.com/api.xml", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "74d53471abmshc2d8ff3f2a6b801p1b87dbjsn8577cdc7236e",
                "x-rapidapi-host": "animenewsnetwork.p.rapidapi.com"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        }); */ 
  };


    return( <div>
                <h1>Formulario?</h1>
                <div className="inputInfoCard">Tipo de contenido: 
                    <input checked={ova} onChange={handleOvaChange} type="checkbox" name="OVA" id=""/>
                    <input checked={anime} onChange={handleAnimeChange} type="checkbox" name="Anime" id=""/>
                    <input checked={pelicula} onChange={handlePeliculaChange} type="checkbox" name="Pelicula" id=""/> 
                </div>
                {/*Aqui abajo debe decir tipo el nombre del anime si en los checkbox de arriba esta seleccionado anime, nombre de la pelicula si esta seleccionado pelicula, etc.*/}
                <div className="inputInfoCard">Nombre {`${ova ? 'del Ova': anime ? 'del Anime' : 'de la pelicula'}`}<input value={title} onChange={handleTitleChange} type="text"/> </div>
                <div className="inputInfoCard">Categorias: <input value={categories} onChange={handleCategoriesChange}type="text"/> </div>
                <div className="inputInfoCard">Lista: <input value={list} onChange={handleListChange} type="number"/> </div>
                <button onClick={interOnClickSearchImg}>Buscar img</button>
                <img src={img} width="200" alt=""/>
                <button className="NavButton NavButton--back">Atras</button>
                <button onClick={interClicked} className="NavButton NavButton--next">Siguiente</button>
            </div>);
}