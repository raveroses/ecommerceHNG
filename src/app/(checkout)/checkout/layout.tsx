import Header from "@/_header/Header";
import Footer from "@/_footer/footer";
export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="checkout-layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
