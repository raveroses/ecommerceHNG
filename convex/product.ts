import { query } from "./_generated/server";

// Get all products
export const getProducts = query({
  handler: async (ctx) => {
    return await ctx.db.query("product").collect();
  },
});
