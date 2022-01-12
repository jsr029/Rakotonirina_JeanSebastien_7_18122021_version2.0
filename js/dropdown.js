function dropdown() {
    let ingredientsResult = document.querySelector('.ingredientsResult');
    let buttonI = document.querySelector('.dropdown_ingredients-button');
    let iconI = document.querySelector('.dropdown_ingredients-button i');
    let h2I = document.querySelector('.dropdown_ingredients-button h2');
    let inputI = document.querySelector('.dropdown_ingredients-buttonSearch');

    let applianceResult = document.querySelector('.applianceResult');
    let buttonA = document.querySelector('.dropdown_appliance-button');
    let iconA = document.querySelector('.dropdown_appliance-button i');
    let h2A = document.querySelector('.dropdown_appliance-button h2');
    let inputA = document.querySelector('.dropdown_appliance-buttonSearch');

    let ustensilsResult = document.querySelector('.ustensilsResult');
    let buttonU = document.querySelector('.dropdown_ustensils-button');
    let iconU = document.querySelector('.dropdown_ustensils-button i');
    let h2U = document.querySelector('.dropdown_ustensils-button h2');

    iconI.addEventListener('click', function (event) {
        if (iconI.className == 'icon-angle-down') {
            iconI.className = 'icon-angle-up';
            h2I.style.display = 'none';
            inputI.style.display = 'block';
            buttonI.style.width = '800px';
            buttonI.style.borderRadius = '5px 5px 0 0';
            ingredientsResult.style.display = 'flex';

            iconA.className = 'icon-angle-down';
            h2A.style.display = 'block';
            inputA.style.display = 'none';
            buttonA.style.width = '150px';
            buttonA.style.borderRadius = '5px';
            applianceResult.style.display = 'none';

            iconU.className = 'icon-angle-down';
            h2U.style.display = 'block';
            inputU.style.display = 'none';
            buttonU.style.width = '150px';
            buttonU.style.borderRadius = '5px';
            ustensilsResult.style.display = 'none';

        } else {
            iconI.className = 'icon-angle-down';
            h2I.style.display = 'block';
            inputI.style.display = 'none';
            inputI.style.width = '150px';
            buttonI.style.width = '150px';
            buttonI.style.borderRadius = '5px';
            ingredientsResult.style.display = 'none';
        }
    });
    iconA.addEventListener('click', function (event) {
        if (iconA.className == 'icon-angle-down') {
            iconA.className = 'icon-angle-up';
            h2A.style.display = 'none';
            inputA.style.display = 'block';
            buttonA.style.width = '480px';
            buttonA.style.borderRadius = '5px 5px 0 0';
            applianceResult.style.display = 'flex';

            iconI.className = 'icon-angle-down';
            h2I.style.display = 'block';
            inputI.style.display = 'none';
            buttonI.style.width = '150px';
            buttonI.style.borderRadius = '5px';
            ingredientsResult.style.display = 'none';

            iconU.className = 'icon-angle-down';
            h2U.style.display = 'block';
            inputU.style.display = 'none';
            buttonU.style.width = '150px';
            buttonU.style.borderRadius = '5px';
            ustensilsResult.style.display = 'none';

        } else {
            iconA.className = 'icon-angle-down';
            h2A.style.display = 'block';
            inputA.style.display = 'none';
            buttonA.style.width = '150px';
            buttonA.style.borderRadius = '5px';
            applianceResult.style.display = 'none';
        }
    });
    let inputU = document.querySelector('.dropdown_ustensils-buttonSearch');
    iconU.addEventListener('click', function (event) {
        if (iconU.className == 'icon-angle-down') {
            iconU.className = 'icon-angle-up';
            h2U.style.display = 'none';
            inputU.style.display = 'block';
            buttonU.style.width = '630px';
            buttonU.style.borderRadius = '5px 5px 0 0';
            ustensilsResult.style.display = 'flex';

            iconA.className = 'icon-angle-down';
            h2A.style.display = 'block';
            inputA.style.display = 'none';
            buttonA.style.width = '150px';
            buttonA.style.borderRadius = '5px';
            applianceResult.style.display = 'none';

            iconI.className = 'icon-angle-down';
            h2I.style.display = 'block';
            inputI.style.display = 'none';
            buttonI.style.width = '150px';
            buttonI.style.borderRadius = '5px';
            ingredientsResult.style.display = 'none';

        } else {
            iconU.className = 'icon-angle-down';
            h2U.style.display = 'block';
            inputU.style.display = 'none';
            buttonU.style.width = '150px';
            buttonU.style.borderRadius = '5px';
            ustensilsResult.style.display = 'none';
        }
    });
    inputI.onblur = function () {
        // ...and put the focus back
        inputI.innerHTML='';
    };

}
export default dropdown;