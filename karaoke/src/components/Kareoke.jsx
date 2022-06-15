import React, { useState, useEffect } from "react";
import Video from "./Video"
import GuessForm from "./GuessForm"
import SongSelector from "./SongSelector";
import Results from "./Results";
import songs from "./Songs.jsx";
import './Kareoke.css'

  
const Kareoke = () => {
  //first thing in array is always current state
  //second thing is function that allows you to update current state
  const [appState, setAppState] = useState({
    guess: '',
    song: songs[window.localStorage.getItem('song')] || songs[0], 
    result: null, // Result could be a Boolean and Results handles the different strings
    toggle: false, // Rename for something that is more connected with the UI functionality
    checked: false
  });


  const handleChange = (event) => {
      //reset the guess, answerbox, and show result when switching songs
      setAppState({
        ...appState,
        guess: false,
        result: false,
        toggle: false,
        checked: false
      })

      //assign the target value from the drop down as our selected song and update state
      const selectedSongId = parseInt(event.target.value);
      setAppState({
        ...appState,
        song: songs[selectedSongId]
      })
    }

  const checkGuess = (event) => {
    event.preventDefault()
    
    //if the guess state matches the stored value for the next line in the current song state, set result case to correct!
    if (appState.guess.toLowerCase() === appState.song.nextLine.toLowerCase()) {
      setAppState({
        ...appState,
        result: 'Correct'
      });
    } else {
      setAppState({
        ...appState,
        result: 'Incorrect'
      });
    }
  };

  //create a display that only shows if the box is checked
  const toggleDisplay = appState.toggle ? <Video 
    song={appState.song} 
    firstLine="false"
    /> : null

  //useEffect 

  useEffect(() => {
    window.localStorage.setItem('song', appState.song.id)
  })

  return (
    <>
      <h1>Holiday Kareoke</h1>

      {/* Kareoke selector */}
      <SongSelector 
      appState={appState}
      handleChange={handleChange}
      />

      {/* Music Video hint */}
      <Video 
      song={appState.song} 
      firstLine="true"
      />

      {/* Guessing box */}
      <GuessForm 
      checkGuess={checkGuess} 
      appState={appState}
      setAppState={setAppState}
      />


      {/* Results */}
      <Results
      appState={appState}
      setAppState={setAppState}
      />

      {/* Music Video Answer */}
      {toggleDisplay}

    </>  
  );
}

export default Kareoke;

//Core objectives:
// - demonstrate proficiency in DOM & event listeners
// - practice using react hook setState

//Where I went above & beyond:
// - integrating YouTube videos
// - creating a toggle to show the answer
// - designing a cohesive theme around the task
// - form component with objects as props or states

//Next steps I could take:
// - improve accuracy by stripping punctuation for answer check
// - add a point system and score tracking
// - create a backend song generator that could scrape songs & randomly select a first line & next line to make the library bigger 
