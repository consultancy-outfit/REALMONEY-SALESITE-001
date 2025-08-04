"use client";
import { getDataFromLocalStorage } from "../../utils/api-error";
import { useNavigateRoute } from "../../hooks/use-navigate-route";
import { useEffect } from "react";

export const AuthGuard = (props) => {
  const { children } = props;
  const token = getDataFromLocalStorage()?.authToken;
  const { navigate } = useNavigateRoute();
  useEffect(() => {
    if (!token) return navigate("/");
  }, []);

  return token ? <>{children}</> : null;
};
