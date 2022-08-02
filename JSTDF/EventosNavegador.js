//Creando los objetos contenedores de los datos//
var Datos_Globales = new Array();
var Datos_Ingresados = new Array();
var Estado = 0;
var Tabla = document.getElementById('cuerpotabladatos');
var TablaAgrupados = document.getElementById('cuerpoagrupados');
var DatosOrdenados = false;
$(document).ready(function()
{
  Tabla.innerHTML = "";
  document.getElementById('demo').style.display = 'block';
  document.getElementById('doscontainer').style.display = 'none';
  document.getElementById('containertipodato1').style.display = 'none';
  document.getElementById('containertipodato2').style.display = 'none';
  document.getElementById('containergraficas').style.display = 'none';

  $('#sb_datosnoagrupados').click(function(event)
  {
    Estado =  0;
    ActualizarTabla(1);
    document.getElementById('demo').style.display = 'none';
    document.getElementById('containertipodato2').style.display = 'none';
    document.getElementById('containergraficas').style.display = 'none';
    document.getElementById('containertipodato1').style.display = 'block';
    $('#doscontainer').show(400);
    $('#containertipodato1').show(400);
    $('#nclases').hide(300);
  });

  $('#sb_datosagrupados').click(function(event)
  {
    Estado =  1;
    ActualizarTabla(0);
    document.getElementById('demo').style.display = 'none';
    document.getElementById('containertipodato1').style.display = 'none';
    document.getElementById('containergraficas').style.display = 'none';
    document.getElementById('containertipodato2').style.display = 'block';
    $('#doscontainer').show(400);
    $('#containertipodato2').show(400);
    $('#nclases').show(300);
  });

  $('#sb_graficas').click(function(event)
    {
      document.getElementById('demo').style.display = 'none';
      document.getElementById('containertipodato1').style.display = 'none';
      document.getElementById('containertipodato2').style.display = 'none';
      document.getElementById('containergraficas').style.display = 'block';
      $('#doscontainer').hide(400);
    });


  $('#ingresarnumero').on("click", function()
  {
       Recolectar_Datos();
  });



  $('#caja').keypress(function(event) {
    var keycode = event.keyCode || event.which;
    if(keycode == '13')
    {
        Recolectar_Datos();
    }
  });

  $('#caja').keypress(function(event) {
    var keycode = event.keyCode || event.which;
    if(keycode == '13')
    {
        Recolectar_Datos();
    }
  });

  $('#ingresarnumero').on("click", function()
  {
       if (Estado == 0)
       {
          // Añadir codigo para datos no agrupados
          OrdenarVector(0);
          $('#resultadomediana').text(Mediana().toFixed(2).toString());
          $('#resultadomedia').text(Media_Arimetica());
          $('#resultarango').text(Rango(0).toFixed(2).toString());
          $('#resultadomoda').text(Moda());
          $('#resultadovarianza').text(Varianza());
          $('#resultadodv').text( Desviacion_Estandar());
          $('#resultadomenor').text( Menor(0).toFixed(2).toString());
          $('#resultadomayor').text( Mayor(0).toFixed(2).toString());

        }
        else if (Estado == 1)
        {
           OrdenarVector(1);
           $("#resultadodvalormaximo").text((Mayor(1)).toFixed(2).toString());
           $("#resultadodvalorminimo").text((Menor(1)).toFixed(2).toString());
           $("#resultadodrango").text((Rango(1)).toFixed(2).toString());
           $("#resultadodcociente").text((Cociente(7)).toFixed(2).toString());
           $("#resultadodamplitud").text(AmplitudClase().toFixed(2).toString());
           $("#resultadodnumeroclases").text(NClases().toFixed(2).toString());
           ActualizarTablaTDF();
        }

        Graficas(1);
        Graficas(2);
        Graficas(3);
  });


    $('#ordenartabla').on('click',function(event)
    {
         OrdenarVector(Estado);
         ActualizarTabla(1);
         DatosOrdenados = true;
    });

    $('#tablaoriginal').on('click',function(event)
    {
        ActualizarTabla(0);
        DatosOrdenados = false;
    });



    //Primer Indice, Datos No Agrupados, Posicion 0//
    Datos_Globales.push({Datos_Ingresados:[], VectorOrdenado:[], Contador: 0, Media_Aritmetica:0, Mediana:0, Moda:0, Varianza:0, Desviacion_Estandar:0, Percentiles:0, Cuartiles:0, Deciles:0});
    //Segundo Indice, Datos Agrupados, Posicion 1//
    Datos_Globales.push({Datos_Ingresados:[], VectorOrdenado:[], Contador: 0, Media_Aritmetica:0, Mediana:0, Moda:0, Varianza:0, Desviacion_Estandar:0, Percentiles:0, Cuartiles:0, Deciles:0});

    Datos_Globales[1].Datos_Ingresados.push(45);
    Datos_Globales[1].Datos_Ingresados.push(43.2);
    Datos_Globales[1].Datos_Ingresados.push(44.4);
    Datos_Globales[1].Datos_Ingresados.push(42.1);
    Datos_Globales[1].Datos_Ingresados.push(38.4);
    Datos_Globales[1].Datos_Ingresados.push(44);
    Datos_Globales[1].Datos_Ingresados.push(44.7);
    Datos_Globales[1].Datos_Ingresados.push(45.6);
    Datos_Globales[1].Datos_Ingresados.push(44.3);
    Datos_Globales[1].Datos_Ingresados.push(43.8);
    Datos_Globales[1].Datos_Ingresados.push(44.1);
    Datos_Globales[1].Datos_Ingresados.push(44.5);
    Datos_Globales[1].Datos_Ingresados.push(44.2);
    Datos_Globales[1].Datos_Ingresados.push(43.8);
    Datos_Globales[1].Datos_Ingresados.push(44.3);
    Datos_Globales[1].Datos_Ingresados.push(39.7);
    Datos_Globales[1].Datos_Ingresados.push(43.6);
    Datos_Globales[1].Datos_Ingresados.push(45.5);
    Datos_Globales[1].Datos_Ingresados.push(43.9);
    Datos_Globales[1].Datos_Ingresados.push(40.7);
    Datos_Globales[1].Datos_Ingresados.push(45.3);
    Datos_Globales[1].Datos_Ingresados.push(44.5);
    Datos_Globales[1].Datos_Ingresados.push(44.1);
    Datos_Globales[1].Datos_Ingresados.push(42.3);
    Datos_Globales[1].Datos_Ingresados.push(44.6);
    Datos_Globales[1].Datos_Ingresados.push(45.8);
    Datos_Globales[1].Datos_Ingresados.push(45.2);
    Datos_Globales[1].Datos_Ingresados.push(39.8);
    Datos_Globales[1].Datos_Ingresados.push(44);
    Datos_Globales[1].Datos_Ingresados.push(42.2);
    Datos_Globales[1].Datos_Ingresados.push(43.3);
    Datos_Globales[1].Datos_Ingresados.push(45.2);
    Datos_Globales[1].Datos_Ingresados.push(41.2);
    Datos_Globales[1].Datos_Ingresados.push(44.7);
    Datos_Globales[1].Datos_Ingresados.push(44.2);
    Datos_Globales[1].Datos_Ingresados.push(38.7);
    Datos_Globales[1].Datos_Ingresados.push(40.6);
    Datos_Globales[1].Datos_Ingresados.push(38.6);
    Datos_Globales[1].Datos_Ingresados.push(44.4);
    Datos_Globales[1].Datos_Ingresados.push(44.5);

});
