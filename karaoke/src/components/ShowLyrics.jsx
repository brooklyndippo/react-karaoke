import React from "react";

function ShowLyrics({ checked, handleShowLyricsToggle}) {
  return (
    <section className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customSwitch1"
        checked={checked}
        onChange={(e) => {
          handleShowLyricsToggle(e.target.checked)
        }}
      />
      <label className="custom-control-label" htmlFor="customSwitch1">
        Show me the lyrics!
      </label>
    </section>
  );
}


export default ShowLyrics;
