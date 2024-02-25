const accessKey = "7pu11hS_sLCmkr9uLizc5GIEbtGZSkU8dp6U5CiTYdc"

const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1;

async function searchImages() {
  inputData = inputEl.value;  
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

  const response = await fetch(url)
  const data = await response.json()

  const results = data.results

  if (page === 1){
    searchResults.innerHTML = ""
  }

}