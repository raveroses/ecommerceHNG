"use client";
import { MyContext } from "@/custom-hooks/myContext";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { api } from "../../../../../convex/_generated/api";
import { useMutation } from "convex/react";
import { toast } from "react-toastify";

const Form = () => {
  // { setIsOverLay }: { setIsOverLay: (value: boolean) => void }
  const context = useContext(MyContext);
  const addOrder = useMutation(api.orders.addOrder);

  const [checkOutDetail, setCheckOutDetail] = useState({
    userName: "",
    email: "",
    address: "",
    phoneNumber: "",
    zipcode: "",
    postcode: "",
    country: "",
    // eMoney: "",
    paymentMethod: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCheckOutDetail((prev) => ({ ...prev, [name]: value }));
  };

  if (!context) {
    console.log("invalid context");

    return;
  }
  const { cart, setIsBackDrop, } = context;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!checkOutDetail.userName.trim()) {
      newErrors.name = "Name is required";
    }

    if (!checkOutDetail.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(checkOutDetail.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!checkOutDetail.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!checkOutDetail.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!checkOutDetail.phoneNumber) {
      newErrors.phoneNumber = "Invalid phone number";
    }

    if (
      !checkOutDetail.zipcode.trim() &&
      isNaN(Number(checkOutDetail.zipcode))
    ) {
      newErrors.zipcode = "Zip code is required";
    }

    if (
      !checkOutDetail.postcode.trim() &&
      isNaN(Number(checkOutDetail.postcode))
    ) {
      newErrors.postcode = "Post code is required";
    }

    if (!checkOutDetail.country.trim()) {
      newErrors.country = "Country is required";
    }

    if (!checkOutDetail.paymentMethod || !checkOutDetail.paymentMethod) {
      newErrors.paymentMethod = "Please select a payment method";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  console.log(checkOutDetail);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    for (const item of cart) {
      await addOrder({
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.image,
        category: item.category,
        stock: item.stock,
        quantity: item.quantity,
        totalPrice: item.totalPrice || item.price * (item.quantity || 1),

        userName: checkOutDetail.userName,
        email: checkOutDetail.email,
        address: checkOutDetail.address,
        phoneNumber: checkOutDetail.phoneNumber,
        zipcode: Number(checkOutDetail.zipcode),
        postcode: Number(checkOutDetail.postcode),
        country: checkOutDetail.country,
        paymentMethod: checkOutDetail.paymentMethod,
      });
    }
    toast.success("Order placed successfully!");

  
    setIsBackDrop(true);
    setCheckOutDetail({
      userName: "",
      email: "",
      address: "",
      phoneNumber: "",
      zipcode: "",
      postcode: "",
      country: "",
      paymentMethod: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="firstForm flex justify-between md:flex-row flex-col md:gap-0 gap-[30px]">
        <div>
          <div className="flex justify-between pb-[10px]">
            <label
              htmlFor="userName"
              className="text-[12px] leading-[100%] tracking-[-0.21px] font-[700]"
            >
              Name
            </label>
            {errors.name && (
              <p className="text-[12px] leading-[100%] tracking-[-0.21px] font-[700] text-red-500">
                {errors.name}
              </p>
            )}
          </div>
          <input
            type="text"
            id="userName"
            name="userName"
            value={checkOutDetail.userName}
            onChange={handleOnChange}
            className={`md:w-[309px] w-full h-[56px] rounded-[8px] border-2 px-4 ${
              errors.name ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
            }`}
            placeholder="Alexei Ward"
          />
        </div>
        <div>
          <div className="flex justify-between pb-[10px]">
            <label
              htmlFor="email"
              className="text-[12px] leading-[100%] tracking-[-0.21px] font-[700]"
            >
              Email Address
            </label>
            {errors.email && (
              <p className="text-[12px] leading-[100%] tracking-[-0.21px] font-[700] text-red-500">
                {errors.email}
              </p>
            )}
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={checkOutDetail.email}
            onChange={handleOnChange}
            className={`md:w-[309px] w-full h-[56px] rounded-[8px] border-2 px-4 ${
              errors.email ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
            }`}
            placeholder="alexei@mail.com"
          />
        </div>
      </div>

      <div className="secondInput pt-[30px]">
        <div>
          <div className="flex justify-between pb-[10px]">
            <label
              htmlFor="phoneNumber"
              className="text-[12px] leading-[100%] tracking-[-0.21px] font-[700]"
            >
              Phone Number
            </label>
            {errors.phoneNumber && (
              <p className="text-[12px] leading-[100%] tracking-[-0.21px] font-[700] text-red-500">
                {errors.phoneNumber}
              </p>
            )}
          </div>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={checkOutDetail.phoneNumber}
            onChange={handleOnChange}
            className={`md:w-[309px] w-full h-[56px] rounded-[8px] border-2 px-4 ${
              errors.phoneNumber ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
            }`}
            placeholder="+1 202-555-0136"
          />
        </div>
      </div>

      <div className="thirdInput pt-[30px]">
        <p className="text-[13px] leading-[25px] tracking-[0.93px] font-[700] uppercase text-[#D87D4A] pb-[20px]">
          shipping info
        </p>

        <div>
          <div className="flex justify-between pb-[10px]">
            <label
              htmlFor="address"
              className="text-[12px] leading-[100%] tracking-[-0.21px] font-[700]"
            >
              Address
            </label>
            {errors.address && (
              <p className="text-[12px] leading-[100%] tracking-[-0.21px] font-[700] text-red-500">
                {errors.address}
              </p>
            )}
          </div>
          <input
            type="text"
            name="address"
            id="address"
            value={checkOutDetail.address}
            onChange={handleOnChange}
            className={`md:w-[634px] w-full h-[56px] border-2 rounded-[8px] px-4 ${
              errors.address ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
            }`}
            placeholder="1137 Williams Avenue"
          />
        </div>
      </div>

      <div className="fourthForm flex justify-between md:flex-row flex-col md:gap-0 gap-[30px] pt-[30px]">
        <div>
          <div className="flex justify-between pb-[10px]">
            <label
              htmlFor="zipcode"
              className="text-[12px] leading-[100%] tracking-[-0.21px] font-[700]"
            >
              Zip code
            </label>
            {errors.zipcode && (
              <p className="text-[12px] leading-[100%] tracking-[-0.21px] font-[700] text-red-500">
                {errors.zipcode}
              </p>
            )}
          </div>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            value={checkOutDetail.zipcode}
            onChange={handleOnChange}
            className={`md:w-[309px] w-full h-[56px] rounded-[8px] border-2 px-4 ${
              errors.zipcode ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
            }`}
            placeholder="10001"
          />
        </div>
        <div>
          <div className="flex justify-between pb-[10px]">
            <label
              htmlFor="postcode"
              className="text-[12px] leading-[100%] tracking-[-0.21px] font-[700]"
            >
              Post code
            </label>
            {errors.postcode && (
              <p className="text-[12px] leading-[100%] tracking-[-0.21px] font-[700] text-red-500">
                {errors.postcode}
              </p>
            )}
          </div>
          <input
            type="text"
            id="postcode"
            name="postcode"
            value={checkOutDetail.postcode}
            onChange={handleOnChange}
            className={`md:w-[309px] w-full h-[56px] rounded-[8px] border-2 px-4 ${
              errors.postcode ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
            }`}
            placeholder="10001"
          />
        </div>
      </div>

      <div className="fifthInput pt-[30px]">
        <div>
          <div className="flex justify-between pb-[10px]">
            <label
              htmlFor="country"
              className="text-[12px] leading-[100%] tracking-[-0.21px] font-[700]"
            >
              Country
            </label>
            {errors.country && (
              <p className="text-[12px] leading-[100%] tracking-[-0.21px] font-[700] text-red-500">
                {errors.country}
              </p>
            )}
          </div>
          <input
            type="text"
            id="country"
            name="country"
            value={checkOutDetail.country}
            onChange={handleOnChange}
            className={`md:w-[309px] w-full h-[56px] rounded-[8px] border-2 px-4 ${
              errors.country ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
            }`}
            placeholder="United States"
          />
        </div>
      </div>

      <div className="lastInput pt-[30px]">
        <p className="text-[13px] leading-[25px] tracking-[0.93px] font-[700] uppercase text-[#D87D4A]">
          payment details
        </p>

        <p className="text-[12px] leading-[25px] tracking-[0.93px] font-[700] uppercase pt-[10px]">
          Payment Method
        </p>
        <div className="flex flex-col gap-[20px] md:ml-[330px] mt-[15px]">
          <div
            className={`md:w-[309px] w-full h-[56px] border-2 rounded-[8px] p-[15px] flex gap-[10px] items-center cursor-pointer ${
              checkOutDetail.paymentMethod === "eMoney"
                ? "border-[#D87D4A]"
                : "border-[#CFCFCF]"
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              id="eMoney"
              value="eMoney"
              checked={checkOutDetail.paymentMethod === "eMoney"}
              onChange={handleOnChange}
              className="accent-[#D87D4A]"
            />
            <label
              htmlFor="eMoney"
              className="text-[14px] leading-[100%] tracking-[-0.25px] font-[700] cursor-pointer"
            >
              e-Money
            </label>
          </div>
          <div
            className={`md:w-[309px] w-full h-[56px] border-2 rounded-[8px] p-[15px] flex gap-[10px] items-center cursor-pointer ${
              checkOutDetail.paymentMethod === "cashOnDelivery"
                ? "border-[#D87D4A]"
                : "border-[#CFCFCF]"
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              id="cashOnDelivery"
              value="cashOnDelivery"
              checked={checkOutDetail.paymentMethod === "cashOnDelivery"}
              onChange={handleOnChange}
              className="accent-[#D87D4A]"
            />
            <label
              htmlFor="cashOnDelivery"
              className="text-[14px] leading-[100%] tracking-[-0.25px] font-[700] cursor-pointer"
            >
              Cash on Delivery
            </label>
          </div>
        </div>
      </div>

      {checkOutDetail.paymentMethod === "cashOnDelivery" && (
        <div className="md:block hidden">
          <div className="flex gap-[30px] pt-[30px]">
            <div className="w-[48px] h-[48px]">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z"
                  fill="#D87D4A"
                />
              </svg>
            </div>

            <p className="text-[15px] leading-[25px] tracking-[0px] font-[400]">
              The Cash on Deliver option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        </div>
      )}

      <button
        type="submit"
        className="w-full md:w-[309px] h-[48px] bg-[#D87D4A] text-white font-bold text-[13px] tracking-[1px] uppercase rounded-[8px] mt-[30px] hover:bg-[#fbaf85] transition-colors"
      >
        Continue & Pay
      </button>
    </form>
  );
};

export default Form;
