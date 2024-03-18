import "./PlaceArticle.css";
import * as PropTypes from "prop-types";
import greatWall from "../../assets/great_wall_of_china.jpg"

export default function PlaceArticle (props) {
  const { placeData } = props;
  return (
    <article className='Place-article'>
      <header className='Article-header'>
        <h2>{placeData.place || "Select a place"}</h2>
      </header>
      <p>
        {placeData.description}
      </p>
      <img src={greatWall} alt="Great Wall of china"></img>
    </article>
  );
}

PlaceArticle.propTypes = {
  placeData: PropTypes.shape({ description: PropTypes.string, place: PropTypes.string })
};
