import * as React from 'react';
import { cardItemSimple, imagesData } from '../../utils/cardItemType';
import { ToggleElementItem } from '../ToggleElement/ToggleElement';
import './FormItemStep2.css';

interface FormItemStep2Props {
    infoCardReceived: cardItemSimple;
    setInfoCard: React.Dispatch<React.SetStateAction<cardItemSimple>>;
    searchImages: {
        poster_path: string;
        popularity: number;
        id: number;
        backdrop_path: string;
        vote_average: number;
        overview: string;
        first_air_date: string;
        origin_country: string[];
        genre_ids: number[];
        original_language: string;
        vote_count: number;
        name: string;
        original_name: string;
    }[];
}

const comparePopularity = (a: imagesData, b: imagesData) =>{
        if ( a.popularity < b.popularity ){return -1}
        if ( a.popularity > b.popularity ){return 1}
        return 0;
      }

      var coverImages: string[] = [];
const onSearchImg = (searchList:imagesData[]) =>{  
    //Organize the objects by popularity
    searchList.sort( comparePopularity );
    //Set lastItems [] and add select the last 3 objects 
    var lastItems = [];
    for (let i = 1; i < 4; i++) {
        lastItems.push(searchList[searchList.length-i])
    }
    //Remove undefined items in lastItems
    lastItems = lastItems.filter(function (elem) {
        return elem !== undefined;
      });
    //Convert the URL of the images of the objects
    coverImages = [];
    lastItems.forEach(elem => {
        coverImages.push(`https://image.tmdb.org/t/p/w500/${elem.poster_path}`);
    });
}

export const FormItemStep2 :  React.FC<FormItemStep2Props> =({infoCardReceived, setInfoCard, searchImages}) => {

    var newObj = infoCardReceived;
    onSearchImg(searchImages)
    var imgOption1 = coverImages[0];
    var imgOption2 = coverImages[1];
    var imgOption3 = coverImages[2];

const [ img1, setImg1 ] = React.useState(false);
const handleImg1Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => { 
    setAllStatesFalse();
    setImg1(value);  
    newObj.image = imgOption1;
    setInfoCard(newObj); 
}
const [ img2, setImg2 ] = React.useState(false);
const handleImg2Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setImg2(value);
    newObj.image = imgOption2;
    setInfoCard(newObj); 
}
const [ img3, setImg3 ] = React.useState(false);
const handleImg3Change: React.ChangeEventHandler<HTMLInputElement> = (value: any) => {
    setAllStatesFalse();
    setImg3(value);
    newObj.image = imgOption3;
    setInfoCard(newObj); 
}

const setAllStatesFalse = ()=>{
    setImg1(false);
    setImg2(false);
    setImg3(false);
}

    return( <div className="formStep2">
                <h1>Selecciona una imagen</h1>
                <div className="formStep2__optionsImg">
                    <div className="formStep2__optionsImg__item">
                        <ToggleElementItem
                        type="checkImg" 
                        title="Img2" 
                        state={img2}
                        imgURL={coverImages[1]}
                        interValueChange = {handleImg2Change}
                    />
                    </div>
                    <div className="formStep2__optionsImg__item">
                        <ToggleElementItem 
                        type="checkImg"
                        title="Img1" 
                        state={img1}
                        imgURL={coverImages[0]}
                        interValueChange = {handleImg1Change}
                        />
                    </div>
                    <div className="formStep2__optionsImg__item">
                        <ToggleElementItem
                        type="checkImg" 
                        title="Img3" 
                        state={img3}
                        imgURL={coverImages[2]}
                        interValueChange = {handleImg3Change}
                        />
                    </div>
                </div>
                <button>Subir imagen</button>
            </div>);
}