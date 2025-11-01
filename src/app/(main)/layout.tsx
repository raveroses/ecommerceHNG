import Header from "@/_header/Header";
import Footer from "@/_footer/footer";
import LastPartofLandingPage from "@/lastpartodLanding/lastPartofLandingPage";
import SecondtothelastPart from "@/secondtothelastPart/secondtothelastPart";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <div className="mb-[100px]">
          <SecondtothelastPart />
        </div>
        <LastPartofLandingPage />
        <Footer />
      </body>
    </html>
  );
}
