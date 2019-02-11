

var botoGenerarFormulari = document.getElementById("generarFormulari");
var titolFormulari = document.getElementById("nomFomrulari");
var body = document.getElementsByTagName("body")[0];

countForm = 0;

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
    
    form = document.createElement("form");
    
    form.id = "form"+countForm;
    countForm++;

    var contingut = document.createTextNode(titol);
    
    form.appendChild(contingut);
    
    var ultimaLinea = document.createElement("hr");
    
    generaLlista(form);
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

function generaLlista(form) {

    var opcions = ["Input", "Text", "Data", "Fitxer", "Rang", "Email"]; //Valors que l'usuari pot seleccionar per omplir el seu formulari
    var seleccio = document.createElement("select"); //Creem el element select

    seleccio.id = "seleccio"; //Posem el ID a la llista. Potser cal que es canvii el "ID" de cada select per cada formulari?
    form.appendChild(seleccio); //Afegim el select al formulari

    for (var i = 0; i < opcions.length; i++) {
        var option = document.createElement("option");
        option.value = opcions[i];
        option.text = opcions[i];
        seleccio.appendChild(option);
    }

    comptaInput = 0;
    comptaTexts = 0;
    comptaDates = 0;
}

function elementSeleccionat(){

    var e = document.getElementById("seleccio").value;

    if (e === "Input") {

        var generaInput = document.createElement("input");
        generaInput.setAttribute ("type", "text");
        generaInput.setAttribute("id", (countForm + "-date-" + comptaInput)); //Aquest countForm només ens servirà per afegir-ho correctament al ultim formulari generat, si volem tornar i afegir més coses després d'haver creat més ja no serà correcte
        form.appendChild(generaInput);
        comptaInput++;

    } else if (e === "Text") {

        var generaText = document.createElement("input");
        generaText.setAttribute("type", "text");
        form.appendChild(generaText);
        comptaTexts++;

    } else if (e === "Data") {

        var generaData = document.createElement("input");
        generaData.setAttribute ("type", "date");
        form.appendChild(generaData);
        comptaDates++;

    } else if (e === "Fitxer") {

        var generaFitxer = document.createElement("input");
        generaFitxer.setAttribute ("type", "file");
        form.appendChild(generaFitxer);
        
    } else if (e === "Rang") {

        var generaRang = document.createElement("input");
        form.appendChild(generaRang);
        
    } else if (e === "Email") {

        var generaEmail = document.createElement("input");
        generaFitxer.setAttribute ("type", "email");
        form.appendChild(generaEmail);
        
    }

}
