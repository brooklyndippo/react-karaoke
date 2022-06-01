import React, { useEffect, useState } from "react";
import Video from "./Video"
import GuessForm from "./GuessForm"
import SongSelector from "./SongSelector";
import Results from "./Results";
import songs from "./Songs.jsx";
import './Kareoke.css'

  
const Kareoke = () => {
  //first thing in array is always current state
  //second thing is function that allows you to update current state
  const [guess, setGuess] = useState('')
  const [songState, setSongState] = useState(
    songs[window.localStorage.getItem('song')] || songs[0]
    )
  const [result, setResult] = useState('')
  const [toggle, setToggle] = useState(false);
  const [checked, setChecked] = useState(false);
  

  const handleChange = (event) => {
      //reset the guess, answerbox, and show result when switching songs
      setResult('');
      setGuess('');
      setToggle(false);
      setChecked(false);
    
      //assign the target value from the drop down as our selected song and update state
      const selectedSongId = parseInt(event.target.value);
      setSongState(songs[selectedSongId]);  
    }
  
  const checkGuess = (event) => {
    event.preventDefault()
    
    //if the guess state matches the stored value for the next line in the current song state, set result case to correct!
    if (guess.toLowerCase() === songState.nextLine.toLowerCase()) {
      setResult("Correct!");
    } else {
      setResult("Incorrect");
    }
  };

  //create a display that only shows if the box is checked
  const toggleDisplay = toggle ? <Video 
    song={songState} 
    firstLine="false"
    /> : null

  //useEffect 

  useEffect(() => {
    window.localStorage.setItem('song', songState.id)
  })

  return (
    <>
      <h1>Holiday Kareoke</h1>

      {/* Kareoke selector */}
      <SongSelector 
      songState={songState} 
      handleChange={handleChange}
      />

      {/* Music Video hint */}
      <Video 
      song={songState} 
      firstLine="true"
      />

      {/* Guessing box */}
      <GuessForm 
      checkGuess={checkGuess} 
      guess={guess} 
      setGuess={setGuess}
      />


      {/* Results */}
      <Results
      result={result}
      checked={checked}
      toggle={toggle}
      setChecked={setChecked}
      setToggle={setToggle}
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
