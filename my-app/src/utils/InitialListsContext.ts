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
        console.log("wtf amigo, como llegaste aqui?");
    },
    handleListRemove: (id: number) => {
        console.log("wtf amigo, como llegaste aqui?");
    },
    draggableItemActive: 0,
});
