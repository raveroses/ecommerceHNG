import FirstSection from "./component/firstSection";
import SecondSection from "./component/secondSection";
import ThirdSection from "./component/thirdSection";
import LastContent from "./component/lastContent";
import { api } from "../../../../../../convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
// export async function generateStaticParams() {
//   const products = await fetchQuery(api.product.getProducts);

//   return products.map((product) => ({
//     id: product._id,
//   }));
// }

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL?.replace(/\/$/, "");
console.log("convex", CONVEX_URL);

export async function generateStaticParams() {
  if (!CONVEX_URL) {
    console.error("Missing NEXT_PUBLIC_CONVEX_URL");
    return [];
  }
  const url = `${CONVEX_URL}/api/products`;

  console.log("url", url);
  try {
    const res = await fetch(url, {
      cache: "force-cache",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`HTTP ${res.status}:`, text.slice(0, 300));
      return [];
    }

    const products: { _id: string }[] = await res.json();

    return products.map((p) => ({
      id: p._id,
    }));
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Failed to fetch products for static params:", err.message);
    }
    return [];
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const products = await fetchQuery(api.product.getProducts);

  const product = products.find((p) => p._id === id);
  console.log(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="relative flex items-center flex-col mx-auto md:px-0 px-[10px] ">
      <FirstSection product={product} />
      <SecondSection />
      <ThirdSection />
      <LastContent />
      {/* <div className="absolute inset-0 bg-black/50"></div> */}
    </section>
  );
}
// import FirstSection from "./component/firstSection";
// import SecondSection from "./component/secondSection";
// import ThirdSection from "./component/thirdSection";
// import LastContent from "./component/lastContent";
// import { api } from "../../../../../../convex/_generated/api";
// import { fetchQuery } from "convex/nextjs";

// // Generate params for static generation
// export async function generateStaticParams() {
//   try {
//     const products = await fetchQuery(api.product.getProducts);
//     return products.map((product) => ({ id: product._id }));
//   } catch (err) {
//     console.error("Failed to fetch products for static params:", err);
//     return []; // fallback: no pages generated
//   }
// }

// // Product detail page
// export default async function ProductDetailPage({
//   params,
// }: {
//   params: { id: string }; // <--- NOT a Promise
// }) {
//   const { id } = params;

//   let product;
//   try {
//     const products = await fetchQuery(api.product.getProducts);
//     product = products.find((p) => p._id === id);
//   } catch (err) {
//     console.error("Error fetching products:", err);
//     return <div>Failed to load product</div>;
//   }

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <section className="relative flex items-center flex-col mx-auto">
//       <FirstSection product={product} />
//       <SecondSection />
//       <ThirdSection />
//       <LastContent />
//     </section>
//   );
// }
