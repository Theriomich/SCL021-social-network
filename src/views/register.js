import { createUser, createUserGoogle, facebookLogin } from "../lib/firebase.js";

export const register = () => {
  const registerDiv = document.createElement("div")
  let viewRegister =
    `
    <section class="registerContainer">
	<header id="header">
    <div class="container__header">
        <div class="logo">
            <img src="./utilitys/img/logo.png" alt="">
        </div>
        <div class="container__nav">
            <nav id="nav">
                <ul>
                  <li><a href="/"  class="select" onclick="onNavigate('/'); return false;">HOME</a></li>
                  <li><a href="register#" onclick="onNavigate('/register'); return false;">REGISTER</a></li>
                  <li><a href="login#" onclick="onNavigate('/login'); return false;">LOGIN</a></li>
                  <!--li><a href="wall#" onclick="onNavigate('/wall'); return false;">WALL</a></li-->
                </ul>
            </nav>          
            <div class="btn__menu" id="btn_menu"><i class="fas fa-bars"></i></div>
        </div>
    </div>
  </header>
	<section class="register-container">
		<div class = "containerLogin">
			<h3 class="login-title">Registrarse </h3>
			<input class="Inputs-L" type="text" id="signName"  placeholder="Ingresa tu nombre"></input>
			<input class="Inputs-L" type="text" id="userSignUp"  placeholder="Ingresa tu Correo"   maxlength="30"  autocomplete="on"></input>      
			<input class="Inputs-L" type="password" id="passwordSignUp" placeholder="Ingresa contraseña" maxlength="10"  autocomplete="current-password" required ></input>
			<br/>
			
			<button class="buttonL" id="register"   type="submit">Regístrar</button>
		</div>	
		    <h5 class="test" >Ingresa con</h5>
          <div class="logo-container">
            <button id= "googleButton"> 
            <img
             class="logo"
             id= "googleLogo"
             src="utilitys/img/logo-google.png"
             alt="google-logo"
             />
            </button>
            <button id= "facebookButton"> 
             <img
             class="logo"
             id="facebookLogo"
             src="utilitys/img/Fb.svg"
             alt="facebook-logo"
             />
             </button>
          </div>
</section>
<Footer>
<div class="container__footer">
   <img src="./utilitys/img/waves-1.gif" alt="">
</div>
</Footer>
</section>`
  registerDiv.innerHTML = viewRegister
  let remPassword = registerDiv.querySelector("#passwordSignUp").value;
  registerDiv.querySelector("#register").addEventListener("click", function () {
    let name = registerDiv.querySelector('#signName').value;
    let email = registerDiv.querySelector("#userSignUp").value;
    let password = registerDiv.querySelector("#passwordSignUp").value;
    if (name === '' || email === '' || password === '') {
      alert('Por favor completa todos los campos');
    } else if (password.length < 6) {
      alert('Tu contraseña debe ser mayor a 6 caracteres');
    } else {
      createUser(email, password, name);
    }

  });

  registerDiv.querySelector("#googleButton").addEventListener("click", function () {
    let googleL = registerDiv.querySelector("#googleLogo")
    createUserGoogle(googleL);
  });


  registerDiv.querySelector("#facebookButton").addEventListener("click", function () {
    let facebookL = registerDiv.querySelector("#facebookLogo")
    facebookLogin(facebookL);
  });




  return registerDiv
}
