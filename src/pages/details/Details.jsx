import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";
import Cast from "./cast/Cast";
const Details = () => {
  const { mediaType, id } = useParams();
  // for getting video data : official video
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  // for cast and crew
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
