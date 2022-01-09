class ClickMenu {
    render() {
        let tagsIngredients = document.querySelector('.tags_ingredients');
        if(tagsIngredients.innerHTML.length == 0){
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
        tagsIngredients.addEventListener('click', function (evt) {
            tagsIngredients.style.display = 'none';
        });
        let tagsAppliance = document.querySelector('.tags_appliance');
        if(tagsAppliance.innerHTML.length == 0){
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
         if(tagsUstensils.innerHTML.length == 0){
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
    search(){
        let tagsIngredients = document.querySelector('.tags_ingredients');
        console.log(tagsIngredients.innerHTML);
    }
}
export default ClickMenu;