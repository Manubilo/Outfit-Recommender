import React from 'react';

const MoodCard = ({ moodName }) => {
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
        <button className="p-1 border-none rounded-md  bg-red-500 text-white ">
          Delete
        </button>
      </div>
    </div>
  );
};

export default MoodCard;
