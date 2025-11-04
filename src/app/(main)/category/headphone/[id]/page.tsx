// import FirstSection from "./component/firstSection";
// import SecondSection from "./component/secondSection";
// import ThirdSection from "./component/thirdSection";
// import LastContent from "./component/lastContent";
// import { fetchQuery } from "convex/nextjs";
// import { api } from "../../../../../../convex/_generated/api";
// export async function generateStaticParams() {
//   const products = await fetchQuery(api.product.getProducts);

//   return products.map((product) => ({
//     id: product._id,
//   }));
// }
// export default async function ProductDetailPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;
//   const products = await fetchQuery(api.product.getProducts);

//   const product = products.find((p) => p._id === id);
//   console.log(id);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <section className="relative flex items-center flex-col mx-auto ">
//       <FirstSection product={product} />
//       <SecondSection />
//       <ThirdSection />
//       <LastContent />
//       {/* <div className="absolute inset-0 bg-black/50"></div> */}
//     </section>
//   );
// }

import FirstSection from "./component/firstSection";
import SecondSection from "./component/secondSection";
import ThirdSection from "./component/thirdSection";
import LastContent from "./component/lastContent";
import { api } from "../../../../../../convex/_generated/api";
import { fetchQuery } from "convex/nextjs";

// Generate params for static generation
export async function generateStaticParams() {
  try {
    const products = await fetchQuery(api.product.getProducts);
    return products.map((product) => ({ id: product._id }));
  } catch (err) {
    console.error("Failed to fetch products for static params:", err);
    return []; // fallback: no pages generated
  }
}

// Product detail page
export default async function ProductDetailPage({
  params,
}: {
  params: { id: string }; // <--- NOT a Promise
}) {
  const { id } = params;

  let product;
  try {
    const products = await fetchQuery(api.product.getProducts);
    product = products.find((p) => p._id === id);
  } catch (err) {
    console.error("Error fetching products:", err);
    return <div>Failed to load product</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="relative flex items-center flex-col mx-auto">
      <FirstSection product={product} />
      <SecondSection />
      <ThirdSection />
      <LastContent />
    </section>
  );
}
