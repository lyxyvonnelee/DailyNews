const API_KEY = '2d0faef8b49e45669c119fafbf8379dc';

fetch(`https://newsapi.org/v2/top-headlines?country=cn&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        const newsContainer = document.getElementById('newsContainer');
        data.articles.forEach(article => {
            const newsArticle = document.createElement('article');
            
            const title = document.createElement('h2');
            title.textContent = article.title;
            newsArticle.appendChild(title);
            
            const source = document.createElement('p');
            source.textContent = `来源: ${article.source.name}`;
            source.classList.add('news-source');
            newsArticle.appendChild(source);
            
            const description = document.createElement('p');
            description.textContent = article.description;
            newsArticle.appendChild(description);
            
            newsContainer.appendChild(newsArticle);
        });
    })
    .catch(error => {
        console.error("Error fetching news:", error);
    });
