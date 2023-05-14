import { createTRPCRouter } from "~/src/server/api/trpc";
import {
  profileRouter,
  surveyRouter,
  userRouter,
} from "~/src/server/api/routers";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  profile: profileRouter,
  survey: surveyRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
