import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  mainLayoutColor: '#E3E2DF',
  color: 'rgba(0, 0, 0, 0.8)',
  // topBarColor: '#BAB2B5',
  topBarColor: 'rgba(255,250,250,0.8)',
  logoColor: '#123C69',
  logoColorHover: '#AC3B61',
  primary: '#123C69',
  secondary: '#AC3B61',
  deviceMin: '1000px',
};

const GlobalStyle = createGlobalStyle`
*,*::before,*::after {
  box-sizing:border-box;
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


  }
`;

export const Container = styled.div`
  display: block;
  background-color: ${(props) => (props.noBackColor ? theme.mainLayoutColor : 'whitesmoke')};
  position: relative;
  top: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 70%;
  transition: height 0.5s ease-in;
  ${({ hidden }) => hidden
    && `
height:300px;
`}
`;

export default GlobalStyle;
