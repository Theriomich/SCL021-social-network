//import { routes } from './lib/routes.js';
import { observer } from './lib/firebase.js';
import { welcomePage } from '../views/welcome.js';
// Este es el punto de entrada de tu aplicacion
/* import { myFunction } from './lib/index.js'; */
/* myFunction(); */
/*window.addEventListener('load', () => {
  routes(window.location.hash);
  observer();
});

window.addEventListener("hashchange", () => {
  routes(window.location.hash);
  observer();
});*/

document.getElementById("root").appendChild(welcomePage()); 