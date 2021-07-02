import {searchReducer} from "./rootReducer";
import {DATASET} from "../db/db";
import {ACTIONS_TYPE} from "./actions";


test('search reducer should search Adi Gallia', () => {
    const startState = { initialData: DATASET, finalData: []};

    const endState = searchReducer(startState, {  type: ACTIONS_TYPE.SEARCH_USER, payload: {searchValue: 'Adi Gallia'} })

    expect(endState.finalData[0]).toBe('Adi Gallia');
    expect(endState.finalData.length).toBe(1);
});
