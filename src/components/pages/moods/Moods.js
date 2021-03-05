import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MoodCard from './MoodCard';

const Moods = () => {
  const [mood, setMood] = useState('');
  const [moodsList, setMoodsList] = useState([]);

  const listNewMoods = () => {
    console.log('listing new moods');
    listMoods().then((data) => setMoodsList(data));
  };

  const listMoods = async () => {
    return axios
      .get('http://localhost:5000/mood/list', { params: { id: 1 } })
      .then((data) => data.data.body.moods);
  };

  useEffect(() => {
    listMoods().then((data) => setMoodsList(data));
  }, []);

  const onChange = (e) => {
    const newMood = e.target.value;
    setMood(newMood);
  };

  const createMood = async () => {
    const config = {
      'Content-Type': 'application/json',
    };

    const body = {
      id: 1,
      moodName: mood,
    };

    axios
      .post('http://localhost:5000/mood/create', body, config)
      .then(() => setMood(''));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createMood().then(() => listNewMoods());
  };

  return (
    <div className="m-10">
      {/* Title and button */}
      <div className="flex items-center max-w-lg justify-around">
        <div>
          <h1 className="font-medium uppercase text-xl">moods</h1>
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
            Nuevo Mood
          </button>
        </form>
      </div>
      {/* Search bar */}
      <div></div>
      {/* Cards */}
      <div className="grid grid-cols-3 m-10 justify-evenly gap-10">
        {moodsList
          ? moodsList.map((mood) => (
              <MoodCard key={mood.id_mood} moodName={mood.mood_name} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Moods;
