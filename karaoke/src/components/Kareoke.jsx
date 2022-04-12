import React, { useState } from "react";
import Video from "./Video"
import songs from "./Songs.jsx";
import './Kareoke.css'

//React Player library allows embedding of YouTube videos
import ReactPlayer from "react-player";
  
const Kareoke = () => {
  //first thing in array is always current state
  //second thing is function that allows you to update current state
  const [guess, setGuess] = useState('')
  const [songState, setSongState] = useState(songs[0])
  const [result, setResult] = useState('')
  
  

  const handleChange = (event) => {
      //reset the guess, answerbox, and show result when switching songs
      setResult('');
      setGuess('');
      document.getElementById("answerbox").style.display = "none";
      document.getElementById("customSwitch1").checked = false;
    
      //assign the target value from the drop down as our selected song
      const selectedSong = event.target.value;
    
      //loop through our song list and find a song title that matches our selection
      //if it is found, set the song state
      for (let song in songs) {
        if (songs[song].songTitle == selectedSong) {
          setSongState({
            ...songState,
            songTitle: songs[song].songTitle,
            artist: songs[song].artist,
            firstLine: songs[song].firstLine,
            nextLine: songs[song].nextLine,
            guessUrl: songs[song].guessUrl,
            answerUrl: songs[song].answerUrl
          });
        }
      }
    }

  const showLyrics = (event) => {
    let answerbox = document.getElementById("answerbox")
    //if the display is currently not showing and answerbox is true, then display the answer
    if (answerbox.style.display === "none") {
      answerbox.style.display = "block";
    } else {
      answerbox.style.display = "none";
    }
  };
  
  const checkGuess = (event) => {
    event.preventDefault()
    
    //if the guess state matches the stored value for the next line in the current song state, set result case to correct!
    if (guess.toLowerCase() === songState.nextLine.toLowerCase()) {
      setResult("Correct!");
    } else {
      setResult("Incorrect");
    }
  };



  return (
    <>
      < h1>Holiday Kareoke</h1>

      {/* Kareoke selector */}
      <select className="form-control mt-4" onChange={handleChange}>
        {songs.map(song => (
          <option key={song.id} value={song.songTitle}>
            {song.songTitle}
          </option>
        ))}
      </select>

      {/* Music Video hint */}
      <Video 
      song={songState} 
      lyric={songState.firstLine}
      />


      {/* Guessing box */}
      <form onSubmit={checkGuess}>
      <section className="form-group mt-3">
        <label>Guess the next lyric!</label>
        <input
          id="guess"
          name="guess"
          type="text"
          className="form-control"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        ></input>
      </section>
      <button
        type="submit"
        className="btn btn-danger active"
      >
        Guess!
      </button>
      </form>

      <section id="results">
        <p id="result">{result}</p>

        <section className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            onChange={() =>
              document.getElementById("customSwitch1").checked
                ? (document.getElementById("answerbox").style.display = "block")
                : (document.getElementById("answerbox").style.display = "none")
            }
          />
          <label className="custom-control-label" htmlFor="customSwitch1">
            Show me the lyrics!
          </label>
        </section>
      </section>

      {/* Music Video answer */}

      <section id="answerbox" className="card w-100 text-center mt-5 lyric-card">
        <ReactPlayer
          className="card-img-top w-100"
          id="video"
          url={songState.answerUrl}
        />
        <p className="card-text my-3 px-3">
          {" "}
          ... <strong>{songState.nextLine}</strong> 🎵🎶
        </p>
      </section>
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

//Next steps I could take:
// - improve accuracy by stripping punctuation for answer check
// - add a point system and score tracking
// - create a backend song generator that could scrape songs & randomly select a first line & next line to make the library bigger 
// - form component with objects as props or states
