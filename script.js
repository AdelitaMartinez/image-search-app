// Created accessKey variable to store API key
const accessKey = "7pu11hS_sLCmkr9uLizc5GIEbtGZSkU8dp6U5CiTYdc"

// created formEl variable to store "form"
// created input element variable to store "search-input"
// created searchResults variable to store containers with images
const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")


// created inputData to store input data(keyword) that user adds in "search for image" input
// By default, page number is 1
let inputData = ""
let page = 1;


// Created async function named seaarchImages, need to use async because we are using response/fetch below. 
 // Created dynamic URL
async function searchImages() {
  inputData = inputEl.value;  // hold values of search bar input data
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

  // Fetch images based on query
  // Convert response to json format, stored in "data"
  const response = await fetch(url)
  const data = await response.json()

  const results = data.results

  // if on page one, show image containers
  if (page === 1){
    searchResults.innerHTML = ""
  }

  // Map results then push results into container (search-result)
  results.map((result) =>{
    const imageWrapper = document.createElement('div')
    imageWrapper.classList.add("search-result")
    const image = document.createElement('img')
    image.src = result.urls.small
    image.alt = result.alt_description
    const imageLink = document.createElement('a')
    imageLink.href = result.links.html 
    imageLink.target = "_blank"
    imageLink.textContent = result.alt_description

    imageWrapper.appendChild(image)
    imageWrapper.appendChild(imageLink)
    searchResults.appendChild(imageWrapper)
  })

  page++
  if(page > 1){
    showMore.style.display = "block"
  }
}

formEl.addEventListener("submit", (event) =>{
  event.preventDefualt()
  page = 1
  searchImages()
})

showMore.addEventListener("click", () =>{
  searchImages()
})