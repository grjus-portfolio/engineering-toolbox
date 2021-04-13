import styled from 'styled-components';
import { theme } from '../../style';

export const Container = styled.div`
font-size:1.3rem;
display:block;
margin-top:1em;
padding:1.5em;
`;

export const Title = styled.h2`
color:${theme.primary};
font-size:1.2em;
margin:0;
`;

export const Description = styled.p`
color:rgba(0,0,0,0.8);

word-spacing:5px;
text-align:justify;
line-height:1.6em;
`;
