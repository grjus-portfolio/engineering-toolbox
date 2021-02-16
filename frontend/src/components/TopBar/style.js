import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const theme = {
  topBarColor: '#BAB2B5',
  topBarPadding: '20px',
  logoColor: '#123C69',
  logoColorHover: '#AC3B61',
  linkColor: 'rgba(0,0,0,0.8)',
};

export const Bar = styled.div`
display:flex;
justify-content:space-around;
/* width:100%; */
background-color:${(props) => props.theme.topBarColor};
padding:${(props) => props.theme.topBarPadding};
`;

export const Logo = styled.a`
text-decoration:none;
color:${(props) => props.theme.logoColor};
letter-spacing:0.8px;
font-weight:bold;
font-size:20px;
transition:color 0.3s ease-in-out;
&:hover{
    color:${(props) => props.theme.logoColorHover};
}


`;

export const Anchor = styled(NavLink)`
text-decoration:none;
color:${(props) => props.theme.linkColor};
letter-spacing:0.5px;
font-size:18px;
padding:0 10px 0 10px;
&.active{
    
}
`;