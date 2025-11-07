// convex/http.js
import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";

const http = httpRouter();

http.route({
  path: "/api/products",
  method: "GET",
  handler: httpAction(async (ctx) => {
    const products = await ctx.runQuery(api.product.getProducts);
    console.log("HTTP: Returning", products.length, "products");
    return Response.json(products);
  }),
});

export default http;
