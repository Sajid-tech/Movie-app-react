import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Img from "../../../components/lazyLoadImage/Img";
import { useSelector } from "react-redux";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";

const HeroBanner = () => {
  const { url } = useSelector((state) => state.home);

  // state for to change the background of herobanner page everytime on refresh
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  //api call

  const { data, loading } = useFetch("/movie/upcoming");

  // jb api call hogi toh data we got uske baad humein useefect cal krwana hai that why we put data in dependices
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  // ..
  const navigate = useNavigate();

  //check search input not be empty and when hit the enter than only hit the api
  const seacrhQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      // query is parameter that you write in search
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              // whatever you write on search it will automatically set on query
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={seacrhQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
