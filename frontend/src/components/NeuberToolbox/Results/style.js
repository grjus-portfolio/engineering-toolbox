import styled from 'styled-components';
import { theme } from '../../../style';

export const StyledContainer = styled.div`
margin-top:10px;
overflow:auto;
display:flex;
justify-content:space-between;
position:relative;
transform-origin:top;
max-height:auto;
transform:scaleY(${(props) => (props.height ? props.height : 1)});
transition:transform 0.3s ease-in;
overflow:hidden;
${({ hidden }) => hidden && `
transform:scaleY(0);
max-height:0;
`}

${({ hidden }) => hidden && `
padding 0em;
max-height:0;
`}
@media screen and (max-width:${theme.deviceMinLarge}){
    flex-direction:column;
}
`;
