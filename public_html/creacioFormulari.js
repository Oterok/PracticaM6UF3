var botoGenerarFormulari = document.getElementById("generarFormulari");
var botoeliminarElement = document.getElementById("eliminarElement");
var titolFormulari = document.getElementById("nomFormulari");
var contenidorforms = document.getElementById("contenidorforms");
var body = document.getElementsByTagName("body")[0];

var countForm = 0;
var llistatForm = [];
var arrayInputs = [[]];
var nomForms = [];
var idFormActual;
var existeix = false;

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
document.getElementById("Espai").addEventListener("click", agregarEspai);
document.getElementById("Label").addEventListener("click", agregarLabel);

body.addEventListener("click", seleccionarFormulari);

function esPotCrear() {
    var nouNomFormulari = titolFormulari.value;

    if (nouNomFormulari != "") { // Comproba que s'hagi escrit un nou nom pel formulari

        comprobarNom(nouNomFormulari); // Comproba a la funció "comprobarNom" si el nou nom pel formulari ja existeix

        if (existeix === false) { //En cas que la funcio "comprobarNom" retorni "false", es crea el nou formulari

            generarFormulari(nouNomFormulari);
            nomForms.push(nouNomFormulari);
            nouNomFormulari = "";
        } else { //Si de la funcio "comprobarNom" es retorna "true" salta l'alerta i no es crea el formulari

            alert("El nom d'aquest formulari ja existeix.");
        }
    } else {

        alert("No has possat titol.");

    }

    function comprobarNom(nouNom) {
        existeix = false;
        for (var i = 0; i < nomForms.length; i++) {
            var nom = nomForms[i];
            if (nom == nouNom) {
                existeix = true;
                break;
            }
        }
        return existeix;

    }

}

function generarFormulari(titol) {

    var form = document.createElement("form");
    form.id = "form" + countForm;
    form.setAttribute("type", "form");
    form.class = "main-content";

    var titolForm = document.createElement("h3");
    titolForm.setAttribute("id", "form-" + countForm + "-titol");
    titolForm.setAttribute("type", "titol");
    titolForm.setAttribute("class", "titol");
    titolForm.innerHTML = titol;
    form.appendChild(titolForm);


    var ultimaLinea = document.createElement("br");

    form.appendChild(ultimaLinea);
    contenidorforms.appendChild(form);

    llistatForm[countForm] = form;

    countForm++;

    arrayInputs[countForm - 1] = [[0], [0], [0], [0], [0], [0], [0], [0]]; //Inicialitza una array plena de zeros

    form.style.border = "thick solid #CCCCCC";

}

function seleccionarFormulari(e) {
    if (e.srcElement.id.substring(0, 4) == "form") {
        
        //Elimina els borde del ultim element selecionat.
        if (idFormActual != null) {
            document.getElementById(idFormActual).style.border = "";
        }
        
        //Aquest form mante el border gris a tots els forms
        for (var i = 0; i != llistatForm.length; i++) {
            document.getElementById("form" + i).style.border = "thick solid #CCCCCC";
        }
        
        //Posa borde al element selecionat.
        document.getElementById(e.srcElement.id).style.border = "thick solid #000000";

        if (document.getElementById(e.srcElement.id).type == null) {
            botoeliminarElement.value = "Eliminar " + e.srcElement.id;
        } else {
            botoeliminarElement.value = "Eliminar " + document.getElementById(e.srcElement.id).type;
        }

        idFormActual = e.srcElement.id;
        botoOcult = true;
    }
}


function removeElement(e) {
    if (idFormActual != null) {
        document.getElementById(idFormActual).remove();
        idFormActual = null;
    }

}

function agregarInput() {

    var f = idFormActual.substring(4, 5);
    var generaInput = document.createElement("input");
    generaInput.setAttribute("type", "text");
    generaInput.setAttribute("id", "form-" + f + "-input-" + arrayInputs[f][0]);
    llistatForm[f].appendChild(generaInput);
    arrayInputs[f][0]++;
}

function agregarText(e) {
    var f = idFormActual.substring(4, 5);
    var generaText = document.createElement("input");
    generaText.setAttribute("type", "textarea");
    generaText.setAttribute("id", "form-" + f + "-text-" + arrayInputs[f][1]);
    llistatForm[f].appendChild(generaText);
    arrayInputs[f][1]++;
}

function agregarData(e) {
    var f = idFormActual.substring(4, 5);
    var generaData = document.createElement("input");
    generaData.setAttribute("type", "date");
    generaData.setAttribute("id", "form-" + f + "-date-" + arrayInputs[f][2]);
    llistatForm[f].appendChild(generaData);
    arrayInputs[f][2]++;
}

function agregarFitxer(e) {
    var f = idFormActual.substring(4, 5);
    var generaFitxer = document.createElement("input");
    generaFitxer.setAttribute("type", "file");
    generaFitxer.setAttribute("id", "form-" + f + "-file-" + arrayInputs[f][3]);
    llistatForm[f].appendChild(generaFitxer);
    arrayInputs[f][3]++;
}

function agregarRang(e) {
    var f = idFormActual.substring(4, 5);
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
    var f = idFormActual.substring(4, 5);
    var generaEmail = document.createElement("input");
    generaEmail.setAttribute("type", "email");
    generaEmail.setAttribute("id", "form-" + f + "-emails-" + arrayInputs[f][5]);
    llistatForm[f].appendChild(generaEmail);
    arrayInputs[f][5]++;
    generaEmail.addEventListener("change", comprobarEmail);
}

function agregarRadio(e) {
    var f = idFormActual.substring(4, 5);
    var quantitatRadios = prompt("Introdueix quants radios vols generar", "3");
    var nomRadios = prompt("Introdueix el nom d'aquesta grup d'opcions (p.ex: cotxes).", "cotxes");
    for (var i = 0; i < quantitatRadios; i++) {

        var valorRadio = prompt("Introdueix el text per el radio numero" + i + ": ", "Opció " + i);
        var generaRadio = document.createElement("input");
        generaRadio.setAttribute("type", "radio");
        generaRadio.setAttribute("id", "form-" + f + "-radio-" + arrayInputs[f][6]);
        generaRadio.setAttribute("name", nomRadios);
        var generaLabel = document.createElement("label");
        generaLabel.setAttribute("id", "form-" + f + "-radiolabel-" + arrayInputs[f][6]);
        llistatForm[f].appendChild(generaLabel);
        generaLabel.innerHTML = valorRadio;
        llistatForm[f].appendChild(generaRadio);
        generaRadio.innerHTML = valorRadio;
        arrayInputs[f][6]++;
    }
}

function agregarEspai(e) {
    var f = idFormActual.substring(4, 5);
    var generaFitxer = document.createElement("br");
    generaFitxer.setAttribute("type", "espai");
    generaFitxer.setAttribute("id", "form-" + f + "-espai-" + arrayInputs[f][3]);
    llistatForm[f].appendChild(generaFitxer);
    arrayInputs[f][3]++;
}

function agregarCheckbox(e) {
    var f = idFormActual.substring(4, 5);
    var nomCeckbox = prompt("Introdueix el nom d'aquesta grup d'opcions (p.ex: cotxes).", "cotxes");
    var valorCheckbox = prompt("Introdueix el text per l'opció d'aquest checkbox", "text");
    var generaCheckbox = document.createElement("input");
    generaCheckbox.setAttribute("type", "checkbox");
    generaCheckbox.setAttribute("id", "form-" + f + "-checkbox-" + arrayInputs[f][7]);
    generaCheckbox.setAttribute("name", nomCeckbox);
    generaCheckbox.setAttribute("value", nomCeckbox);
    var generaLabel = document.createElement("label");
    generaLabel.setAttribute("id", "form-" + f + "-checkboxlabel-" + arrayInputs[f][7]);
    llistatForm[f].appendChild(generaLabel);
    generaLabel.innerHTML = nomCeckbox;
    llistatForm[f].appendChild(generaCheckbox);
    generaCheckbox.innerHTML = nomCeckbox;
    arrayInputs[f][7]++;
}

function agregarLabel(e) {
    var f = idFormActual.substring(4, 5);
    var valorLabel = prompt("Introdueix el text.", "label");
    var generaLabel = document.createElement("label");
    generaLabel.setAttribute("id", "form-" + f + "-label-" + arrayInputs[f][7]);
    llistatForm[f].appendChild(generaLabel);
    generaLabel.innerHTML = valorLabel;
    arrayInputs[f][7]++;
}


