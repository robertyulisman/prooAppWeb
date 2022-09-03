import React from "react";
import { useSelector } from "react-redux";

const Jumbotron = () => {
  const idPage = "home";
  const landingData = useSelector((state) => state.landingPage.data);

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (landingData.length !== 0) {
      const dataFilter = landingData?.konten?.find(
        (item) => item.key.toLowerCase() === idPage.toLowerCase()
      );
      setData(dataFilter);
    }
  }, [landingData]);

  return (
    <section className="bg-[#F0F2F9] " id={idPage}>
      <div className="flex flex-col justify-center p-4 lg:-mt-12 lg:px-28 mx-auto sm:py-12 lg:py-16 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="text-3xl font-extrabold text-[#1B252F] leading-none sm:text-3xl">
            {data?.title}
          </p>
          <p className="mt-6 mb-8 text-[#1B252F] text-xl sm:mb-12">
            {data?.subtitle}
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              href="https://www.youtube.com/watch?v=nL87m6dqd-Q"
              className="px-10 py-4 text-lg font-bold rounded-2xl bg-green-500 hover:opacity-80 text-white hover:cursor-pointer space-x-3"
            >
              <i className="fas fa-play"></i> <span>Lihat Demo</span>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0  sm:-mt-15">
          <img
            src={data?.image}
            alt="Proo"
            className="object-contain h-full  sm:-mt-15"
          />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
