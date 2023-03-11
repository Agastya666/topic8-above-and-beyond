document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        xAxis: {
            categories: ['Apple stocks', 'Google stocks', 'Tesla stocks']
        },
        series:[{
            name: 'John', 
            data: [10, 15, 5]
        },
        {
            name: 'James', 
            data: [12, 20, 10]
        }
    ]
    });
});
