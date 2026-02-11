"use server";

import { eq } from "drizzle-orm";

import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { protectedActionClient } from "@/lib/next-safe-action";

export const getSubscriptionStatus = protectedActionClient.action(
  async ({ ctx }) => {
    const user = await db.query.usersTable.findFirst({
      where: eq(usersTable.id, ctx.user.id),
      columns: {
        plan: true,
        stripeSubscriptionId: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return {
      plan: user.plan,
      subscriptionId: user.stripeSubscriptionId,
    };
  },
);
