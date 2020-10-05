import React from "react";
import styled from "styled-components/macro";
import { h2, h3 } from "../../fontSizes";
import StarIcon from "../icons/starIcon/StarIcon";
import Modal from "../Modal";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 60px 40px 0px 40px;
  background-color: white;
  height: 430px;
  width: 300px;
  border-radius: 10px 10px 0px 0px;
  border: 1px solid black;
  transition: transform 0.1s ease-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: -1px 2px 32px -4px rgba(231, 166, 26, 0.74);
  }
`;

const Data = styled.div`
  ${h3}
  color: black;
`;

const DataContainer = styled.div`
  display: flex;
  width: 100%;
  height: 27px;
  background-color: rgba(231, 166, 26, 0.9);
  justify-content: space-between;
  padding: 5px 20px;
`;

const Image = styled.img`
  height: 360px;
  width: 300px;
  border-radius: 10px 10px 0px 0px;
  align-items: center;
  border-bottom: 1px solid black;
  color: black;
  background-color: orange;
  height: 359px;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 30px;
  ${h2};
  margin: 5px;
  color: black;
`;

//TODO: Who type is a image file? it's coming from backend.
interface MovieInfoProps {
  image: string;
  title: string;
  rate: number[];
  year: number;
  genre: string;
  duration: string;
  description: string;
}

export default ({
  duration,
  description,
  image,
  year,
  title,
  rate,
  genre,
}: MovieInfoProps) => {
  const promRate = (rate: number[]) => {
    const sum = rate.reduce((a, b) => {
      return a + b;
    });
    return sum / rate.length;
  };
  const finalProm = promRate(rate);
  return (
    <Container>
      <Modal
        image={image}
        title={title}
        rate={finalProm}
        genre={genre}
        year={year}
        duration={duration}
        description={description}
      >
        <Image src={image} alt={title} />
        <Title>{title}</Title>
        <DataContainer>
          <Data>{genre}</Data>
          <Data>
            {finalProm} <StarIcon width={12} color={"gold"} />
          </Data>
        </DataContainer>
      </Modal>
    </Container>
  );
};
// #ffc04d;
// #ffae1a;
// #e69500;
