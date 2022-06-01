import React from 'react';
import songs from './Songs'

function SongSelector(props) {
  const {songState, handleChange} = props

  return (
    <div>
        <select className="form-control mt-4" onChange={handleChange}>
        {songs.map(song => (
         song.id === songState.id ? 
            <option key={song.id} value={song.id} selected>
              {song.songTitle}
            </option>
          : 
            <option key={song.id} value={song.id}>
            {song.songTitle}
          </option>
        ))}
      </select>
    </div>
  )

}


export default SongSelector;
