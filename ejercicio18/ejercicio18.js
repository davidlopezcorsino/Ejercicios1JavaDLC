// boton alert
document.getElementById("btn").addEventListener("click", Boton);
function Boton(){
    alert("documento guardado")
}

//Nombre cambia de color
let selctor = document.getElementById("formNombre");
selctor.addEventListener("mouseover",function() {
 this.style.backgroundColor = "#FF0000"
});
let selctor1 = document.getElementById("formNombre");
selctor.addEventListener("mouseout",function() {
 this.style.backgroundColor = "#FFFFFF"
});

// CONSONANTE VOCAL
let consVocal = document.getElementById("color");
consVocal.addEventListener("input",color)
function color () {
   
    if(this.value === "a,e,i,o,u"){
 this.style.color = "#FF0000"; }

else{
    this.style.color ="#FFFF00"
}
}
 
 

 



