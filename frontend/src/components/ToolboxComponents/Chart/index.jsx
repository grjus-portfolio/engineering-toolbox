import React, { useEffect } from 'react';
import Chartjs from 'chart.js';
import PropTypes from 'prop-types';

const ChartTemplate = ({
  chartOptions, handleChart, chartRef,
}) => {
  // const chartContainer = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const newChartInstance = new Chartjs(chartRef.current, chartOptions);
      handleChart(newChartInstance);
    }
  }, [chartRef, chartOptions, handleChart]);

  return (
    <div style={{ width: '100%', height: '200%' }}>
      <canvas ref={chartRef} />
    </div>
  );
};

ChartTemplate.propTypes = {
  chartOptions: PropTypes.instanceOf(Object).isRequired,
  handleChart: PropTypes.func.isRequired,
  chartRef: PropTypes.instanceOf(Object).isRequired,

};

export default ChartTemplate;
