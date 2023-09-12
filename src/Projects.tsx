function Projects({ data }) {
  return (
    <div className="mt-[100px] 2xl:mt-[194px]" id="projects">
      <h3 className="heading-2 m-m-2 m-d-2">
        Good design means <br /> good business
      </h3>
      <div className="mt-12 flex flex-col gap-9 m-m-1">
        {data?.map((x) => (
          <div key={x.name}>
            <img
              className="w-full rounded-[24px]"
              src={`/src/assets/${x.photo}`}
              alt=""
            />
            <h5 className="mt-[13px] text-gray-3 text-[12px] font-light font-poppins ">
              {x.category}
            </h5>
            <h4 className="text-gray-1 text-lg font-poppins font-medium">
              {x.name}
            </h4>
          </div>
        ))}

        <button className="flex items-center gap-2 text-lg text-blue-1 font-medium ">
          <p className="pb-1">see more</p>
          <span className="material-icons">arrow_right_alt</span>
        </button>
      </div>
    </div>
  );
}

export default Projects;
