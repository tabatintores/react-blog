import React,{useState} from 'react';
import {articles} from "../../modules/ArticlesMethods";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

export const ArticlePage = props => {
    let [article,setArticle] = useState(() => {
        for (let item of articles) {
            if (item.id === +props.match.params.id) {
                return item;
            }
        }
    });

    return (
        <MDBCard className="my-5 px-5 pb-5">
            <MDBCardBody>
                <MDBRow>
                    <MDBCol md="12">
                        <MDBCard reverse>
                            <MDBCardBody cascade className="text-center">
                                <h2 className="font-weight-bold">
                                    {article.title}
                                </h2>
                                <p>
                                    <a href="#">
                                        <strong>{article.author}</strong>
                                    </a>
                                    , {article.date}
                                </p>
                                <MDBBtn color='warning' className="waves-light">
                                    <MDBIcon icon="pen" className='pr-2'/>
                                    Редактировать
                                </MDBBtn>
                                <MDBBtn color='red' className="waves-light">
                                    <MDBIcon icon="times" className='pr-2'/>
                                    Удалить
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBContainer className="mt-5" dangerouslySetInnerHTML={{__html:article.text}} />
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
};