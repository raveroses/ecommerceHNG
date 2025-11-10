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
    stock: v.optional(v.number()),
    quantity: v.optional(v.number()),
    totalPrice: v.optional(v.number()),
    userName: v.string(),
    email: v.string(),
    address: v.string(),
    phoneNumber: v.string(),
    zipcode: v.number(),
    postcode: v.number(),
    country: v.string(),
    paymentMethod: v.string(),
  }),
});
