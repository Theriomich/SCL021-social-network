/*import { userLogin, loginWithGoogle } from '../lib/firebase.js';

//const divRoot = document.getElementById("root");


export const welcome = () => {
  const header = document.createElement('header');
  const myH1 = document.createElement('h1');
  myH1.innerText = 'Bienvenidos a Social Tech, una red social de tecnología que busca la conectividad entre personas de distintas partes del mundo';

  const myButton = document.createElement('button');
  myButton.innerText = 'Quiero Ingresar!';
  myButton.setAttribute("id", "welcomeButton");

  const images= document.createElement('img');
  images.src  = '../utilitys/img/scroll1.png';
  images.setAttribute('class', 'containerScroll');
  document.querySelector('#imageContainers').appendChild(images);
 
  const divImages = document.createElement(div)

  header.appendChild(myH1);
  header.appendChild(myButton);

  // button.querySelector('#signUp').addEventListener('click', () => {
  //   userLogin();
  //   window.location.hash = '#/wall';

  console.log("DENTRO de login ya después", myButton);

  return header
}
divRoot.appendChild(welcome());*/

/*import { userLogin, loginWithGoogle } from '../lib/firebase.js';*/

export const welcomePage = () => {
  const containerwelcome = document.createElement('section');
  containerwelcome.className = 'welcome';
  const viewwelcome = `
      <div class="containerWelcome">
        <div class="parrafo1">Bienvenidos a Social Tech, una red social de tecnología que busca la conectividad entre personas de distintas partes del mundo.</div>
        <div class="containerScroll">
          <img src="utilitys/img/scroll1.png" alt="Scroll" />
        </div>  
        <div id="containerAllCarrusel">
        <div class="containerCarrusel" id="itemCarrusel1">
          <div class="imgCarrusel" id="img1">
    
    
    
          </div>
    
          <div class="arrowsCarrusel">
            <a href="#itemCarrusel3">
              <i class="fa-solid fa-chevron-left"></i>
              <a href="#itemCarrusel2">
                <i class="fa-solid fa-chevron-right"></i>
          </div>
    
        </div>
    
        <div class="containerCarrusel" id="itemCarrusel2">
          <div class="imgCarrusel" id="img2">
            <h3>Comparte contenido, agrega amigos, postea y busca tips sobre tecnología</h3>
    
          </div>
    
          <div class="arrowsCarrusel">
            <a href="#itemCarrusel1">
              <i class="fa-solid fa-chevron-left"></i>
              <a href="#itemCarrusel3">
                <i class="fa-solid fa-chevron-right"></i>
          </div>
    
        </div>
    
        <div class="containerCarrusel" id="itemCarrusel3">
          <div class="imgCarrusel" id="img3">
            <h3> Sencillez y facilidad para todo tipo de dispositivos. Para usarla en todo momento y en todo lugar </h3>
    
          </div>
    
          <div class="arrowsCarrusel">
            <a href="#itemCarrusel2">
              <i class="fa-solid fa-chevron-left"></i>
              <a href="#itemCarrusel1">
                <i class="fa-solid fa-chevron-right"></i>
          </div>
    
        </div>
    
    
    
    
    
      </div>
    
      <div id="containerPoint">
        <a href="#itemCarrusel1"><b>°</b></a>
        <a href="#itemCarrusel2"><b>°</b></a>
        <a href="#itemCarrusel3"><b>°</b></a>
    
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
