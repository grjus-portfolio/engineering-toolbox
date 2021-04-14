export const chartOptions = {
  type: 'scatter',
  bezierCurve: true,
  options: {
    maintainAspectRatio: true,
    responsive: true,
    title: {
      display: false,
      text: 'Stress correction results',
      fontColor: 'black',
      fontSize: 16,
    },
    animation: {
      duration: 500,
      easing: 'easeInQuart',
      onComplete() {
        if (this.options.scales.yAxes[0].ticks.max !== 1) {
          this.options.animation.duration = 0;
        }
      },
    },
    scales: {
      xAxes: [{
        display: true,
        type: 'linear',
        position: 'left',
        scaleLabel: {
          display: true,
          labelString: 'Strain',
          fontSize: 16,
          fontColor: 'black',
        },
        ticks: {
          max: 0.2,
          fontSize: 16,
          fontColor: 'black',

        },

      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Stress',
          fontSize: 18,
          fontColor: 'black',
        },
        ticks: {
          min: 0,
          max: 1,
          // stepSize: 10,
          fontSize: 16,
          fontColor: 'black',
        },
      }],
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'center',
      fontSize: 16,
      fontColor: 'black',
      labels: {
        boxWidth: 5,
      },

    },
  },

};
