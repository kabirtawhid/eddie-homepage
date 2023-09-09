function Hero({ photo }) {
  return (
    <section className="hero 2xl:mt-24">
      <Heading />
      <img className="mt-[42px]" src={photo} alt="" />
      <Description />
    </section>
  );
}

const Heading = () => {
  return (
    <div className="heading 2xl:ms-[277px]">
      <h4 className="text-blue-1 text-lg font-medium font-poppins">
        Unhappy with your website?
      </h4>
      <h1 className="mt-4 text-5xl text-gray-1 font-poppins font-medium">
        We create beautiful <br />
        and fast web services
      </h1>
    </div>
  );
};

const Description = () => {
  return (
    <div className="description-container mt-[42px] 2xl:ms-[277px] w-[366px]">
      <h1 className="text-5xl text-gray-1 font-poppins font-medium">
        Story, emotion and purpose
      </h1>
      <p className="text-gray-2 text-lg font-poppins mt-[42px]">
        We help transform your ideas into real world applications that will
        outperform your toughest competition and help you achieve your strategic
        goals in short period time.
      </p>

      <form action="" className="mt-[42px]">
        <label
          className="text-gray-3 text-sm font-medium font-poppins"
          htmlFor="email"
        >
          Want us to contact you?
        </label>
        <div className="mt-[9px] relative me-3 mb-6">
          <input
            className="h-[58px] rounded-xl w-full border-none bg-gray-6 placeholder:text-lg placeholder:text-gray-4 placeholder:font-medium placeholder:font-poppins ps-[21px]"
            placeholder="Email"
            type="email"
            id="email"
          />
          <button className="bg-blue-1 text-white text-lg h-[50px] w-[94px] rounded-xl absolute right-1 bottom-1">
            Join
          </button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
