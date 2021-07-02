import {combineReducers, createStore} from "redux";
import {searchReducer} from "./rootReducer";

const reducers = combineReducers({
    search: searchReducer
})


export type AppRootStateType = ReturnType<typeof reducers>
export const store = createStore(reducers)


// @ts-ignore
window.store = store;