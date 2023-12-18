document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error(`Ошибка Fetch: ${response.status}`);
        const data = await response.json();
        displayArticles(data);
    } catch (error) {
        console.error(error);
    }
});

function displayArticles(articles) {
    const articleList = document.getElementById("article-list");

    articles.forEach(article => {
        const divList = document.createElement("div");
        divList.classList.add("div-list");

        divList.innerHTML = `
            <h2 class='div-list-title'>${article.title}</h2>
            <p class='div-list-theme'>Тема: ${article.themeid}</p>
            <p class='div-list-text'>${article.text}</p>
            <p class='div-list-date'>Дата: ${article.date}</p>
        `;

        articleList.appendChild(divList);
    });
}