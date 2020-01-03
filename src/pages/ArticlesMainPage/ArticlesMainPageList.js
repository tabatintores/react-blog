import React from 'react';
import {articles as articlesStorage} from "../../modules/ArticlesMethods";
import {ArticlesMainPageListItem} from "./ArticlesMainPageListItem";

export const ArticlesMainPageList = () => {
    const article = [{
        id: 1,
        title: 'Как приручить дракона',
        author: 'Nemoiz',
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
        date: new Date().toLocaleDateString(),
        category: 'Звери',
        comments: []
    }];
    return (
        articlesStorage.length ?
            articlesStorage.map(article => {
                const {id, title, author, text, date, category, comments} = article;
                return (
                    <React.Fragment key={id}>
                        <ArticlesMainPageListItem
                            id={id}
                            key={id}
                            title={title}
                            author={author}
                            text={text}
                            date={date}
                            category={category}
                            comments={comments}
                        />
                        {articlesStorage[id+1] ? <hr className="my-5"/> : null}
                    </React.Fragment>
                )
            })
            : <h2>Статей нет!</h2>
    )
};