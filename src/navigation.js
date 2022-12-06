searchFormBtn.addEventListener("click", ()=>{
    location.hash = `#search=${searchFormInput.value}`
})
trendingBtn.addEventListener("click", ()=>{
    location.hash = "#trends"
})
arrowBtn.addEventListener("click", ()=>{
    history.back()
    // location.hash = window.history.back()
})

window.addEventListener("DOMContentLoaded", navigator, false)
window.addEventListener("hashchange", navigator, false)

function navigator(){
    console.log({location})

    if (location.hash.startsWith("#trends")) {
        trendsPage()
    } else if (location.hash.startsWith("#search=")){
        searchPage()
    } else if (location.hash.startsWith("#movie=")){
        movieDetailsPage()
    } else if (location.hash.startsWith("#category=")){
        categoriesPage()
    } else {
        homePage()
    }
    document.body.scrollTop = 0
}

function trendsPage(){
    console.log("TRENDS!!")
    
    headerSection.classList.remove("header-container--long")
    headerSection.style.background = ""
    headerCategoryTitle.classList.remove("inactive")
    headerTitle.classList.add("inactive")
    arrowBtn.classList.remove("header-arrow--white")
    arrowBtn.classList.remove("inactive")
    searchForm.classList.add("inactive")

    trendingPreviewSection.classList.add("inactive")
    categoriesPreviewSection.classList.add("inactive")
    genericSection.classList.remove("inactive")
    movieDetailSection.classList.add("inactive")
    headerCategoryTitle.innerHTML = "Tendencias"
    getTrendingMovies()
}
function searchPage(){
    console.log("SEARCH!!")

    headerSection.classList.remove("header-container--long")
    headerSection.style.background = ""
    headerCategoryTitle.classList.add("inactive")
    headerTitle.classList.add("inactive")
    arrowBtn.classList.remove("header-arrow--white")
    arrowBtn.classList.remove("inactive")
    searchForm.classList.remove("inactive")

    trendingPreviewSection.classList.add("inactive")
    categoriesPreviewSection.classList.add("inactive")
    genericSection.classList.remove("inactive")
    movieDetailSection.classList.add("inactive")

    //Codigo para extraer con metodos de array el id de cada categoria => ["#search", "búsqueda"]
    const [_, query] = location.hash.split("=")
    getMoviesBySearch(query)
    // const [categoryId, categoryName] = categoryData.split("-")
}
function movieDetailsPage(){
    console.log("MOVIE!!")

    headerSection.classList.add("header-container--long")
    // headerSection.style.background = ""
    headerCategoryTitle.classList.add("inactive")
    headerTitle.classList.add("inactive")
    arrowBtn.classList.remove("inactive")
    arrowBtn.classList.add("header-arrow--white")
    searchForm.classList.add("inactive")

    trendingPreviewSection.classList.add("inactive")
    categoriesPreviewSection.classList.add("inactive")
    genericSection.classList.add("inactive")
    movieDetailSection.classList.remove("inactive")


    //Codigo para extraer con metodos de array el id de cada categoria => ["#movie", "movieId"]
    const [movie, movieId] = location.hash.split("=")
    getMovieById(movieId)
}
function categoriesPage(){
    console.log("CATEGORY!!")

    headerSection.classList.remove("header-container--long")
    headerSection.style.background = ""
    headerCategoryTitle.classList.remove("inactive")
    headerTitle.classList.add("inactive")
    arrowBtn.classList.remove("header-arrow--white")
    arrowBtn.classList.remove("inactive")
    searchForm.classList.add("inactive")

    trendingPreviewSection.classList.add("inactive")
    categoriesPreviewSection.classList.add("inactive")
    genericSection.classList.remove("inactive")
    movieDetailSection.classList.add("inactive")

    //Codigo para extraer con metodos de array el id de cada categoria
    const [_, categoryData] = location.hash.split("=")
    const [categoryId, categoryName] = categoryData.split("-")

    headerCategoryTitle.innerHTML = categoryName
    getMoviesByCategory(categoryId)
}
function homePage(){
    console.log("Home!!")
    headerSection.classList.remove("header-container--long")
    headerSection.style.background = ""
    headerCategoryTitle.classList.add("inactive")
    headerTitle.classList.remove("inactive")
    arrowBtn.classList.remove("header-arrow--white")
    arrowBtn.classList.add("inactive")
    searchForm.classList.remove("inactive")

    trendingPreviewSection.classList.remove("inactive")
    categoriesPreviewSection.classList.remove("inactive")
    genericSection.classList.add("inactive")
    movieDetailSection.classList.add("inactive")

    getTrendingMoviesPreview()
    getCategoriesPreview()
}