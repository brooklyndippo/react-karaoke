import React from 'react';
import songs from './Songs'

function Results(props) {
  const {result, checked, toggle, setChecked, setToggle} = props

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
          setChecked(e.target.checked);
          setToggle(!toggle);
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
