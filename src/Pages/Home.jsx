import React from "react";
import Intro from "../Components/UI/Intro/Intro";
import Serv from "../Components/UI/Serv/Serv";
import Quality from "../Components/UI/Quality/Quality";
import Winter from "../Components/UI/Winter/Winter";
import Quality2 from "../Components/UI/Quality/Quality2";
import Autumn from "../Components/UI/Autumn/Autumn";
import Quality3 from "../Components/UI/Quality/Quality3";
import Summer from "../Components/UI/Summer/Summer";
import News from "../Components/UI/News/News";

const Home = ({ data }) => {
  return (
    <>
      <Intro />
      <Serv />
      <Quality />
      <Winter data={data} />
      <Quality2 />
      <Autumn data={data} />
      <Quality3 />
      <Summer data={data} />
      <News />
    </>
  );
};

export default Home;
