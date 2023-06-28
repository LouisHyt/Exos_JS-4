const container = document.querySelector(".container");
let cache = [];

window.addEventListener("keydown", (e) => {

    if(e.key.toLowerCase() === "arrowup"){
        if(cache.length === 0) return
        cache[cache.length - 1].remove();
        cache.pop();
        return
    }
    let cube = document.createElement("div");
    cube.classList.add("cube");
    let randomColor = getRandomColor();
    cube.style.backgroundColor = randomColor;

    cube.addEventListener("click", function(){
        if(cache.length < 225) return
        this.style.backgroundColor = "black";
    })


    container.appendChild(cube);
    cache.push(cube);
})


function getRandomColor() {
    const characters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += characters[Math.round(Math.random() * 15)];
    }
    return color;
}