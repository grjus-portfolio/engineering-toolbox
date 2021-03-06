export const EXCEL_COLUMN_WIDTH = 130;
const NO_OF_COLUMNS = 7;

export const jexcelConfig = {
//   data: [Array(NO_OF_COLUMNS)],
  data: [[-20, 90, 55, 35, 71.739, 167189.5, 2.392]],
  minDimensions: [NO_OF_COLUMNS, 4],
  csvFileName: 'StressOutput',
  columns: Array(NO_OF_COLUMNS).fill(0).map(() => ({
    title: ' ',
    width: EXCEL_COLUMN_WIDTH,
    decimal: '.',
    type: 'numeric',
    mask: '[-]#.00',
  })),
  columnDrag: false,
  allowInsertColumn: false,
  allowInsertRow: false,
  editable: false,
  allowDeleteColumn: false,
  allowRenameColumn: false,
  tableOverflow: true,
  tableHeight: '200px',
  show: true,
  onload(instance) {
    instance.jexcel.hideIndex();
  },
  onchange() {
    console.log('Hello');
  },
};

export const tableHeaders = [
  {
    label: 'Min Stress',
    key: 'res-min-stress',
  },
  {
    label: 'Max Stress',
    key: 'res-max-stress',
  },
  {
    label: 'Alternating Stress',
    key: 'res-alt-stress',
  },
  {
    label: 'Mean Stress',
    key: 'res-mean-stress',
  },

  {
    label: 'Fatigue Stress',
    key: 'res-fat-stress',
  },
  {
    label: 'Required cycles',
    key: 'res-allow-cycles',
  },
  {
    label: 'Fatigue damage',
    key: 'res-fatigue-damage',
  },
];

export const chartOptions = {
  type: 'scatter',
  options: {
    maintainAspectRatio: true,
    responsive: true,
    title: {
      display: true,
      text: 'Baskin fatigue model',
      fontColor: 'rgba(0,0,0,0.6)',
      fontSize: 16,

    },
    scales: {
      xAxes: [{
        display: true,
        type: 'logarithmic',
        position: 'left',
        scaleLabel: {
          display: true,
          labelString: 'Cycle count',
          fontSize: 14,
          fontColor: 'black',
        },
        ticks: {
          max: 1000000,
          fontSize: 16,
          fontColor: 'black',
        },

      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Stress',
          fontSize: 16,
          fontColor: 'black',
        },
        ticks: {
          min: 0,
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
      fontSize: 18,
      fontColor: 'black',
      labels: {
        boxWidth: 12,
      },

    },
  },

};
