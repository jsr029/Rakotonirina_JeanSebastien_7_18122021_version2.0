import DisplayRecipes from "./DisplayRecipes.js";

class ClickMenu {
    render(data) {
        baseIng(data);
        baseApp(data);
        baseUst(data);
    }
}
// si pas de données dans input général, afficher données initiales avant input
// vérifier au moment de l'appel
let baseIng = function (data) {
    let ingA = document.querySelectorAll('.dropdown_ingredients a');
    let tagsIngredients = document.querySelector('.tags_ingredients');
    let ingredientsResult = document.querySelector('.ingredientsResult');
    let iconI = document.querySelector('.dropdown_ingredients-button i');
    let h2I = document.querySelector('.dropdown_ingredients-button h2');
    let inputI = document.querySelector('.dropdown_ingredients-buttonSearch');
    let buttonI = document.querySelector('.dropdown_ingredients-button');
    let content = document.querySelector('.content');
    let baseResult = [];
    //Loop all link in ingredients dropdown, listen to ckick event, display recipes 
    //wich contain tagNameClicked 
    for (let i = 0; i < ingA.length; i++) {
        ingA[i].addEventListener('click', function (event) {
            ingredientsResult.style.display = "none";
            //dropISearch.style.display = "none";
            iconI.className = 'icon-angle-down';
            h2I.style.display = 'block';
            inputI.style.display = 'none';
            buttonI.style.width = '150px';
            content.style.marginTop = '30px';
            buttonI.style.borderRadius = '5px';
            baseResult = [];
            let tagNameClicked = event.target.innerHTML.trim().toLowerCase();
            tagsIngredients.style.display = "flex";
            tagsIngredients.innerHTML = '<h2>' + tagNameClicked +
                '</h2><span class="close"><i class="icon-remove-circle"></i></span>';
            for (let j = 0; j < data.length; j++) {
                for (let k = 0; k < data[j].ingredients.length; k++) {
                    if (data[j].ingredients[k].ingredient.toLowerCase() == tagNameClicked) {
                        baseResult.push(data[j]);
                    }
                }
            }
            new DisplayRecipes().render(baseResult);
        });
    }
    //When u close the tag, go back to initial data
    tagsIngredients.addEventListener("click", function (event) {
        tagsIngredients.style.display = 'none';
        new DisplayRecipes().render(data);
    });

};
let baseApp = function (data) {
    let appA = document.querySelectorAll('.dropdown_appliance a');
    let tagsAppliance = document.querySelector('.tags_appliance');
    let applianceResult = document.querySelector('.applianceResult');
    let iconA = document.querySelector('.dropdown_appliance-button i');
    let h2A = document.querySelector('.dropdown_appliance-button h2');
    let inputA = document.querySelector('.dropdown_appliance-buttonSearch');
    let buttonA = document.querySelector('.dropdown_appliance-button');
    let content = document.querySelector('.content');
    let baseResult = [];
    //Loop all link in appliance dropdown, listen to ckick event, display recipes 
    //wich contain tagNameClicked 
    for (let i = 0; i < appA.length; i++) {
        appA[i].addEventListener('click', function (event) {
            applianceResult.style.display = "none";
            //dropISearch.style.display = "none";
            iconA.className = 'icon-angle-down';
            h2A.style.display = 'block';
            inputA.style.display = 'none';
            buttonA.style.width = '150px';
            content.style.marginTop = '30px';
            buttonA.style.borderRadius = '5px';
            baseResult = [];
            let tagNameClicked = event.target.innerHTML.trim().toLowerCase();
            tagsAppliance.style.display = "flex";
            tagsAppliance.innerHTML = '<h2>' + tagNameClicked +
                '</h2><span class="close"><i class="icon-remove-circle"></i></span>';
            for (let j = 0; j < data.length; j++) {
                if (data[j].appliance.toLowerCase() == tagNameClicked) {
                    baseResult.push(data[j]);
                }
            }
            new DisplayRecipes().render(baseResult);
        });
    }
    //When u close the tag, go back to initial data
    tagsAppliance.addEventListener("click", function (event) {
        tagsAppliance.style.display = 'none';
        new DisplayRecipes().render(data);
    });

};
let baseUst = function (data) {
    let ustA = document.querySelectorAll('.dropdown_ustensils a');
    let tagsUstensils = document.querySelector('.tags_ustensils');
    let ustensilsResult = document.querySelector('.ustensilsResult');
    let iconU = document.querySelector('.dropdown_ustensils-button i');
    let h2U = document.querySelector('.dropdown_ustensils-button h2');
    let inputU = document.querySelector('.dropdown_ustensils-buttonSearch');
    let buttonU = document.querySelector('.dropdown_ustensils-button');
    let content = document.querySelector('.content');
    let baseResult = [];
    //Loop all link in ustensils dropdown, listen to ckick event, display recipes 
    //wich contain tagNameClicked 
    for (let i = 0; i < ustA.length; i++) {
        ustA[i].addEventListener('click', function (event) {
            ustensilsResult.style.display = "none";
            //dropISearch.style.display = "none";
            iconU.className = 'icon-angle-down';
            h2U.style.display = 'block';
            inputU.style.display = 'none';
            buttonU.style.width = '150px';
            content.style.marginTop = '30px';
            buttonU.style.borderRadius = '5px';
            baseResult = [];
            let tagNameClicked = event.target.innerHTML.trim().toLowerCase();
            tagsUstensils.style.display = "flex";
            tagsUstensils.innerHTML = '<h2>' + tagNameClicked +
                '</h2><span class="close"><i class="icon-remove-circle"></i></span>';
            for (let j = 0; j < data.length; j++) {
                for (let k = 0; k < data[j].ustensils.length; k++) {
                if (data[j].ustensils[k].toLowerCase() == tagNameClicked) {
                        baseResult.push(data[j]);
                    }
                }
            }
            new DisplayRecipes().render(baseResult);
        });
    }
    //When u close the tag, go back to initial data
    tagsUstensils.addEventListener("click", function (event) {
        tagsUstensils.style.display = 'none';
        new DisplayRecipes().render(data);
    });

};

export default ClickMenu;