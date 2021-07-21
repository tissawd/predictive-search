const url = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw"

async function populateData(endpoint) {
  const data = await fetch(endpoint);
  return data.json();
}

searchData = [];


populateData(url)
  .then(results => searchData.push(...results));

const searchResults = document.querySelector('.matches');

searchResults.appendChild()
