// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const IngresarNombre = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");

    if (IngresarNombre.value.trim() === "") { 
        alert("Por favor ingrese un nombre");
        return;
    }
    amigos.push(IngresarNombre.value.trim());

    // Limpiar el campo de entrada
    IngresarNombre.value = "";
    listaAmigos.innerHTML = "";

    listaAmigos.style.display = "block";    

    // Agregar cada amigo a la lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }

    console.log(amigos); 
}

function sortearAmigo() {
   
        if (amigos.length === 0) {
            alert("No hay amigos para buscar");
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);

        const amigoSorteado = amigos.splice(indiceAleatorio, 1)[0];
        document.getElementById("resultado").textContent = "Amigo sorteado: " + amigoSorteado;
    
        document.getElementById("listaAmigos").style.display = "none";
        console.log(amigos); 
        console.log("Challenge completed");
    }
    



