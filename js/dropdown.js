function dropdown() {
    let dropI = document.querySelector('.dropdown_ingredients');
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
        }else{
            iconI.className = 'icon-angle-down';
            h2I.style.display = 'block';
            inputI.style.display = 'none';
            buttonI.style.width = '170px';
        }
    });
}
export default dropdown;