import React from 'react';

function Results(props) {
  const {appState, setAppState} = props
  const { guess, song, result, toggle, checked } = appState;

  return (
    <section id="results">
    <p id="result">{result}</p>

    <section className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customSwitch1"
        checked = {checked}
        onChange={(e) => {
          setAppState({
            ...appState,
            checked: e.target.checked,
            toggle: !appState.toggle
          });
        }
        }

      />
      <label className="custom-control-label" htmlFor="customSwitch1">
        Show me the lyrics!
      </label>
    </section>
  </section>
  )

}


export default Results;
