import React from 'react';
import {MDBRow, MDBCol, MDBView, MDBIcon, MDBBtn, MDBNavLink} from "mdbreact";

export const ArticlesMainPageListItem = props => {
    const {id, title, author, text, date, category, comments} = props;

    const randomPhoto = `https://picsum.photos/500/300?random=${id}`;
    return (
            <MDBRow className='mt-5 text-left'>
                <MDBCol md='5'>
                    <MDBView className="rounded z-depth-2" hover waves>
                        <img
                            className="img-fluid"
                            src={randomPhoto}
                            alt=""
                        />
                    </MDBView>
                </MDBCol>
                <MDBCol md='7' className='d-flex flex-column justify-content-between position-relative'>
                    <a href="#!" className="light-blue-text">
                        <h6 className="font-weight-bold mb-3">
                            {/*<MDBIcon icon="utensils" className="pr-2"/>*/}
                            {category}
                        </h6>
                    </a>
                    <h3 className="font-weight-bold mb-3 p-0">
                        <strong>{title}</strong>
                    </h3>
                    <p>
                        {text}
                    </p>
                    <p>
                        <a href="#!">
                            <strong>{author}</strong>
                        </a>
                        , {date}
                        , <MDBIcon icon="comment-alt"/> {comments.length}
                    </p>
                    <MDBNavLink className='w-100' to={'/article/'+id}>
                        <MDBBtn
                            color="blue"
                            size="md"
                            className="mb-lg-0 mb-4 waves-light"
                        >
                            Читать далее&nbsp;
                            <MDBIcon icon="long-arrow-alt-right"/>
                        </MDBBtn>
                    </MDBNavLink>
                    <MDBIcon
                        icon="times"
                        className='deleteArticle'
                        onClick={() => {
                            props.onDelete(id);
                        }}
                    />
                </MDBCol>
            </MDBRow>
    )
};