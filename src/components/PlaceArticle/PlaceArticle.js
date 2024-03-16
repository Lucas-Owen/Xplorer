import "./PlaceArticle.css";
import * as PropTypes from "prop-types";

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
    </article>
  );
}

PlaceArticle.propTypes = {
  placeData: PropTypes.shape({ description: PropTypes.string, place: PropTypes.string })
};
