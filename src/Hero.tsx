function Hero({ photo }) {
  return (
    <section className="hero mt-12  2xl:mt-24">
      <Heading />
      <div className="m-d-1 m-m-1 mt-[42px]">
        <img className="w-full rounded-[18px]" src={photo} alt="" />
      </div>
      <Description />
    </section>
  );
}

const Heading = () => {
  return (
    <div className="heading m-m-2 m-d-3">
      <h4 className="text-blue-1 text-[12px] 2xl:text-lg font-medium font-poppins">
        Unhappy with your website?
      </h4>
      <h1 className="heading-1 mt-4">
        We create beautiful <br />
        and fast web services
      </h1>
    </div>
  );
};

const Description = () => {
  return (
    <div className="description-container mt-[42px] m-m-2 m-d-3 max-w-[366px]">
      <h1 className="heading-1">
        Story, emotion <br /> and purpose
      </h1>
      <p className="text-gray-2 text-[12px] md:text-lg font-poppins mt-[42px] text-justify">
        We help transform your ideas into real world applications that will
        outperform your toughest competition and help you achieve your strategic
        goals in short period time.
      </p>

      <form action="" className="mt-[42px]">
        <label
          className="text-gray-3 text-[10px] md:text-sm font-medium font-poppins"
          htmlFor="email"
        >
          Want us to contact you?
        </label>
        <div className="mt-[9px] relative me-3 mb-6">
          <input
            className="h-[46px] md:h-[58px] rounded-xl w-full border-none bg-gray-6 placeholder:text-sm md:placeholder:text-lg placeholder:text-gray-4 placeholder:font-medium placeholder:font-poppins ps-[21px]"
            placeholder="Email"
            type="email"
            id="email"
          />
          <button className="bg-blue-1 text-white placeholder:text-sm md:text-lg h-[40px] md:h-[50px] w-[70px] md:w-[94px] rounded-xl absolute right-[3px] md:right-1 bottom-[3px] md:bottom-1">
            Join
          </button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
