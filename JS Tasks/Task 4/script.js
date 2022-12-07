/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
import cars from './cars.json' assert {type: 'json'}
console.log(cars)
const result = document.querySelector("#output")
cars.forEach(item =>{
    let modelItems = ""
    item.models.forEach(item=>{
        modelItems += `<span>${item}</span>, `
    })
    result.innerHTML +=`<div class="card"><h1>${item.brand}</h1><p>${modelItems}</p></div>`
})