import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/src/server/api/trpc";

const updateProfileSchema = z.object({
  step: z.number().int(),
  userId: z.string(),
  surveyId: z.number().int().optional(),
  age: z.number().int().optional().nullable(),
  location: z.string().optional().nullable(),
  frequency: z.number().int().optional().nullable(),
  isHalal: z.boolean().optional().nullable(),
  isColourBlind: z.boolean().optional().nullable(),
  colourPreference: z.string().optional().nullable(),
  dish: z.string().optional().nullable(),
  dishColour: z.string().optional().nullable(),
});

export const profileRouter = createTRPCRouter({
  getProfile: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      const profile = await ctx.prisma.profile.findFirst({
        where: { userId: input.userId },
      });
      return profile;
    }),
  createProfile: publicProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.prisma.profile.create({
        data: { userId: input.userId, step: 0 },
      });
      return profile;
    }),
  patchProfile: publicProcedure
    .input(updateProfileSchema)
    .mutation(async ({ ctx, input }) => {
      const currentProfile = await ctx.prisma.profile.findFirst({
        where: { userId: input.userId },
      });

      const mergedProfile = { ...currentProfile, ...input };
      const profile = await ctx.prisma.profile.update({
        where: { userId: input.userId },
        data: mergedProfile,
      });
      return profile;
    }),
});
