import DisplayRecipes from "./DisplayRecipes.js";

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
        for (let i = 0; i < data.length; i++) {
            if (data[i].name.toLowerCase().includes(globalInput.toLowerCase())) {
                nameResult.push(data[i]);
            }
            if (data[i].description.toLowerCase().includes(globalInput.toLowerCase())) {
                descriptionResult.push(data[i]);
            }
            if (data[i].appliance.toLowerCase().includes(globalInput.toLowerCase())) {
                applianceResult.push(data[i]);
            }
            for (let k = 0; k < data[i].ingredients.length; k++) {
                if (data[i].ingredients[k].ingredient.toLowerCase().includes(globalInput.toLowerCase())) {
                    ingredientsResult.push(data[i]);
                }
            }
            for (let k = 0; k < data[i].ustensils.length; k++) {
                if (data[i].ustensils[k].toLowerCase().includes(globalInput.toLowerCase())) {
                    ustensilsResult.push(data[i]);
                }
            }
        }
        newBaseFilteredConcated = [...new Set([...nameResult, ...ingredientsResult, ...descriptionResult, ...applianceResult, ...ustensilsResult])];
        newBaseFilteredConcated.sort((a, b) => b.name.localeCompare(a.name));
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
            ${data[i].ingredients[j].ingredient}
        </a>
        `);
        }
    }
    boxIList = [...new Set(boxIList)];
    boxIList.sort();
    dropList.innerHTML = boxIList;

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
    dropListA.innerHTML = boxIListA;

};
export default searchInput;