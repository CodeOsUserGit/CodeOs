if (innerWidth <= 1000) {
    alert('Este SO ha sido diseñado solo para ordenadores')
}
//funciones

function about() {
    document.getElementById('about').style.display = "block";
}

function closeAbout() {
    document.getElementById('about').style.display = "none";
}

function skills() {
    document.getElementById('skills').style.display = "block";
}

function closeSkills() {
    document.getElementById('skills').style.display = "none";
}

function projects() {
    document.getElementById('projects').style.display = "block";
}

function closeProjects() {
    document.getElementById('projects').style.display = "none";
}

function contact() {
    document.getElementById('contact').style.display = "block";
}

function closeContact() {
    document.getElementById('contact').style.display = "none";
}

function home() {
    document.getElementById('home').style.display = "block";
}

function closeHome() {
    document.getElementById('home').style.display = "none";
}

function terminal() {
    document.getElementById('terminal').style.display = "block";
}

function closeTerminal() {
    document.getElementById('terminal').style.display = "none";
}

function trash() {
    document.getElementById('trash').style.display = "block";
}

function closeTrash() {
    document.getElementById('trash').style.display = "none";
}



let input = document.getElementById('comando');

input.addEventListener('keyup', (e) => {

    if (e.target.value == "--command") {
        document.getElementById('respuesta').innerHTML = "Utiliza --version para saber la versión actual de CodeOS, en próximas versiones habrán nuevas funciones.";
    }

    if (e.keyCode === 13) {
        if (e.target.value == "--version") {
            document.getElementById('respuesta').innerHTML = "La versión actual de CoderOS es 1.0.0";
        }


        else {
            document.getElementById('respuesta').innerHTML = "Comando inválido, usa --command para más información";
        }
    }
});

// Bueno loco, lo que falta es abrir las apps con los comandos y suspender la página, tabién nos falta obtener el valor del input de Ususario y ponerlo en la terminal, lo cambias por un Web/Coderos/valor-del-input/ y ya.

let usuarioTerminal = document.getElementById('usuarioTerminal')
let user = document.getElementById('user')

usuarioTerminal.value = user.value