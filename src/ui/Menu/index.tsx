import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routes from "main/routes";

const loginItem = nameof<Routes.Login>();
const signUpItem = nameof<Routes.SignUp>();

const Navigation = () => {
  const [activeItem, setActiveItem] = useState(loginItem);

  //@ts-ignore
  const handleItemClick = (e, { name }: any) => setActiveItem(name);

  return (
    <Menu>
      <Link to={Routes.Login}>
        <Menu.Item
          name={loginItem}
          active={activeItem === loginItem}
          onClick={handleItemClick}
        >
          Login
        </Menu.Item>
      </Link>
      <Link to={Routes.SignUp}>
        <Menu.Item
          name={signUpItem}
          active={activeItem === signUpItem}
          onClick={handleItemClick}
        >
          Register
        </Menu.Item>
      </Link>
    </Menu>
  );
};

export default Navigation;
