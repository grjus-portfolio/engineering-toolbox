import styled from 'styled-components';
import { theme } from '../../style';

export const Container = styled.div`
padding:2.0em;

`;

export const Header = styled.h2`
font-size:1.5rem;
margin:0;
color:${theme.primary};
letter-spacing:0.8px;
word-spacing:2px;
`;

export const Description = styled.div`
text-align:justify;
color:rgba(0,0,0,0.8);
letter-spacing:0.2px;
font-size:1.2rem;
line-height:1.5em;
padding:1.5em 0;
& span{
    color:${theme.secondary};
    font-weight:bold;

}
`;

export const FieldContainer = styled.div`
margin-bottom:1em;
width:50%;
@media screen and (max-width:${theme.deviceMin}){
    width:90%;
}
`;

export const FormContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
`;

export const ConfirmMessage = styled.p`
font-size:16px;
letter-spacing:0.5px;
color:${(props) => (props.color ? props.color : theme.primary)}
`;

export const Error = styled.p`
font-size:1rem;
letter-spacing:0.5px;
color:${theme.primaryHover};
padding:0px;
margin:0px;
font-weight:bold;
`;
