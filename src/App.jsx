import React, { Fragment } from "react";
import LoginForm from "./Components/AuthComponent/LoginForm";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Fragment>
      <Home/>
      <LoginForm />
    </Fragment>
  );
};

export default App;
