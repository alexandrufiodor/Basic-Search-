export enum ACTIONS_TYPE {
    SEARCH_USER = 'SEARCH-USER'
}

export type SearchUserType = {
    type: ACTIONS_TYPE.SEARCH_USER,
    payload: {
        searchValue: string
    }
}

export const SearchUserAC = (searchValue: string): SearchUserType => {
    return {
        type: ACTIONS_TYPE.SEARCH_USER,
        payload: {searchValue: searchValue}
    }

}