import React, { useState } from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

const Auth = ({ setisUser }) => {
  const [isLoginPage, setisLoginPage] = useState(true);
  return (
    <div>
      {isLoginPage ? (
        <SignIn setisUser={setisUser} setisLoginPage={setisLoginPage} />
      ) : (
        <SignUp setisLoginPage={setisLoginPage} />
      )}
    </div>
  );
};

export default Auth;
