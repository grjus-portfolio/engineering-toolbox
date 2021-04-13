import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme, Shadow } from '../../../style';

export const Container = styled(NavLink)`
display:flex;
flex-direction:column;
align-content:center;
justify-content:space-around;
background:${theme.topBarColor};
padding:1.5em;
width:30%;
text-decoration:none;
${Shadow}
@media screen and (max-width:${theme.deviceMin}){
    width:100%;
    margin-bottom:1em;
    /* align-items:center; */
}

`;
export const Image = styled.img`
max-width:100%;
position:relative;
/* align-self:center; */

`;
export const Title = styled.h3`
margin:1em 0;
color:${theme.primary}

`;
export const Description = styled.p`
margin:0;
font-size:1rem;
line-height:1.5em;
color:rgba(0,0,0,0.8);

`;
