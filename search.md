---
layout: page
permalink: /search/
---

<style>
    .search-container {
        max-width: 800px;
        margin: 0 auto;
    }
    .search-icon {
        font-size: 1.5em;
    }
    #search-input {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        margin-bottom: 20px;
    }
    #results-container {
        list-style-type: none;
        padding: 0;
    }
    .search-result {
        margin-bottom: 20px;
        border-bottom: 1px solid #eee;
        padding-bottom: 20px;
    }
    .search-result h3 {
        margin-bottom: 5px;
    }
    .search-result p {
        margin: 5px 0;
    }
    .search-meta {
        font-size: 0.9em;
        color: #666;
    }
</style>

<div class="search-container">
    <h1>Search <span class="search-icon">🔍</span></h1>
    <input type="text" id="search-input" placeholder="Search posts and projects...">
    <ul id="results-container"></ul>
</div>

<script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        json: '/search.json',
        searchResultTemplate: `
            <li class="search-result">
                <h3><a href="{url}">{title}</a></h3>
                <p>{snippet}</p>
                <p class="search-meta">
                    Date: {date} | 
                    Type: {type}
                </p>
            </li>
        `,
        noResultsText: 'No results found',
        limit: 10,
        fuzzy: false
    });
});
</script>