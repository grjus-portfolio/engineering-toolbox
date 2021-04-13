import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../../style';

export const Container = styled(NavLink)`
display:flex;
flex-direction:column;
align-content:center;
justify-content:space-around;
background:${theme.topBarColor};
padding:1.5em;
width:30%;
text-decoration:none;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: box-shadow 200ms ease-in-out;
&:hover{
    box-shadow: 0 6px 12px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
}
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
