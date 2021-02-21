import React from 'react';
import PropTypes from 'prop-types';
import { Select, MenuItem } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { CustomDropDown } from './style';

const DropDown = ({
  name, control, dropDownItems, handleChange,
}) => (
  <Controller
    render={(props) => (
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        input={<CustomDropDown />}
        defaultValue={dropDownItems[0].value}
        onChange={(e) => {
          props.onChange(e);
          handleChange(e);
        }}
      >
        {dropDownItems.map((item) => (
          <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
        ))}

      </Select>
    )}
    name={name}
    control={control}

  />

);

DropDown.propTypes = {
  handleChange: PropTypes.func,
  onChange: PropTypes.func,
  // value: PropTypes.string.isRequired,
  control: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
  dropDownItems: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default DropDown;

DropDown.defaultProps = {
  handleChange: () => null,
  onChange: () => null,
};
