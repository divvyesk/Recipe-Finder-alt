//search bar
const recipes = document.querySelectorAll(".recipe-card");
const searchBar = document.querySelector("#searchBar");

searchBar.addEventListener("input", () => { 
    const searchTerm = searchBar.value.toLowerCase();

    recipes.forEach((recipe) => {
        if(recipe.textContent.toLowerCase().includes(searchTerm))
        {
            recipe.style.display = "block";
        }

        else{
            recipe.style.display = "none";
        }
    });
});

//recipe suggestions according to time of the day
const currentTime = new Date().getHours();
let alertText = "";
let redirectUrl = "";

if(currentTime < 12){
    alertText = "Good Morning! Would you like to see some breakfast recipes?"
    redirectUrl = "#breakfast";
}

else if(currentTime<18){
    alertText = "Good Morning! Would you like to see some lunch recipes?"
    redirectUrl = "#lunch";
}

else{
    alertText = "Good Morning! Would you like to see some dinner recipes?"
    redirectUrl = "#dinner";
}

console.log("Before confirm: ", redirectUrl)

if(confirm(alertText)){
    console.log("Confirmed. Redirecting to: ", redirectUrl);
    window.location.href = redirectUrl;
}
else{
    console.log("Not confirmed. No redirect.");
    redirectUrl="";
}

//dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

if(localStorage.getItem("darkMode") === "enabled"){
    body.classList.add("dark-mode");
    darkModeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
}

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        darkModeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
    }

    else{
        localStorage.setItem("darkMode", "disabled");
        darkModeToggle.innerHTML= '<i class="fa-regular fa-moon"></i></i>';
    }
})


//random recipe generator
const randomRecipeBtn = document.getElementById("randomRecipeBtn");
const recipeCards = document.querySelectorAll(".recipe-card");

randomRecipeBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * recipeCards.length);
    const randomRecipe = recipeCards[randomIndex];

    // Redirect to the selected recipe page
    window.location.href = randomRecipe.getAttribute("href");
});




