import type { Profile } from "@prisma/client";
import type { ColourKey, FoodFile } from "~/src/constants";
import { api } from "~/src/utils/api";

export type SurveyAnswers = Record<FoodFile, ColourKey>;

type SurveyHookProps = { profile: Profile | null | undefined };

export const useSurvey = ({ profile }: SurveyHookProps) => {
  const {
    data: survey,
    refetch,
    isLoading,
    ...rest
  } = api.survey.getSurvey.useQuery(
    { id: profile?.surveyId || 1 },
    { enabled: Boolean(profile) }
  );

  const { isLoading: isCreatingLoading, mutate: createSurvey } =
    api.survey.createSurvey.useMutation({
      onSuccess: () => refetch(),
    });
  const { isLoading: isUpdatingLoading, mutate: updateSurvey } =
    api.survey.patchSurvey.useMutation({
      onSuccess: () => refetch(),
    });

  return {
    survey,
    createSurvey,
    updateSurvey,
    refetch,
    isLoading: isLoading || isCreatingLoading || isUpdatingLoading,
    ...rest,
  };
};
