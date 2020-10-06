import React, { useState } from "react";
import styled from "styled-components/macro";
import { h3, paragraph } from "../../fontSizes";
import DownArrow from "../icons/DownArrow/DownArrow";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const UserStyle = styled.div`
  ${h3};
  padding: 5px;
  background-color: black;
  color: white;
  border-radius: 5px 5px 5px 5px;
`;
const Button = styled.button<{
  setPressed?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  height: 100%;
  width: 100%;
  transition: background-color 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: #e69500;
  }
  &:focus {
    background-color: #e69500;
  }
  ${(props) =>
    props.setPressed
      ? "background-color: #e69500; border-radius: 0px; "
      : "border-radius: 0px 0px 5px 5px; background-color: white;"};
`;
const DropMenu = styled.div<{
  itsActive?: boolean;
}>`
  display: ${(props) => (props.itsActive ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 38px;
  right: 6px;
  border: 5px solid #e69500;
  border-radius: 0px 0px 5px 5px;
  width: 67.5px;
  height: 40px;
  background-color: #e69500;
`;
const MenuOption = styled.button`
  ${paragraph}
  background: transparent;
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  border: 0;
  color: black;
  &:hover {
    cursor: pointer;
  }
`;

export default () => {
  const [showDropMenu, setShowDropMenu] = useState(false);
  return (
    <Container>
      <UserStyle>
        UserName
        <Button
          setPressed={showDropMenu}
          onClick={() => {
            setShowDropMenu(!showDropMenu);
          }}
        >
          <DownArrow width={15} />
        </Button>
      </UserStyle>
      <DropMenu itsActive={showDropMenu}>
        <MenuOption
          onClick={() => {
            console.log("Logout");
          }}
        >
          LogOut
        </MenuOption>
      </DropMenu>
    </Container>
  );
};
