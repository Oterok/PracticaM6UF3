/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var primerBoto = document.getElementById("primerBoto");

primerBoto.addEventListener("click", modificarExpresio);

function modificarExpresio(e) {
    var text = prompt("Prompt de prueba.", "\w{1,100}");
    var expres = new RegExp("/^((?:(?:[^?+*{}()[\]\\|]+|\\.|\[(?:\^?\\.|\^[^\\]|[^\\^])(?:[^\]\\]+|\\.)*\]|\((?:\?[:=!]|\?<[=!]|\?>)?(?1)??\)|\(\?(?:R|[+-]?\d+)\))(?:(?:[?+*]|\{\d+(?:,\d*)?\})[?+]?)?|\|)*)$/");
    alert("Q");
    if (expres.test(text)) {
        alert("si");
    } else {
        alert("\w{1,100}");
    }
}

