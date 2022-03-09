import React from "react";
import { Title, Div } from "../Components/AuthComponent/LoginForm";
import tw from "tailwind-styled-components";

const Home = () => {
  return (
    <div>
      <Title>Home Page</Title>
      <Div>
        <Img src="home.jpg" alt="home.jpg" />
      </Div>
    </div>
  );
};

export default Home;

let Img = tw.img`
sm:3/5
w-4/5
mx-auto
flex
justify-center

`;
