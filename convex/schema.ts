import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  product: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.number(),
    image: v.string(),
    category: v.string(),
    stock: v.optional(v.number()),
  }),

  orders: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.number(),
    image: v.string(),
    category: v.string(),
    userName: v.string(),
    email: v.string(),
    address: v.string(),
    zipCode: v.string(),
  }),
});
