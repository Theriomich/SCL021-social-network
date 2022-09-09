export const registerPage = () => {
  const containerCreateUser = document.createElement("section");
  containerCreateUser.className = "register";
  const viewRegister = `
  <div class="containerPages">
  <header>
    <div class="containerHeader">
      <h1>Technology  Red Social</h1>
    </div>
  </header>
    <div class="register-container">
      <section class = "containerLogin">
        <h3 class="login-title">Unete a la red que te mantendra al  día con los mejores Tips de Tecnologia. </h3>
        <input class="Inputs-L"  
        id="userSignUp" 
        type="text" 
        placeholder="Ingresa tu usuario"
        maxlength="30"
        autocomplete="on">
        </input>
        <input
          class="Inputs-L"
          id="emailSignUp"
          type="email"
          placeholder="Ingresa tu correo"
          maxlength="20"
          autocomplete="on"
        />
        <input
          class="Inputs-L"
          id="passwordSignUp"
          type="password"
          placeholder="Ingresa tu contraseña"
          maxlength="10"
          autocomplete="current-password"
        />
        <input
        class="Inputs-L"
        id="passwordValidate"
        type="password"
        placeholder="Repite tu contraseña"
        maxlength="10"
        autocomplete="current-password"
      />
        <button class="Button" id="signup" type="submit">Regístrate</button>
      </section>
	 </div>
</div> `;
      containerCreateUser.innerHTML = viewRegister;
      return containerCreateUser;
    };

