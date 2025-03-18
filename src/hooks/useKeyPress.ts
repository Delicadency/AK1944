import { useState, useEffect } from "react";

export const useKeyPress = (
  targetKey: string | string[],
  callback: (event: KeyboardEvent) => void,
) => {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const keys = Array.isArray(targetKey) ? targetKey : [targetKey];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (keys.includes(event.key)) {
        setKeyPressed(true);
        callback(event);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (keys.includes(event.key)) {
        setKeyPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [targetKey, callback]);

  return keyPressed;
};
