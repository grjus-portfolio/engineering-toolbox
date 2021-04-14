import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core';
import { theme } from '../../../style';

export const Container = styled.div`
display:block;
position: relative;
padding: 10px;
margin: 0 auto;
width: 30%;
text-align:center;
@media screen and (max-width:${theme.deviceMin}){
    position:absolute;
    width:90%;
    margin:0;
    top:4em;
}
`;

export const Logo = styled.img`
top:0;
max-width:60%;
align-self:center;
@media screen and (max-width:${theme.deviceMin}){
  max-width:70%;
}
`;

export const DescriptionContainer = styled.div`
top:0;
display:flex;
flex-direction:column;
`;

export const Description = styled.p`
bottom:1em;
width:100%;
text-align:center;
font-size:1.3rem;
color:rgba(0,0,0,0.6);
padding:1em;
`;

export const Bar = styled.div`
position:absolute;
bottom:2.5em;
width:100%;
margin:auto;
left:25%;
`;

export const StyledProgress = withStyles({
  root: {
    height: '2px',
    width: '50%',
  },

  bar1Indeterminate: {
    backgroundColor: theme.primary,

  },
  bar2Indeterminate: {
    backgroundColor: theme.primaryHover,
  },
})(LinearProgress);
