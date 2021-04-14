/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react';

export const useWindowSize = (chart) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowSize(window.innerWidth);
    });
    if (chart) {
      const yAxis = chart.options.scales.yAxes[0];
      const xAxis = chart.options.scales.xAxes[0];
      if (windowSize < 700) {
        // eslint-disable-next-line no-param-reassign
        yAxis.scaleLabel.fontSize = 12;
        yAxis.scaleLabel.padding = 0;
        yAxis.ticks.fontSize = 12;
        xAxis.scaleLabel.fontSize = 12;
        xAxis.ticks.fontSize = 12;
        chart.aspectRatio = 1;
        chart.options.legend.fontSize = 10;
      } else {
        yAxis.scaleLabel.fontSize = 16;
        yAxis.ticks.fontSize = 16;
        xAxis.scaleLabel.fontSize = 16;
        xAxis.ticks.fontSize = 16;
        chart.aspectRatio = 2;
        chart.options.legend.fontSize = 16;
      }
    }

    return () => {
      window.removeEventListener('resize', () => {
        setWindowSize(window.innerWidth);
      });
    };
  }, [chart, windowSize]);
};
