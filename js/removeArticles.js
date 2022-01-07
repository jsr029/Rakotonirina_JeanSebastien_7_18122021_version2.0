//Function remove Index Html
function removeArticles() {
    // select the target element
    const e = document.querySelectorAll(".articles_bloc");
    // remove the list item
    for (let i = 0; i < e.length; i++) {
        e[i].parentElement.removeChild(e[i]);
    }
}
export default removeArticles;