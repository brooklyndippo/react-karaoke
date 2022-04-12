import React from "react";
import './Kareoke.css'

//React Player library allows embedding of YouTube videos
import ReactPlayer from "react-player";

function Video(props) {

return (
    <section className="card w-100 text-center mt-4 lyric-card">
    <ReactPlayer className="card-img-top w-100" url={props.song.guessUrl} />
    <p className="card-title mt-2 px-3">
      {props.song.songTitle} by {props.song.artist}
    </p>
    <p className="card-text mb-3 px-3">
      🎵🎶 <strong>{props.lyric}</strong> ...{" "}
    </p>
  </section>
  )

};

export default Video;
