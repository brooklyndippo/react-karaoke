import React from "react";
import './Kareoke.css'

//React Player library allows embedding of YouTube videos
import ReactPlayer from "react-player";

function Video(props) {

const {song, firstLine} = props

if (firstLine==="true") {
  return (
    <section className="card w-100 text-center mt-4 lyric-card">
    <ReactPlayer className="card-img-top w-100" url={song.guessUrl} />
    <p className="card-title mt-2 px-3">
      {song.songTitle} by {song.artist}
    </p>
    <p className="card-text mb-3 px-3">
      🎵🎶 <strong>{song.firstLine}...</strong>
    </p>
  </section>
  )
} else {
  return (
      <section className="card w-100 text-center mt-4 lyric-card">
      <ReactPlayer className="card-img-top w-100" url={song.answerUrl} />
      <p className="card-text mb-3 px-3">
        <strong>{song.nextLine}</strong>🎵🎶 
      </p>
    </section>
  )
}

};

export default Video;
