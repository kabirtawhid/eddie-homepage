function Footer({ data, Icon, icon }) {
  return (
    <div className=" bg-[#100E1D]   mt-[100px] pt-[36px]  2xl:pt-[50px] pb-[24px]">
      <div className=" m-m-2 m-d-2 flex flex-col  2xl:flex-row 2xl:justify-between gap-[64px]">
        <div>
          {data?.links?.map((x) => (
            <a
              className="block text-white text-lg font-poppins leading-[36px]"
              href={x.src}
              key={x.name}
            >
              {x.name}
            </a>
          ))}
        </div>

        <div>
          <h3 className="text-[36px] leading-[52px] text-gray-6 font-extrabold font-heebo ">
            Eddie
          </h3>
          <div className="flex mt-[7px] gap-[11px]">
            <Icon path={icon.instagram} color={"#fff"} size={"24px"} />
            <Icon path={icon.linkedin} color={"#fff"} size={"24px"} />
            <Icon path={icon.twitter} color={"#fff"} size={"24px"} />
          </div>
        </div>

        <form action="">
          <label
            className="text-gray-3 text-[10px] md:text-sm font-medium font-poppins"
            htmlFor="email"
          >
            Want us to contact you?
          </label>
          <div className="mt-[9px] relative me-3 mb-6 2xl:w-[350px]">
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

      <p className="font-poppins text-gray-6 text-sm mt-[154px] 2xl:mt-[118px] text-center ">
        created by{" "}
        <a
          className="font-semibold underline hover:text-base"
          href="https://github.com/kabirtawhid"
          target="_blank"
        >
          kabirtawhid
        </a>
      </p>
    </div>
  );
}

export default Footer;
