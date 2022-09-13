// import { welcome } from "./views/welcome.js"
import { routes } from "./lib/routes.js"
const root = document.getElementById("root")
console.log(window.location.pathname)
root.appendChild(routes[window.location.pathname])

const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    rootDiv.appendChild(routes[pathname])
}
window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
}



