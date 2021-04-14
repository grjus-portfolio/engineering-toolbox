import styled from 'styled-components';

export const Container = styled.div`
display:flex;
justify-content:flex-start;
position:relative;
float:right;
top:4.5rem;
opacity:0;
z-index:999;
transition:opacity 0.2s ease-in;
${({ isRunning }) => isRunning && `
opacity:1;
`}
`;

export const Message = styled.span`
font-size:1.1rem;
color:rgba(0,0,0,0.6);
letter-spacing:0.5px;
padding:0.5em;
word-wrap:break;
white-space: nowrap;

`;
