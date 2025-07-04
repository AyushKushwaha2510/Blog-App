// src/pages/OAuthHandler.jsx

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const OAuthHandler = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await authService.getCurrentUser();
        if (user) {
          dispatch(login(user));
          navigate("/all-posts");
        } else {
          navigate("/login");
        }
      } catch (err) {
        console.error("OAuth Redirect Error:", err.message);
        navigate("/login");
      }
    };

    loadUser();
  }, []);

  return (
    <div className="text-center text-lg p-4">
      Logging you in via Google...
    </div>
  );
};

export default OAuthHandler;
