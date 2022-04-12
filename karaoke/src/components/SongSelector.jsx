import React from 'react';
import songs from './Songs'

function SongSelector(props) {
  const {handleChange} = props

  return (
    <div>
        <select className="form-control mt-4" onChange={handleChange}>
        {songs.map(song => (
          <option key={song.id} value={song.songTitle}>
            {song.songTitle}
          </option>
        ))}
      </select>
    </div>
  )

}


export default SongSelector;
