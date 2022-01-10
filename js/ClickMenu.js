import DisplayRecipes from "./DisplayRecipes.js";
import recipes from "./recipes.js";

class ClickMenu {
    render(data) {
        let tagsIngredients = document.querySelector('.tags_ingredients');
        if (tagsIngredients.innerHTML.length == 0) {
            tagsIngredients.style.display = 'none';
        }
        let dropIA = document.querySelectorAll('.dropdown_ingredients a');
        dropIA.forEach(function (elm) {
            elm.addEventListener('click', function (event) {
                tagsIngredients.style.display = "flex";
                let linkClicked = event.target;
                tagsIngredients.innerHTML = '<h2>' + linkClicked.innerHTML +
                    '</h2><span class="close"><img src="../img/cross.png" alt="close tag icon">';
            });
        });
        baseIng(data);
        tagsIngredients.addEventListener('click', function (evt) {
            tagsIngredients.style.display = 'none';
        });
        let tagsAppliance = document.querySelector('.tags_appliance');
        if (tagsAppliance.innerHTML.length == 0) {
            tagsAppliance.style.display = 'none';
        }
        let dropAA = document.querySelectorAll('.dropdown_appliance a');
        dropAA.forEach(function (elm) {
            elm.addEventListener('click', function (event) {
                tagsAppliance.style.display = "flex";
                let linkClicked = event.target;
                tagsAppliance.innerHTML = '<h2>' + linkClicked.innerHTML +
                    '</h2><span class="close"><img src="../img/cross.png" alt="close tag icon">';
            });
        });
        tagsAppliance.addEventListener('click', function (evt) {
            tagsAppliance.style.display = 'none';
        });

        let tagsUstensils = document.querySelector('.tags_ustensils');
        if (tagsUstensils.innerHTML.length == 0) {
            tagsUstensils.style.display = 'none';
        }
        let dropUA = document.querySelectorAll('.dropdown_ustensils a');
        dropUA.forEach(function (elm) {
            elm.addEventListener('click', function (event) {
                tagsUstensils.style.display = "flex";
                let linkClicked = event.target;
                tagsUstensils.innerHTML = '<h2>' + linkClicked.innerHTML +
                    '</h2><span class="close"><img src="../img/cross.png" alt="close tag icon">';
            });
        });
        tagsUstensils.addEventListener('click', function (evt) {
            tagsUstensils.style.display = 'none';
        });
    }
}
// si pas de données dans input général, afficher données initiales avant input
// vérifier au moment de l'appel
let baseIng = function (data) {
    let ingA = document.querySelectorAll('.dropdown_ingredients a');
    let tagsIngredients = document.querySelector('.tags_ingredients');
    let baseResult = [];
//Loop all link in ingredients dropdown, listen to ckick event, display recipes 
//wich contain tagNameClicked 
    for (let i = 0; i < ingA.length; i++) {
        ingA[i].addEventListener('click', function (event) {
            baseResult = [];
            let tagNameClicked = event.target.innerHTML.trim().toLowerCase();
            tagsIngredients.style.display = "flex";
            tagsIngredients.innerHTML = '<h2>' + tagNameClicked +
                '</h2><span class="close"><img src="../Rakotonirina_JeanSebastien_7_18122021_version2.0/img/cross.png" alt="close tag icon"></span>';
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
        new DisplayRecipes().render(data);
    });

};
export default ClickMenu;