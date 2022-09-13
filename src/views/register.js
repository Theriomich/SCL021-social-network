//export const registerPage = () => {
// const containerCreateUser = document.createElement("section");
//containerCreateUser.className = "register";
//const viewRegister =
 let register = 
`
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
      <a href="#" onclick="onNavigate('/register'); return false;"><h5 class="simple" >¿Olvidaste tu Contraseña?</h5></a>
      <button class="Button" id="signup" onclick="location.href='login.html';" type="submit">Regístrar</button>
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
</div> `
//containerCreateUser.innerHTML = viewRegister;
//return containerCreateUser;
   // };

