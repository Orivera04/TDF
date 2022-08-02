var Repeticiones = [];
/* Datos no agrupados */

/* Devuelve la media aritmetica de un vector */
function Media_Arimetica()
{
	return ((Datos_Globales[0].Datos_Ingresados.reduce(function(A,B) { return A + B; }, 0)) / Datos_Globales[0].Datos_Ingresados.length).toFixed(2);
}

function OrdenarVector(Indice)
{
	Datos_Globales[Indice].VectorOrdenado = Datos_Globales[Indice].Datos_Ingresados.slice();
	Datos_Globales[Indice].VectorOrdenado = Datos_Globales[Indice].VectorOrdenado.sort(function(a,b){return a - b});
}

/* Devuelve la mediana de un vector */
function Mediana()
{
	if(Datos_Globales[0].VectorOrdenado.length % 2)
	{
		return (Datos_Globales[0].VectorOrdenado[(Math.trunc(Datos_Globales[0].VectorOrdenado.length / 2))]) ;
	}
	else
	{
		return  (((Datos_Globales[0].VectorOrdenado[(Math.trunc(Datos_Globales[0].VectorOrdenado.length / 2))])) + ((Datos_Globales[0].VectorOrdenado[(Math.trunc(Datos_Globales[0].VectorOrdenado.length / 2))-1]))) / 2;
	}
}

function Moda()
{	 
	 var Maximo = 0;
	 Repeticiones = new Array();
     for (var I = 0 ; I< Datos_Globales[0].Datos_Ingresados.length; I++)
     {
     	if(VerificarNumero(Datos_Globales[0].Datos_Ingresados[I]) == false)
     	{
     	    Repeticiones.push({Numero : Datos_Globales[0].Datos_Ingresados[I] , Repeticiones : -1 }); 	
	 		for (var J = 0 ; J< Datos_Globales[0].Datos_Ingresados.length; J++)
		    {
		     	if(Repeticiones[(Repeticiones.length)-1].Numero == Datos_Globales[0].Datos_Ingresados[J] )
		     	{
		     		Repeticiones[(Repeticiones.length)-1].Repeticiones++;
		     		if(Maximo <  Repeticiones[(Repeticiones.length)-1].Repeticiones)
		     		{
		     			 Maximo = Repeticiones[I].Repeticiones;
		     		}
		     	}
		    }	
     	}
 	 }
     var ArregloModa = [];
     if(Maximo > 0)
     {
	     for (var I = 0; I < Repeticiones.length; I++)
	     {
	     	  if (Repeticiones[I].Repeticiones == Maximo)
	     	  {
	     	  	  ArregloModa.push(Repeticiones[I].Numero);
	     	  }
	     }
	 
     	 return ArregloModa.toString();
 	 }
 	 else
 	 {
 	 	return 'ø';
 	 }
}

function VerificarNumero(Numero)
{
	if(Repeticiones.length > null)
	{
		for (var I = 0 ; I < Repeticiones.length; I++) 
		{
			if(Repeticiones[I].Numero == Numero)
			{
				return true;
			}
		}
	}
	return false;
}

function Varianza()
{
	var Media  = Media_Arimetica();
	var Suma = 0;
	for (var I = 0; I < Datos_Globales[0].Datos_Ingresados.length; I++) 
	{
	 	Suma = Suma + Math.pow((Datos_Globales[0].Datos_Ingresados[I] - Media),2);
	} 
	return (Suma  /  ((Datos_Globales[0].Datos_Ingresados.length)-1)).toFixed(2);
}

function Desviacion_Estandar()
{
	return (Math.sqrt(Varianza())).toFixed(2);
}




/* Datos agrupados */


function GenerarTabla()
{	 
	 var AmplitudClaseTabla =  AmplitudClase();
	 var LI = Menor(1);
	 var LS = LI + AmplitudClaseTabla  - 0.1;

	 var Tabla = [];

	 var FrecuenciaInferior = Frecuencia(LI,LS);
	 var FrecuenciaRelativaInferior = FrecuenciaRelativa(LI,LS);
	 var LIRealInferior =  LimiteInferiorReal(LI);
	 var LSRealInferior =  LimiteSuperiorReal(LS);
	 var MarcaClaseInferior = MarcaClase(LI,LS);
	 Tabla.push
	 ({
			 NC : 1,
			 LI :LI,
			 LS : LS,
			 Frecuencia : FrecuenciaInferior,
			 FrecuenciaAcumulada : FrecuenciaInferior,
			 FrecuenciaRelativa : FrecuenciaRelativaInferior,
			 FrecuenciaRelativaAcumulada : FrecuenciaRelativaInferior,
			 LimiteInferiorRealIntervalo : LIRealInferior,
			 LimiteSuperiorRealIntervalo : LSRealInferior,
			 Mi : MarcaClaseInferior
	});

	 for (var I = 2; I < NClases() + 1; I++)
	 {

	 	 var LiActual = Tabla[(Tabla.length)-1].LS + 0.1;
	 	 var LsActual  = Tabla[(Tabla.length)-1].LS +  AmplitudClaseTabla;  
	 	 var FrecuenciaActual =  Frecuencia(LiActual,LsActual);
	 	 var FrecuenciaAcumuladaActual = Frecuencia(LiActual,LsActual) + Tabla[(Tabla.length)-1].FrecuenciaAcumulada;
	 	 var FrecuenciaRelativaActual = FrecuenciaRelativa(LiActual,LsActual);
	 	 var FrecuenciaRelativaAcumuladaActual =  FrecuenciaRelativa(LiActual,LsActual) + Tabla[(Tabla.length)-1].FrecuenciaRelativaAcumulada;
	 	 var LiInferiorReal =  LimiteInferiorReal(LiActual);
	 	 var LsRealActual =  LimiteSuperiorReal(LsActual);
	 	 var MarcaClaseActual = MarcaClase(LiActual,LsActual);
	 	 Tabla.push
	 	 ({ 
		 	 	NC: I,
		 	 	LI : LiActual ,
		 	 	LS : LsActual,
		 	 	Frecuencia : FrecuenciaActual,
		 	 	FrecuenciaAcumulada : FrecuenciaAcumuladaActual,
		 	 	FrecuenciaRelativa : FrecuenciaRelativaActual,
		 	 	FrecuenciaRelativaAcumulada :FrecuenciaRelativaAcumuladaActual ,
		 	 	LimiteInferiorRealIntervalo: LiInferiorReal,
		 	 	LimiteSuperiorRealIntervalo: LsRealActual,
		 	 	Mi : MarcaClaseActual 
	 	 });		
	 }
	 return Tabla;
}



function Menor(Indice)
{
	return Math.min.apply(Math, Datos_Globales[Indice].Datos_Ingresados);
}

function Mayor(Indice)
{
	return Math.max.apply(Math, Datos_Globales[Indice].Datos_Ingresados);	
}

function NClases()
{
    //return Math.trunc(1 + 3.3 * Math.log(Datos_Globales[1].Datos_Ingresados.length));	
    return 7;
}

function Rango(Indice)
{
	return (Mayor(Indice) - Menor(Indice));
}


function Cociente(Clases)
{
    return (Rango(1) /  Clases);
}



function AmplitudClase()
{
	var CocienteDato = Cociente(7).toString().split('.');
	var Troncado = CocienteDato[1].charAt(0);
	return  parseFloat(Math.trunc(Cociente(7)).toString() +"."+ Troncado) + 0.1; 
}


function Frecuencia(LimiteInferior,LimiteSuperior)
{
	var ContadorFrecuencia = 0;
	for (var I = 0; I <= Datos_Globales[1].Datos_Ingresados.length; I++) 
	{
	   if(Datos_Globales[1].Datos_Ingresados[I] >= LimiteInferior && Datos_Globales[1].Datos_Ingresados[I] <= LimiteSuperior )
	   {
	   		ContadorFrecuencia++;
	   }
	}
	return ContadorFrecuencia;
}

function FrecuenciaRelativa(LimiteInferior , LimiteSuperior)
{
	var FrecuenciaDatos = Frecuencia(LimiteInferior,LimiteSuperior);
	return FrecuenciaDatos / Datos_Globales[1].Datos_Ingresados.length;
}


function MarcaClase(LimiteInferior,LimiteSuperior)
{
	return (LimiteSuperior + LimiteInferior) / 2;
}

function LimiteInferiorReal(LimiteInferior)
{
	return  (LimiteInferior)- (0.1 / 2);
}

function LimiteSuperiorReal(LimiteSuperior)
{
	return (LimiteSuperior) + (0.1 / 2);
}

function TruncarNumero(Numero, Decimal)
{
    var Regex = new RegExp('^-?\\d+(?:\.\\d{0,' + (Decimal || -1) + '})?');
    return Numero.toString().match(Regex)[0];
}