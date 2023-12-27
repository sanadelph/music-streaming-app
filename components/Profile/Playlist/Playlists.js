import PlaylistCard from "./PlaylistCard";
import styles from "./Playlists.module.css";

function Playlists() {
  return (
    <section className={`${styles["grid--4cols"]}`}>
     {/* The playlists list added by backend should be mapped
      example: playlistlist.map(playlist=> {return <PlaylistCard image="cover-art.jpg" title="Name" />})*/}
      <PlaylistCard image="/cover-art.jpg" title="Playlist" />
      <PlaylistCard image="/cover-art.jpg" title="Playlist" />
    </section>
  );
}
export default Playlists;
