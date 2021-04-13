import styled from 'styled-components';
import { theme } from '../../../style';

export const Container = styled.div`
position:relative;
margin:5em auto;
display:flex;
width:90%;
justify-content:space-between;
align-items:baseline;
@media screen and (max-width:${theme.deviceMin}){
    flex-direction:column;
    width:100%;
    align-items:center;
    justify-content:space-around;
}
`;
