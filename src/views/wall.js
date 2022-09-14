export const wall = () => {
    const wallDiv = document.createElement("div")
    let wallPage = `

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
<!--h1>I am wall Page</h1-->
`
    wallDiv.innerHTML = wallPage

    return wallDiv
}
