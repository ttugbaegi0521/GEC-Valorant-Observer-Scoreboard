import React, { useState } from 'react';
import style from './Main.module.css';

const Main = () => {
    const [team1, setTeam1] = useState({
        name: 'Team 1',
        logo: 'https://via.placeholder.com/80'
    });

    const [team2, setTeam2] = useState({
        name: 'Team 2',
        logo: 'https://via.placeholder.com/80'
    });

    const [gameScore, setGameScore] = useState([0, 0]);

    const logoList = {
        "VRX": "https://lh3.googleusercontent.com/d/1j4VRh8pTvlpIRHM6Tv6s87Bwdf9wPAVo=s80",
        "KAG": "https://lh3.googleusercontent.com/d/1IjcO8Ga-YAlEt7RzHN5z_3Yhx2UyzwuC=s80",
        "PRG": "https://lh3.googleusercontent.com/d/1_ae3EuYbdltCvbgZhhYdAyR6pO-PCti_=s80",
        "GSS": "https://lh3.googleusercontent.com/d/1rynAMEWkPKtPJ3BFo3XyWBNTnsvM3D70=s80"
    }


    return (
        <div>
            <div className={style.leftBox}>
                <h1 className={style.teamName1 + " " + style.leftItem}>{team1.name}</h1>
                <img src={team1.logo} alt="team logo" className={style.logo1 + " " + style.leftItem} />
                <h1 className={style.leftItem}>{gameScore[0]}</h1>
            </div>

            <div className={style.rightBox}>
                <h1 className={style.rightItem}>{gameScore[1]}</h1>
                <img src={team2.logo} alt="team logo" className={style.logo2 + " " + style.rightItem} />
                <h1 className={style.teamName2 + " " + style.rightItem}>{team2.name}</h1>
            </div>



            <div className={style.editContainer}>
                <div className={style.editTeam}>
                    <h1>Team1</h1>
                    {
                        Object.keys(logoList).map((key) => {
                            return (
                                <div key={key}>
                                    <div key={key} className={style.editBox} onClick={
                                        () => {
                                            setTeam1({ name: key, logo: logoList[key] });
                                        }

                                    }>
                                        <img key={key + "_img"} src={logoList[key]} alt="team logo" className={style.logo} />
                                        <h3 key={key + "_name"}>{key}</h3>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>

                <div className={style.editTeam}>
                    <h1>Team2</h1>
                    {
                        Object.keys(logoList).map((key) => {
                            return (
                                <div key={key}>
                                    <div key={key} className={style.editBox} onClick={
                                        () => {
                                            setTeam2({ name: key, logo: logoList[key] });
                                        }

                                    }>
                                        <img key={key + "_img"} src={logoList[key]} alt="team logo" className={style.logo} />
                                        <h3 key={key + "_name"}>{key}</h3>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>


        </div>
    );
};

export default Main;
