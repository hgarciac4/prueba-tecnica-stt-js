function random(max)
{
    return Math.floor((Math.random() * (max)) + 1);
}

function randomAlfabeto()
{
    let alfabeto = ['A','B','B','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    return alfabeto[random(alfabeto.length) - 1];
}

function esBisiesto()
{
    var año = document.getElementById('txtAno').value;
    var result = "El año " + año + " no es un año Bisiesto";
    if(año % 4 == 0 & año.length > 0){
        result = "El año " + año + " es un año Bisiesto";
    } else if(año.length == 0) {
        result = "Por favor ingrese un año";
    }
    alert(result);
}

function crearTabla()
{
    var fil = document.getElementById('txtFila').value;
    var col = document.getElementById('txtColumna').value;
    var i, j, cont = 1;
    var tabla = "<table id='tabla' class='table table-bordered'>";
    
    for(i = 0; i < fil; i++)
    {
        tabla += "<tr>";
        for(j = 0; j < col; j++)
        {
            tabla += "<td>" + cont + "</td>";
            cont++;
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    
    var divTablaAnterior = document.getElementById("tabla");
    divTablaAnterior.parentNode.removeChild(divTablaAnterior);
    document.getElementById('divTabla').innerHTML += tabla;
}

function vectorOrdenado()
{
    var i, j, menor;
    var vecAleatorio = [];
    var vecOriginal = "Vector Original<br><table class='table table-bordered'>";
    var vecOrdenado = "Vector Ordenado<br><table class='table table-bordered'>";

    for(i = 0; i < 20; i++)
    {
        vecAleatorio[i] = random(100);
        vecOriginal += "<td>" + vecAleatorio[i] + "</td>";
    }
    vecOriginal += "</table>";

    for(i = 0; i < 20; i++){
        for (j = 1; j < (vecAleatorio.length - i); j++) {
            if (vecAleatorio[j - 1] > vecAleatorio[j]) {
                menor = vecAleatorio[j - 1];
                vecAleatorio[j - 1] = vecAleatorio[j];
                vecAleatorio[j] = menor;
            }
        }
    }

    for(i = 0; i < 20; i++)
        vecOrdenado += "<td>" + vecAleatorio[i] + "</td>";
    vecOrdenado += "</table>";

    var divVectorAnterior = document.getElementById("vectorOrdenado");
    divVectorAnterior.parentNode.removeChild(divVectorAnterior);
    document.getElementById('divVectorOrdenado').innerHTML += "<div id='vectorOrdenado'>" + vecOriginal + "<br>" + vecOrdenado + "</div>";
}

function operacionesArreglos()
{
    var i;
    var vectorA = [];
    var vectorB = [];
    var vecUnion = [];
    var vecInterseccion = [];
    var vecDiferenciaAB = [];
    var vecDiferenciaBA = [];
    var vecDiferenciaSimetrica = [];
    var vectorAHTML = "Vector A<br><table class='table table-bordered'>";
    var vectorBHTML = "Vector B<br><table class='table table-bordered'>";
    var vecUnionHTML = "Vector Unión<br><table class='table table-bordered'>";
    var vecInterseccionHTML = "Vector Intersección<br><table class='table table-bordered'>";
    var vecDiferenciaABHTML = "Vector Diferencia AB<br><table class='table table-bordered'>";
    var vecDiferenciaBAHTML = "Vector Diferencia BA<br><table class='table table-bordered'>";
    var vecDiferenciaSimetricaHTML = "Vector Diferencia Simetrica<br><table class='table table-bordered'>";

    for(i = 0; i < 10; i++)
    {
        vectorA[i] = randomAlfabeto();
        vectorB[i] = randomAlfabeto();
        vectorAHTML += "<td>" + vectorA[i] + "</td>";
        vectorBHTML += "<td>" + vectorB[i] + "</td>";    
    }
    vectorAHTML += "</table>";
    vectorBHTML += "</table>";

    vecUnion = vectorA.concat(vectorB);
    vecInterseccion = vectorA.filter(x => vectorB.includes(x));
    vecDiferenciaAB = vectorA.filter(x => !vectorB.includes(x));
    vecDiferenciaBA = vectorB.filter(x => !vectorA.includes(x));
    vecDiferenciaSimetrica = vecDiferenciaAB.concat(vecDiferenciaBA);

    for(i = 0; i < vecUnion.length; i++)
        vecUnionHTML += "<td>" + vecUnion[i] + "</td>";
    vecUnionHTML += "</table>";

    for(i = 0; i < vecInterseccion.length; i++)
        vecInterseccionHTML += "<td>" + vecInterseccion[i] + "</td>";
    vecInterseccionHTML += "</table>";

    for(i = 0; i < vecDiferenciaAB.length; i++)
        vecDiferenciaABHTML += "<td>" + vecDiferenciaAB[i] + "</td>";
    vecDiferenciaABHTML += "</table>";
    
    for(i = 0; i < vecDiferenciaBA.length; i++)
        vecDiferenciaBAHTML += "<td>" + vecDiferenciaBA[i] + "</td>";
    vecDiferenciaBAHTML += "</table>";

    for(i = 0; i < vecDiferenciaSimetrica.length; i++)
        vecDiferenciaSimetricaHTML += "<td>" + vecDiferenciaSimetrica[i] + "</td>";
    vecDiferenciaSimetricaHTML += "</table>";

    var divOperacionesArreglos = document.getElementById("operacionesArreglos");
    divOperacionesArreglos.parentNode.removeChild(divOperacionesArreglos);
    document.getElementById('divOperaciones').innerHTML += "<div id='operacionesArreglos'>"
        + vectorAHTML + "<br>" + vectorBHTML + "<br>" + vecUnionHTML + "<br>" + vecInterseccionHTML + "<br>"
        + vecDiferenciaABHTML + "<br>" + vecDiferenciaBAHTML + "<br>" + vecDiferenciaSimetricaHTML + "</div>";
}

function getApiBancoMexico()
{
    let divEjercicioCinco = document.getElementById('btnEjercicioCinco');
    
    if(divEjercicioCinco.className === 'accordion-button'){
        let date = new Date();
        let fechaI, fechaF;
        fechaF = date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, '0') + "-" + String(date.getDate()).padStart(2, '0');
        date.setDate(date.getDate() - 5);
        fechaI = date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, '0') + "-" + String(date.getDate()).padStart(2, '0');

        let i;
        let serie='SF43718';
        let token = "9880b23b6def11359fddbb69cec9491372471a8b2300db599f0aec4226ea8bf0";
        let url="https://www.banxico.org.mx/SieAPIRest/service/v1/series/"+serie+"/datos/"+fechaI+"/"+fechaF+"?token="+token;

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(exito => {
                var tblTasaCambio = "Tipo de cambio Pesos por dólar E.U.A. Tipo de cambio para solventar obligaciones denominadas en moneda extranjera Fecha de determinación (FIX)"
                    + "<br><table class='table'>";
                var data = exito.bmx.series[0].datos;
                //console.log(data);
                // console.log(exito.bmx.series[0].datos);
                tblTasaCambio += "<thead>"+
                        "<tr>"+
                            "<th>Id</th>"+
                            "<th>Fecha</th>"+
                            "<th>Tasa de Cambio</th>"+
                        "</tr>"+
                    "</thead><tbody>";

                for(i = 0; i < data.length; i++)
                {
                    tblTasaCambio += "<tr><td>" + (i + 1) + "</td><td>"
                        + data[i].fecha + "</td><td>" + data[i].dato +"</td></tr>";
                }
                tblTasaCambio += "</tbody></table>";

                var divTasaCambio = document.getElementById("tasadeCambio");
                divTasaCambio.parentNode.removeChild(divTasaCambio);
                document.getElementById('divTasadeCambio').innerHTML += "<div id='tasadeCambio'>" +tblTasaCambio + "</div>";
            });
    }
}
