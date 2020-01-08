import React, {useState, useEffect} from 'react';
import {articles, deleteArticle} from "../../modules/ArticlesMethods";
import {ArticlesMainPageListItem} from "./ArticlesMainPageListItem";

export const ArticlesMainPageList = props => {
    const [articlesStorage, setArticlesStorage] = useState(articles);
    const deleteArticleHandler = id => {
        deleteArticle(id);
        setArticlesStorage(articles);
    };
    return (
        articlesStorage.length ?
            articlesStorage.map(article => {
                const {id, title, author, text, date, category, comments} = article;
                return (
                    <React.Fragment key={id}>
                        <ArticlesMainPageListItem
                            className="ArticlesMainPageListItem"
                            id={id}
                            key={id}
                            title={title}
                            author={author}
                            text={text.replace(/<\/?[^>]+>/g,'')}
                            date={date}
                            category={category}
                            comments={comments}
                            onDelete={deleteArticleHandler}
                            toastHandler={props.toastHandler}
                        />
                        <hr className="my-5"/>
                    </React.Fragment>
                )
            })
            : <h2>Статей нет!</h2>
    )
};