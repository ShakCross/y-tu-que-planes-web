import React, { useState, useEffect, useCallback } from "react";
import EmblaCarouselReact from "embla-carousel-react";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";

const EmblaCarouselComponent = ({ children }) => {
  const [embla, setEmbla] = useState(null);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([1]);

  const scrollTo = useCallback(index => embla.scrollTo(index), [embla]);
  const scrollPrev = useCallback(() => embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla.scrollNext(), [embla]);

  useEffect(() => {
    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());
    };
    if (embla) {
      setScrollSnaps(embla.scrollSnapList());
      embla.on("select", onSelect);
      onSelect();
    }
    return () => embla && embla.destroy();
  }, [embla]);

  return (
    <div className="embla">
      <EmblaCarouselReact
        className="embla__viewport"
        emblaRef={setEmbla}
        options={{ loop: true }}
      >
        <div className="embla__container">
          {children.map((Child, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">{Child}</div>
            </div>
          ))}
        </div>
      </EmblaCarouselReact>
      <div className="embla__dots">
        {scrollSnaps.map((snap, index) => (
          <DotButton
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
            key={index}
            count={index + 1}
          />
        ))}
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarouselComponent;
