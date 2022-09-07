/*import { userLogin, loginWithGoogle } from '../lib/firebase.js';*/

export const welcomePage = () => {
  const containerwelcome = document.createElement('section');
  containerwelcome.className = 'welcome';
  const viewwelcome = `
      <div class="containerWelcome">
        <div class="parrafo1">Bienvenidos a Social Tech, una red social de tecnología que busca la conectividad entre personas de distintas partes del mundo.</div>
        <!--<div class="containerScroll">
          <img src="utilitys/img/scroll1.png" alt="Scroll" />
        </div-->  
        <base href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/">
        <div id="captioned-gallery">
          <figure class="slider">
            <figure>
              <img src="hobbiton-lake.jpg" alt>
              <figcaption>Hobbiton, New Zealand</figcaption>
            </figure>
            <figure>
              <img src="wanaka-drowned-tree.jpg" alt>
              <figcaption>Wanaka, New Zealand</figcaption>
            </figure>
            <figure>
              <img src="utah-peak.jpg" alt>
              <figcaption>Utah, United States</figcaption>
            </figure>
            <figure>
              <img src="bryce-canyon-utah.jpg" alt>
              <figcaption>Bryce Canyon, Utah, United States</figcaption>
            </figure>
            <figure>
              <img src="hobbiton-lake.jpg" alt>
              <figcaption>Hobbiton, New Zealand</figcaption>
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
