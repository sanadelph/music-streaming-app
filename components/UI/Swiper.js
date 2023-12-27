import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Swiper } from "swiper/react";
import "swiper/css";
import {
  FreeMode,
  Navigation,
  Mousewheel,
  Keyboard,
  Virtual,
} from "swiper/modules";
import styles from "./Swiper.module.css";
import React, { useRef } from "react";

function SwiperLayout({ children, title }) {
  const albumNext = useRef(null);
  const albumPrev = useRef(null);

  const renderSlide = (slides) => {
    return React.Children.map(slides, (child) => {
      if (child.type === "SwiperSlide") return child.props.children;
      return null;
    });
  };

  return (
    <div className={styles["swiper__container"]}>
      <div className={styles["swiper__header"]}>
        <h2 className={styles["heading--secondary"]}>{title}</h2>
        <div
          ref={albumPrev}
          className={`${styles["swiper__icons"]} ${styles["swiper__icon--prev"]}`}
        >
          <MdNavigateBefore
            style={{
              fontSize: "24px",
              border: "1px solid #f1f3f5",
              borderRadius: "50%",
            }}
          />
        </div>
        <div
          ref={albumNext}
          className={`${styles["swiper__icons"]} ${styles["swiper__icon--next"]}`}
        >
          <MdNavigateNext
            style={{
              fontSize: "24px",
              border: "1px solid #f1f3f5",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
      <Swiper
        modules={[Navigation, FreeMode, Mousewheel, Keyboard, Virtual]}
        style={{
          "--swiper-navigation-size": "20px",
          "--swiper-navigation-color": "white",
          margin: "0 24px",
        }}
        breakpoints={{
          300: { slidesPerView: 3.1, spaceBetween: 5 },
          640: { slidesPerView: 4.2, spaceBetween: 5 },
          1024: { slidesPerView: 6, spaceBetween: 5 },
        }}
        mousewheel={{
          enabled: true,
          forceToAxis: true,
        }}
        freeMode={true}
        navigation={{
          nextEl: albumNext.current,
          prevEl: albumPrev.current,
        }}
        virtual={{
          enabled: true,
          slides: renderSlide(children),
          cache: true,
          addSlidesAfter: 4,
          addSlidesBefore: 4,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = albumPrev.current;
          swiper.params.navigation.nextEl = albumNext.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {children}
      </Swiper>
    </div>
  );
}
export default SwiperLayout;
