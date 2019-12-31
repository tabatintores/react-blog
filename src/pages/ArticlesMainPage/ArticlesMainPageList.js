import React from 'react';
import {articlesStorage} from "../../modules/ArticlesVariables";
import {saveArticlesStorage} from "../../modules/ArticlesMethods";

export const ArticlesMainPageList = () => {
    const testArticle = {
        id: 1,
        title: 'Как приручить дракона?',
        description: 'Берёшь и приручаешь...',
        text: 'Я всё сказал.',
        comments: [],
        date: new Date().toLocaleDateString()
    }
    saveArticlesStorage(testArticle);
    return (
        !articlesStorage.length === 0 ?
            <h1>Статьи!</h1>
         : <h2>Статей нет!</h2>
    )
};