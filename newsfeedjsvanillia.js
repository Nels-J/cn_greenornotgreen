const NEWSAPI_URL = 'https://newsapi.org/v2/top-headlines?' +
           'country=fr&' +
           'category=technology&' +
           'pageSize=5&' +
           'page=1&' +
           'apiKey=dbbebdcc03aa4f5a9cb8cc2f1a419bb0';

// uncomment line below & comment lines above to test error message
// const NEWSAPI_URL = 'https://newsapi.org/v2/top-headlines?';

let req = new Request(NEWSAPI_URL);

fetch(req)
.then(response => response.json())
.then(newsFeedObject => {
    // si status = ok
    if(newsFeedObject.status == 'ok'){
        // création d'un element h3 qui renvoi le nom de la source de l'article 
        let articleSourceName = document.createElement('p');
        articleSourceName.innerText = `Source: ${newsFeedObject.articles[1].source.name}`

        let articleAuthorName = document.createElement('p');
        articleAuthorName.innerText = `Author: ${newsFeedObject.articles[1].author}`

        let articleTitle = document.createElement('h2');
        articleTitle.innerText = `Title: ${newsFeedObject.articles[1].title}`

        let articleDescription = document.createElement('p');
        articleDescription.innerText = `Description: ${newsFeedObject.articles[1].description}`

        //injection dans le html
         main.appendChild(articleTitle)
         document.body.appendChild(articleDescription)
         document.body.appendChild(articleSourceName)
         document.body.appendChild(articleAuthorName)
        
    }else{
        alert(newsFeedObject.message);
    };
});
