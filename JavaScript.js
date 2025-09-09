function Even() {
    let num = prompt("Podaj liczbę")
    if (num % 2 == 0) {
        console.log("Twoja liczba jest parzysta.")
    }else{
        console.log("Twoja liczba jest nieparzysta.")
    }
    
}
//Even()

function Delta() {
    let a = prompt("Podaj liczę A")
    let b = prompt("Podaj liczę B")
    let c = prompt("Podaj liczę C")

    let delta = (b * b) - (4 * a * c)
    console.log("Delta wynosi " + delta)
}
//Delta()

let but = document.getElementById("b1")
    but.addEventListener('click', function(){
    let inp1 = document.getElementById("i1")
    let inp2 = document.getElementById("i2")
})
