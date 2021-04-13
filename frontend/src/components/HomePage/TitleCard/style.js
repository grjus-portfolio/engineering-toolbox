import styled from 'styled-components';
import { theme } from '../../../style';

export const Container = styled.div`
position:relative;
top:2rem;
display:flex;
justify-content:space-between;
width:90%;
margin:0 auto;
align-content:center;
background:${theme.topBarColor};
padding:1.5em;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px ;


@media screen and (max-width:${theme.deviceMin}){
    flex-direction:column;
    width:100%;
    align-items:center;
}


`;
export const Info = styled.div`
margin-right:1em;
@media screen and (max-width:${theme.deviceMin}){
    margin-top:1.5em;
}

`;
export const Title = styled.h2`
margin-top:0;
color:${theme.logoColor}

`;
export const Description = styled.p`
color:rgba(0,0,0,0.8);
font-size:1.2rem;
line-height:1.5em;
margin:0 auto;



& span{
    color:${theme.primary};
    font-weight:bold;
    
}

@media screen and (max-width:${theme.deviceMin}){
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
}

`;
export const Image = styled.img`
display:block;
max-width:100%;
align-self:center;
@media screen and (max-width:${theme.deviceMin}){
    width:100%;
    order:-1;
}

`;
