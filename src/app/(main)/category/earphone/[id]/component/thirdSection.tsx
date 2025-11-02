"use client";

import Image from "next/image";
const ThirdSection = () => {
  return (
    <section className="md:w-[1110px] md:h-[592px] w-full flex md:flex-row flex-col gap-[30px] my-[80px] ">
      <div className="flex flex-col gap-[30px]">
        <div className="md:w-[445px] w-full h-[280px] relative overflow-hidden">
          <Image src="/images/listeing.jpg" alt="speaker-image" fill />
        </div>
        <div className="md:w-[445px] w-full h-[280px] relative overflow-hidden">
          <Image src="/images/phone.jpg" alt="speaker-image" fill />
        </div>
      </div>

      <div className="md:w-[955px] md:h-[590px] w-full h-[300px] relative overflow-hidden">
        <Image src="/images/half.jpg" alt="speaker-image" fill />
      </div>
    </section>
  );
};

export default ThirdSection;

