import React from "react";
import styled from "styled-components/macro";
import { paragraph } from "../../fontSizes";

const Container = styled.div`
  background-color: gray;
  justify-content: center;
  display: flex;
`;

const DeveloperName = styled.div`
  ${paragraph};
`;

export default () => {
  return (
    <Container>
      <DeveloperName>- Leon Avancini -</DeveloperName>
    </Container>
  );
};
