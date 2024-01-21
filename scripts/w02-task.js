/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Austin Colt";
let currentYear = 2024;
let path = "images/portrait.jpg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
const profileImage = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
profileImage.setAttribute("src", path);
profileImage.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

let favoriteFoods = ["Steak", " Chocolate ice-cream", " Cajun Alfredo"];
foodElement.innerHTML = favoriteFoods;
let favoriteFood = " Tomato Soup";
favoriteFoods.push(favoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods = favoriteFoods.slice(1);
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods = favoriteFoods.slice(0, -1);
foodElement.innerHTML += `<br>${favoriteFoods}`;