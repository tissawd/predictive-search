const url = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"


const searchData = [];
const searchResults = document.querySelector(".matches");
const searchInput = document.querySelector(".searchBox");

fetch(url)
  .then(data => data.json())
  .then(results => searchData.push(...results));



console.log(searchData);

function findMatches(wordToMatch, dataToSearch){
  return dataToSearch.filter(item => {
    const regex = new RegExp(wordToMatch, 'gi');
    return item.city.match(regex) || item.state.match(regex);
  })
}

function displayMatches(){
  const matches = findMatches(this.value, searchData);
  const html = matches.map(item => {
    return `
      <li>
      ${item.city}, ${item.state}
      </li>
    `
  }).join('')
  searchResults.innerHTML = html 
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);


// const htmlItems = searchData.map(place => `<li>test</li>`);
// console.log(htmlItems);
// searchResults.innerHTML = htmlItems;
