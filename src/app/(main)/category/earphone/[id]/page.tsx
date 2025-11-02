import FirstSection from "./component/firstSection";
import SecondSection from "./component/secondSection";
import ThirdSection from "./component/thirdSection";
import LastContent from "./component/lastContent";
import ProductView from "@/app/_productview/productView";
import { fetchQuery } from "convex/nextjs";
import { api } from "../../../../../../convex/_generated/api";

export async function generateStaticParams() {
  const products = await fetchQuery(api.product.getProducts);

  return products.map((product) => ({
    id: product._id,
  }));
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
    <section className="relative flex items-center flex-col mx-auto ">
      <FirstSection product={product} />
      <SecondSection />
      <ThirdSection />
      <LastContent />
      <ProductView />
      {/* <div className="absolute inset-0 bg-black/50"></div> */}
    </section>
  );
}
