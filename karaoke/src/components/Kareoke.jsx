import React, { useState, useEffect } from "react";
import Video from "./Video";
import GuessForm from "./GuessForm";
import SongSelector from "./SongSelector";
import Results from "./Results";
import songs from "./Songs.jsx";
import ShowLyrics from "./ShowLyrics";
import "./Kareoke.css";

const Kareoke = () => {
  //first thing in array is always current state
  //second thing is function that allows you to update current state
  const [appState, setAppState] = useState({
    guess: null,
    song: songs[window.localStorage.getItem("song")] || songs[0],
    result: null, // Result could be a Boolean and Results handles the different strings
    toggle: false, // Rename for something that is more connected with the UI functionality
    checked: false,
  });

  const handleChange = (selectedSongId) => {
    //assign the target value from the drop down as our selected song and update state
    setAppState({
      ...appState,
      guess: null,
      result: false,
      toggle: false,
      checked: false,
      song: songs[selectedSongId],
    });
  };

  const checkGuess = () => {

    //if the guess state matches the stored value for the next line in the song, 
    //set result case to correct!
    if (appState.guess.toLowerCase() === appState.song.nextLine.toLowerCase()) {
      setAppState({
        ...appState,
        result: "Correct",
      });
    } else {
      setAppState({
        ...appState,
        result: "Incorrect",
      });
    }
  };

  //create a display that only shows if the box is checked
  const toggleDisplay = appState.toggle ? (
    <Video song={appState.song} firstLine="false" />
  ) : null;


  useEffect(() => {
    window.localStorage.setItem("song", appState.song.id);
  });

  return (
    <>
      <h1>Holiday Karaoke</h1>

      {/* Kareoke selector */}
      <SongSelector currentSong={appState.song} handleChange={handleChange} />

      {/* Music Video hint */}
      <Video song={appState.song} firstLine="true" />

      {/* Guessing box */}
      <GuessForm
        checkGuess={checkGuess}
        appState={appState}
        setAppState={setAppState}
      />

      {/* Results */}
      {/* <Results result={appState.result} /> */}

      <p id="result">{appState.result}</p>
      
      <ShowLyrics appState={appState} setAppState={setAppState} />
      {/* Music Video Answer */}
      {toggleDisplay}
    </>
  );
};

export default Kareoke;
