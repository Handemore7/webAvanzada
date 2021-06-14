export type CardItemType = {
    id: number,
    title: string,
    type: string,
    list: number,
    rating: number,
    image: string,
    categories: string[],
    dateAdded: string,
    dateCompleted: string,
    comments: string,
    order: number
}

export type cardItemSimple = Omit<CardItemType, 'dateCompleted' | 'dateAdded' | 'id' | 'rating' | 'order'> 

export type imagesInfo = {
    backdrop_path: string | null
first_air_date: string
genre_ids: any
id: number
name: string
origin_country: any
original_language: string
original_name: any
overview: string
popularity: number
poster_path: string
vote_average: number
vote_count: number
__proto__: object
}

export type imagesData = {
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
    original_name: string
}

export type listType = {
        id: number,
        listName: string,
}