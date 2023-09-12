function Services({ data }) {
  return (
    <div className="services mt-[200px]">
      <h3 className="heading-2 m-m-2 m-d-2">
        We offer high <br /> demand services
      </h3>
      <div className="flex max-md:flex-col justify-center max-md:items-center gap-10">
        {data?.map((x) => (
          <div
            className="mt-[42px] w-[341px] h-[422px] py-[46px] px-[34px] group  hover:shadow-[0_10px_30px_0_rgba(51,51,51,.10)] rounded-[24px]"
            key={x.heading}
          >
            <div
              className="h-[67px] w-[67px] flex justify-center items-center rounded-[16px]"
              style={{ backgroundColor: x.color }}
            >
              <p className="material-icons text-[36px] text-white">{x.icon}</p>
            </div>
            <h2 className="mt-[35px] text-gray-1 text-[24px] font-bold font-poppins">
              {x.heading}
            </h2>
            <p className="mt-[24px] text-gray-2 text-base">{x.description}</p>
            <button className="mt-[30px] text-gray-3 group-hover:text-white bg-gray-5 group-hover:bg-blue-1 w-[116px] h-[42px] rounded-[12px] ">
              Get started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
