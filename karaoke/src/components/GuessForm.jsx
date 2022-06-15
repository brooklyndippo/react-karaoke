import React from "react";

function GuessForm({ checkGuess, appState, setAppState }) {

  //only update state when form is submitted

  const onSubmit = (event) => {
    event.preventDefault();
    checkGuess()
  }

  return (
    <form onSubmit={onSubmit}>
      <section className="form-group mt-3">
        <label>Guess the next lyric!</label>
        <input
          id="guess"
          name="guess"
          type="text"
          className="form-control"
          value={appState.guess}
          onChange={(e) =>
            setAppState({
              ...appState, 
              guess: e.target.value,
            })
          }
        ></input>
      </section>
      <button type="submit" className="btn btn-danger active">
        Guess!
      </button>
    </form>
  );
}

export default GuessForm;
