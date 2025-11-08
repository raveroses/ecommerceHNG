import FirstSection from "./component/firstSection";
import SecondSection from "./component/secondSection";
import ThirdSection from "./component/thirdSection";
import LastContent from "./component/lastContent";
import { api } from "../../../../../../convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
// import { ProductsTypes } from "@/_types/types";
export async function generateStaticParams() {
  try {
    const products = await fetchQuery(api.product.getProducts);
    console.log("Static params for", products.length, "products");
    return products.map((p) => ({ category: p.category, id: p._id }));
  } catch (error) {
    console.error("Static params failed:", error);
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
