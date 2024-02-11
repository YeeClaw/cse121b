/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];
/* async displayTemples Function */
const displayTemples =  async (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement("article");

        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        const img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.location);

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    })
}
/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    const data = await response.json();

    templeList = data;
}
/* reset Function */
const reset = () => { templesElement.innerHTML = "" };
/* filterTemples Function */
const filterTemples = (temples) => {
    reset()
    const filter = document.querySelector("#filtered").value;

    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => parseInt(temple.dedicated) < 1950));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            console.error("Invalid filter value");
    }
}
/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

getTemples().then(() => {});


/* testing */
// getTemples().then(() => {
//     console.log(templeList);
// })
