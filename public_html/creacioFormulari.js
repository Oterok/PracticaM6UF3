var botoGenerarFormulari = document.getElementById("generarFormulari");
var titolFormulari = document.getElementById("nomFomrulari");
var body = document.getElementsByTagName("body")[0];

countForm = 0;
arrayInputs = [[]];

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
  form.id = "form" + countForm;
  countForm++;

  var contingut = document.createTextNode(titol);
  form.appendChild(contingut);
  var ultimaLinea = document.createElement("hr");

  generaLlista(form);
  form.appendChild(ultimaLinea);
  body.appendChild(form);

  //Genera el esdeveniment per el form que es genera.
  //document.getElementById(form.id).addEventListener("mouseenter",ampliarFormulari);
  //document.getElementById(form.id).addEventListener("mouseleave",ampliarFormulari);

  arrayInputs[countForm-1] = [[0], [0], [0], [0], [0], [0], [0], [0]]; //Inicialitza una array plena de zeros

}

function mostrarBotoFormulari(e) {
  //alert(""+e.originalTarget.children[countForm+2].form.id);
  for (var i = 0; i != countForm; i++) {
    document.getElementById("form" + i);
  }
  console.log(e);
}

function ocultarBotoFormulari(e) {
  //alert(""+e.originalTarget.children[countForm+2].form.id);
  for (var i = 0; i != countForm; i++) {
    document.getElementById("form" + i);
  }

  console.log(e);
}

function generaLlista(form) {
  var opcions = ["Input", "Text", "Data", "Fitxer", "Rang", "Email", "Radios", "Checkbox"]; //Valors que l'usuari pot seleccionar per omplir el seu formulari
  var seleccio = document.createElement("select"); //Creem el element select

  seleccio.id = "seleccio" + (countForm-1); //Posem el ID a la llista. Potser cal que es canvii el "ID" de cada select per cada formulari?
  form.appendChild(seleccio); //Afegim el select al formulari

  for (var i = 0; i < opcions.length; i++) {
    var option = document.createElement("option");
    option.value = opcions[i];
    option.text = opcions[i];
    seleccio.appendChild(option);
  }

}


function elementSeleccionat() {

  var e = document.getElementById("seleccio" + (countForm-1)).value;
  var f = countForm - 1;

  if (e === "Input") {
    var generaInput = document.createElement("input");
    generaInput.setAttribute("type", "text");
    generaInput.setAttribute("id","form-" + f + "-input-" + arrayInputs[f][0]);
    form.appendChild(generaInput);
    arrayInputs[f][0]++;

  } else if (e === "Text") {
    var generaText = document.createElement("input");
    generaText.setAttribute("type", "text");
    generaText.setAttribute("id","form-" + f + "-text-" + arrayInputs[f][1]);
    form.appendChild(generaText);
    arrayInputs[f][1]++;

  } else if (e === "Data") {
    var generaData = document.createElement("input");
    generaData.setAttribute("type", "date");
    generaData.setAttribute("id","form-" + f + "-date-" + arrayInputs[f][2]);
    form.appendChild(generaData);
    arrayInputs[f][2]++;

  } else if (e === "Fitxer") {

    var generaFitxer = document.createElement("input");
    generaFitxer.setAttribute("type", "file");
    generaFitxer.setAttribute("id","form-" + f + "-file-" + arrayInputs[f][3]);
    form.appendChild(generaFitxer);
    arrayInputs[f][3]++;

  } else if (e === "Rang") {

    var minim = prompt("Introdueix el valor minim", "1");
    var maxim = prompt("Introdueix el valor maxim", "10");
    var generaRang = document.createElement("input");

    generaRang.setAttribute("type", "number");
    generaRang.setAttribute("id","form-" + f + "-rang-" + arrayInputs[f][4]);
    generaRang.setAttribute("min", minim);
    generaRang.setAttribute("max", maxim);
    form.appendChild(generaRang);
    arrayInputs[f][4]++;

  } else if (e === "Email") {

    var generaEmail = document.createElement("input");
    generaEmail.setAttribute("type", "email");
    generaEmail.setAttribute("id","form-" + f + "-emails-" + arrayInputs[f][5]);
    form.appendChild(generaEmail);
    arrayInputs[f][5]++;

  } else if (e === "Radios") {

    var quantitatRadios = prompt("Introdueix quants radios vols generar", "3");
    var nomRadios = prompt("Introdueix el nom d'aquesta grup d'opcions (p.ex: cotxes).", "cotxes");

    for (var i = 0; i < quantitatRadios; i++) {

       var valorRadio = prompt("Introdueix el text per el radio numero" + i + ": ", "Opció " + i);
       
       var generaRadio = document.createElement("input");

        generaRadio.setAttribute("type", "radio");
        generaRadio.setAttribute("id","form-" + f + "-radio-" + arrayInputs[f][6]);
        generaRadio.setAttribute("name", nomRadios);

        var generaLabel = document.createElement("label");
        form.appendChild(generaLabel);
        generaLabel.innerHTML = valorRadio;

        form.appendChild(generaRadio);
        generaRadio.innerHTML = valorRadio;
        arrayInputs[f][6]++;

    }

    
    
  } else if (e === "Checkbox") {

    var generaCheckbox = document.createElement("input");
    generaCheckbox.setAttribute("type", "checkbox");
    generaCheckbox.setAttribute("id","form-" + f + "-checkbox-" + arrayInputs[f][7]);
    form.appendChild(generaCheckbox);
    arrayInputs[f][7]++;

  }

  console.log(arrayInputs);
}
