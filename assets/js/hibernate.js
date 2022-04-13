let html = document.getElementById('reloj')
setInterval(function () {
    tiempo = new Date();

    horas = tiempo.getHours();
    minutos = tiempo.getMinutes();
    segundos = tiempo.getSeconds();

    if (horas<10){
        horas = "0"+horas;
    }
    if (minutos<10){
        minutos = "0"+minutos;
    }
    if(segundos<10){
        segundos = "0"+segundos;
    }

    html.innerHTML = horas+" : "+minutos+ " : "+segundos;
}, 1000)

document.oncontextmenu = function(){
    return false
}


function home() {
    document.getElementById('menu').style.display = "block";
}

function cerrarMenu() {
    document.getElementById('menu').style.display = "none";
}

function red() {
    document.getElementById('fondo').style.backgroundColor = "red";
    document.getElementById('fondo').style.fontSize = "20px";
    document.getElementById('fondo').style.fontWeight = "800";
    document.getElementById('fondo').style.color = "#fff";
}

function blue() {
    document.getElementById('fondo').style.backgroundColor = "blue";
    document.getElementById('fondo').style.fontSize = "20px";
    document.getElementById('fondo').style.fontWeight = "800";
    document.getElementById('fondo').style.color = "#fff";
}

function defecto() {
    document.getElementById('fondo').style.backgroundColor = "#000";
    document.getElementById('fondo').style.color = "#d4d1ca";
    document.getElementById('fondo').style.fontSize = "13px"
}

//suspender
document.getElementById('dia').addEventListener('click', function(){

    document.getElementById('body').style.background="#eee"
    document.getElementById('pantallaSuspendida').style.background="rgba(22, 22, 22, 0.26)";
    document.getElementById('diaIcon').style.transition="0.7s";
    document.getElementById('diaIcon').style.fontSize="49px";
    document.getElementById('diaIcon').style.color="yellow";
    document.getElementById('diaIcon').style.position="absolute";
    document.getElementById('diaIcon').style.top="12%";
    document.getElementById('nocheIcon').style.color="transparent";

})

document.getElementById('noche').addEventListener('click', function(){

    document.getElementById('body').style.background="#000"
    document.getElementById('pantallaSuspendida').style.background="rgba(155, 155, 154, 0.26)";
    document.getElementById('nocheIcon').style.transition="0.7s";
    document.getElementById('nocheIcon').style.fontSize="49px";
    document.getElementById('nocheIcon').style.color="yellow";
    document.getElementById('nocheIcon').style.position="absolute";
    document.getElementById('nocheIcon').style.top="12%";
    document.getElementById('diaIcon').style.color="transparent";

})


const user = document.getElementById('user')

document.getElementById('limpiarUser').addEventListener('click', function(){
    user.value = '';
});

