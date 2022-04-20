var options = {
    chart: {
        type: 'bar'
    },
    series: [{
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    }, {
        name: 'CA',
        data: [350, 490, 500, 600, 700, 800, 700, 910, 1250],
    }, {
        name: 'benefit',
        data: [100, 121, 160, 180, 210, 230, 250, 258, 68],
    }],
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }, 
    legend: {
        show: true,
        position: 'top'
    }
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

//doc 
//type : line, column, bar, donut