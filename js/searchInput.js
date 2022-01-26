import DisplayRecipes from "./DisplayRecipes.js";
import ClickMenu from "./ClickMenu.js";

function searchInput(data) {
     let search = document.querySelector(".logoTitle_bloc-search");
    let nameResult = [];
    let ingredientsResult = [];
    let descriptionResult = [];
    let applianceResult = [];
    let ustensilsResult = [];
    let baseModified = [];
    let newBaseFilteredConcated = [];
    let recepiesSort = [];
    let ingred = new DisplayRecipes();
    ingred.render(data);
    search.addEventListener('input', function (evt) {
        let globalInput = search.value;
        if (globalInput.length > 3)
            nameResult = [];
        descriptionResult = [];
        applianceResult = [];
        ingredientsResult = [];
        ustensilsResult = [];
        baseModified = data.map(item => {
            const base = {};
            base.id = item.id;
            base.name = item.name;
            base.servings = item.servings;
            base.time = item.time;
            base.appliance = item.appliance;
            base.ustensils = item.ustensils;
            base.description = item.description;
            base.ingredients = item.ingredients.map(it => {
                const ing = {};
                ing.ingredient = it.ingredient;
                ing.unit = it.unit ? it.unit : '';
                ing.quantity = it.quantity;
                return ing;
            });
            return base;
        });
        baseModified.forEach(elm => {
            elm.ingredients.filter(function (ing) {
                if (ing.ingredient.toLowerCase().trim().includes(globalInput.toLowerCase().trim())) {
                    ingredientsResult.push(elm);
                }
            });
            elm.ustensils.filter(function (ust) {
                if (ust.toLowerCase().includes(globalInput.toLowerCase())) {
                    ustensilsResult.push(elm);
                }
            });
            if (elm.appliance.toLowerCase().includes(globalInput.toLowerCase())) {
                applianceResult.push(elm);
            }
        });
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