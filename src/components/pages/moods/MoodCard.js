import axios from 'axios';
import React, { useContext } from 'react';
import MoodsContext from '../../../context/moods/moodsContext';

const MoodCard = ({ moodName, idMood }) => {
  const moodsContext = useContext(MoodsContext);
  const { deleteMood } = moodsContext;

  return (
    <div className="w-full p-4 border-2 max-w-sm flex items-center justify-around">
      {/* Mood Name */}
      <div>{moodName}</div>
      {/* Delete */}
      <div>
        {' '}
        <button className="p-1 mx-2 border-none rounded-md  bg-green-500 text-white ">
          Edit
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
