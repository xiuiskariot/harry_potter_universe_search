import { data } from "./hp.js";

const uniqueSchool = getUniqueScholl(data)
const select = document.querySelector("select");


//Создает массив с названиями школ
function getUniqueScholl(array) {
  const uniqueSchool = [...new Set(array.map(el => el.house))].filter(element => element != "");
  return uniqueSchool;
}

function createOption(array) {
  array.forEach(element => {
    let option = document.createElement("option");
    option.textContent = element;
    select.append(option)
  });
}




createOption(uniqueSchool)


