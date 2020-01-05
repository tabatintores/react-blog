import React, {useState, useEffect} from 'react';
import {articles, articlesGenerate, deleteArticle, saveArticlesStorage} from "../../modules/ArticlesMethods";
import {ArticlesMainPageListItem} from "./ArticlesMainPageListItem";

export const ArticlesMainPageList = () => {
    const [articlesStorage, setArticlesStorage] = useState(articles);
    const deleteArticleHandler = id => {
        deleteArticle(id)
        setArticlesStorage(articlesGenerate());
        console.log(`Удалена статья с id ${id}`)
    };
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
                            onDelete={deleteArticleHandler}
                        />
                        {articlesStorage[id+1] ? <hr className="my-5"/> : null}
                    </React.Fragment>
                )
            })
            : <h2>Статей нет!</h2>
    )
};