// WARNING REMOVE BEFORE PRODUCTION
// Used to silcense strict mode
// <<findDOMNode is deprecated in StrictMode. findDOMNode was
// passed an instance of Transition which is inside StrictMode">>
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/';
import styled from 'styled-components';
import { theme as globalTheme } from '../../style';

const theme = {
  iconSize: '16px',
  iconSizeActive: '20px',
  fontSize: '16px',
  fontSizeActive: '20px',
};

export const StepperTheme = createMuiTheme({
  overrides: {
    MuiStepper: {
      root: {
        margin: 0,
        backgroundColor: 'whitesmoke',
        width: '100%',
        padding: 0,
      },

    },
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: globalTheme.primary,
          fontSize: theme.iconSize,
        },
        '&$active': {
          color: globalTheme.primaryHover,
          fontSize: theme.iconSizeActive,
        },
      },
      active: {},
      completed: {},
    },
    MuiStepLabel: {
      label: {
        '&$completed': {
          color: theme.stepperTagColor,
          fontSize: theme.fontSize,
        },
        '&$active': {
          color: theme.stepperTagColor,
          fontSize: theme.fontSizeActive,
          letterSpacing: '1.5px',
        },
      },
    },
    palette: {

    },
  },
});

export const AppContainer = styled.div`
width:70%;
margin:0 auto;
position:relative;
background:whitesmoke;
top:2em;
padding:2em;
@media screen and (max-width:${globalTheme.deviceMinLarge}){
  width:100%;
}

`;

export const Title = styled.p`

`;

export const InputField = styled.div`
width:100%;
`;

export const ButtonContainer = styled.div`
display:flex;
`;
