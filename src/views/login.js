import { userLogin, observer, loginWithGoogle, loginWithfacebook } from "../lib/firebase.js";

export const login = () => {
  const loginDiv = document.createElement("div")
  let handleLogin =
    `
    <section class="loginContainer">
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
	<section class="login-container">
		<div  class = "containerLogin">
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
      <a href="#" ><h5 class="simple" >¿Olvidaste tu Contraseña?</h5></a>
			<button class="buttonL" id="signUp"  type="submit">
			Login</button>
		</div>
			<h5 class="test" >Ingresa con</h5>
		<div class="logo-container">
			<button id= "googleButtonL"> 
			<img
			class="logo"
			id= "googleLogin"
			src="utilitys/img/logo-google.png"
			alt="google-logo"
			/>
			</button>
			<button id= "facebookButtonL"> 
			<img
			  class="logo"
			  id="facebookLogin"
			  src="utilitys/img/Fb.svg"
			  alt="facebook-logo"
			/>
			</button>
		</div>
    </section>
   </div>
   <Footer>
   <div class="container__footer">
      <img src="./utilitys/img/waves-1.gif" alt="">
   </div>
   </Footer>
</div> `

  loginDiv.innerHTML = handleLogin

  loginDiv.querySelector("#signUp").addEventListener("click", function () {
    let emailSing = loginDiv.querySelector("#emailLogin").value;
    let passwordSing = loginDiv.querySelector("#passLogin").value;
    userLogin(emailSing, passwordSing);
    observer();
  });

  loginDiv.querySelector("#googleButtonL").addEventListener("click", function () {
    let googleLogin = loginDiv.querySelector("#googleLogin")
    loginWithGoogle(googleLogin);
    observer();
  });


  loginDiv.querySelector("#facebookButtonL").addEventListener("click", function () {
    let facebookL = loginDiv.querySelector("#facebookLogin")
    loginWithfacebook(facebookLogin);
    observer();
  });



  return loginDiv
}
