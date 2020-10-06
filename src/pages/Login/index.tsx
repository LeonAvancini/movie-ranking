import React from "react";
import { useForm } from "react-hook-form";
import LoginBackground from "../Login/LoginBackground.png";

import styled from "styled-components/macro";
const PageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${LoginBackground});
  color: white;
`;

const LoginContainer = styled.div`
  display: flex;
  border: 1px solid white;
  box-shadow: 2px 4px 13px 11px rgba(255,255,255,1);
  padding:10px;
  justify-content: center;
  align-items: center;
background-image: linear-gradient(to top, #cfcfcf 0%, #a9a9a9 40%);
  width: 450px;
  height: 250px;
  border-radius:10px;
}
`;

const ErrorMessage = styled.span`
  color: black;
  font-size: 10px;
  margin: 5px 5px;
`;
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 55px;
`;
const InputStyled = styled.input`
  text-align: center;
  font-weight: bold;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
  width: 300px;
  height: 40px;
`;

const ButtonStyled = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  font-size: 15px;
  width: 100px;
  margin-top: 10px;
  height: 30px;
  background-color: #ffc04d;
  &:hover {
    cursor: pointer;
    background-color: #ffae1a;
  }
  &:active {
    background-color: #e69500;
  }
`;

const Title = styled.h2`
  margin-top: 0px;
  color: black;
`;

interface LoginProps {
  LogedIn: (state: boolean) => void;
}
export default ({ LogedIn }: LoginProps) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <PageContainer>
      <LoginContainer>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <Title>Login</Title>
          <InputContainer>
            <InputStyled
              placeholder="Username"
              name="username"
              ref={register({ required: true })}
            />
            {errors.username && (
              <ErrorMessage>Username is required</ErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <InputStyled
              type="password"
              placeholder="Password"
              name="password"
              ref={register({ required: true })}
            />
            {errors.password && (
              <ErrorMessage>Password is required</ErrorMessage>
            )}
          </InputContainer>
          <ButtonStyled type="submit" onClick={()=>{LogedIn(true)}}>
            Sign In
          </ButtonStyled>
        </FormStyled>
      </LoginContainer>
    </PageContainer>
  );
};
