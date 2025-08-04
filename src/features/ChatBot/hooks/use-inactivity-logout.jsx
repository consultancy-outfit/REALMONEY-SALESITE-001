"use client";
import { useEffect, useRef } from "react";
import { LOCAL_STORAGE_KEYS } from "../constants/ui";
import {
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
  setDataToLocalStorage,
} from "../utils/api-error";

const INACTIVITY_TIME = 20 * 60 * 1000;

export default function useInactivityLogout() {
  const timeoutRef = useRef(null);

  const resetTimer = () => {
    const data = getDataFromLocalStorage(LOCAL_STORAGE_KEYS?.AUTH_DATA);
    if (data === null) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setDataToLocalStorage(
      LOCAL_STORAGE_KEYS?.ACTIVITY_SESSION,
      Date.now().toString(),
    );

    timeoutRef.current = setTimeout(checkInactivity, INACTIVITY_TIME);
  };

  const checkInactivity = () => {
    const lastActive = parseInt(
      getDataFromLocalStorage(LOCAL_STORAGE_KEYS?.ACTIVITY_SESSION) || "0",
      10,
    );
    if (Date.now() - lastActive > INACTIVITY_TIME) {
      handleLogout();
    }
  };

  // Logout function
  const handleLogout = () => {
    removeDataFromLocalStorage(LOCAL_STORAGE_KEYS?.AUTH_DATA);
    removeDataFromLocalStorage(LOCAL_STORAGE_KEYS?.ACTIVITY_SESSION);
    window?.location?.reload();
  };

  useEffect(() => {
    const events = ["mousemove", "keydown", "scroll", "click"];

    const handleActivity = () => resetTimer();

    events.forEach((event) => window.addEventListener(event, handleActivity));

    const syncAcrossTabs = (event) => {
      if (event.key === LOCAL_STORAGE_KEYS?.ACTIVITY_SESSION) {
        resetTimer();
      }
    };

    window.addEventListener("storage", syncAcrossTabs);

    resetTimer();

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, handleActivity),
      );
      window.removeEventListener("storage", syncAcrossTabs);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return null;
}
