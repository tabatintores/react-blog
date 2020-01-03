const articlesGenerate = () => {
    if (!localStorage.getItem('articlesStorage')) {
        localStorage.setItem('articlesStorage', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('articlesStorage'));
};

export let articles = articlesGenerate();

export const createArticle = (title, text, category) => {
    const article = {
        id: getArticleId(),
        title: 'Тестовая статья',
        author: 'user',
        text: 'Здесь есть текст-рыба и много-много разных приколюххххххххххххххххххххххххххххххххххххххххххххххххххххх',
        date: new Date().toLocaleDateString(),
        category: 'Авто',
        comments: []
    };
    articles.push(article);
    saveArticlesStorage(articles);
};
export const saveArticlesStorage = articlesList => {
    localStorage.setItem('articlesStorage', JSON.stringify(articlesList));
};

const getArticleId = () => articles.length > 0 ? articles[articles.length-1].id+1 : 0;
