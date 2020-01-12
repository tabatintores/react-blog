export class Articles {

    static create(article) {
        return fetch(`https://react-blog-53c57.firebaseio.com/articles.json`, {
            method: 'POST',
            body: JSON.stringify(article),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            article.id = response.name;
            console.log(article);
            return article
        })
        .then(addToLocalStorage)
    }
}

const addToLocalStorage = article => {
    const articlesStorage = articlesGenerate();
    articlesStorage.push(article);
    saveArticlesStorage(articlesStorage);
};

export const articlesGenerate = () => JSON.parse(localStorage.getItem('articlesStorage') || '[]');

export let articles = articlesGenerate();

export const createArticle = articleObj => {
    const {title,text,category} = articleObj;
    const article = {
        id: getArticleId(),
        title,
        author: 'user',
        text,
        date: new Date().toLocaleDateString(),
        category,
        comments: []
    };
    articles.push(article);
    saveArticlesStorage(articles);
};

export const deleteArticle = id => {
    const filteredArticles = articles.filter(item => {
        return item.id !== id
    });
    saveArticlesStorage(filteredArticles);
};

export const saveArticlesStorage = articlesList => {
    localStorage.setItem('articlesStorage', JSON.stringify(articlesList));
    articles = articlesGenerate();
};

const getArticleId = () => articles.length > 0 ? articles[articles.length-1].id+1 : 0;
