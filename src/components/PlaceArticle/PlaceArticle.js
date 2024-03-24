import "./PlaceArticle.css";
import { useEffect } from "react";
import locationShape from "../utils/locationShape";

function autoScrollGallery () {
  let i = 0;
  return () => {
    const gallery = document.getElementsByClassName("gallery");
    if (gallery.length === 0) return;
    Array.from(gallery).forEach((image, index) => {
      index === i ? image.classList.remove("hidden") : image.classList.add("hidden");
    });
    i = (i + 1) % gallery.length;
  };
}

export default function PlaceArticle (props) {
  const { location } = props;
  const gallery = location.place.images ?
    location.place.images
      .map((image, index) =>
        <img src={image.src} alt={image.alt} className="gallery hidden" key={index}></img>
      ) : [];
  const animate = Boolean(gallery.length > 1)
  useEffect(() => {
    const scrollFunc = autoScrollGallery();
    scrollFunc();
    if (animate) {
      const intervalId = setInterval(scrollFunc, 10000);
      return () => clearInterval(intervalId);
    }
  }, [location.place.name, animate]);
  return (
    <article className='Place-article'>
      <header className='Article-header'>
        <h2>{location.place.name || "Select a place"}</h2>
      </header>
      <p>
        {location.description}
      </p>
      <div data-animate={animate}>
        {gallery}
      </div>
    </article>
  );
}

PlaceArticle.propTypes = {
  location: locationShape
};
