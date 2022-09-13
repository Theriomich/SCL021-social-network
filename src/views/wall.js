export const wall = () => {
    const wallDiv = document.createElement("div")
    let wallPage = `
<h1>I am wall Page</h1>
`
    wallDiv.innerHTML = wallPage

    return wallDiv
}
