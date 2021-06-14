import * as React from 'react';
import './CreateElement.css';
import { useHistory } from 'react-router';
import { FormItemStep1 } from '../../components/FormItemStep1/FormItemStep1';
import { FormItemStep2 } from '../../components/FormItemStep2/FormItemStep2';
import { FormItemStep3 } from '../../components/FormItemStep3/FormItemStep3';
import { cardItemSimple } from '../../utils/cardItemType';

interface CreateElementProps {
    handleCreateCard: (title: string, type: string, categories:string[], list:number , comments:string, img:string) => void;
    listContent: {
        id: number;
        listName: string;
    }[];
}

export const CreateElement :  React.FC<CreateElementProps> =({handleCreateCard, listContent}) => {

    const history = useHistory();

    const [formStep, setFormStep] = React.useState(1);

    const [searchImages, setSearchImages] = React.useState([{
        poster_path: '',
        popularity: 0,
        id: 0,
        backdrop_path: '',
        vote_average: 0,
        overview: '',
        first_air_date: '',
        origin_country: [''],
        genre_ids: [0],
        original_language: '',
        vote_count: 0,
        name: '',
        original_name:''
    }]);

    const [ infoCard, setInfoCard ] = React.useState({
        title: '',
        type: '',
        categories: [] as string[],
        list: 2,
        comments: '',
        image: 'empty',
    });

    const interDropback = () =>{    
        history.push("/");
    }

    const interCreateCard = (objCard: cardItemSimple) => {
        handleCreateCard(objCard.title, objCard.type,objCard.categories, objCard.list, objCard.comments, objCard.image);
    }

    const handleChangeFormStep= (next: boolean) =>{        
                    if (next) {
                        let newFormStep = formStep + 1;
                        setFormStep(newFormStep);                        
                        
                        if (newFormStep === 4) {                            
                            interCreateCard(infoCard);
                            history.push("/")
                        }
                    }else{
                        if (formStep > 1) {
                            let newFormStep = formStep - 1;
                            setFormStep(newFormStep);                            
                        }
                    }   
    }

    const nextClicked = () =>{
        handleChangeFormStep(true);                
    }

    const backClicked = () =>{        
        handleChangeFormStep(false);
    }

    const setSearchResults = (list: []) =>{   
        setSearchImages(list);
    }

    React.useEffect(
        () => {
            var Title: string;
            if (infoCard.title === '') {
                Title = '.'
            }else{
                Title = infoCard.title;
            }
            fetch(`https://api.themoviedb.org/3/search/tv?api_key=ad7151c6dd6ce04898723178f00ce514&query=${Title}`, {
                "method": "GET",
            })
            .then(response => {
                return response.json();
            })
            .then(response => {                
                return setSearchResults(response.results);
            })
            .catch(err => {                
            }); 
        },
        [formStep, infoCard.title]
      );
    

    const renderSwitch = (step: number) => {
        switch (step) {
            case 1: 
                return <FormItemStep1 
                        infoCardReceived = {infoCard}
                        setInfoCard = {setInfoCard}
                        /> 
            case 2:
                return <FormItemStep2 
                        infoCardReceived = {infoCard}
                        setInfoCard = {setInfoCard}
                        searchImages = {searchImages}
                        /> 
            case 3:
                return <FormItemStep3 
                        infoCardReceived = {infoCard}
                        setInfoCard = {setInfoCard}
                /> 
            default:
                break;
        }
        
    }

    return( <div className="CreateElement">
                <div onClick={interDropback} className="CreateElement--background"></div>
                <div className="CreateElement--content">
                    { renderSwitch(formStep) }
                </div>
                <div className="navButtons">
                    <button onClick={backClicked} className="NavButton NavButton--back">Atras</button>
                    <button onClick={nextClicked} className="NavButton NavButton--next">Siguiente</button>
                </div>
            </div>);
}