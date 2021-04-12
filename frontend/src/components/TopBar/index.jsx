import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LogoAssm from './Logo';
import { NavLinkItems } from './config';
import {
  Header, Nav, NavUl, NavLi, Logo, CustomMenu,
} from './style';

// import { AppContextDispatch } from '../App/context';

const TopBar = () => {
  const [expand, setExpand] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpand(false);
  }, [location]);

  return (
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
  );
};
export default TopBar;
