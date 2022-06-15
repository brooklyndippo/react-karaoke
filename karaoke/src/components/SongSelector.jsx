import React from 'react';
import songs from './Songs'

function SongSelector({currentSong, handleChange}) {

  const onChange = (event) => {
    const selectedSongId = parseInt(event.target.value);
    handleChange(selectedSongId);
  }

  return (
    <div>
        <select className="form-control mt-4" onChange={onChange}>
        {songs.map(song => (
         song.id === currentSong.id ? 
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
