import Image from "next/image";
import Link from "next/link";
const Hersection = () => {
  return (
    <div>
      <div className="md:block hidden">
        <section className="flex justify-between items-center">
          <div className="text-content w-[398px] h-[346px] flex gap-[25px] flex-col">
            <h2 className="text-[14px] leading-[100%] tracking-[10px] text-[#FFFFFF]">
              NEW PRODUCT
            </h2>
            <h2 className="text-[56px] leading-[58px] tracking-[2px] text-white">
              XX99 Mark II Headphones
            </h2>
            <p className="text-[15px] leading-[25px] tracking-0 font-[500] text-[#FFFFFF]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link href="/category/headphone">
              <button className="w-[160px] h-[48px] text-center bg-[#D87D4A] text-[13px] leading-[1px] font-[700] text-white">
                SEE PRODUCTS
              </button>
            </Link>
          </div>

          <div className="image relative w-[500.8px] h-[600px] overflow-hidden">
            <Image
              src="/images/headphone.jpg"
              alt="headphobe image"
              fill
              className="object-contain"
            />
          </div>
        </section>
      </div>

      <div className="md:hidden block">
        <section
          className="flex justify-center gap-[50px] items-center text-center py-[100px] "
          style={{
            backgroundImage: `url(/images/headphone.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-content w-[398px] h-[346px] flex gap-[25px] flex-col">
            <h2 className="text-[14px] leading-[100%] tracking-[10px] text-[#FFFFFF]">
              NEW PRODUCT
            </h2>
            <h2 className="text-[56px] leading-[58px] tracking-[2px] text-white">
              XX99 Mark II Headphones
            </h2>
            <p className="text-[15px] leading-[25px] tracking-0 font-[500] text-[#FFFFFF]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link href="/category/headphone">
              <button className="w-[160px] h-[48px] text-center bg-[#D87D4A] text-[13px] leading-[1px] font-[700] text-white mx-auto">
                SEE PRODUCTS
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hersection;
