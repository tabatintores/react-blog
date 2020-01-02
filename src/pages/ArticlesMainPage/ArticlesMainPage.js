import React from 'react';
import {ArticlesMainPageList} from "./ArticlesMainPageList";
import {MDBContainer} from "mdbreact";

export const ArticlesMainPage = () => {

    return (
        <MDBContainer className='mt-5 text-center ArticlesMainPageListItem'>
            <h1>Список статей:</h1>
            <ArticlesMainPageList/>
        </MDBContainer>
    )

};