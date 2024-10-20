---
layout: page
title: Search
permalink: /search/
---

<div class="search-container">
    <h1>Search <span class="search-icon">🔍</span></h1>
    <input type="text" id="search-input" placeholder="Search posts and projects...">
    <ul id="results-container"></ul>
</div>

<script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>
<script>
SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<li><a href="{url}">{title}</a><p>{snippet}</p></li>',
    noResultsText: 'No results found',
    limit: 10,
    fuzzy: false,
})
</script>