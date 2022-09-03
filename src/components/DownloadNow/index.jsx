import React from "react";
import { useSelector } from "react-redux";

const DownloadNow = () => {
  const idPage = "download";
  const landingData = useSelector((state) => state.landingPage.data);

  const [data, setData] = React.useState(null);
  console.log("data", data);

  React.useEffect(() => {
    if (landingData.length !== 0) {
      const dataFilter = landingData?.konten?.find(
        (item) => item.key.toLowerCase() === idPage.toLowerCase()
      );
      setData(dataFilter);
    }
  }, [landingData]);
  return (
    <center>
      <div className="bg-white -mt-16 w-2/3 my-auto h-auto rounded-xl py-6 pb-14 px-10 shadow-lg">
        <div className="md:row">
          <div className="col">
            <img src={data?.image} className="w-auto" alt="" />
          </div>
          <div className="col text-left space-y-2 md:-ml-10 my-auto lg:mt-32">
            <p className="leading-relaxed text-3xl font-extrabold text-[#1F2D3D]">
              {data?.title}
            </p>
            <p className="text-lg font-light md:pr-20">{data?.subtitle}</p>
            <div className="button-cta">
              <div className="flex flex-col space-y-4 mt-5 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start md:-ml-3">
                <img
                  src="/assets/ps.png"
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.asia_proo_teknologi",
                      "_blank"
                    )
                  }
                  className="hover:cursor-pointer h-14"
                  alt=""
                />
                <img
                  src={"/assets/is.png"}
                  onClick={() =>
                    window.open(
                      "https://apps.apple.com/id/app/proo/id1610920974?l=id",
                      "_blank"
                    )
                  }
                  className="hover:cursor-pointer h-14"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};

export default DownloadNow;
