import React from "react";
import styled from "styled-components/macro";

import MovieInfo from "../../components/MovieInfo";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  min-height: 1000px;
  height: 100%;
`;

const MoviesContainer = styled.div`
  padding: 40px 0px 60px 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
`;

//TODO: who type is a image when its coming from backend...?
interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number,
  description: string;
  duration: string;
  rate: number[];
  image: string;
}

const moviesArray: Movie[] = [
  {
    id: 1,
    title: "Robocop 3",
    genre: "Action",
    year: 1993,
    description: "The mega corporation Omni Consumer Products is still bent on creating their pet project, Delta City, to replace the rotting city of Detroit. Unfortunately, the inhabitants of the area have no intention of abandoning their homes simply for desires of the company. To this end, OCP have decided to force them to leave by employing a ruthless mercenary army to attack and harass them. An underground resistance begins and in this fight, Robocop must decide where his loyalties lie.",
    duration: "1:23",
    rate: [3, 4, 1, 5],
    image: "https://fffmovieposters.com/wp-content/uploads/59840.jpg",
  },
  {
    id: 2,
    title: "Indiana Jones",
    genre: "Adventure",
    year: 1984,
    description: "Set in 1935, a professor, archaeologist, and legendary hero by the name of Indiana Jones is back in action in his newest adventure. But this time he teams up with a night club singer named Wilhelmina “Willie” Scott and a twelve-year-old boy named Short Round. They end up in an Indian small distressed village, where the people believe that evil spirits have taken all their children away after a sacred precious stone was stolen! They also discovered the great mysterious terror surrounding a booby-trapped temple known as the Temple of Doom! Thuggee is beginning to attempt to rise once more, believing that with the power of all five Sankara stones they can rule the world! Now, it’s all up to Indiana to put an end to the Thuggee campaign, rescue the lost children, win the girl and conquer the Temple of Doom.",
    duration: "2:42",
    rate: [4, 5, 2, 5, 5],
    image: "https://fffmovieposters.com/wp-content/uploads/38818.jpg",
  },
  {
    id: 3,
    title: "Pirates of the Caribbean",
    genre: "Adventure",
    year: 2007,
    description: "After Elizabeth, Will, and Captain Barbossa rescue Captain Jack Sparrow from the the land of the dead, they must face their foes, Davy Jones and Lord Cutler Beckett. Beckett, now with control of Jones’ heart, forms a dark alliance with him in order to rule the seas and wipe out the last of the Pirates. Now, Jack, Barbossa, Will, Elizabeth, Tia Dalma, and crew must call the Pirate Lords from the four corners of the globe, including the infamous Sao Feng, to gathering. The Pirate Lords want to release the goddess Calypso, Davy Jones’s damned lover, from the trap they sent her to out of fear, in which the Pirate Lords must combine the 9 pieces that bound her by ritual to undo it and release her in hopes that she will help them fight. With this, all pirates will stand together and will make their final stand for freedom against Beckett, Jones, Norrington, the Flying Dutchman, and the entire East India Trading Company.",
    duration: "1:52",
    rate: [3, 4, 1, 5, 1, 2, 3, 5],
    image:
      "https://fffmovieposters.com/wp-content/uploads/54832.jpg",
  },
];

export default () => {
  return (
    <PageContainer>
      <MoviesContainer>
        {moviesArray.map((movie) => {
          return (
            <MovieInfo
              key={movie.id}
              image={movie.image}
              title={movie.title}
              duration={movie.duration}
              description={movie.description}
              rate={movie.rate}
              year={movie.year}
              genre={movie.genre}
            />
          );
        })}
      </MoviesContainer>
    </PageContainer>
  );
};
