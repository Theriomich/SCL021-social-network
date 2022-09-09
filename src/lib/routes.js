import { welcome } from '../views/welcome.js';
import { register } from '../views/register.js';
//import { login } from '../views/login.js';//
//import { wall } from '../views/wall.js';//

export const routes = (hash) => {
  const menuRegister = document.getElementById('root');
  menuRegister.innerHTML = '';
  switch (hash) {
    case '#/':
    case '#/welcome':
      menuRegister.appendChild(welcome());
      break;
    case '#/register':
      menuRegister.appendChild(register());
      break;
    default:
      break;
  }
};
