//import { welcome } from '../views/welcome.js';
import { login } from '../views/login.js';
import { register } from '../views/register.js';
import { wall } from '../views/wall.js';//

export const routes = (hash) => {
  const menuRegister = document.getElementById('root');
  menuRegister.innerHTML = '';
  switch (hash) {
    case '#/':
    case '#/welcome':
      menuRegister.appendChild(welcome());
      break;
    case '#/login':
      menuRegister.appendChild(login());
      break;
    case '#/register':
      menuRegister.appendChild(register());
      break;
   // case '#/wall':
   //   menuRegister.appendChild(wall());
   //   break;//
    default:
      break;
  }
};
