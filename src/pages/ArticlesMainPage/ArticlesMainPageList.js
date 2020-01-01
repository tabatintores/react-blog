import React from 'react';
import {articlesStorage} from "../../modules/ArticlesVariables";
import {saveArticlesStorage} from "../../modules/ArticlesMethods";
import {ArticlesMainPageListItem} from "./ArticlesMainPageListItem";
import {MDBBtn} from "mdbreact";

export const ArticlesMainPageList = () => {

    return (
        articlesStorage.length == 0 ?
            <>
                <MDBBtn color="primary" outline rounded>Primary</MDBBtn>
                <MDBBtn rounded outline>Default</MDBBtn>
                <MDBBtn rounded outline color="secondary">Secondary</MDBBtn>
                <MDBBtn rounded outline color="success">Success</MDBBtn>
                <MDBBtn rounded outline color="info">Info</MDBBtn>
                <MDBBtn rounded outline color="warning">Warning</MDBBtn>
                <MDBBtn rounded outline color="danger">Danger</MDBBtn>
            </>

            /*articlesStorage.map(article => {
                const {id,title,description,text,comments} = article;
                return (
                    <ArticlesMainPageListItem
                        key={id}
                        title={title}
                        description={description}
                        text={text}
                        comments={comments}
                    />
                )*/
            // })
         : <h2>Статей нет!</h2>
    )
};