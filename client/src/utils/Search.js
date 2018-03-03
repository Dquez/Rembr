export default { 
    keywordSearch: function (articles, keyword) {
        if (!keyword) return [];
        return articles
        .map(article => {
            const stringToParse = `${article.title} ${article.url} ${article.note} ${[...article.tags]}`
            return stringToParse;
        })
        .filter(articleParsed => {
            articleParsed.toLowerCase();
            return articleParsed.includes(keyword);
        })
      },
}