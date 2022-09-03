import React from "react";
import "./ChatMe.css";
import "../../utils/data";
import formatNumber from "../../utils/formatNumber";
import { useSelector } from "react-redux";

function ChatMe() {
  const { proo } = useSelector((state) => state.landingPage);
  const [dataProo, setDataProo] = React.useState(null);

  const linkwa = `https://api.whatsapp.com/send?phone=${formatNumber(
    dataProo?.noWaAdmin || ""
  )}`;

  React.useEffect(() => {
    if (proo.length !== 0) {
      setDataProo(proo);
    }
  }, [proo]);

  return (
    <div className="flex flex-row">
      <a
        href={linkwa}
        className="float md:px-10 px-4 flex flex-row space-x-2"
        target="_blank"
      >
        <i className="fab fa-whatsapp my-float my-auto wa-icon bounce-fx"></i>{" "}
        <p className="text-base my-auto font-bold hidden md:block">
          Hubungi Kami !
        </p>
      </a>
    </div>
  );
}

export default ChatMe;
