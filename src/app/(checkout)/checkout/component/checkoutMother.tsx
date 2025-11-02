import CheckoutComponent from "./checkoutComponent";
import Overlay from "./overlay";
import SecondCheckouComponent from "./secondcheckoutcomponent";

const CheckoutMother = () => {
  return (
    <div>
      <section className="flex justify-between md:flex-row flex-col items-start">
        <CheckoutComponent />
        <SecondCheckouComponent />
      </section>
      <Overlay />
      {/* <div className="absolute inset-0 bg-black/50"></div> */}
    </div>
  );
};

export default CheckoutMother;
