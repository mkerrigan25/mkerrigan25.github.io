Highcharts.chart('pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Time Spent',
        colorByPoint: true,
        data: [{
            name: 'PHP',
            y: 35.00
        }, {
            name: 'Javascript',
            y: 25.00,
            sliced: true,
            selected: true
        }, {
            name: 'Python',
            y: 15.00
        }, {
            name: 'Java',
            y: 15.00
        }, {
            name: 'Html',
            y: 5.0
        }, {
            name: 'CSS',
            y: 5.0
        }]
    }]
});