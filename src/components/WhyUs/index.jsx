import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const WhyUs = () => {
  const idPage = "about";
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

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="-mt-20 md:-mt-52" id={idPage}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1f2d3d"
          fillOpacity="1"
          d="M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,138.7C672,128,768,128,864,154.7C960,181,1056,235,1152,218.7C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#1f2d3d] text-white pb-28">
        <div className="header-text text-center md:-mt-6 -mt-2 space-y-3 items-center flex flex-col">
          <p className="font-black text-2xl">{data?.title}</p>
          <p className="font-regular text-xl w-6/12">{data?.subtitle}</p>
        </div>
        <div className="body-content mt-10">
          <div className="container">
            <div className="row">
              {data?.item.map((item) => (
                <div className="md:col-4 mb-5">
                  <center>
                    <div className="img-container -ml-20">
                      <img src="/assets/amanbg.png" alt="" />
                      <motion.img
                        src={item.image}
                        className="-mt-40 ml-36"
                        alt=""
                        whileHover={{ scaleY: 1.2 }}
                        whileTap={{
                          scale: 0.2,
                        }}
                      />
                    </div>
                    <div className="text-content mt-3 text-center flex flex-col items-center">
                      <p className="text-white font-extrabold text-xl">
                        {item.title}
                      </p>
                      <p className="text-white font-light w-6/12">
                        {item.subtitle}
                      </p>
                    </div>
                  </center>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
