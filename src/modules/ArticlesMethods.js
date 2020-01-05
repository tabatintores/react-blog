export const articlesGenerate = () => {
    if (!localStorage.getItem('articlesStorage')) {
        localStorage.setItem('articlesStorage', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('articlesStorage'));
};

export let articles = articlesGenerate();

export const createArticle = (title, text, category) => {
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
};

const getArticleId = () => articles.length > 0 ? articles[articles.length-1].id+1 : 0;
