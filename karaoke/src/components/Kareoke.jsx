import React, { useState, useEffect } from "react";
import Video from "./Video";
import GuessForm from "./GuessForm";
import SongSelector from "./SongSelector";
//import Results from "./Results";
import ShowLyrics from "./ShowLyrics";
import "./Kareoke.css";
import { useKaraokeState } from "./customHooks";

const Kareoke = () => {
  const {
    karaokeState,
    handleSongChange,
    checkNextLyricGuess,
    setKaraokeState,
    handleShowLyricsToggle
  } = useKaraokeState();

  const { song, toggle, result, checked } = karaokeState;

  //create a display that only shows if the box is checked
  const toggleDisplay = toggle ? <Video song={song} firstLine="false" /> : null;

  return (
    <>
      <h1>Holiday Karaoke</h1>

      {/* Kareoke selector */}
      <SongSelector currentSong={song} handleChange={handleSongChange} />

      {/* Music Video hint */}
      <Video song={song} firstLine="true" />

      {/* Guessing box */}
      <GuessForm
        checkGuess={checkNextLyricGuess}
        appState={karaokeState}
        setAppState={setKaraokeState}
      />

      {/* Results */}
      {/* <Results result={appState.result} /> */}

      <p id="result">{result}</p>

      <ShowLyrics checked={checked} handleShowLyricsToggle={handleShowLyricsToggle}/>
      {/* Music Video Answer */}
      {toggleDisplay}
    </>
  );
};

export default Kareoke;
