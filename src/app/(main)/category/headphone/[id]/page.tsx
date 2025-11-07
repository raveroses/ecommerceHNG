import FirstSection from "./component/firstSection";
import SecondSection from "./component/secondSection";
import ThirdSection from "./component/thirdSection";
import LastContent from "./component/lastContent";
import { fetchQuery } from "convex/nextjs";
import { api } from "../../../../../../convex/_generated/api";
import { ProductsTypes } from "@/_types/types";
export async function generateStaticParams() {
  const HTTP_URL = process.env.NEXT_PUBLIC_CONVEX_HTTP_URL!;

  console.log("convex client:", process.env.NEXT_PUBLIC_CONVEX_URL);
  console.log("http url:", HTTP_URL);

  try {
    const response = await fetch(`${HTTP_URL}/api/products`, {
      next: { revalidate: 3600 },
    });
    console.log("Status:", response.status);

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const products: ProductsTypes[] = await response.json();
    console.log("Fetched", products.length, "products");

    return products.map((p) => ({
      category: p.category,
      id: p._id,
    }));
  } catch (error) {
    console.error("Failed to fetch products:", error);
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
