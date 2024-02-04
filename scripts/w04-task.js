/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};

myProfile = {
    name: "Austin Colt",
    photo: "images/portrait.jpg",
    favoriteFoods: ["Steak", " Chocolate ice-cream", " Cajun Alfredo"],
    hobbies: ["Programming", "Climbing", "Hiking", "Watch Collecting"],
    placesLived: []
}
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Star, Idaho",
        length: "12 years"
    }
);

myProfile.placesLived.push(
    {
        place: "Highlands Ranch, Colorado",
        length: "4 years"
    }
);

myProfile.placesLived.push(
    {
        place: "Boise, Idaho",
        length: "2 years"
    }
);

myProfile.placesLived.push(
    {
        place: "Rexburg, Idaho",
        length: "Current"
    }
);
/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").innerHTML = myProfile.name;
/* Photo with attributes */
document.querySelector("img").setAttribute("src", myProfile.photo);
document.querySelector("img").setAttribute("alt", `Profile image of ${myProfile.name}`);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(element => {
    let li = document.createElement("li");
    li.textContent = element;
    document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(element => {
    let li = document.createElement("li");
    li.textContent = element;
    document.querySelector("#hobbies").appendChild(li);
});
/* Places Lived DataList */
myProfile.placesLived.forEach(element => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");

    dt.textContent = element.place;
    dd.textContent = element.length;

    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
})

