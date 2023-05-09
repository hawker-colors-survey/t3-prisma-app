import { useEffect, useDebugValue, useState } from "react";

// Gatcha about this hook- doesn't load information on initial render

export const useLocalStorage = <S>(
  key: string,
  initialState?: S
): {
  localState: S | undefined;
  setLocalState: (newState: Partial<S> | undefined) => void;
} => {
  const [localState, setLocalState] = useState<S>();
  useDebugValue(localState);

  function handleSetState(newState?: Partial<S>) {
    if (!newState) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(newState));
  }

  useEffect(() => {
    const item = localStorage.getItem(key) as unknown as string;
    if (item) setLocalState(JSON.parse(item) as S);
    else if (initialState) {
      setLocalState(initialState);
      handleSetState(initialState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, initialState]);

  return { localState, setLocalState: handleSetState };
};
