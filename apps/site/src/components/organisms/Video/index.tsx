/* eslint-disable jsx-a11y/media-has-caption */
import Loader from "@components/atoms/Loader";
import theme from "@setup/theme";
import getVideoId from "get-video-id";
import Image from "next/image";
import { useState, useMemo } from "react";

import * as Styled from "./styles";
import { Props } from "./types";

const Video: React.FC<Props> = ({ link, file, poster }) => {
  const urlData = useMemo(() => {
    const url = link || file?.asset?.url || "";
    const videoData = getVideoId(url);

    return {
      ...videoData,
      url: `${url}${url.includes("?") ? "&" : "?autoplay=1"}`
    };
  }, [link, file]);

  const urlPoster = useMemo(() => {
    if (urlData.service === "vimeo")
      return `https://vumbnail.com/${urlData.id}.jpg`;
    if (urlData.service === "youtube")
      return `https://img.youtube.com/vi/${urlData.id}/hqdefault.jpg`;

    return poster?.asset?.url;
  }, [urlData, poster]);

  // if video play button was clicked
  const [isStarted, setIsStarted] = useState(false);
  // load spinner
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Styled.FullWidthContainer>
      <Styled.Content>
        {isLoading && (
          <Styled.SpinnerContainer
            justifyContent="center"
            alignItems="center"
          >
            <Loader
              borderColor={`${theme.colors.White} transparent`}
            />
          </Styled.SpinnerContainer>
        )}
        {isStarted ? (
          <div>
            {link !== null ? (
              <Styled.IFrame
                title="Video Player"
                src={urlData.url}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsLoading(false)}
              />
            ) : (
              <Styled.Video
                controls
                width="100%"
                height="100%"
                autoPlay
                onLoadedData={() => setIsLoading(false)}
              >
                <source src={urlData.url} type="video/mp4" />
              </Styled.Video>
            )}
          </div>
        ) : (
          <Styled.PosterContainer
            type="button"
            onClick={() => {
              setIsLoading(true);
              setIsStarted(true);
            }}
          >
            <Styled.PlayIcon />
            <Image
              src={urlPoster}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Styled.PosterContainer>
        )}
      </Styled.Content>
    </Styled.FullWidthContainer>
  );
};

export default Video;
