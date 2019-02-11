

var botoGenerarFormulari = document.getElementById("generarFormulari");
var titolFormulari = document.getElementById("nomFomrulari");
var body = document.getElementsByTagName("body")[0];

var countForm = 0;

botoGenerarFormulari.addEventListener("click", esPotCrear);

//Comproba que existeixi un titol per el formulari, sino no el crea.
function esPotCrear() {
    if (titolFormulari.value != null || titolFormulari.value != "") {
        generarFormulari(titolFormulari.value);
        titolFormulari.value = "";
    } else {
        alert("No has possat titol.");
    }
}

function generarFormulari(titol) {
    
    var form = document.createElement("form");
    
    form.id = "form"+countForm;
    countForm++;

    var contingut = document.createTextNode(titol);
    
    form.appendChild(contingut);
    
    var ultimaLinea = document.createElement("HR");
    
    form.appendChild(ultimaLinea);
    
    body.appendChild(form);
    
    //Genera el esdeveniment per el form que es genera.
    document.getElementById(form.id).addEventListener("mouseenter",ampliarFormulari);
    document.getElementById(form.id).addEventListener("mouseleave",ampliarFormulari);
}

function mostrarBotoFormulari(e){
    //alert(""+e.originalTarget.children[countForm+2].form.id);
    for(var i=0;i!=countForm;i++){
        document.getElementById("form"+i);
    }
    
    console.log(e);
}

function ocultarBotoFormulari(e){
    //alert(""+e.originalTarget.children[countForm+2].form.id);
    for(var i=0;i!=countForm;i++){
        document.getElementById("form"+i);
    }
    
    console.log(e);
}