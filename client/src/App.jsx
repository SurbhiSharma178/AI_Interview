import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home.jsx";
import Auth from "../src/pages/Auth.jsx";
import { authenticatedApi } from "./api";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/userSlice.js";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await authenticatedApi.user.getProfile();
        dispatch(setUserData(result.data));
      } catch (error) {
        dispatch(setUserData(null));
      }
    };
    getUser();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default App;
