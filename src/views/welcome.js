/*import { userLogin, loginWithGoogle } from '../lib/firebase.js';*/

export const welcomePage = () => {
  const containerwelcome = document.createElement('section');
  containerwelcome.className = 'welcome';
  const viewwelcome = `
 
      <div class="containerWelcome">
      <header>
      <div class="containerHeader">
        <h1>Technology Red Social</h1>
      </div>
    </header>
        <div class="parrafo1">Bienvenidos a Social Tech, una red social de tecnología que busca la conectividad entre personas de distintas partes del mundo.</div>
         
        <base href="utilitys/img">
        <div id="captioned-gallery">
          <figure class="slider">
            <figure>
              <img src="/utilitys/img/960x0.jpg" alt="technology"
              <figcaption>Techonolgy in the World</figcaption>
            </figure>
            <figure>
              <img src="/utilitys/img/friendspc.png" alt="friends"
              <figcaption>Comparte contenido, agrega amigos, postea y busca tips sobre tecnología</figcaption>
              <p class="imageP">Comparte contenido, agrega amigos, postea y busca tips sobre tecnología<p>
            </figure>
            <figure>
              <img src="/utilitys/img/friendsCel.jpg" alt="friendscel"
              <figcaption>Utah, United States</figcaption>
            </figure>         
            
          </figure>
        </div>
        
        <div class="parrafo2">Nuestra meta es dar a conocer avances tecnologícos, programas para el uso profesional o recreativo y nuevos dispositivos para mejorar la calidad de vida y el funcionamiento de la sociedad, para que puedan compartir y conocer nuevas tecnologías de interés común.</div>
        <div class="buttonCover">
          <!--button type="button" class="button" id="Inicio">¡Quiero Ingresar!</button-->
          <button type="button" class="button"  id="Inicio" onclick="location.href='login.html';"> ¡Quiero Ingresar! </button>
        </div>
      </div>  `;
  containerwelcome.innerHTML = viewwelcome;
  return containerwelcome;
};
