function Testmonial({ data }) {
  return (
    <div
      className="mt-[100px] 2xl:mt-[196px] m-m-1 m-d-2 max-w-[920px]"
      id="testmonial"
    >
      {data?.map((x) => (
        <div key={x.author}>
          <p className="text-gray-1 font-poppins text-2xl 2xl:text-[36px] leading-9 2xl: leading-[54px]  font-medium">
            {x.description}
          </p>
          <div className="flex gap-[30px] mt-[27px] 2xl:mt-[45px]">
            <img
              className="w-[82px] h-[82px] rounded-[12px]"
              src={`/src/assets/${x.photo}`}
              alt="Author's Picture"
            />
            <div>
              <h4 className="text-gray-1 text-2xl leading-9 font-medium font-poppins">
                {x.author}
              </h4>
              <h6 className="mt-[12px] text-gray-3 text-lg font-medium font-poppins">
                {x.institution}
              </h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testmonial;
