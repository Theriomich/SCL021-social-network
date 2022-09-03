/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import { welcome } from './welcome.js';
import { login } from './login.js';
import { register } from './register.js';
import { wall } from './wall.js';

export const routes = (hash) => {
  const menuRegister = document.getElementById('root');
  menuRegister.innerHTML = '';
  if (hash === '#/' || hash === '/' || hash === '#' || hash === '') {
    menuRegister.appendChild(welcome());
  } else if (hash === '#/welcome') {
    menuRegister.appendChild(welcome());
  } else if (hash === '#/login') { 
    menuRegister.appendChild(login());
  } else if (hash === '#/register') {
    menuRegister.appendChild(register());
  } else if (hash === '#/wall') {
    menuRegister.appendChild(wall());
  }
};
