import React, {useState} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody} from 'mdbreact';
import {Editor} from '@tinymce/tinymce-react';
import Select from 'react-select';
import { useHistory } from "react-router-dom";
import {createArticle} from "../../modules/ArticlesMethods";

export const ArticlesCreator = () => {
    const options = [
        {label: 'Путешествия', value: 'Путешествия'},
        {label: 'Природа', value: 'Природа'},
        {label: 'IT', value: 'IT'},
        {label: 'Бизнес', value: 'Бизнес'},
        {label: 'Отдых', value: 'Отдых'}
    ];

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [category, setCategory] = useState();

    const history= useHistory();
    return (
        <MDBContainer>
            <MDBRow className='justify-content-center align-items-center'>
                <MDBCol md="7">
                    <MDBCard>
                        <MDBCardBody>
                            <form onSubmit={e => {
                                e.preventDefault();
                                createArticle(title,text,category);
                                history.push('/');
                            }}>
                                <p className="h4 text-center py-4">Новая статья</p>
                                <div className="grey-text">
                                    <MDBInput
                                        label="Название статьи"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={e => setTitle(e.target.value)}
                                    />
                                    <Editor
                                        initialValue=""
                                        init={{
                                            height: 250,
                                            menubar: false,
                                            plugins: [
                                                'advlist autolink lists link image charmap print preview anchor',
                                                'searchreplace visualblocks code fullscreen',
                                                'insertdatetime media table paste code help wordcount'
                                            ],
                                            toolbar:
                                                'undo redo | formatselect | bold italic backcolor | \
                                                alignleft aligncenter alignright alignjustify | \
                                                bullist numlist outdent indent | removeformat | help'
                                        }}
                                        onChange={e => setText(e.target.getContent())}
                                    />
                                    <Select
                                        onChange={e => setCategory(e.value)}
                                        options={options}
                                        className='mt-5'
                                        placeholder='Выберите категорию'
                                        isSearchable='true'
                                    />
                                </div>
                                <div className="text-center py-4 mt-3">
                                    <MDBBtn color="cyan" type="submit">
                                        Создать
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
};