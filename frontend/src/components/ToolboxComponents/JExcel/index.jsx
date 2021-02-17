import React, { useEffect, useRef } from 'react';
import jexcel from 'jexcel';
import './jexcel.css';
import PropTypes from 'prop-types';

// export default function DataTable({ children, options, setSpreadSheet }) {
//   return (
//     <JExcelTemplate setSpreadSheet={setSpreadSheet} options={options}>
//       {children}
//     </JExcelTemplate>
//   );
// }
export default function DataTable({ options, handleSheet }) {
  const sheetRefTemp = useRef(null);

  useEffect(() => {
    if (!sheetRefTemp.current.innerHTML && options.data.length > 0) {
      handleSheet(jexcel(sheetRefTemp.current, options));
    }
  }, [options, handleSheet, sheetRefTemp]);

  return <div ref={sheetRefTemp} />;
}

DataTable.propTypes = {
  options: PropTypes.instanceOf(Object).isRequired,
  handleSheet: PropTypes.func.isRequired,
};
