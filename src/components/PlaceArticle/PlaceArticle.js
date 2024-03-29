import "./PlaceArticle.css";
import { useEffect } from "react";
import locationShape from "../utils/locationShape";

function autoScrollGallery () {
  let i = 0;
  return () => {
    const gallery = document.getElementsByClassName("gallery");
    if (gallery.length === 0) return;
    Array.from(gallery).forEach((image, index) => {
      if (index === i) {
        image.classList.add("animate-out");
        image.classList.remove("animate-in");
        setTimeout(() => { image.classList.remove("animate-out"); image.classList.add("hidden"); }, 5000);
      }
    });
    i = (i + 1) % gallery.length;
    if (i >= 0) {
      gallery[i].classList.remove('hidden');
      gallery[i].classList.add('animate-in');
    }
  };
}

export default function PlaceArticle (props) {
  const { location } = props;
  const gallery = location.place.images ?
    location.place.images
      .map((image, index) =>
        <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} className={`gallery${index !== 0 ? " hidden" : ""}`} key={index}></img>
      ) : [];
  const animate = Boolean(gallery.length > 1);
  useEffect(() => {
    const scrollFunc = autoScrollGallery();
    if (animate) {
      const intervalId = setInterval(scrollFunc, 10000);
      return () => clearInterval(intervalId);
    }
  }, [location.place.name, animate]);
  useEffect(()=>{
    if (location.place.name) {
      setTimeout(() => document.getElementById("result").scrollIntoView({behavior: "smooth"}), 4000)
    }
  }, [location.place.name])
  return (
    location.place.name &&
    <article className='Place-article paragraph-container' id="result">
      <header className='place-article-header'>
        <h2>{location.place.name}</h2>
      </header>
      <div className="article-body">
        <p>
          {location.place.description}
        </p>
        {gallery.length ?
          <div className="gallery-container">
            {gallery}
          </div> : <></>}
      </div>
    </article>
  );
}

PlaceArticle.propTypes = {
  location: locationShape
};

PlaceArticle.defaultProps = {
  location: {
    place: {
      images: []
    }
  }
}
