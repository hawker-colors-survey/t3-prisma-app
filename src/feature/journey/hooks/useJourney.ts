import { usePersistentReducer } from "~/src//hooks";
import type {
  Actions,
  IntroSurveyStructure,
  JourneyStateStructure,
  PageStructure,
} from "../types";

export const useJourney = (
  pages: PageStructure[],
  initialState: JourneyStateStructure
) => {
  const [journey, dispatch] = usePersistentReducer(
    journeyReducer,
    initialState
  );
  const { step } = journey;

  function handleNext(value: Partial<IntroSurveyStructure>) {
    const { key } = pages[step] || { key: "" };

    const payload = key ? { [key]: value } : {};
    dispatch({ type: NEXT, payload: value ? payload : {} });
  }

  function handleBack() {
    dispatch({ type: BACK });
  }

  return { journey, handleNext, handleBack };
};

function journeyReducer(
  state: JourneyStateStructure,
  action: Actions
): JourneyStateStructure {
  const { type } = action;
  switch (type) {
    case NEXT: {
      const { payload = {} } = action;
      const newState: JourneyStateStructure = {
        step: state.step + 1,
        answers: { ...state.answers, ...payload },
      };
      return newState;
    }
    case BACK:
      return { ...state, step: state.step - 1 };
    default:
      return state;
  }
}

export const NEXT = "NEXT";
export const BACK = "BACK";
