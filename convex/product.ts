import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addProduct = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    price: v.number(),
    image: v.string(),
    category: v.string(),
    stock: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const productId = await ctx.db.insert("orders", args);
    return productId;
  },
});

// Get all products
export const getProducts = query({
  handler: async (ctx) => {
    return await ctx.db.query("product").collect();
  },
});
