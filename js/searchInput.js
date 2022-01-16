import DisplayRecipes from "./DisplayRecipes.js";
import ClickMenu from "./ClickMenu.js";

function searchInput(data) {
    let search = document.querySelector(".logoTitle_bloc-search");
    let nameResult = [];
    let ingredientsResult = [];
    let descriptionResult = [];
    let applianceResult = [];
    let ustensilsResult = [];
    let newBaseFilteredConcated = [];
    var recepiesSort = [];
    var ingred = new DisplayRecipes();
    ingred.render(data);
    let ingre = ingred.uniqueIngredients;
    search.addEventListener('input', function (evt) {
        let globalInput = search.value;
        if (globalInput.length > 3)
        nameResult = [];
        descriptionResult = [];
        applianceResult = [];
        ingredientsResult = [];
        ustensilsResult = [];
        for (let d of data) {
            d.ingredients.filter(function(ing){
                if(ing.ingredient.toLowerCase().includes(globalInput.toLowerCase())){
                    ingredientsResult.push(d);
                }
            });
            d.ustensils.filter(function(ust){
                if(ust.toLowerCase().includes(globalInput.toLowerCase())){
                    ustensilsResult.push(d);
                }
            });
                if(d.appliance.toLowerCase().includes(globalInput.toLowerCase())){
                    applianceResult.push(d);
            }
        }
        console.log(applianceResult);
        newBaseFilteredConcated = [...new Set([...nameResult, ...ingredientsResult, ...descriptionResult, ...applianceResult, ...ustensilsResult])];
        newBaseFilteredConcated.sort((a, b) => b.name.localeCompare(a.name));
        dropIList(newBaseFilteredConcated);
        new ClickMenu().render(newBaseFilteredConcated);
        new DisplayRecipes().render(newBaseFilteredConcated);
    });
    //Affiche les recettes par ordre alphabetique
    recepiesSort = data.sort((a, b) => b.name.localeCompare(a.name));
    new DisplayRecipes().render(recepiesSort);
    dropIList(data);
}
let dropIList = function (data) {
    let dropList = document.querySelector('.ingredientsResult');
    let boxIList = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].ingredients.length; j++) {
            boxIList.push(`
        <a class="dropdown-item" href="javascript:void(0)">
            ${data[i].ingredients[j].ingredient.length > 25 ? data[i].ingredients[j].ingredient.substr(0,25)+'...':data[i].ingredients[j].ingredient}
        </a>
        `);
        }
    }
    boxIList = [...new Set(boxIList)];
    boxIList.sort();
    dropList.innerHTML = boxIList.join('');

    let dropListA = document.querySelector('.applianceResult');
    let boxIListA = [];
    for (let j = 0; j < data.length; j++) {
        boxIListA.push(`
        <a class="dropdown-item" href="javascript:void(0)">
            ${data[j].appliance}
        </a>
        `);
    }
    boxIListA = [...new Set(boxIListA)];
    boxIListA.sort();
    dropListA.innerHTML = boxIListA.join('');

    let dropListU = document.querySelector('.ustensilsResult');
    let boxIListU = [];
    for (let a = 0; a < data.length; a++) {
        for (let b = 0; b < data[a].ustensils.length; b++) {
            boxIListU.push(`
            <a class="dropdown-item" href="javascript:void(0)">
                ${data[a].ustensils[b].length > 25 ? data[a].ustensils[b].substr(0, 25)+'...' : data[a].ustensils[b]}
            </a>
            `);
        }
    }
    boxIListU = [...new Set(boxIListU)];
    boxIListU.sort();
    dropListU.innerHTML = boxIListU.join('');

};
export default searchInput;