import recipes from './recipes.js';
class Recipes {
    render(data) {
        let section = document.querySelector('.content');
        //Parcours le tableau et affiche les éléments tels que nom, temps, ingrédients et description de la recette
        for (let i = 0; i < data.length; i++) {
            let boxRecipie = `
            <article class="articles_bloc">
                <div class="media"></div>
                    <h2>${data[i].name?data[i].name.substr(0, 200)+'...':''}
                        <span>
                            <img src="./img/time.png" alt="Horloge"> ${data[i].time} min
                        </span>
                    </h2>
        `;
            section.insertAdjacentHTML("afterbegin", boxRecipie);
            let article = document.querySelector('article');
            let ulcreate = document.createElement('ul');
            ulcreate.className = "data_bloc--ingredients";
            article.append(ulcreate);
            let ul = document.querySelector('ul.data_bloc--ingredients');
            for (let a = 0; a < data[i].ingredients.length; a++) {
                let boxRecipieP = `
                <li>
                    ${data[i].ingredients[a].ingredient ? data[i].ingredients[a].ingredient : ''}:
                    ${data[i].ingredients[a].quantity ? data[i].ingredients[a].quantity : ''}
                    ${data[i].ingredients[a].unit ? data[i].ingredients[a].unit : ''}
                </li>
        `;
                ul.insertAdjacentHTML("beforeend", boxRecipieP);
            }
            let ulcreate2 = document.createElement('ul');
            ulcreate2.className = "data_bloc--description";
            article.append(ulcreate2);
            let ul2 = document.querySelector('ul.data_bloc--description');
            let boxDescr = `
            <li>${data[i].description.substr(0, 200) + '...'}</li>
            </article>
        `;
            ul2.insertAdjacentHTML("beforeend", boxDescr);
        }

    }
}

new Recipes().render(recipes);