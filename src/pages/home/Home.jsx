import React, { useEffect, useState } from "react";
import { getUserDetails } from "../../api/auth";

const Home = () => {
  const [userDetails, setuserDetails] = useState();

  const getUser = async () => {
    const data = await getUserDetails();
    setuserDetails(data);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      {userDetails ? (
        <>
          <h1>{userDetails.firstName + " " + userDetails.lastName}</h1>
          <h1>{userDetails.email}</h1>
        </>
      ) : (
        <>Loading</>
      )}
    </div>
  );
};

export default Home;
