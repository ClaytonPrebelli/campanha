Highcharts.setOptions({
    chart: {
      inverted: true,
      marginLeft: 100,
      type: 'bullet'
    },
    title: {
      text: null
    },
    legend: {
      enabled: false
    },
    yAxis: {
      gridLineWidth: 0
    },
    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        color: '#000',
        targetOptions: {
          width: '200%'
        }
      }
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: true
    }
  });
  
  Highcharts.chart('container1', {
    chart: {
      marginTop: 40
    },
    title: {
      text: 'CAMPANHA MARÇO 2021'
    },
    xAxis: {
      categories: ['<i class="fas fa-tv"></i><span class="hc-cat-title">TV<br/>META 301</span>']
    },
    yAxis: {
      plotBands: [{
        from: 0,
        to: 270,
        color: '#dd0000'
      }, {
        from: 270,
        to: 290,
        color: '#de7802'
      }, {
        from: 290,
        to: 301,
        color: '#02ad10'
      }],
      title: null
    },
    series: [{
      data: [{
        y: 155,
        target: 301
      }]
    }],
    tooltip: {
      pointFormat: '<b>VENDIDOS {point.y}</b>'
    }
  });
  
  Highcharts.chart('container2', {
    xAxis: {
      categories: ['<span class="hc-cat-title">CHIP<br/>META 202</span>']
    },
    yAxis: {
      plotBands: [{
        from: 0,
        to: 175,
        color: '#dd0000'
      }, {
        from: 175,
        to: 190,
        color: '#de7802'
      }, {
        from: 190,
        to: 202,
        color: '#02ad10'
      }],
      title: null
    },
    series: [{
      data: [{
        y: 118,
        target: 202
      }]
    }],
    tooltip: {
      pointFormat: '<b>VENDIDOS {point.y}</b>'
    }
  });
  
  
  Highcharts.chart('container3', {
    xAxis: {
      categories: ['<span class="hc-cat-title">VIRTUA<br/>META 774</span>']
    },
    yAxis: {
      plotBands: [{
        from: 0,
        to: 680,
        color: '#dd0000'
      }, {
        from: 680,
        to: 730,
        color: '#de7802'
      }, {
        from: 730,
        to: 774,
        color: '#02ad10'
      }],
     
      title: null
    },
    series: [{
      data: [{
        y: 385,
        target: 774
      }]
    }],
    tooltip: {
      pointFormat: '<b>VENDIDOS {point.y}</b>'
    },
    credits: {
      enabled: true
    }
  });