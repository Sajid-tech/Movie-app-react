import React, { useState } from "react";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import Carousel from "../../../components/carousel/Carousel";
const Trending = () => {
  //get trending page endpoint from doc :'/trending/{media_type}/{time_window}' .. time window may be it is day or week and media type is ;- all,movie,tv,person
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/all/${endpoint}`);

  //tab name is if day than day "ignore this comment"
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      {/* to view the carausel */}
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
