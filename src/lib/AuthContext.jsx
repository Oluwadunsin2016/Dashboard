/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useGetProfile } from "../apis/auth";
import socket from "./socket";
import { notifier } from "./utils";

const AuthContext = createContext({
  user: null,
  authenticate: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const storedToken = localStorage.getItem("token");

  // ✅ Check token expiry BEFORE making API request
  useEffect(() => {
    if (!storedToken || checkTokenExpiration(storedToken)) {
      logout();
      return;
    }
  }, []); // Runs once on mount

  const { data, isRefetching, error } = useGetProfile(); // API call


  useEffect(() => {
    if (user) {
      socket.emit("userConnected", user._id);
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      console.error("Error fetching profile:", error);
      logout(); // Log out if there's an auth error
    }
  }, [error]);

  useEffect(() => {
    if (!data) return;

    const { user: recentUser } = data.data;
    if (recentUser && storedToken) {
      setUser(recentUser);
      startTokenExpirationCheck(storedToken);

      // Redirect if user is on sign-in page
      if (location.pathname === "/sign-in"||location.pathname === "/sign-up") {
        navigate(-1);
      }
    }
  }, [data, location, navigate]);

  // ✅ Function to check if the token is expired
  const checkTokenExpiration = (token) => {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp * 1000 < Date.now();
    } catch (e) {
      return true; // Treat invalid tokens as expired
    }
  };

  // ✅ Start automatic logout when the token expires
  const startTokenExpirationCheck = (token) => {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const expirationTime = payload.exp * 1000;
    const timeUntilExpiry = expirationTime - Date.now();

    if (timeUntilExpiry > 0) {
      setTimeout(() => {
        logout();
      }, timeUntilExpiry);
    }
  };

  const authenticate = ({ user, token }) => {
    localStorage.setItem("token", token);
    setUser(user);
    notifier({ message: "Logged in successfully", type: "success" });
    navigate("/");
    startTokenExpirationCheck(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/sign-in"); // Redirect to login
  };

  return (
    <AuthContext.Provider value={{ user, authenticate, logout, isReloading: isRefetching }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export const useAuth = () => {
  return useContext(AuthContext);
};
