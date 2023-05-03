import { z } from "zod";
import { GetMailChimpList, GetMembersFromList } from "~/pages/api/trpc/mailchimpAPI";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const { memberEmails } = await GetMembersFromList();

export const mailChimpRouter = createTRPCRouter({
  getAllLists: publicProcedure
    .query(() => {
      GetMailChimpList();
    }),
  getAllMembers: publicProcedure
    .query(() => {
      memberEmails
    }),
});
