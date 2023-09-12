function Projects({ data }) {
  return (
    <div className="mt-[100px] 2xl:mt-[194px]" id="projects">
      <h3 className="heading-2 m-m-2 m-d-2">
        Good design means <br /> good business
      </h3>
      <div className="mt-12 grid grid-cols-1 2xl:grid-cols-2  gap-9 md:gap-5  m-m-1 m-d-2">
        {data?.map((x) => (
          <div
            className={`h-[auto] 2xl:h-[800px] flex flex-col ${
              data.indexOf(x) % 2 === 1 ? "justify-start" : "justify-end"
            } `}
            key={x.name}
          >
            <img
              className="w-full rounded-[24px]"
              src={`/src/assets/${x.photo}`}
              alt=""
            />
            <h5 className="mt-[13px] text-gray-3 text-[12px] 2xl:text-[14px] font-light font-poppins ">
              {x.category}
            </h5>
            <h4 className="text-gray-1 text-lg 2xl:text-2xl font-poppins font-medium">
              {x.name}
            </h4>
          </div>
        ))}
      </div>
      <div className="m-m-1 m-d-2 mt-9 relative">
        <button className="flex items-center gap-2 text-lg text-blue-1 font-medium absolute right-0 top-[-80px]">
          <p className="pb-1">see more</p>
          <span className="material-icons">arrow_right_alt</span>
        </button>
      </div>
    </div>
  );
}

export default Projects;
