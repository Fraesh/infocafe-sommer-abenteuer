import React from "react";
import { generateDefaultState, config } from "../config";

// Der storage um den progress zu tracken.
// In einer komponente aufrufen mit:
// const { FUNKTIONEN DIE DU BRAUCHST } = React.useContext(StoreContext);

// Funktionen:
// solveRiddle(chapter, riddle) - Löst ein Rätsle und speichert es local ab.
// getRiddleState(chapter, riddle) - Liefert "SOLVED", "ACTIVE" oder "DISABLED"
// getChapterState(chapter) - Liefert "SOLVED", "ACTIVE" oder "DISABLED"
// solveChapter(chapter) - Löst ein komplettes kapitel

export const StoreContext = React.createContext({});

export const StoreProvider = (props) => {
  const { children } = props;

  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(config.name);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : generateDefaultState();
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return generateDefaultState();
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(config.name, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  // Solve a riddle!
  const solveRiddle = (chapter, riddle, value = true) => {
    // Nothing to do here...
    if (
      storedValue.progress[chapter] &&
      storedValue.progress[chapter][riddle] === value
    ) {
      return;
    }

    setValue({
      ...storedValue,
      progress: {
        ...storedValue.progress,
        [chapter]: {
          ...(storedValue.progress[chapter] || {}),
          [riddle]: value,
        },
      },
    });
  };

  // Solve a chapter!
  const solveChapter = (chapter) => {
    // Nothing to do here...

    let data = {};
    const riddleCount = config.chapters[chapter - 1];
    for (let i = 1; i <= riddleCount; i++) {
      data[i] = true;
    }
    setValue({
      ...storedValue,
      progress: {
        ...storedValue.progress,
        [chapter]: data,
      },
    });
  };

  const getRiddleState = (chapter, riddle) => {
    const isSolved = storedValue.progress[chapter]
      ? Boolean(storedValue.progress[chapter][riddle])
      : false;
    const previousRiddle =
      riddle === 1
        ? true
        : storedValue.progress[chapter]
        ? Boolean(storedValue.progress[chapter][riddle - 1])
        : false;

    if (isSolved) {
      return "SOLVED";
    } else if (previousRiddle) {
      return "ACTIVE";
    } else {
      return "DISABLED";
    }
  };

  const getChapterState = (chapter) => {
    const c = storedValue.progress[chapter];
    if (c) {
      if (
        Object.keys(c).length === config.chapters[chapter - 1] &&
        !Object.values(c).some((v) => !v)
      ) {
        return "SOLVED";
      } else {
        return "ACTIVE";
      }
    } else {
      if (chapter === 1) {
        return "ACTIVE";
      } else {
        if (storedValue.progress[chapter - 1]) {
          const previous = getChapterState(chapter - 1);
          if (previous === "SOLVED") {
            return "ACTIVE";
          } else {
            return "DISABLED";
          }
        } else {
          return "DISABLED";
        }
      }
    }
  };

  const v = {
    solveRiddle,
    getRiddleState,
    getChapterState,
    solveChapter,
  };

  return <StoreContext.Provider value={v}>{children}</StoreContext.Provider>;
};
