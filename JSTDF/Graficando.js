function Graficas(Tipo)
{

switch(Tipo)
{
    case 1:
    var oilCanvas = document.getElementById("GraficaA");

        Chart.defaults.global.defaultFontFamily = "Roboto";
        Chart.defaults.global.defaultFontSize = 18;


        var Graph = GenerarTabla();
        var Etiqueta = [];
        var Porcentaje = [];

        for (var I = 0; I <  Graph.length; I++)
        {
            Etiqueta[I] = (Graph[I].LI).toFixed(2).toString() + ' - ' + (Graph[I].LS).toFixed(2).toString();
            Porcentaje[I] = (Graph[I].FrecuenciaRelativa * 100).toString();
        }

        debugger;
        var oilData = {
            labels: Etiqueta,
            datasets: [
                {
                    data: Porcentaje,
                    backgroundColor: [
                        "#FF6384",
                        "#63FF84",
                        "#84FF63",
                        "#8463FF",
                        "#6384FF",
                        "#FF6384",
                        "#63FF84"
                    ]
                }]
        };

        var pieChart = new Chart(oilCanvas, {
          type: 'bar',
          data: oilData
        });
    break;


    break;


    case 2:
        var oilCanvas = document.getElementById("GraficaB");

        Chart.defaults.global.defaultFontFamily = "Roboto";
        Chart.defaults.global.defaultFontSize = 18;


        var Graph = GenerarTabla();
        var Etiqueta = [];
        var Porcentaje = [];

        for (var I = 0; I <  Graph.length; I++)
        {
            Etiqueta[I] = (Graph[I].LI).toFixed(2).toString() + ' - ' + (Graph[I].LS).toFixed(2).toString();
            Porcentaje[I] = (Graph[I].FrecuenciaRelativa * 100).toString();
        }

        var oilData = {
            labels: Etiqueta,
            datasets: [
                {
                    data: Porcentaje,
                    backgroundColor: [
                        "#FF6384",
                        "#63FF84",
                        "#84FF63",
                        "#8463FF",
                        "#6384FF",
                        "#FF6384",
                        "#63FF84"
                    ]
                }]
        };

        var pieChart = new Chart(oilCanvas, {
          type: 'pie',
          data: oilData
        });
    break;


    case 3:
       var oilCanvas = document.getElementById("GraficaC");

        Chart.defaults.global.defaultFontFamily = "Roboto";
        Chart.defaults.global.defaultFontSize = 18;


        var Graph = GenerarTabla();
        var Etiqueta = [];
        var Porcentaje = [];

        for (var I = 0; I <  Graph.length; I++)
        {
            Etiqueta[I] = (Graph[I].LI).toFixed(2).toString() + ' - ' + (Graph[I].LS).toFixed(2).toString();
            Porcentaje[I] = (Graph[I].FrecuenciaRelativa * 100).toString();
        }

        var oilData = {
            labels: Etiqueta,
            datasets: [
                {
                    data: Porcentaje,
                    backgroundColor: [
                        "#FF6384",
                        "#63FF84",
                        "#84FF63",
                        "#8463FF",
                        "#6384FF",
                        "#FF6384",
                        "#63FF84"
                    ]
                }]
        };

        var pieChart = new Chart(oilCanvas, {
          type: 'doughnut',
          data: oilData
        });
    break;




}


}