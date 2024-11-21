
const contadorElement = document.getElementById("contadorVisitas");
const btnReestablecer = document.getElementById("btnReestablecer");


function actualizarContador() {

    let visitas = localStorage.getItem("visitas");

   
    if (!visitas) {
        visitas = 0;
    }

    
    visitas++;

   
    localStorage.setItem("visitas", visitas);

  
    contadorElement.textContent = visitas;
}


function reestablecerContador() {
   
    localStorage.setItem("visitas", 0);

  
    contadorElement.textContent = 1; 
}

document.addEventListener("DOMContentLoaded", function() {
    actualizarContador();
});


btnReestablecer.addEventListener("click", function() {
    reestablecerContador();
});
