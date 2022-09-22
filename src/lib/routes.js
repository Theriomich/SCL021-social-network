import { welcome } from '../views/welcome.js';
import { register } from '../views/register.js';
import { login } from '../views/login.js';
import { wall } from '../views/wall.js';


export const routes = {
  '/': welcome(),
  '/register': register(),
  '/login': login(),
  '/wall': wall(),
};
const rootDiv = document.getElementById('root');
rootDiv.appendChild(routes[window.location.pathname]);

export const onNavigate = (pathname) => {
  console.log(pathname)
  //console.log(routes [pathname]) este era el que estaba y agregue el de abajo para prueba.
  console.log(routes[window.location.pathname])
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  rootDiv.innerHTML = " ";
  rootDiv.appendChild(routes[pathname]);
}
/*window.onpopstate = () => {
  rootDiv.innerHTML =" ";
  rootDiv.appendChild (routes[window.location.pathname]); 
}*/