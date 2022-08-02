function Recolectar_Datos()
{
	if(document.getElementById("example-input2-group2").value != "" && document.getElementById("example-input2-group2").value > -1 )
	{
		Datos_Globales[Estado].Datos_Ingresados[Datos_Globales[Estado].Contador]= parseFloat((document.getElementById("example-input2-group2").value));
		document.getElementById("example-input2-group2").value = "";
    Add_Datos_Tabla_No_Agrupados();
	}
}

function Add_Datos_Tabla_No_Agrupados()
{
        var Fila = Tabla.insertRow(Tabla.getElementsByTagName("tr").length);
        var Celda0 = Fila.insertCell(0);
        var Celda1 = Fila.insertCell(1);
        var Celda2 = Fila.insertCell(2);
        
        Celda0.innerHTML = (Datos_Globales[Estado].Contador + 1).toString();
        Celda1.innerHTML = (Datos_Globales[Estado].Datos_Ingresados[Datos_Globales[Estado].Contador]).toString();
        Celda2.innerHTML = '<button onclick = "Eliminar('+(Datos_Globales[Estado].Contador + 1)+')" class="btn btn-icon waves-effect waves-light btn-danger"> <i class="fa fa-remove"></i> </button>';
        Celda2.contentEditable = 'True';
        Datos_Globales[Estado].Contador = Datos_Globales[Estado].Contador + 1 ;
}


function Eliminar(Indice)
{
      Indice = parseInt(Indice);
      Datos_Globales[Estado].Datos_Ingresados.splice((Indice - 1), 1);
      OrdenarVector(Estado);
      Datos_Globales[Estado].Contador--;
      if(DatosOrdenados == true)
      {
          ActualizarTabla(1)
      }
      else
      {
          ActualizarTabla(0)
      }

}

function ActualizarTabla(Parametro)
{
    Tabla.innerHTML = "";

        for (var I = 0; I < Datos_Globales[Estado].Datos_Ingresados.length; I++) 
        {
            var Fila = Tabla.insertRow(Tabla.getElementsByTagName("tr").length);
            var Celda0 = Fila.insertCell(0);
            var Celda1 = Fila.insertCell(1);
            var Celda2 = Fila.insertCell(2);
            if (Parametro == 0)
            {
                Celda0.innerHTML = (I+1).toString();
                Celda1.innerHTML = (Datos_Globales[Estado].Datos_Ingresados[I]).toString();
                Celda2.innerHTML = '<button onclick = "Eliminar('+(I+1)+')" class="btn btn-icon waves-effect waves-light btn-danger"> <i class="fa fa-remove"></i> </button>';
                Celda2.contentEditable = 'True';
            }
            else
            {
                Celda0.innerHTML = ((Datos_Globales[Estado].Datos_Ingresados.indexOf(Datos_Globales[Estado].VectorOrdenado[I])) + 1).toString();
                Celda1.innerHTML = (Datos_Globales[Estado].VectorOrdenado[I]).toString()
                Celda2.innerHTML = '<button onclick = "Eliminar('+((Datos_Globales[Estado].Datos_Ingresados.indexOf(Datos_Globales[Estado].VectorOrdenado[I])) + 1)+')" class="btn btn-icon waves-effect waves-light btn-danger"> <i class="fa fa-remove"></i> </button>';
                Celda2.contentEditable = 'True';
            }

        }
}

function ActualizarTablaTDF()
{
    TablaAgrupados.innerHTML = "";
    var TDF = [];

    TDF = GenerarTabla();
    
    for (var I = 0; I < TDF.length; I++) 
    {
        var Fila = TablaAgrupados.insertRow(TablaAgrupados.getElementsByTagName("tr").length);
        var Celda0 = Fila.insertCell(0);
        var Celda1 = Fila.insertCell(1);
        var Celda2 = Fila.insertCell(2);
        var Celda3 = Fila.insertCell(3);
        var Celda4 = Fila.insertCell(4);
        var Celda5 = Fila.insertCell(5);
        var Celda6 = Fila.insertCell(6);
        var Celda7 = Fila.insertCell(7);


        Celda0.innerHTML = (I + 1).toString();
        Celda1.innerHTML = (TDF[I].LI.toFixed(2).toString()) + ' - ' + (TDF[I].LS.toFixed(2).toString());
        Celda2.innerHTML = (TDF[I].LimiteInferiorRealIntervalo.toFixed(2)).toString() + ' - ' + (TDF[I].LimiteSuperiorRealIntervalo.toFixed(2)).toString();
        Celda3.innerHTML = (TDF[I].Frecuencia.toFixed(2)).toString();
        Celda4.innerHTML = (TDF[I].FrecuenciaRelativa.toFixed(2)).toString();
        Celda5.innerHTML = (TDF[I].FrecuenciaAcumulada.toFixed(2)).toString();
        Celda6.innerHTML = (TDF[I].FrecuenciaRelativaAcumulada.toFixed(2)).toString();
        Celda7.innerHTML = (TDF[I].Mi.toFixed(2)).toString();
    }
}

