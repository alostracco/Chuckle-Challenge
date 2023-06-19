import React from "react";
import PropTypes from "prop-types";

interface YoutubeEmbedProps {
  embedId: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ embedId }) => (
    <div className="relative overflow-hidden w-[48rem] h-[27rem] rounded-lg">
        <iframe
            className="inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Embedded youtube"
        />
    </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
