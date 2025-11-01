// export async function generateStaticParams() {
//   const products = await fetch("https://api.example.com/products").then((res) =>
//     res.json()
//   );
//   return products.map((product) => ({
//     productId: product.id.toString(), // Ensure the parameter is a string
//   }));
// }
import FirstSection from "./component/firstSection";
import SecondSection from "./component/secondSection";
import ThirdSection from "./component/thirdSection";
import LastContent from "./component/lastContent";
import ProductView from "@/app/_productview/productView";
export default function ProductDetailPage() {
  return (
    <section className="relative flex items-center flex-col mx-auto ">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <LastContent />
      <ProductView />
      <div className="absolute inset-0 bg-black/50"></div>
    </section>
  );
}
