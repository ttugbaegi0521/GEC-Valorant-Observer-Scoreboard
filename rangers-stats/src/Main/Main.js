import React, { useState } from 'react';
import style from './Main.module.css';

const Main = () => {
    const [team1, setTeam1] = useState('Team 1');
    const [team2, setTeam2] = useState('Team 2');

    return (
        <div>
            <div className={style.leftBox}>
                <h1 className={style.teamName1}>{team1}</h1>
                <img src="https://via.placeholder.com/80" alt="team logo" className={style.logo1}/>
            </div>

            <div className={style.rightBox}>
                <img src="https://via.placeholder.com/80" alt="team logo" className={style.logo2}/>
                <h1 className={style.teamName2}>{team2}</h1>
            </div>



            <div className={style.editContainer}>
                <input type="text" value={team1} onChange={(e) => setTeam1(e.target.value)} />
                <input type="text" value={team2} onChange={(e) => setTeam2(e.target.value)} />
            </div>
        </div>
    );
};

export default Main;
