export const register = () => {
  const containerCreateUser = document.createElement("section");
  containerCreateUser.className = "view-container";
  const register = `
    <header>
    </header>
    <div class="register-container">
      <div class="login-inputs">
        <h3 class="login-title">Únete a Technology Red Social </h3>
        <input class="user-name"  
        id="userSignUp" 
        type="text" 
        placeholder="Ingresa tu usuario"
        maxlength="30"
        autocomplete="on">
        </input>
        <input
          class="user-input"
          id="emailSignUp"
          type="email"
          placeholder="Ingresa tu correo"
          maxlength="20"
          autocomplete="on"
        />
        <input
          class="user-password"
          id="passwordSignUp"
          type="password"
          placeholder="Ingresa tu contraseña"
          maxlength="10"
          autocomplete="current-password"
        />
        <input
        class="user-password"
        id="passwordValidate"
        type="password"
        placeholder="Repite tu contraseña"
        maxlength="10"
        autocomplete="current-password"
      />
        <button class="register-btn-inner" id="signup" type="submit">Regístrate</button>
      </div>`;
};
