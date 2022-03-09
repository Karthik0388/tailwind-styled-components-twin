import React, { useState } from "react";
import tw from "tailwind-styled-components";

const LoginForm = () => {
  let [state, setState] = useState({
    email: "",
    password: "",
    password1: "",
  });

  let { email, password, password1 } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <Section>
      <Article>
        <Form onSubmit={handleSubmit}>
          <Title>LogIn Form</Title>
          <Div>
            <Lable>Email Id</Lable>
            <Input
              onChange={handleChange}
              type={"email"}
              name={"email"}
              value={email}
              placeholder={"ENTER EMAIL ID"}
            />
          </Div>
          <Div>
            <Lable>Password</Lable>
            <Input
              type={"password"}
              name={"password"}
              onChange={handleChange}
              value={password}
              placeholder={"ENTER PASSWORD"}
            />
          </Div>
          <Div>
            <Lable>Confirm Password</Lable>
            <Input
              type={"password1"}
              name={"password1"}
              onChange={handleChange}
              value={password1}
              placeholder={"CONFIRM PASSWORD"}
            />
          </Div>
          <Div>
            <Button>Submit</Button>
          </Div>
        </Form>
      </Article>
    </Section>
  );
};

export default LoginForm;

//? Styled-Component with Tailwind Css (Twin)

let Section = tw.section`
  w-4/5
  mx-auto
  `;
let Article = tw.article`
 bg-white
 sm:3/5
 w-full
  p-1
  h-[500px]
  flex
  flex-col
  justify-center
  align-items-center
  `;
let Form = tw.form`
 sm:w-4/5
 md:w-full
 mx-auto
  `;
export let Div = tw.div`
w-full
sm:3/5
 my-5
  `;

export let Title = tw.h1`
  text-blue-600
  font-bold
  uppercase
  text-center
  text-2xl
  `;
let Lable = tw.label`
 uppercase
  font-bold
  my-2
  `;
let Input = tw.input`
  w-full
  bg-gray-200
  rounded-md
  p-3
  `;
let Button = tw.button`
  py-3
  w-full
  border-none
  text-white
  bg-blue-600
  rounded-md
  uppercase
  font-bold
  `;
let Select = tw;
