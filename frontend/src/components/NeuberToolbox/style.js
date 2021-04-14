import styled from 'styled-components';
import { Title } from '../ToolboxComponents/Card/style';
import { theme } from '../../style';

export const AppContainer = styled.div`
width:80%;
margin:0 auto;
position:relative;
background:whitesmoke;
top:2em;
padding:1.5em;
@media screen and (max-width:${theme.deviceMinLarge}){
    width:100%;
}
`;

export const InputBlock = styled.div`
width:100%;
display:flex;
flex-flow:column wrap; 
flex-direction:row;
justify-content:flex-start;
transition: opacity 0.2s ease-in;
opacity:1;
@media screen and (max-width:${theme.deviceMinSmall}){
    flex-direction:column;
}
`;

export const InputField = styled.div`
width:30%;
padding:0.75em;
@media screen and (max-width:${theme.deviceMinSmall}){
    flex-direction:column;
    width:100%;
}
`;

export const Header = styled(Title)`
font-size:1.2rem;
color:${theme.primary};
font-weight:500;
margin-left:0.25em;


`;

export const OpacityBlock = styled.div`
display:block;
opacity:1;
transition: opacity 0.3s ease-in-out;
${({ disabled }) => disabled && `
opacity:0.4;
pointer-events: none;
`}
`;

export const Separator = styled.hr`
border:1px solid rgba(0,0,0,0.2);
width:80%;
`;
