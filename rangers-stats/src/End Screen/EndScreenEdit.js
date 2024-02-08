import React from 'react';
import style from './EndScreenEdit.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTeam } from './EndScreen';

const EndScreenEdit = () => {
  const dispatch = useDispatch();
    const team = useSelector((state) => state.team);

  function handleChange(e) {
    const teamName = e.target.value;
    dispatch(addTeam(teamName));
    console.log(team);
  }

  return (
    <div className={style.container}>
      <h2>Edit Page</h2>
      <input type="text" placeholder="Enter team name" onChange={handleChange} />
    </div>
  );
};

export default EndScreenEdit;
