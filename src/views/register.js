function register() {
  const registerDiv = document.createElement("div")

  let viewRegister = /*html*/
    `
<div class="containerPages">
<header>
  <div class="containerHeader">
    <img src="./utilitys/img/logo.png" alt="Technology  Red Social">
  </div>
</header>
  <div class= "register-container">
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
    <div class="logo-container">
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
    </div>
  </div>
</div> 
`
  registerDiv.innerHTML = viewRegister
  viewRegister.querySelector("#register").addEventListener("click", function () {
    console.log("diste un click")
  });
  return registerDiv

}
export default register




