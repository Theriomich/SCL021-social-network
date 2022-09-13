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

<div class="containerPages">
    <div class="login-container">
    <section class = "containerLogin">
      <h3 class="login-title">Inicia Sesión</h3>
  <section class = "containerLogin">
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