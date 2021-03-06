import axios from 'axios';
import React from 'react';

import Moods from './Moods';

const MoodCard = ({ moodName, idMood }) => {
  const deleteMood = async (idMood) => {
    console.log('im on delete', idMood);

    axios
      .delete('http://localhost:5000/mood/delete', { data: { id: idMood } })
      .then((res) => console.log(res));
  };

  return (
    <div className="w-full p-4 border-2 max-w-sm flex items-center justify-around">
      {/* Mood Name */}
      <div>{moodName}</div>
      {/* Delete */}
      <div>
        {' '}
        <button className="p-1 mx-2 border-none rounded-md  bg-green-500 text-white ">
          Editar
        </button>
        <button
          onClick={() => deleteMood(idMood)}
          className="p-1 border-none rounded-md  bg-red-500 text-white "
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MoodCard;
