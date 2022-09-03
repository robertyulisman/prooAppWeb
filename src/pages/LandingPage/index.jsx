import React from "react";
import Contact from "../../components/Contact";
import DownloadNow from "../../components/DownloadNow";
import Features from "../../components/Features";
import Jumbotron from "../../components/Jumbotron";
import Packet from "../../components/Packet";
import WhyUs from "../../components/WhyUs";
import ScrollToTop from "../../utils/scrollTop";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { getLandingPage, getProo } from "../../redux/actions/landingPageAction";

const LandingPage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getLandingPage());
    dispatch(getProo());
  }, []);

  return (
    <motion.div exit={{ opacity: 0 }}>
      <Jumbotron />
      <WhyUs />
      <Packet />
      <Features />
      <DownloadNow />
      <Contact />
      <ScrollToTop />
    </motion.div>
  );
};

export default LandingPage;
