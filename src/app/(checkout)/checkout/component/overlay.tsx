import { IoCheckmarkSharp } from "react-icons/io5";
import Image from "next/image";
const Overlay = () => {
  return (
    <section className=" md:w-[540px] w-full md:h-[581px] h-[700px] bg-white absolute md:top-[100px] md:left-[300px] top-[50px] left-0 z-[90] md:p-[50px] p-[10px] rounded-[10px]">
      <div className="w-[64px] h-[64px] bg-[#D87D4A] rounded-full flex justify-center">
        <div className="text-white text-[30px] font-[700] my-[15px]">
          <IoCheckmarkSharp />
        </div>
      </div>

      <h2 className="text-[32px] leading-[36px] tracking-[1.14px] font-[700] md:pt-[35px] pt-[20px] w-[284px] h-[72px]">
        THANK YOU FOR YOUR ORDER
      </h2>

      <div className="md:mt-[100px] mt-[50px] flex flex-col gap-[20px]">
        <p className="text-[15px] leading-[25px] tracking-[0px] font-[400] ">
          You will receive an email confirmation shortly.
        </p>

        <section className="flex md:w-[444px] w-full md:flex-row flex-col md:h-[140px] h-[250px]">
          <div className="flex flex-col bg-red-600 md:w-[200px] w-full h-[140px] justify-center px-[10px] md:p-0 p-2">
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

          <div className="md: w-[198px] w-full md:h-[140px] h-[200px] bg-black text-center flex justify-center flex-col md:p-0 p-2 ">
            <h2 className="text-[15px] leading-[25px] tracking-[0px] font-[400] text-[#FFFFFF] ">
              GRAND TOTAL
            </h2>
            <h2 className="text-[18px] leading-[100%] tracking-[0px] font-[700] text-white">
              $ 5,446
            </h2>
          </div>
        </section>

        <button className=" md:w-[444px] w-full h-[48px] bg-[#D87D4A] text-white text-[13px] leading-[100%] tracking-[1px] font-[700] uppercase text-align">
          BACK TO HOME
        </button>
      </div>
    </section>
  );
};

export default Overlay;
