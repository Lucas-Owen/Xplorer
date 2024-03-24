import "./PlaceArticle.css";
import * as PropTypes from "prop-types";
import { useEffect } from "react";

function autoScrollGallery () {
  let i = 0;
  return () => {
    const gallery = document.getElementsByClassName("gallery");
    if (gallery.length === 0) return;
    Array.from(gallery).forEach((image, index) => {
      index === i ? image.classList.remove("hidden") : image.classList.add("hidden");
    });
    i = (i + 1) % gallery.length;
  }
}

export default function PlaceArticle (props) {
  const { placeData } = props;
  const gallery = placeData.images ?
    placeData.images
      .map((image, index) =>
        <img src={image.src} alt={image.alt} className="gallery hidden" key={index}></img>
      ) : [];
  const animate = Boolean(gallery.length > 1);
  useEffect(() => {
    const scrollFunc = autoScrollGallery();
    scrollFunc();
    if (!animate)
    return;
    const intervalId = setInterval(scrollFunc, 10000);
    return () => clearInterval(intervalId);
  }, [placeData.place, animate]);
  return (
    <article className='Place-article'>
      <header className='Article-header'>
        <h2>{placeData.place || "Select a place"}</h2>
      </header>
      <p>
        {placeData.description}
      </p>
      <div data-animate={animate}>
        {gallery}
      </div>
    </article>
  );
}

PlaceArticle.propTypes = {
  placeData: PropTypes.shape({ description: PropTypes.string, place: PropTypes.string })
};
