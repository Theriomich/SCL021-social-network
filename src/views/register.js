// import { registerButton } from "../lib/index.js"
import { getAuth, createUserWithEmailAndPassword } from "../lib/firebase.js"
export const register = () => {
  const registerDiv = document.createElement("div")

  let viewRegister = /*html*/
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
                  <li><a href="#" onclick="onNavigate('/register'); return false;">REGISTER</a></li>
                  <li><a href="#" onclick="onNavigate('/login'); return false;">LOGIN</a></li>
                  <li><a href="#" onclick="onNavigate('/wall'); return false;">WALL</a></li>
                </ul>
            </nav>          
            <div class="btn__menu" id="btn_menu"><i class="fas fa-bars"></i></div>
        </div>
    </div>
  </header>
<div class="containerPages">
  <div class="register-container">
    <section class = "containerLogin">
      <h3 class="login-title">Registrarse </h3>
      <input class="Inputs-L"  
      id="userSignUp" 
      type="text" 
      placeholder="Usuario / Correo"
      maxlength="30"
      autocomplete="on">
      </input>
      <input
        class="Inputs-L"
        id="passwordSignUp"
        type="password"
        placeholder="Contraseña"
        maxlength="10"
        autocomplete="current-password"
      />
      <input
      class="Inputs-L"
      id="passwordValidate"
      type="password"
      placeholder="Repitir contraseña"
      maxlength="10"
      autocomplete="current-password"
    />
      <br/>
      <a href="#" ><h5 class="simple" >¿Olvidaste tu Contraseña?</h5></a>
      <button class="buttonL" id="register" onClick= "location.href = 'login.html'" onClick=""  type="submit">Regístrar</button>
      
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
  <Footer>
    <div class="container__footer">
      <div class="logo_footer">
        <img src="./utilitys/img/wd1.svg" alt="">
      </div>
    </div>
  </Footer>
</div> `

  registerDiv.innerHTML = viewRegister

  let registerButton = registerDiv.querySelector("#register")
  let email = registerDiv.querySelector("#userSignUp").value
  let password = registerDiv.querySelector("#passwordSignUp").value
  console.log(email);
  console.log(password);

  if (registerButton !== null) {
    registerButton.addEventListener("click", (event) => {
      event.preventDefault();

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });



    });
  }


  function registerUser() {


  }



  // addEventListener("click", function () {
  //   console.log("diste un click")
  // });
  return registerDiv



}


