import "./modules/svg.js";
import "./modules/skill.js";
import "./modules/title.js";

const getTodaysDate = () =>  new Date(Date.now()).toLocaleString().split(",")[0];
const dateHeader = document.getElementById("svg-separator");

dateHeader.onload = (event) => {
  const dateContainer = event.target.querySelector("#header-date");
  dateContainer.innerHTML = getTodaysDate();
}
