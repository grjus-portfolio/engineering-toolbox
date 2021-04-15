import styled from 'styled-components';
import { theme } from '../../../style';

export const DropdownContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-even;
height:max-content;
`;

export const DropDownWrapper = styled.div`
width:30%;
`;

export const CheckboxContainer = styled.div`
width:max-content;
`;

export const InputField = styled.div`
width:max-content;

`;

export const FatigueFactors = styled.div`
display:flex;
justify-content:flex-start;
@media screen and (max-width:${theme.deviceMinSmall}){
    flex-direction:column;
}
`;
