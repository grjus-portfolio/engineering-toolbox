import styled from 'styled-components';
import { theme, Shadow } from '../../../style';

export const Container = styled.div`
position:relative;
margin:0 auto;
width:50%;
background:${theme.topBarColor};
top:8em;
${Shadow}
@media screen and (max-width:${theme.deviceMinLarge}){
    width:90%;
}

`;

export const LogoContainer = styled.div`
position:relative;
align-self:center;
top:1em;
margin:0 auto;
width:30%;
@media screen and (max-width:${theme.deviceMinLarge}){
    width:50%;
}
`;

export const Logo = styled.img`
max-width:100%;


`;

export const LogoTitle = styled.h1`
margin:0 auto;
font-size:2rem;

`;

export const LogoFooter = styled.div`
position:relative;
font-size:1rem;
letter-spacing:1px;
text-align:center;
position:relative;
/* margin:0 auto; */
left:1em;
`;
