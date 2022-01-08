function dropdown() {
    let ingredientsResult = document.querySelector('.ingredientsResult');
    let buttonI = document.querySelector('.dropdown_ingredients-button');
    let iconI = document.querySelector('.dropdown_ingredients-button i');
    let h2I = document.querySelector('.dropdown_ingredients-button h2');
    let inputI = document.querySelector('.dropdown_ingredients-buttonSearch');
    iconI.addEventListener('click', function (event) {
        if (iconI.className == 'icon-angle-down') {
            iconI.className = 'icon-angle-up';
            h2I.style.display = 'none';
            inputI.style.display = 'block';
            buttonI.style.width = '600px';
            ingredientsResult.style.display = 'flex';
        }else{
            iconI.className = 'icon-angle-down';
            h2I.style.display = 'block';
            inputI.style.display = 'none';
            buttonI.style.width = '150px';
            ingredientsResult.style.display = 'none';
        }
    });
    let applianceResult = document.querySelector('.applianceResult');
    let buttonA = document.querySelector('.dropdown_appliance-button');
    let iconA = document.querySelector('.dropdown_appliance-button i');
    let h2A = document.querySelector('.dropdown_appliance-button h2');
    let inputA = document.querySelector('.dropdown_appliance-buttonSearch');
    iconA.addEventListener('click', function (event) {
        if (iconA.className == 'icon-angle-down') {
            iconA.className = 'icon-angle-up';
            h2A.style.display = 'none';
            inputA.style.display = 'block';
            buttonA.style.width = '290px';
            applianceResult.style.display = 'flex';
        }else{
            iconA.className = 'icon-angle-down';
            h2A.style.display = 'block';
            inputA.style.display = 'none';
            buttonA.style.width = '150px';
            applianceResult.style.display = 'none';
        }
    });
}
export default dropdown;