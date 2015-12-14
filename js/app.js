/* Application Sripts */

function addEmployee(){
    var genData = document.getElementById("gen-data"),
        empData = document.getElementById("emp-data"),
        nombre = empData.querySelector('#nombre'),
        extras = empData.querySelector('#extras'),
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
        
        fila.insertCell(1).appendChild(document.createTextNode(salario.value));
        fila.insertCell(2).appendChild(document.createTextNode(faov.value));
        fila.insertCell(3).appendChild(document.createTextNode(ivss.value));
        fila.insertCell(4).appendChild(document.createTextNode(prestamo.value));
        fila.insertCell(5).appendChild(document.createTextNode(extras.value*bsExtra.value));
        
}

$(function () {
  'use strict';
  var addEvent = document.getElementById("agregar");    
  agregar.addEventListener("click",addEmployee,false);
});
    