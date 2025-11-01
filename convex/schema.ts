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

  userDetail: defineTable({
    name: v.string(),
    email: v.string(),
    address: v.optional(v.string()),
  }),

  orders: defineTable({
    userId: v.id("userDetail"),
    products: v.array(
      v.object({
        productId: v.id("product"),
        quantity: v.number(),
      })
    ),
    total: v.number(),
    status: v.string(), // "pending", "completed", "cancelled"
  }),
});
