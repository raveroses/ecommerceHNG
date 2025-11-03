import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addOrder = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    price: v.number(),
    image: v.string(),
    category: v.string(),
    stock: v.optional(v.number()),
    quantity: v.optional(v.number()),
    totalPrice: v.optional(v.number()),
    userName: v.string(),
    email: v.string(),
    address: v.string(),
    phoneNumber: v.string(),
    zipcode: v.string(),
    postcode: v.number(),
    country: v.string(),
    eMoney: v.boolean(),
    cashOndelivery: v.boolean(),
  },
  handler: async (ctx, args) => {
    const orderId = await ctx.db.insert("orders", args);
    return orderId;
  },
});
