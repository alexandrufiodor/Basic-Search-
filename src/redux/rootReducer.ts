import {DATASET} from "../db/db";
import {ACTIONS_TYPE, SearchUserType} from "./actions";

type initialStateType = {
    initialData: Array<string>,
    finalData: Array<string>
}
const initialState = {
    initialData: DATASET,
    finalData: []
}
export const searchReducer = (state: initialStateType = initialState, action: SearchUserType) => {
    switch (action.type) {
        case ACTIONS_TYPE.SEARCH_USER:


            let value = action.payload.searchValue.trim().toLowerCase()
            const finalData = state.initialData.filter(val => val.toLowerCase().match(value));
            return {...state, finalData: finalData};
        default:
            return state
    }
}


