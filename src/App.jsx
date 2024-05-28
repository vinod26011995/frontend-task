import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";

const App = () => {
  const [isUser, setisUser] = useState(false);
  return (
    <div>
      {isUser ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <>
          <Auth setisUser={setisUser} />
        </>
      )}
    </div>
  );
};

export default App;
