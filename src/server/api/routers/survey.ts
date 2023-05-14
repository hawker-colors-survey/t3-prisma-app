import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/src/server/api/trpc";

const surveyInputSchema = z.object({
  // userId: z.string(),
  bak_chor_mee: z.string().optional(),
  ban_mian: z.string().optional(),
  carrot_cake: z.string().optional(),
  char_kway_teow: z.string().optional(),
  chendol: z.string().optional(),
  chicken_chop: z.string().optional(),
  chicken_teriyaki_don: z.string().optional(),
  economic_rice: z.string().optional(),
  fishball_noodles: z.string().optional(),
  guo_tie: z.string().optional(),
  hainanese_chicken_rice: z.string().optional(),
  hokkien_mee: z.string().optional(),
  indian_rojak: z.string().optional(),
  kaya_toast_and_eggs: z.string().optional(),
  kway_chap: z.string().optional(),
  laksa: z.string().optional(),
  mala_xiang_guo: z.string().optional(),
  mee_goreng: z.string().optional(),
  mee_rebus: z.string().optional(),
  nasi_briyani: z.string().optional(),
  nasi_lemak: z.string().optional(),
  oyster_omelette: z.string().optional(),
  prawn_noodles: z.string().optional(),
  roast_meat_rice: z.string().optional(),
  roti_prata: z.string().optional(),
  satay: z.string().optional(),
  sliced_fish_soup: z.string().optional(),
  sup_kambing: z.string().optional(),
  wanton_mee: z.string().optional(),
  yong_tau_foo: z.string().optional(),
});

export const surveyRouter = createTRPCRouter({
  postSurvey: publicProcedure
    .input(surveyInputSchema)
    .mutation(async ({ ctx, input }) => {
      // console.log(input, ctx);
      // ctx.prisma.survey.create({});
      console.log("Wassup from surveyrouter");
      console.log(input);
    }),
});
