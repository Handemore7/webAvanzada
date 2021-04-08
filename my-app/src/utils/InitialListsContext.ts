import { createContext } from "react";
import { CardItemType } from "./cardItemType";

export const InitialListsContext = createContext({
    list: [{
        id: -1,
        listName: 'Default',
    }],
    listCards: [] as CardItemType[],
    handleFilterList: (id: number) => undefined,
});