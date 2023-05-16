import { z } from "zod";
import { GetMailChimpList, GetMembersFromList } from "~/pages/api/mailchimpAPI";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const mailChimpRouter = createTRPCRouter({
  getAllLists: publicProcedure
    .query(() => {
      GetMailChimpList();
    }),
  getAllMembers: publicProcedure
    .query(async () => {
      const { memberListArray } = await GetMembersFromList();

      return {
        memberListArray
      }
    }),
});
