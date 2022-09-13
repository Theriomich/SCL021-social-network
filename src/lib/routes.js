/*import { welcome } from '../views/welcome.js';
import { register } from '../views/register.js';
import { login } from '../views/login.js';
import { wall } from '../views/wall.js';*/

import register from '../views/register.js'

const routes = {
  '/': welcome,
  '/register': register(),
  '/login': login,
  '/wall': wall
};
const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  rootDiv.innerHTML = routes[pathname]
}
window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]
}