import React, { useState, useEffect, useContext } from 'react';
import MoodsContext from '../../../context/moods/moodsContext';
import MoodCard from './MoodCard';

const Moods = () => {
  const [mood, setMood] = useState('');

  const moodsContext = useContext(MoodsContext);

  const { listMoods, moodsList, createMood } = moodsContext;

  useEffect(() => {
    listMoods();
  }, []);

  const onChange = (e) => {
    const newMood = e.target.value;
    setMood(newMood);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createMood(mood);
    setMood('');
  };

  return (
    <div className="m-10">
      {/* Title and button */}
      <div className="flex items-center max-w justify-between">
        <div className="max-w-md">
          <h1 className="font-medium text-6xl">Moods</h1>
        </div>

        <form action="" onSubmit={onSubmit}>
          <input
            type="text"
            name="mood"
            value={mood}
            onChange={onChange}
            placeholder="Mood name"
            className="outline-none p-2 border  focus:border-red-400 mr-10"
          />
          <button className="p-2 border-none rounded-md bg-red-400 text-white">
            New Mood
          </button>
        </form>
      </div>
      {/* Search bar */}
      <div></div>
      {/* Cards */}
      <div className="grid grid-cols-3 m-10 justify-evenly gap-10">
        {moodsList
          ? moodsList.map((mood) => (
              <MoodCard
                key={mood.id_mood}
                moodName={mood.mood_name}
                idMood={mood.id_mood}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Moods;
