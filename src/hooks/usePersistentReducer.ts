import { useCallback, useReducer } from "react";
type R<S, A> = (state: S, action: A) => S;

export const usePersistentReducer = <State, Actions>(
  reducer: R<State, Actions>,
  initialState: State
) => {
  const reducerLocalStorage = useCallback(
    (state: State, action: Actions) => {
      const newState = reducer(state, action);
      localStorage.setItem("hawker_colours", JSON.stringify(newState));
      return newState;
    },
    [reducer]
  );

  return useReducer(reducerLocalStorage, initialState);
};
