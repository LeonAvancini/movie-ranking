import React, { useState } from "react";
import styled from "styled-components/macro";
import { paragraph } from "../../fontSizes";

import Logo from "../Logo";
import UserInfo from "../UserName";

const Container = styled.div`
  border: 2px solid orange;
  background-color: #ffb733;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputStyled = styled.input`
  ${paragraph};
  width: 300px;
  height: 40px;
  border: 1px solid black;
  border-radius: 5px;
`;

export default () => {
  const [movieNameValue, onSearchChange] = useState("");

  return (
    <Container>
      <Logo />

      <InputStyled
        type="text"
        onChange={(event) => {
          onSearchChange(event.target.value);
        }}
        value={movieNameValue}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        name="movieSearch"
        placeholder="Buscar Pelicula"
      />

      <UserInfo />
    </Container>
  );
};
