

const SecondSection = () => {
  return (
    <section className="md:w-[1110px] md:h-[318px] w-full flex md:justify-between justify-center md:items-start items-center flex-col md:flex-row md:text-left text-center ">
      <div className="md:w-[635px] md:h-[318px]">
        <h2 className="text-[32px] leading-[36px] tracking-[1.14px] font-[700] ">
          FEATURES
        </h2>
        <div className="text-[15px] leading-[25px] tracking-[0px] font-[400] flex flex-col gap-[30px]">
          <p>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </p>

          <p>
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>
      </div>
      <div className="md:w-[350px] md:h-[225px] md:pt-0 pt-20">
        <h2 className="text-[32px] leading-[36px] tracking-[1.14px] font-[700] ">
          IN THE BOX
        </h2>
        <ul className="text-[15px] leading-[25px] tracking-[0px] font-[400] ">
          <li>Headphone Unit</li>
          <li>Replacement Earcups</li>
          <li>User Manual</li>
          <li>3.5mm 5m Audio Cable</li>
          <li>Travel Bag</li>
        </ul>
      </div>
    </section>
  );
};

export default SecondSection;
