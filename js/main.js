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
        data: [100, 121, 160, 180, 210, 230, 500, 258, 68, 25, 58, 62, 62, 62, 62, 62, 121, 121, 121, 258, 258, 230, 230, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
    }],
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
    }, 
    legend: {
        show: true,
        position: 'top',
    }
}
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
// var chart = new ApexCharts(document.querySelector("#chart"), carre);

// var carre = {
//     chart: {
//         type: 'bar'
//     },
//     series: [{
//         name: 'sales',
//         data: [30, 50, 220, 50, 49, 60, 70, 91, 125],
//     }, {
//         name: 'CA',
//         data: [350, 490, 500, 600, 700, 800, 700, 910, 1250],
//     }, {
//         name: 'benefit',
//         data: [100, 121, 160, 180, 210, 230, 3000, 258, 68],
//     }],
//     xaxis: {
//         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//     }, 
//     legend: {
//         show: true,
//         position: 'top'
//     }
// }

// var charttwo = new ApexCharts(document.querySelector("#charttwo"), carre);
// charttwo.render();

//doc 
//type : line, column, bar