import React from "react";
import PropTypes from "prop-types";

const CarousalItem = ({ item }) => {
  return (
    <div className="carousal-item" style={{ width: "100%" }}>
      <img src={item.src} alt={item.alt} className="img-fluid" />
      <div className="carousal-caption">
        <h3>{item.alt}</h3>
        {/* You can add more details about the coffee here */}
      </div>
    </div>
  );
};

CarousalItem.propTypes = {
  item: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default CarousalItem;
