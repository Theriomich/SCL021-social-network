import { signOutUser, addDataPost } from "../lib/firebase.js";
import { postView, editStatus } from './post.js';




export const wall = () => {
  const wallDiv = document.createElement("div")
  let wallPage = `
    <section class="wall-container">
	<header id="header">
    <div class="container__header">
        <div class="logo">
            <img src="./utilitys/img/logo.png" alt="">
        </div>
        <div class="container__nav">
            <nav id="nav">
                <ul>
                    <li><a href="/"  class="select" onclick="onNavigate('/'); return false;">HOME</a></li>
                    <!--li><a href="register#" onclick="onNavigate('/register'); return false;">REGISTER</a></li>
                    <li><a href="login#" onclick="onNavigate('/login'); return false;">LOGIN</a></li-->
                    <li><a href="wall#" id="logout">CIERRE SESION</a></li>
                </ul>
            </nav>          
            <div class="btn__menu" id="btn_menu"><i class="fas fa-bars"></i></div>
        </div>
    </div>
    <!--div class="user-icono">
          <img src="./utilitys/img/usuario.png" alt="user" />
    </div-->
    <div class="saludoUser"> "¡Bienvenido Usuario Tech!"</div>
    </header>
	<section class="containerWall id="containerNewPost">
       <div class="textarea-container"><textarea class="post-message" id="postMessage" cols="10" rows="3"
          placeholder="Comparte  tu opinión  y/o Tips"></textarea>
        </div>
       <button class="buttonL" id="postBtn" type="submit">Publicar</button>
       <div id= "Editar"> </div>
       <!--button class="buttonL" id="logOut" type="submit">Cierre de Sesión</button-->
    </section>
    <section class= "post-container" id="postContainer">
    </section>
    <Footer>
		<div class="container__footer">
       <img src="./utilitys/img/waves-1.gif" alt="">
		</div>
    </Footer>
</section> `

  wallDiv.innerHTML = wallPage

  //cierre de sesión
  const logOut = wallDiv.querySelector("#logout");
  logOut.addEventListener('click', () => {
    signOutUser();
  });

  //Publicación del post
  const buttonPublicar = wallDiv.querySelector('#postBtn');
  buttonPublicar.addEventListener('click', () => {
    const postMessage = wallDiv.querySelector('#postMessage').value;
    if (postMessage === '') {
      alert('Escribe tu publicación, por favor');
    } else {
      addDataPost(postMessage);
      console.log(postMessage);
      wallDiv.querySelector('#postMessage').value = '';
    }
  });

  // Imprime la data, elimina y da like
  postView();

  //const editPost = document.getElementById("postMessage");
  //console.log("aquí debo imprimir edición");
  //editPost("postMessage");


  return wallDiv
}