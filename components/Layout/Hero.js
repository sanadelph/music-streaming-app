import SongCardItem from "@/Trending/SongCardItem";
import { SwiperSlide } from "swiper/react";
import SwiperLayout from "../UI/Swiper";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles["hero--section"]}>
      <h1 className={styles["hero__heading--primary"]}>
        <span>Online</span> Music Streaming App
      </h1>
      <SwiperLayout title="Trending">
        <SwiperSlide>
          <SongCardItem
            imgSrc="/cover-art.jpg"
            songArtist="Someone"
            songTitle="Something"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SongCardItem
            imgSrc="/cover-art.jpg"
            songArtist="Someone"
            songTitle="Something"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SongCardItem
            imgSrc="/cover-art.jpg"
            songArtist="Someone"
            songTitle="Something"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SongCardItem
            imgSrc="/cover-art.jpg"
            songArtist="Someone"
            songTitle="Something"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SongCardItem
            imgSrc="/cover-art.jpg"
            songArtist="Someone"
            songTitle="Something"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SongCardItem
            imgSrc="/cover-art.jpg"
            songArtist="Someone"
            songTitle="Something"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SongCardItem
            imgSrc="/cover-art.jpg"
            songArtist="Someone"
            songTitle="Something"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SongCardItem
            imgSrc="/cover-art.jpg"
            songArtist="Someone"
            songTitle="Something"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SongCardItem
            imgSrc="/cover-art.jpg"
            songArtist="Someone"
            songTitle="Something"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SongCardItem
            imgSrc="/cover-art.jpg"
            songArtist="Someone"
            songTitle="Something"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SongCardItem
            imgSrc="/cover-art.jpg"
            songArtist="Someone"
            songTitle="Something"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SongCardItem
            imgSrc="/cover-art.jpg"
            songArtist="Someone"
            songTitle="Something"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SongCardItem
            imgSrc="/cover-art.jpg"
            songArtist="Someone"
            songTitle="Something"
          />
        </SwiperSlide>
      </SwiperLayout>
    </section>
  );
}

export default Hero;
