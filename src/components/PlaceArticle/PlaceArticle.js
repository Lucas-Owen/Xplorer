import "./PlaceArticle.css";
import * as PropTypes from "prop-types";
import { useEffect } from "react";

function autoScrollGallery (i) {
  const gallery = document.getElementsByClassName("gallery");
  if (gallery.length === 0) return;
  Array.from(gallery).forEach((image, index) => {
    index === i ? image.classList.remove("hidden") : image.classList.add("hidden");
  });
  setTimeout(() => autoScrollGallery((i + 1) % gallery.length), 10000);
}

export default function PlaceArticle (props) {
  const { placeData } = props;
  const gallery = placeData.images ?
    placeData.images
      .map((image, index) =>
        <img src={image} alt="Great Wall of china" className="gallery hidden" key={index}></img>
      ) : [];

  useEffect(() => {
    autoScrollGallery(0);
  }, [placeData.place]);
  return (
    <article className='Place-article'>
      <header className='Article-header'>
        <h2>{placeData.place || "Select a place"}</h2>
      </header>
      <p>
        {placeData.description}
      </p>
      {gallery}
    </article>
  );
}

PlaceArticle.propTypes = {
  placeData: PropTypes.shape({ description: PropTypes.string, place: PropTypes.string })
};
