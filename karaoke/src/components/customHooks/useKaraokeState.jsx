import { useState, useEffect } from "react";
import songs from "../Songs.jsx";

export function useKaraokeState() {
  const [karaokeState, setKaraokeState] = useState({
    guess: null,
    song: songs[window.localStorage.getItem("song")] || songs[0],
    result: null, // Result could be a Boolean and Results handles the different strings
    toggle: false, // Rename for something that is more connected with the UI functionality
    checked: false,
  });

  useEffect(() => {
    window.localStorage.setItem("song", karaokeState.song.id);
  });

  const handleSongChange = (selectedSongId) => {
    //assign the target value from the drop down as our selected song and update state
    setKaraokeState({
      ...karaokeState,
      guess: null,
      result: false,
      toggle: false,
      checked: false,
      song: songs[selectedSongId],
    });
  };

  const handleShowLyricsToggle = (checked) => {
    setKaraokeState({
      ...karaokeState,
      checked: checked,
      toggle: !karaokeState.toggle,
    });
  };

  const checkNextLyricGuess = () => {
    //if the guess state matches the stored value for the next line in the song,
    //set result case to correct!
    if (
      karaokeState.guess.toLowerCase() ===
      karaokeState.song.nextLine.toLowerCase()
    ) {
      setKaraokeState({
        ...karaokeState,
        result: "Correct",
      });
    } else {
      setKaraokeState({
        ...karaokeState,
        result: "Incorrect",
      });
    }
  };

  return {
    karaokeState,
    handleSongChange,
    checkNextLyricGuess,
    setKaraokeState,
    handleShowLyricsToggle,
  };
}
