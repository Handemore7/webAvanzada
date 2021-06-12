import { createContext } from "react";
import { CardItemType } from "./cardItemType";

export const InitialListsContext = createContext({
    list: [{
        id: -1,
        listName: 'Default',
    }],
    listCards: [] as CardItemType[],
    handleFilterList: (id: number) => undefined,
    handleListAdd: (cardIdDroppable: number, carIdDraggable: number, upOrDown: boolean) => {
        alert("wtf amigo, como llegaste aqui?");
    },
    handleListRemove: (id: number) => {
        alert("wtf amigo, como llegaste aqui?");
    },
    draggableItemActive: 0,
    handleDeleteCard: (id:string )=> {
        alert('Que poronga hiciste pibe?')
    },
});
