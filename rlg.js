//DOM

const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

//Event

setInterval(relogio,1000)

//Function

function relogio (){

    let hoje = new Date()
    let hr =  hoje.getHours()
    let min = hoje.getMinutes()
    let sec = hoje.getSeconds()

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = sec
}
