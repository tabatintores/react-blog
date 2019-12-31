import {articlesStorage} from "./ArticlesVariables";

export const saveArticlesStorage = articlesStorage => {
    localStorage.setItem('articlesStorage', JSON.stringify(articlesStorage));
}