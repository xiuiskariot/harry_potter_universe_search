import { data } from "./hp.js";

const grid = document.querySelector(".grid")
const input = document.querySelector("input");
const select = document.querySelector("select")

function createCard(obj) {
  let card = document.createElement("div");
  card.classList.add("character-card");

  card.innerHTML = `<div class="character-card__photo"><img src="${
    obj.image
  }" alt="character photo"></div>
                    <div class="character-card__info">
                      <p class="character-card__info__name">${obj.name}</p>
                      <p class="character-card__info__subinfo">Actor: ${
                        obj.actor
                      }</p>
                      <p class="character-card__info__subinfo">Gender: ${
                        obj.gender
                      }</p>
                      <p class="character-card__info__subinfo">House: ${
                        obj.house == "" ? "unknown" : obj.house
                      }</p>
                      <p class="character-card__info__subinfo">Wand core: ${
                        obj.wand.core == "" ? "unknown" : obj.wand.core
                      }</p>
                      <p class="character-card__info__subinfo">Alive: ${obj.alive ? "yes" : "no"}</p>
                    </div>`;


  return card;
} 


function renderCards(array) {
  array.forEach(element => {
    grid.append(createCard(element))
  });
}



function filtredCards(event) {
  let inputValue = event.target.value.toLowerCase().trim();
  let selectValue = event.target.value;
  grid.innerHTML = "";
  let filtred =
    data.filter((card) => card.name.toLowerCase().includes(inputValue) || card.house.includes(selectValue))

  
  renderCards(filtred)
}

input.addEventListener("input", filtredCards);
select.addEventListener("change", filtredCards)

renderCards(data)