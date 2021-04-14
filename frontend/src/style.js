import styled, { createGlobalStyle, css } from 'styled-components';

export const theme = {
  mainLayoutColor: '#E3E2DF',
  color: 'rgba(0, 0, 0, 0.8)',
  // topBarColor: '#BAB2B5',
  topBarColor: 'rgba(255,250,250,0.8)',
  // topBarColor: 'white',
  primary: '#123C69',
  secondary: '#AC3B61',
  deviceMin: '1000px',
};

const GlobalStyle = createGlobalStyle`
*,*::before,*::after {
  box-sizing:border-box;
  overflow-x:hidden;
}
:root{
  font-size:16px;
  @media (max-width:${theme.deviceMin}){
      font-size:14px;
    }

}
  body {
    font-family:'Roboto','Arial',sans-serif;
    background-color:${theme.mainLayoutColor};
    color:${(props) => props.theme.color};
    margin:0;
    padding:0;
    align-items:center;
    user-select: none;
    letter-spacing:0.5px;
    color:rgba(0,0,0,0.6);
    position:relative;
    overflow-x:hidden;
    


  }
`;

export const Container = styled.div`
  display: block;
  background-color: ${(props) => (props.noBackColor ? theme.mainLayoutColor : 'whitesmoke')};
  position: relative;
  top: 4em;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 70%;
  max-height:max-content;
  transition: height 0.5s ease-in;
  ${({ hidden }) => hidden
    && 'height:300px'}

@media screen and (max-width:${theme.deviceMin}){
    width:90%;
    /* margin-bottom:1em; */
    /* align-items:center; */
}
`;

export const Shadow = css`
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: box-shadow 200ms ease-in-out;
&:hover{
    box-shadow: 0 6px 12px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
}
`;

export default GlobalStyle;
