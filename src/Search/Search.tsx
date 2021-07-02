import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {SearchUserAC} from "../redux/actions";
import {AppRootStateType} from '../redux/store';

const Search = () => {

    const finalData = useSelector<AppRootStateType, Array<string>>(state => state.search.finalData)
    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value
        dispatch(SearchUserAC(value));
    }

    return <div>
        <h1>Basic Search:</h1>
        <div>
            <input
                onChange={handleChange}
                type="text"
                placeholder="Search Value"/>
        </div>
        <div>
            {
                finalData.map((data: string, index: number) => <p key={index}>{data}</p>)
            }
        </div>
    </div>


}

export default Search