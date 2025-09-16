function Even() {
    let num = document.querySelector("#num").value
    if (num % 2 == 0) {
        document.write("Twoja liczba jest parzysta.")
    }else{
        document.write("Twoja liczba jest nieparzysta.")
    }
    
}
//Even()

function Delta() {
    let a = document.querySelector("#A").value
    let b = document.querySelector("#B").value
    let c = document.querySelector("#C").value

    let delta = (b * b) - (4 * a * c)
    document.write("Delta wynosi " + delta + "<br>")
    b = b - (b * 2)
    if (delta < 0) {
        document.write("Nie ma pierwiastków")
    } else if (delta = 0) {
        let x0 = -b / (2 * a)
        document.write("Pierwiastek X-0 to " + x0)
    } else {
        let x1 = -b - Math.sqrt(delta) / (2 * a)
        let x2 = -b + Math.sqrt(delta) / (2 * a)
        document.write("Pierwiastek X-1 to " + x1 + "<br>")
        document.write("Pierwiastek X-2 to " + x2)
    }
}
//Delta()

function Join() {
    let inp1 = document.querySelector("#i1").value
    let inp2 = document.querySelector("#i2").value
    output = inp1 + inp2
    document.write(output)
}
