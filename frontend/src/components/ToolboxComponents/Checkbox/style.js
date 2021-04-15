import { Checkbox, withStyles, FormControlLabel } from '@material-ui/core';
import styled from 'styled-components';
import { theme } from '../../../style';

const StyledCheckbox = withStyles({
  root: {
    '&$checked': {
      color: `${theme.primary}`,
    },
    primaryColor: {
      color: `${theme.primaryHover}`,
    },

  },
  checked: {},
})(Checkbox);

const StyledLabel = withStyles({
  label: {
    fontSize: '15px',
  },
})(FormControlLabel);

const CheckboxWrapper = styled.div`
display:block;
width:max-content;
`;

export {
  StyledCheckbox, StyledLabel, CheckboxWrapper,
};
