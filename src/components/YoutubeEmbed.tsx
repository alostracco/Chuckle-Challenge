import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";
import FadeInUp from "@/animations/FadeInUp";

interface YoutubeEmbedProps {
  embedId: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ embedId }) => (
  <FadeInUp index={2}>
    <Box
      className="relative overflow-hidden w-[48rem] h-[27rem] rounded-lg shadow-2xl"
      borderWidth='1px'
      borderColor="white"
    >
      <iframe
        className="inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Embedded youtube"
      />
    </Box>
  </FadeInUp>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
