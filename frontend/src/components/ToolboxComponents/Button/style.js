import { withStyles, Button } from '@material-ui/core';
import { theme } from '../../../style';

const StyledButton = withStyles({
  root: {
    height: '40px',
    maxWidth: '130px',
    color: 'rgba(0,0,0,0.4)',
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  containedPrimary: {
    backgroundColor: theme.primary,
    color: 'whitesmoke',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.15)',
      borderColor: theme.primary,
      color: 'rgba(0,0,0,0.8)',
    },
  },
  containedSecondary: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.15)',
      borderColor: theme.primary,
    },
  },
  outlinedPrimary: {
    borderColor: 'rgba(0,0,0,0.3)',
    color: theme.primary,
    fontSize: '14px',
    maxWidth: '200px',
    height: '30px',
    fontWeight: 'normal',
    '&:hover': {
      backgroundColor: theme.mainLayoutColor,
      borderColor: theme.primary,
    },
  },

})(Button);

export default StyledButton;
