import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/src/server/api/trpc";

const profileInputSchema = z.object({
  userId: z.string(),
  surveyId: z.string(),
  age: z.number().int(),
  location: z.string(),
  frequency: z.number().int(),
  isHalal: z.boolean(),
  isColourBlind: z.boolean(),
  colourPreference: z.string().optional(),
});

export const profileRouter = createTRPCRouter({
  postProfile: publicProcedure
    .input(profileInputSchema)
    .mutation(async ({ ctx, input }) => {
      // console.log(input, ctx);
      // ctx.prisma.profile.create({})
      console.log("Wassup from profilerouter");
      console.log(input);
    }),
});
