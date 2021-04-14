import styled from 'styled-components';
import DetailsIcon from '@material-ui/icons/Details';
import { withStyles, Divider } from '@material-ui/core';
import { theme } from '../../../../style';

export const Separator = withStyles({
  root: {
    width: '100%',
  },

})(Divider);

export const TableContainer = styled.div`
position:relative;
margin:0 auto;
display:flex;
flex-direction:column;
justify-content:space-around;
width:100%;
padding:0 0.5em;
font-size:1rem;
`;

export const Title = styled.h3`
text-align:center;
color:${theme.primary};
width:100%;


`;

export const Table = styled.table`
width:100%;

`;

export const TableHeader = styled.th`
padding:1.2em;
font-weight:bold;
text-align:left;
`;
export const TableRow = styled.tr`
:nth-child(even){
    background-color:rgba(0,0,0,0.05)
}
`;

export const TableItem = styled.td`
padding:0.75em;
`;

export const IconContainer = styled.div`
display:flex;
justify-content:flex-start;
cursor:pointer;
margin-top:1em;
`;

const iconTheme = (icoTheme) => ({
  root: {
    transform: (props) => (props.show),
    transition: icoTheme.transitions.create(['transform'], {
      easing: icoTheme.transitions.easing.sharp,
      duration: icoTheme.transitions.duration.standard,
    }),
  },
  colorPrimary: {
    color: theme.primary,

  },
});
export const DetailIcon = withStyles(iconTheme)(DetailsIcon);

export const Header = styled.p`
margin:0;
font-size:1.1rem;
color:${theme.primary};
opacity:0.7;
transition:opacity 250ms ease-in-out;
&:hover{
  opacity:1;
}
`;
