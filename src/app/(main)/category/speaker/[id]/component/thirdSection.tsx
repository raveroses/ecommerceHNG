import Image from "next/image";
const ThirdSection = () => {
  return (
    <section className="w-[1110px] h-[592px] flex gap-[30px] my-[80px]">
      <div className="flex flex-col gap-[30px]">
        <div className="w-[445px] h-[280px] relative overflow-hidden">
          <Image src="/images/listeing.jpg" alt="speaker-image" fill />
        </div>
        <div className="w-[445px] h-[280px] relative overflow-hidden">
          <Image src="/images/phone.jpg" alt="speaker-image" fill />
        </div>
      </div>

      <div className="w-[955px] h-[590px] relative overflow-hidden">
        <Image src="/images/half.jpg" alt="speaker-image" fill />
      </div>
    </section>
  );
};

export default ThirdSection;
//   <button className="w-[160px] h-[48px] text-[13px] leading-[100%] tracking-[1px] bg-[#D87D4A] text-white ">
//             ADD PRODUCTS
//           </button>