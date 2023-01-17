import { FavoritesView } from "./favorites.js";

new FavoritesView("#app"); // passando o root para a classe pai, assim dei inicio à classe e portanto à aplicação.

// Através do defer no index.html pedimos para criar todo o body, chama o main.js, importo o FavoritesView, passa para o construtor o #app, que passa para o super.
// Como o super é o construtor da classe pai, ele vai chamar o construtor da classe pai, que é a Favorites, que vai receber o #app e vai guardar na propriedade root.