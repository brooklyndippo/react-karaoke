import React, { useEffect, useState } from "react";
import Video from "./Video"
import GuessForm from "./GuessForm"
import SongSelector from "./SongSelector";
//import Results from "./Results";
import songs from "./Songs.jsx";
import './Kareoke.css'

  
const Kareoke = () => {
  //first thing in array is always current state
  //second thing is function that allows you to update current state
  const [guess, setGuess] = useState('')
  const [songState, setSongState] = useState(
    songs[window.localStorage.getItem('song')] || songs[0]
  )


  //get the result 
  function getResult(event) {
    //if (event) {
      //event.preventDefault();
      if (guess.toLowerCase() === songState.nextLine.toLowerCase()) {
        console.log('CORRECT')
        return "Correct!";
      } else if (guess.length > 1) {
        console.log(' Submit - INCORRECT')
        console.log(songState.nextLine.toLowerCase())
        return "Incorrect";
      } else {
        return ''
      }
      // } else {
      // return "RESULT GOES HERE"
    };

  //get checked
  function getChecked() {
    const checkbox = document.getElementById('toggle-checkbox');
    if (checkbox === null) {
      return false;
    } else {
      return checkbox.checked
    }
  }


  const result = getResult();
  let checked = getChecked() || false;
  let toggle = getToggle(checked);

  //get the toggle 
  function getToggle(checked) {
    if (checked === true) {
      console.log('TOGGLE ON')
      return true;
    } else {
      console.log ('TOGGLE OFF')
      return false;
    }
  };

  

  const handleChange = (event) => {
      setGuess('');
      const selectedSongId = parseInt(event.target.value);
      setSongState(songs[selectedSongId]);  
    }
  

  //create a display that only shows if the box is checked

  const toggleDisplay = React.useMemo(() => {return getToggle(checked) ? 
  <Video 
  song={songState} 
  firstLine="false"
  /> : null}, [checked, songState])
  
 console.log(toggleDisplay)
  //useEffect 

  useEffect(() => {
    window.localStorage.setItem('song', songState.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      checkGuess={getResult} 
      guess={guess} 
      setGuess={setGuess}
      />


      {/* Results */}
      {/* <Results
      result={result}
      checked={checked}
      toggle={toggle}
      setChecked={setChecked}
      setToggle={setToggle}
      /> */}
      <section id="results">
      <p id="result">{result}</p>

      <section className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id="toggle-checkbox"
        onChange={() => {
          checked = getChecked()
          toggle = getToggle(checked)
        }
        }
      />
      <label className="custom-control-label" htmlFor="toggle-checkbox">
        Show me the lyrics!
      </label>

    </section>
    </section>

      {/* Music Video Answer */}

      { toggleDisplay }

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
