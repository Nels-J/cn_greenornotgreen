const NEWSAPI_URL =
  "https://newsapi.org/v2/top-headlines?" +
  "country=fr&" +
  "category=technology&" +
  "pageSize=5&" +
  "page=1&" +
  "apiKey=dbbebdcc03aa4f5a9cb8cc2f1a419bb0";

// uncomment line below & comment lines above to test error message
// const NEWSAPI_URL = 'https://newsapi.org/v2/top-headlines?';

const req = new Request(NEWSAPI_URL);

fetch(req)
  .then((response) => response.json())
  .then((newsFeedObject) => {
    // if status = ok
    if (newsFeedObject.status == "ok") {
      for (i = 0; i < 3; i++) {
        // Grab needed data for each news for the news feed section
        const articleTitle = document.createElement("h2"); // Create new h2 element to grab the article title
        //articleTitle.innerText = `${newsFeedObject.articles[i].title}`;
        articleTitle.innerText = newsFeedObject.articles[i].title;

        const articleDescription = document.createElement("p"); // Create new p element to grab the article content
        articleDescription.innerText = newsFeedObject.articles[i].description;

        const articleSourceName = document.createElement("p"); // Create new p element to grab the article source
        articleSourceName.innerText = `Source: ${newsFeedObject.articles[i].source.name}`;

        const articleAuthorName = document.createElement("p"); // Create new p element to grab the author source
        articleAuthorName.innerText = `Author: ${newsFeedObject.articles[i].author}`;

        // Send to the html the news content and structure

        const sectionNews = document.createElement("section"); // Create new section element
        document.querySelector("main").append(sectionNews); // Add the new section into body main of the html document
        sectionNews.className = 'newsFeedSection';

        const divNews = document.createElement("div"); // Create new div element
        sectionNews.append(divNews); // Add the new div into body main section of the html document
        divNews.className = 'newsFeed';

        divNews.append(articleTitle);
        divNews.append(articleDescription);
        divNews.append(articleSourceName);
        divNews.append(articleAuthorName);
      }
    } else {
      alert(newsFeedObject.message);
    }
  });
