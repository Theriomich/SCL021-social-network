//import { userLogin, loginWithGoogle } from "../lib/firebase.js";
/*import { routes } from "./routes.js";
import { register } from "./register.js";
import { welcome } from "./welcome.js";*/


//export const login = () 
// {
//const containerLogin = document.createElement("section");
//containerLogin.className = "view-container";
//const viewLogin = 
export const login = () => {
  const loginDiv = document.createElement("div")
  let handleLogin =
    `
    <header id="header">
    <div class="container__header">
        <div class="logo">
            <img src="./utilitys/img/logo.png" alt="">
        </div>
        <div class="container__nav">
            <nav id="nav">
                <ul>
                  <li><a href="#"  class="select" onclick="onNavigate('/'); return false;">HOME</a></li>
                  <li><a href="register#" onclick="onNavigate('/register'); return false;">REGISTER</a></li>
                  <li><a href="login#" onclick="onNavigate('/login'); return false;">LOGIN</a></li>
                  <li><a href="wall#" onclick="onNavigate('/wall'); return false;">WALL</a></li>
                </ul>
            </nav>          
            <div class="btn__menu" id="btn_menu"><i class="fas fa-bars"></i></div>
        </div>
    </div>
  </header>
<div class="containerPages">
    <div class="login-container">
    <section class = "containerLogin">
      <h3 class="login-title">Inicia Sesión</h3>
     <input
        class="Inputs-L"
        id="emailLogin"
        type="email"
        placeholder="Usuario / Correo"
        maxlength="30"
      />
      <input
        class="Inputs-L"
        id="passLogin"
        type="password"
        placeholder="Contraseña"
        maxlength="30"
      />
      <br/>
      <button class="buttonL" id="signUp" onclick="location.href='wall.html';" type="submit">
        Login
      </button>
    </section>
    <h5 class="test" >Ingresa con</h5>
    <center><div class="logo-container">
        <img
          class="logo"
          src="utilitys/img/logo-google.png"
          alt="google-logo"
        />
        <img
          class="logo"
          src="utilitys/img/Fb.svg"
          alt="google-logo"
        />
    </div></center>
 </div>
</div>  
         `

  loginDiv.innerHTML = handleLogin
  // loginDiv.querySelector("#signUp").addEventListener("click", function () {

  // });
  return loginDiv
}
  //containerLogin.innerHTML = viewLogin;
//}