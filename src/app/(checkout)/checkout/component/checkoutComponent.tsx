import Form from "./form";
const CheckoutComponent = () => {
  return (
    <section className="">
      <div className=" w-[730px] h-[1126px] rounded-[8px] bg-[#f1f1f1] p-[40px] flex flex-col gap-[30px]">
        <h1 className="text-[32px] leading-[36px] tracking-[1.14px] font-[700]">
          CHECKOUT
        </h1>
        <p className="text-[13px] leading-[25px] tracking-[0.93px] font-[700] uppercase text-[#D87D4A]">
          billing details
        </p>
        <Form />
      </div>
    </section>
  );
};

export default CheckoutComponent;
