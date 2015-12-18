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
        fila = tabla.insertRow(tabla.rows.length),
        ivssAmount = (Number(ivss.value)/100)*Number(salario.value),
        extraAmount = Number(extras.value)*Number(bsExtra.value),
        faovAmount = Number((faov.value/100)) * Number(salario.value),
        totalAmount = Number(salario.value)+extraAmount-ivssAmount-faovAmount-Number(prestamo.value)-Number(vale.value);

        fila.insertCell(0).
            appendChild(document.createTextNode(nombre.value));
        
        fila.insertCell(1).appendChild(document.createTextNode(salario.value));
        fila.insertCell(2).appendChild(document.createTextNode(faovAmount));
        fila.insertCell(3).appendChild(document.createTextNode(ivssAmount));
        fila.insertCell(4).appendChild(document.createTextNode(prestamo.value));
        fila.insertCell(5).appendChild(document.createTextNode(vale.value));
        fila.insertCell(6).appendChild(document.createTextNode(extraAmount));
        fila.insertCell(7).appendChild(document.createTextNode(totalAmount));
}

$(function () {
  'use strict';
  var addEvent = document.getElementById("agregar");    
  agregar.addEventListener("click",addEmployee,false);
});
    