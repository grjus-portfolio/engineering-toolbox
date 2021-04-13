import { withStyles, TextField } from '@material-ui/core';
import { theme } from '../../../style';

const StyledTextField = withStyles({
  root: {
    width: (props) => (props.width ? props.width : '180px'),
    '& label.Mui-focused': {
      color: `${theme.primary}`,
    },
    maxHeight: '500px',

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: `${theme.primary}`,
      },
      '&:hover fieldset': {
        borderColor: `${theme.primary}`,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.primary,
      },

    },
    '& .MuiFormHelperText-root': {
      '&.Mui-error': {
        width: (props) => (props.labelWidth ? props.labelWidth : 'max-content'),
        marginLeft: '0px',
        wordBreak: 'break-all',
      },
    },
  },

})(TextField);

export default StyledTextField;
