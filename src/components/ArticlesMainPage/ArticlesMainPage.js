import React from 'react';
import {ArticlesMainPageList} from "./ArticlesMainPageList";
import {MDBContainer} from "mdbreact";
import "./ArticlesMainPage.sass"
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ArticlesMainPage = () => {

    const notifyHandler = (content, format) => {
        toast.format(content, {
            pauseOnHover: false
        });
    };

    return (
        <>
            <MDBContainer className='mt-5 text-center ArticlesMainPageListItem'>
                <h1>Список статей:</h1>
                <ArticlesMainPageList
                    toastHandler={notifyHandler}
                />
            </MDBContainer>
            <ToastContainer/>
        </>
    )

};