import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChartTemplate from '../../../ToolboxComponents/Chart';
import { FatigueContext } from '../../context';
import { chartOptions } from '../config';
import { theme } from '../../../../style';

export const FatigueChart = ({ unit, chartRef }) => {
  const [chart, setChart] = useState(null);

  const fatigueState = useContext(FatigueContext);
  const { chartData, excelData } = fatigueState.results;
  const { derated, raw } = chartData;

  useEffect(() => {
    if (chart !== null && derated) {
      chart.data.datasets = [];
      chart.data.datasets.push(
        {
          label: 'Unmodified curve',
          type: 'line',
          backgroundColor: '#12a112',
          pointRadius: 0,
          borderWidth: 3.5,
          borderColor: theme.logoColor,
          fill: false,
          data: raw.stress.map((item, idx) => ({
            x: raw.cycles[idx],
            y: item,
          })),
        },
      );
      chart.data.datasets.push(
        {
          label: 'Modified curve',
          type: 'line',
          backgroundColor: 'crimson',
          pointRadius: 1,
          borderWidth: 3.5,
          borderColor: 'crimson',
          fill: false,
          data: derated.stress.map((item, idx) => ({
            x: derated.cycles[idx],
            y: item,
          })),
        },
      );
      chart.data.datasets.push(
        {
          label: 'Analysis data',
          backgroundColor: 'black',
          pointRadius: 5,
          borderWidth: 1.5,
          borderColor: 'black',
          fill: false,
          data: (() => {
            const outData = [];
            for (let row = 0; row < excelData.length; row++) {
              outData.push({
                x: excelData[row][5],
                y: excelData[row][4],
              });
            }
            return outData;
          })(),
        },
      );

      chart.options.scales.yAxes[0].scaleLabel.labelString = `Stress, ${unit}`;
      chart.update();
    }
  }, [chart, derated, unit, excelData, raw]);

  return (
    <ChartTemplate
      chartOptions={chartOptions}
      handleChart={setChart}
      chartRef={chartRef}
      chartStyle={{
        width: '600px',
      }}
    />
  );
};

export default FatigueChart;

FatigueChart.propTypes = {
  unit: PropTypes.string.isRequired,
  chartRef: PropTypes.instanceOf(Object).isRequired,
};
