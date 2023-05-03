import { createTRPCRouter } from "~/server/api/trpc";
import { mailChimpRouter } from "~/server/api/routers/mailchimp";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  mailchimp: mailChimpRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
