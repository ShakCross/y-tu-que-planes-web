import React, { useState, useEffect, useCallback } from "react";
import Slider from "react-slick";
// import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./slider.module.scss";

const MainSlider = () => {
  // const [embla, setEmbla] = useState(null);
  // const [selectedIndex, setSelectedIndex] = useState(0);
  // const [scrollSnaps, setScrollSnaps] = useState([]);
  // let [isRunning, setIsRunning] = useState(autoplay);
  // const scrollTo = useCallback(index => embla.scrollTo(index), [embla]);
  // const scrollNext = useCallback(() => embla.scrollNext(), [embla]);

  // const handlePlay = () => {
  //   setIsRunning({ isRunning: true })
  // }

  // const handlePause = () => {
  //   setIsRunning(!isRunning)
  // }

  // AutoPlay(
  //   () => {
  //     if (selectedIndex === scrollSnaps.length - 1) {
  //       scrollTo(0);
  //     } else {
  //       scrollNext();
  //     }
  //   },
  //   isRunning ? delayLength : null
  // );

  // useEffect(() => {
  //   const onSelect = () => {
  //     setSelectedIndex(embla.selectedScrollSnap());
  //   };
  //   if (embla) {
  //     setScrollSnaps(embla.scrollSnapList());
  //     embla.on("select", onSelect);
  //     onSelect();
  //   }
  //   return () => embla && embla.destroy();
  // }, [embla]);

  return (
    <Slider className={styles.slider}>
      {/* <EmblaCarouselReact
          className={styles.slider_viewport}
          emblaRef={setEmbla}
          options={{ loop: true }}
          htmlTagName="div"
        >
          <div className={styles.slider_container}>
            {children.map((Child, index) => (
              <div className={styles.slider_slide} key={index}>
                <div className={styles.slider_slide_inner}>{Child}</div>
              </div>
            ))}
          </div>
        </EmblaCarouselReact> */}
      {/* <div className={styles.slider_dots}>
          {scrollSnaps.map((snap, index) => (
            <Dot
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
              key={index}
              count={index + 1}
            />
          ))}
          <div className={styles.button_wrapper}>
            <button
              className={styles.button}
            > 
            { !isRunning ?
                <FontAwesomeIcon icon={faPlay} onClick={handlePlay}/> :
                isRunning ?
                <FontAwesomeIcon icon={faPause} onClick={handlePause}/>:
              ''
            }
            </button>
          </div>
        </div> */}
    </Slider>
  );
};

export default MainSlider;
