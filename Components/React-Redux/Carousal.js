import React, { useState, useEffect, Fragment } from "react";
import CarousalItem from "./CarousalItem";
// import "./Carousal.css";

const Carousal = ({ card }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSwipingPaused, setIsSwipingPaused] = useState(false);


  
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = card.length - 1;
    } else if (newIndex >= card.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSwipingPaused) {
        updateIndex(activeIndex + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex, isSwipingPaused]);

  return (
    <section className="carousal"
      onMouseEnter={() => setIsSwipingPaused(true)}
      onMouseLeave={() => setIsSwipingPaused(false)}
    >
      <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {card.map((item, index) => (
          <Fragment key={index}>
            <CarousalItem item={item} width="100%" />
          </Fragment>
        ))}
      </div>
      <div className="carousal-buttons">
        <button onClick={() => updateIndex(activeIndex - 1)}>&lt;</button>
        <button onClick={() => updateIndex(activeIndex + 1)}>&gt;</button>
      </div>
    </section>
  );
};

export default Carousal;
