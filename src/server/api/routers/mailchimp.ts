import { z } from "zod";
import GetMailChimpList from "~/pages/api/trpc/mailchimpAPI";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const mailChimpRouter = createTRPCRouter({
  getAllLists: publicProcedure
    .query(() => {
      GetMailChimpList();
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
