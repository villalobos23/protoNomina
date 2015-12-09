/* Application Sripts */

function addEmployee(){
    var genData = document.getElementById("gen-data"),
        empData = document.getElementById("emp-data"),
        nombre = empData.querySelector('#nombre'),
        extras = empData.querySelector('#extra'),
        prestamo = empData.querySelector("#prestamo"),
        vale = empData.querySelector("#vale"),
        ivss = genData.querySelector("#ivss"),
        faov = genData.querySelector("#faov"),
        salario = genData.querySelector("#salario"),
        bsExtra = genData.querySelector("#bs-extra"),
        tabla = document.getElementById('reporte')
                        .getElementsByTagName('tbody')[0],
        fila = tabla.insertRow(tabla.rows.length);

        fila.insertCell(0).
            appendChild(document.createTextNode(nombre.value));
        
        first.insertCell(1).appendChild(document.createTextNode(salario.value));
        first.insertCell(2).appendChild(document.createTextNode(faov.value));
        first.insertCell(3).appendChild(document.createTextNode(ivss).value);
        first.insertCell(4).appendChild(document.createTextNode(extras.value));
    
   alert(test.value);
}

$(function () {
  'use strict';
  var addEvent = document.getElementById("agregar");    
  agregar.addEventListener("click",addEmployee,false);
});
    