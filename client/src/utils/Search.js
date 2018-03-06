export default {
    // function to search for a specific article via keyword, including url, title or note
    keywordSearch: function (articles, keyword) {
        // if user deleted the keyword, no articles are shown
        if (!keyword) return [];
        
        // first, we concatenate and parse the articles to use the built in .includes() method on all the data
        const filteredStrings = articles
            .map(article => {
                const stringToParse = `${article.title} ${article.url} ${article.note} ${[...article.tags]} ?/*${article._id}`
                return stringToParse;
            })
            .filter(articleParsed => {
                // filter out the articles that include the kewyword, toLowerCase() will normalize the search parameters
                articleParsed.toLowerCase();
                return articleParsed.includes(keyword.toLowerCase());
            })
            // make a new array of the IDs we will use to extract the correct articles, arbitrary characters used to split to make it easy to parse the Id from the string
        const filteredIds = filteredStrings.map(article => article.split("?/*")[1]);
        // filter out the articles which have an Id equal to the Id from the above array, filteredIds
        return articles.filter(filteredArticle => {
            // this anonymous IIFE is required to return from the outer arrow function, otherwise there's a lint error
            return  (() => {
                for(let i = 0; i < filteredIds.length; i++) {
                    if (filteredArticle._id === filteredIds[i]) {
                        return filteredArticle;
                    }
                }
            })()
        })
    }
}