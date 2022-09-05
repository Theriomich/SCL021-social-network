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
        <div id="carousel-example" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel-example" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example" data-slide-to="1"></li>
    <li data-target="#carousel-example" data-slide-to="2"></li>
  </ol>

  <div class="carousel-inner">
    <div class="item active">
      <a href="#"><img src="utilitys/img/scroll1.png" alt="Scroll" /></a>
      <div class="carousel-caption">
        <h3>Meow</h3>
        <p>Just Kitten Around</p>
      </div>
    </div>
    <div class="item">
      <a href="#"><img src="src/utilitys/img/friendspc.jpg" /></a>
      <div class="carousel-caption">
        <h3>Meow</h3>
        <p>Just Kitten Around</p>
      </div>
    </div>
    <div class="item">
      <a href="#"><img src="src/utilitys/img/res_4013728_young_people_mobile.jpg" /></a>
      <div class="carousel-caption">
        <h3>Meow</h3>
        <p>Just Kitten Around</p>
      </div>
    </div>
  </div>

  <a class="left carousel-control" href="#carousel-example" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#carousel-example" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
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
