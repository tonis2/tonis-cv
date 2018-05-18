import "/modules/svg.js";
import "/modules/skill.js";

const getTodaysDate = () =>  new Date(Date.now()).toLocaleString();
const dateHeader = document.getElementById("svg-separator");

dateHeader.onload = (event) => {
  const dateContainer = event.target.querySelector("#header-date");
  dateContainer.innerHTML = getTodaysDate();
}
