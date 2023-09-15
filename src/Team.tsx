function Team({ data }) {
  const photo = data ? data.photo : Array(3).fill("");
  return (
    <div
      id="team"
      className="mt-[100px] m-m-1 2xl:m-d-2 flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center gap-9"
    >
      <div>
        <h4 className="text-red-1 text-lg font-medium font-poppins">
          Meet the team
        </h4>
        <h3 className="mt-[7px] text-gray-1 text-[36px] font-medium font-poppins">
          We are chilled <br /> and a laidback <br /> team
        </h3>
        <p className="mt-[14px] text-gray-2 text-base font-poppins">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[8.9px]">
        <img
          className="w-full row-span-2 row-start-2 rounded-[24px]"
          src={`/src/assets/${photo[0]}`}
          alt=""
        />
        <img
          className="w-full row-span-2 rounded-[24px]"
          src={`/src/assets/${photo[1]}`}
          alt=""
        />
        <img
          className="w-full row-span-2 rounded-[24px]"
          src={`/src/assets/${photo[2]}`}
          alt=""
        />
      </div>
    </div>
  );
}

export default Team;
