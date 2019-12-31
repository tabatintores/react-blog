import React from 'react';
import {ArticlesMainPageList} from "./ArticlesMainPageList";

export const ArticlesMainPage = () => {

    return (
        <div className='ArticlesMainPage text-center mt-3'>
            <h1>Список статей:</h1>
            <ArticlesMainPageList />
        </div>
    )

};