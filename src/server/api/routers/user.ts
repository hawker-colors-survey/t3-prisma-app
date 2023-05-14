import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/src/server/api/trpc";

export const userRouter = createTRPCRouter({
  createGuest: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const anonymousAccount = await ctx.prisma.user.create({
        data: {
          id: input.id,
          email: `${input.id}@example.com`,
          name: "Guest User",
        },
      });
      return anonymousAccount;
    }),
  linkGuestToUser: protectedProcedure
    .input(z.object({ guestEmail: z.string(), userEmail: z.string() }))

    .mutation(async ({ ctx, input }) => {
      const guest = await ctx.prisma.user.findUnique({
        where: { email: input.guestEmail },
      });
      const user = await ctx.prisma.user.findUnique({
        where: { email: input.userEmail },
      });

      if (user === null) throw Error("User not found");
      if (guest === null) throw Error("Guest not found");

      // change all guest record userId to this userId
      // await ctx.prisma.user.update({ where: { id: user.id }, data });
      await ctx.prisma.user.delete({ where: { id: guest.id } });
    }),
});
