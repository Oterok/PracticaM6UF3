var botoGenerarFormulari = document.getElementById("generarFormulari");
var botoeliminarElement = document.getElementById("eliminarElement");
var titolFormulari = document.getElementById("nomFomrulari");
var contenidorforms = document.getElementById("contenidorforms");
var body = document.getElementsByTagName("body")[0];

var countForm = 0;
var llistatForm = [];
var arrayInputs = [[]];
var idFormACtual;

botoGenerarFormulari.addEventListener("click", esPotCrear);
botoeliminarElement.addEventListener("click", removeElement);
document.getElementById("Input").addEventListener("click", agregarInput);
document.getElementById("Text").addEventListener("click", agregarText);
document.getElementById("Data").addEventListener("click", agregarData);
document.getElementById("Fitxer").addEventListener("click", agregarFitxer);
document.getElementById("Rang").addEventListener("click", agregarRang);
document.getElementById("Email").addEventListener("click", agregarEmail);
document.getElementById("Radio").addEventListener("click", agregarRadio);
document.getElementById("Check").addEventListener("click", agregarCheckbox);

body.addEventListener("click", seleccionarFormulari);

//Comproba que existeixi un titol per el formulari, sino no el crea.
function esPotCrear() {
    if (titolFormulari.value != "") {
        generarFormulari(titolFormulari.value);
        titolFormulari.value = "";
    } else {
        alert("No has possat titol.");
    }
}

function generarFormulari(titol) {

    var form = document.createElement("form");

    form.id = "form" + countForm;

    form.class = "main-content";

    var contingut = document.createTextNode(titol);

    form.appendChild(contingut);

    var ultimaLinea = document.createElement("hr");

    form.appendChild(ultimaLinea);
    contenidorforms.appendChild(form);

    llistatForm[countForm] = form;

    countForm++;
    //Genera el esdeveniment per el form que es genera.
    //document.getElementById(form.id).addEventListener("mouseenter",ampliarFormulari);
    //document.getElementById(form.id).addEventListener("mouseleave",ampliarFormulari);

    arrayInputs[countForm - 1] = [[0], [0], [0], [0], [0], [0], [0], [0]]; //Inicialitza una array plena de zeros

}

function seleccionarFormulari(e) {
    if (e.srcElement.id.substring(0, 4) == "form") {
        if (idFormACtual != null) {
            document.getElementById(idFormACtual).style.border = "thick solid #FFFFFF";
        }
        //document.getElementById(e.srcElement.id.substring).style='border:10p x solid #CCCCCC;';
        document.getElementById(e.srcElement.id).style.border = "thick solid #CCCCCC";
        idFormACtual = e.srcElement.id;
        botoOcult = true;
    }
}

function removeElement(e){
    if (idFormACtual != null) {
        console.log(e);
        document.getElementById(idFormACtual).remove();
        //document.getElementById(idFormACtual).remove();
        idFormACtual = null;
    }
}

function comprobarSiEsForm(id) {
    if (id == "form"){
        return true;
    }
    return false;
}

function agregarInput(e) {

    var f = idFormACtual.substring(4, 5);
    //if (comprobarSiEsForm(f)) {
        var generaInput = document.createElement("input");
        generaInput.setAttribute("type", "text");
        generaInput.setAttribute("id", "form-" + f + "-input-" + arrayInputs[f][0]);
        llistatForm[f].appendChild(generaInput);
        arrayInputs[f][0]++;
    //}
}

function agregarText(e) {
    var f = idFormACtual.substring(4, 5);
    var generaText = document.createElement("input");
    generaText.setAttribute("type", "text");
    generaText.setAttribute("id", "form-" + f + "-text-" + arrayInputs[f][1]);
    llistatForm[f].appendChild(generaText);
    arrayInputs[f][1]++;

}

function agregarData(e) {
    var f = idFormACtual.substring(4, 5);
    var generaData = document.createElement("input");
    generaData.setAttribute("type", "date");
    generaData.setAttribute("id", "form-" + f + "-date-" + arrayInputs[f][2]);
    llistatForm[f].appendChild(generaData);
    arrayInputs[f][2]++;

}

function agregarFitxer(e) {
    var f = idFormACtual.substring(4, 5);
    var generaFitxer = document.createElement("input");
    generaFitxer.setAttribute("type", "file");
    generaFitxer.setAttribute("id", "form-" + f + "-file-" + arrayInputs[f][3]);
    llistatForm[f].appendChild(generaFitxer);
    arrayInputs[f][3]++;

}

function agregarRang(e) {
    var f = idFormACtual.substring(4, 5);
    var minim = prompt("Introdueix el valor minim", "1");
    var maxim = prompt("Introdueix el valor maxim", "10");
    var generaRang = document.createElement("input");

    generaRang.setAttribute("type", "number");
    generaRang.setAttribute("id", "form-" + f + "-rang-" + arrayInputs[f][4]);
    generaRang.setAttribute("min", minim);
    generaRang.setAttribute("max", maxim);
    llistatForm[f].appendChild(generaRang);
    arrayInputs[f][4]++;

}

function agregarEmail(e) {
    var f = idFormACtual.substring(4, 5);
    var generaEmail = document.createElement("input");
    generaEmail.setAttribute("type", "email");
    generaEmail.setAttribute("id", "form-" + f + "-emails-" + arrayInputs[f][5]);
    llistatForm[f].appendChild(generaEmail);
    arrayInputs[f][5]++;

}

function agregarRadio(e) {
    var f = idFormACtual.substring(4, 5);
    var quantitatRadios = prompt("Introdueix quants radios vols generar", "3");
    var nomRadios = prompt("Introdueix el nom d'aquesta grup d'opcions (p.ex: cotxes).", "cotxes");

    for (var i = 0; i < quantitatRadios; i++) {

        var valorRadio = prompt("Introdueix el text per el radio numero" + i + ": ", "Opció " + i);

        var generaRadio = document.createElement("input");

        generaRadio.setAttribute("type", "radio");
        generaRadio.setAttribute("id", "form-" + f + "-radio-" + arrayInputs[f][6]);
        generaRadio.setAttribute("name", nomRadios);

        var generaLabel = document.createElement("label");
        generaLabel.setAttribute("id", "form-" + f + "-radio-" + arrayInputs[f][6]);
        llistatForm[f].appendChild(generaLabel);
        generaLabel.innerHTML = valorRadio;

        llistatForm[f].appendChild(generaRadio);
        generaRadio.innerHTML = valorRadio;
        arrayInputs[f][6]++;

    }
}

function agregarCheckbox(e) {
    var f = idFormACtual.substring(4, 5);
    var nomCeckbox = prompt("Introdueix el nom d'aquesta grup d'opcions (p.ex: cotxes).", "cotxes");
    var valorCheckbox = prompt("Introdueix el text per l'opció d'aquest checkbox", "text");

    var generaCheckbox = document.createElement("input");
    generaCheckbox.setAttribute("type", "checkbox");
    generaCheckbox.setAttribute("id", "form-" + f + "-checkbox-" + arrayInputs[f][7]);
    generaCheckbox.setAttribute("name", nomCeckbox);
    generaCheckbox.setAttribute("value", nomCeckbox);

    var generaLabel = document.createElement("label");
    generaLabel.setAttribute("id", "form-" + f + "-checkbox-" + arrayInputs[f][7]);
    llistatForm[f].appendChild(generaLabel);
    generaLabel.innerHTML = nomCeckbox;

    llistatForm[f].appendChild(generaCheckbox);
    generaCheckbox.innerHTML = nomCeckbox;
    arrayInputs[f][7]++;

}

