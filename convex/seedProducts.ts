import { mutation } from "./_generated/server";

export const seedProducts = mutation({
  handler: async (ctx) => {
    const products = [
      {
        name: "XX99 Mark II Headphones",
        description:
          "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
        price: 2999,
        image: "/images/headphone.jpg",
        category: "headphone",
      },
      {
        name: "XX99 Mark I Headphones",
        description:
          "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles.",
        price: 1750,
        image: "/images/headphone2.jpg",
        category: "headphone",
      },
      {
        name: "XX59 Headphones",
        description:
          "Enjoy your audio almost anywhere and customize your listening experience with the XX59 headphones.",
        price: 899,
        image: "/images/whiteheadphone.jpg",
        category: "headphone",
      },
      {
        name: "ZX9 Speaker",
        description:
          "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity.",
        price: 4500,
        image: "/images/speaker.jpg",
        category: "speaker",
      },
      {
        name: "ZX7 Speaker",
        description:
          "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components.",
        price: 3500,
        image: "/images/speaker2.jpg",
        category: "speaker",
      },
      {
        name: "YX1 Wireless Earphones",
        description:
          "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.",
        price: 599,
        image: "/images/earphone.jpg",
        category: "earphone",
      },
    ];
    for (const product of products) {
      await ctx.db.insert("product", product);
    }

    return `Successfully added ${products.length} products`;
  },
});
