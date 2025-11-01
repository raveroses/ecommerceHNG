import { IoCheckmarkSharp } from "react-icons/io5";
import Image from "next/image";
const Overlay = () => {
  return (
    <section className=" w-[540px] h-[581px] bg-white absolute top-[100px] left-[300px] z-[90] p-[50px] rounded-[10px]">
      <div className="w-[64px] h-[64px] bg-[#D87D4A] rounded-full flex justify-center">
        <div className="text-white text-[30px] font-[700] my-[15px]">
          <IoCheckmarkSharp />
        </div>
      </div>

      <h2 className="text-[32px] leading-[36px] tracking-[1.14px] font-[700] pt-[35px] w-[284px] h-[72px]">
        THANK YOU FOR YOUR ORDER
      </h2>
    

    <div className="mt-[100px] flex flex-col gap-[20px]">
          <p className="text-[15px] leading-[25px] tracking-[0px] font-[400] ">
        You will receive an email confirmation shortly.
      </p>

      <section className="flex w-[444px] h-[140px]">
        <div className="flex flex-col bg-red-600 w-[200px] h-[140px] justify-center px-[10px]">
          <div className="flex justify-between items-center  ">
            <div className="bg-[#f1f1f1] w-[50px] h-[50px] rounded flex flex-col justify-center px-[10px]">
              <div className="w-[25px] h-[25px] relative overflow-hidden z-[30px] ">
                <Image src="/images/headphone.jpg" alt="speaker-image" fill />
              </div>
            </div>
            <div>
              <div className="text-[15px] leading-[25px] tracking-[0px] font-[700]">
                XX99 MK II
              </div>
              <div className="text-[14px] leading-[25px] tracking-[0px] font-[700]">
                $ 2,999
              </div>
            </div>
            <div className="r">X1</div>
          </div>
          <p className="text-[12px] leading-[100%] tracking-[-0.21px] font-[700] text-center py-[20px]">
            and 2 other item(s)
          </p>
        </div>

        <div className=" w-[198px] h-[140px] bg-black text-center flex justify-center flex-col ">
          <h2 className="text-[15px] leading-[25px] tracking-[0px] font-[400] text-[#FFFFFF] ">
            GRAND TOTAL
          </h2>
          <h2 className="text-[18px] leading-[100%] tracking-[0px] font-[700] text-white">
            $ 5,446
          </h2>
        </div>
      </section>

      <button className=" w-[444px] h-[48px] bg-[#D87D4A] text-white text-[13px] leading-[100%] tracking-[1px] font-[700] uppercase text-align">
        BACK TO HOME
      </button>
    </div>
    </section>
  );
};

export default Overlay;
