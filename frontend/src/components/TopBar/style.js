import styled, { css } from 'styled-components';
import Menu from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core';
import { theme } from '../../style';

export const CustomMenu = withStyles({
  root: {
    [`@media (min-width:${theme.deviceMin})`]: { // eslint-disable-line no-useless-computed-key
      display: 'none',
    },
    marginRight: '0.5em',
    cursor: 'pointer',
    color: theme.primary,
    margin: 0,
  },
})(Menu);

export const Header = styled.header`
background:${theme.topBarColor};
text-align:center;
position:fixed;
z-index:999;
width:100%;
padding:0.5rem;

@media screen and (min-width:${theme.deviceMin}){
  display: grid;
    grid-template-columns: 1fr auto 800px 1fr;
}


`;

export const Logo = styled.div`
/* width:13%; */
white-space:nowrap;
display:flex;
margin:0.5em auto;
@media screen and (min-width:${theme.deviceMin}){
  grid-column: 1 / 3;
  
}

`;

export const Nav = styled.nav`
  position: absolute;
  text-align: left;
  top: 100%;
  left: 0;
  background:${theme.topBarColor};
  width: 100%;

  ${(p) => {
    if (p.expand) {
      return css`
    transform: scale(1, 1);
    transform-origin: top;
    transition: transform 400ms ease-in-out;
    `;
    }
    return css`
      transform: scale(1, 0);
      transform-origin: top;
      transition: transform 400ms ease-in-out;
      `;
  }

}

@media screen and (min-width:${theme.deviceMin}){
    all: unset;
    grid-column: 3 / 4;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-width:0;
  
}
`;

export const NavUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  ${(p) => {
    if (p.expand) {
      return css`
      opacity: 1;
      transition: opacity 250ms ease-in-out 250ms;
    `;
    }
    return css`
      opacity: 0;
      transition: opacity 250ms ease-in-out;
      `;
  }
}

  @media screen and (min-width:${theme.deviceMin}){
    opacity: 1;
    display: flex;
    justify-content: flex-end;
  
}



`;

export const NavLi = styled.li`

margin-bottom: 1em;
  margin-left: 1em;
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: uppercase;
  transition: opacity 150ms ease-in-out;
  white-space:nowrap;

& a{
  text-decoration: none;
  color: ${theme.primary};
  position: relative;
}

& a:hover {
  color: ${theme.secondary};
}


 a::before {
  content: "";
  display: block;
  height: 2px;
  background: ${theme.secondary};
  position: absolute;
  bottom: -0.25em;
  left: 0;
  right: 0;
  transform-origin:left;
  transform: scale(0, 1);
  transition: transform ease-in-out 250ms;
}

& a:hover::before{
  transform: scale(1, 1);
}

@media screen and (min-width:${theme.deviceMin}){
  margin-left: 3em;
  margin-bottom: 0;
  
}




`;
