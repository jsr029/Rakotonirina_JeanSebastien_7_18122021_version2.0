import ClickMenu from './ClickMenu.js';
import dropdown from './dropdown.js';
import dropSearch from './dropSearch.js';
import recipes from './recipes.js';
import searchInput from './searchInput.js';
searchInput(recipes);
dropdown();
new ClickMenu().render(recipes);
dropSearch();
