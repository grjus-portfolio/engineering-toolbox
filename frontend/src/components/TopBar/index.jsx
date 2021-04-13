import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LogoAssm from './Logo';
import { NavLinkItems } from './config';
import {
<<<<<<< HEAD
  Bar, Anchor,
  theme, NavLinkUl, LogoBox,
=======
  Header, Nav, NavUl, NavLi, Logo, CustomMenu,
>>>>>>> responsive/TitleCard
} from './style';

// import { AppContextDispatch } from '../App/context';

const TopBar = () => {
  const [expand, setExpand] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpand(false);
  }, [location]);

  return (
<<<<<<< HEAD
    <ThemeProvider theme={theme}>
      <nav>
        <Bar>
          <Menu onClick={showMenu} innerRef={menuRef} style={{ cursor: 'pointer', heigth: '100%', margin: 'auto 0' }} />
          <LogoBox>
            <LogoAssm rotate />
          </LogoBox>
          <NavLinkUl>
            {TopBarItems.map((item) => (
              <Anchor
                key={item.key}
                activeClassName={Anchor.active}
                replace
                exact
                to={item.link}
              >
                {item.name}

              </Anchor>
            ))}
          </NavLinkUl>
        </Bar>
      </nav>
    </ThemeProvider>
=======
    <Header>

      <Logo>
        <CustomMenu onClick={() => setExpand((prev) => !prev)} />
        <LogoAssm />
      </Logo>
      <Nav expand={expand}>
        <NavUl expand={expand}>
          {NavLinkItems.map((item) => (
            <NavLi key={item.key}>
              <NavLink exact to={item.link}>{item.display}</NavLink>
            </NavLi>
          ))}

        </NavUl>
      </Nav>
    </Header>
>>>>>>> responsive/TitleCard
  );
};
export default TopBar;
