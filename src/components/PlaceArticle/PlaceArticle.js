import "./PlaceArticle.css";
import * as PropTypes from "prop-types";
import greatWall from "../../assets/great_wall_of_china.jpg";
import greatWall2 from "../../assets/great_wall_of_china_ai2.jpg";
import greatWall3 from "../../assets/great_wall_of_china_ai3.jpg";
import { useEffect } from "react";

function autoScrollGallery (i) {
  const gallery = document.getElementsByClassName("gallery");
  Array.from(gallery).forEach((image, index) => {
    index === i ? image.classList.remove("hidden") : image.classList.add("hidden");
  });
  setTimeout(() => autoScrollGallery((i+1) % gallery.length), 10000)
}

export default function PlaceArticle (props) {
  useEffect(()=>{
    autoScrollGallery(0)
  }, [])
  
  const { placeData } = props;
  const gallery = [greatWall, greatWall2, greatWall3].map((image, index) => <img src={image} alt="Great Wall of china" className="gallery hidden" key={index}></img>);
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
