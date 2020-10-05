import * as React from "react";
import usePortal from "react-cool-portal";
import styled from "styled-components/macro";
import { h3 } from "../../fontSizes";
import StarIcon from "../icons/starIcon/StarIcon";

const StyledButton = styled.button`
  border: none;
  border-radius: 10px 10px 0px 0px;
  padding: 0px;
`;

const BackGround = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.5);
`;
const Modal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 800px;
  top: 25px;
  left: calc(50vw - 500px / 2);
  background-color: white;
  box-shadow: 0px -1px 46px -10px rgba(255, 255, 255, 1);
  border-radius: 5px;
`;

const Image = styled.img`
  border-radius: 5px 5px 0px 0px;
  color: black;
  align-items: center;
  background-color: orange;
  height: 552px;
  width: 100%;
`;
const MovieDataRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  border: 1px solid #ffc04d;
  background-color: #ffae1a;
  // #ffae1a;
  // #e69500;
`;
const MovieData = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: calc(100% / 3);
  padding-bottom: 5px;
`;
const Subtitle = styled.div`
  padding: 5px 0px 2px 0px;
  ${h3};
`;
const Description = styled.div`
  overflow: scroll;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  overflow-x: hidden;
  padding: 0px 10px 10px 10px;
  height: 140px;
  background-color: rgb(255, 192, 77, 0.5);
`;
const Rate = styled.div`
  position: absolute;
  left: 0px;
  text-align: center;
  line-height: 30px;
  width: 60px;
  font-weight: bold;
  height: 30px;
  background-color: gold;
  color: black;
  style: none;
  border: none;
  border-radius: 5px 0px 5px 0px;
`;
const CloseButton = styled.button`
  position: absolute;
  right: 0px;
  width: 50px;
  font-weight: 900 !important;
  height: 30px;
  background-color: white;
  color: black;
  style: none;
  border: none;
  border-radius: 0px 5px 0px 5px;
  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
  &:active {
    background-color: gray;
  }
`;
const RateContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: black;
  justify-content: space-around;
`;
const StarButton = styled.button`
  style: none;
  border: none;
  background-color: black;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;
interface Props {
  children: React.ReactNode;
  title: string;
  genre: string;
  year: number;
  description: string;
  duration: string;
  rate: number;
  image: string;
}
export default ({
  duration,
  description,
  image,
  title,
  rate,
  genre,
  year,
  children,
}: Props) => {
  const { Portal, show, hide } = usePortal({ defaultShow: false });

  return (
    <>
      <StyledButton onClick={show}>{children}</StyledButton>
      <Portal>
        <BackGround>
          <Modal>
            <Rate>{rate} ☆</Rate>
            <CloseButton onClick={hide}>Close</CloseButton>
            <Image src={image} alt={title} />
            <MovieDataRow>
              <MovieData>
                <Subtitle>Year</Subtitle>
                {year}
              </MovieData>
              <MovieData>
                <Subtitle>Duration</Subtitle> {duration}
              </MovieData>
              <MovieData>
                <Subtitle>Genre</Subtitle>
                {genre}
              </MovieData>
            </MovieDataRow>
            <Description>
              <Subtitle> Movie description:</Subtitle>
              {description}
            </Description>
            <RateContainer>
              <StarButton>
                <StarIcon width={60} color={"gold"} />
              </StarButton>
              <StarButton>
                <StarIcon width={60} color={"gold"} />
              </StarButton>
              <StarButton>
                <StarIcon width={60} color={"gold"} />
              </StarButton>
              <StarButton>
                <StarIcon width={60} color={"gold"} />
              </StarButton>
              <StarButton>
                <StarIcon width={60} color={"gold"} />
              </StarButton>
            </RateContainer>
          </Modal>
        </BackGround>
      </Portal>
    </>
  );
};
