import Image from "next/image";
const LastPartofLandingPage = () => {
  return (
    <section className="last w-[1110px] h-[588px] flex items-center gap-[200px] mx-auto">
      <div className="w-[445px] h-[295px]">
        <h2 className="uppercase font-[700] text-[40px] leading-[44px] tracking-[1.43px] pb-[40px]">
          Bringing you the <span className="text-[#d87d4a]">best</span> audio
          gear
        </h2>
        <p className="text-[15px] leading-[25px] tracking-0 font-[400] text-[#000000]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="w-[540px] h-[588px] relative overflow-hidden z-[30px]">
        <Image src="/images/listeing.jpg" alt="speaker-image" fill />
      </div>
    </section>
  );
};

export default LastPartofLandingPage;
