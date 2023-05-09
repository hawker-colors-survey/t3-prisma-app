import { usePersistentReducer } from "~/src//hooks";
import type {
  Actions,
  IntroSurveyStructure,
  JourneyStateStructure,
  PageKeys,
  PageStructure,
  ValueOf,
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

  function handleNext(value?: ValueOf<IntroSurveyStructure>) {
    const { key } = pages[step] || { key: "" };
    if (!Boolean(key)) dispatch({ type: NEXT });
    else {
      const payload = {
        [key as PageKeys]: value,
      } as Partial<IntroSurveyStructure>;
      dispatch({ type: NEXT, payload });
    }
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
      const payload = action.payload ?? {};
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
