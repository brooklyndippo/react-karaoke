import React from "react";

function ShowLyrics({ appState, setAppState}) {
  return (
    <section className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customSwitch1"
        checked={appState.checked}
        onChange={(e) => {
          setAppState({
            ...appState,
            checked: e.target.checked,
            toggle: !appState.toggle,
          });
        }}
      />
      <label className="custom-control-label" htmlFor="customSwitch1">
        Show me the lyrics!
      </label>
    </section>
  );
}


export default ShowLyrics;
