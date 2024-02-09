import React, { useState } from 'react';
import style from './Main.module.css';

const Main = () => {
    const [team1, setTeam1] = useState({
        name: 'Team 1',
        logo: 'https://via.placeholder.com/80',
        setScore: 2
    });

    const [team2, setTeam2] = useState({
        name: 'Team 2',
        logo: 'https://via.placeholder.com/80',
        setScore: 1
    });

    const [gameScore, setGameScore] = useState([0, 0]);

    const logoList = {
        "VRX": "https://lh3.googleusercontent.com/d/1j4VRh8pTvlpIRHM6Tv6s87Bwdf9wPAVo=s80",
        "KAG": "https://lh3.googleusercontent.com/d/1IjcO8Ga-YAlEt7RzHN5z_3Yhx2UyzwuC=s80",
        "PRG": "https://lh3.googleusercontent.com/d/1_ae3EuYbdltCvbgZhhYdAyR6pO-PCti_=s80",
        "GSS": "https://lh3.googleusercontent.com/d/1rynAMEWkPKtPJ3BFo3XyWBNTnsvM3D70=s80"
    }

    //team1 as rgb(212, 212, 212) and team2 as rgb(27, 27, 27)
 

    const setScoreIcon = [
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="rgb(212, 212, 212)" d="m12 19l-7-7l7-7l7 7z"/></svg>, 
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="rgb(212, 212, 212)" d="m12 19l-7-7l7-7l7 7zm0-2.85L16.15 12L12 7.85L7.85 12zM12 12"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="rgb(27, 27, 27)" d="m12 19l-7-7l7-7l7 7z"/></svg>, 
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="rgb(27, 27, 27)" d="m12 19l-7-7l7-7l7 7zm0-2.85L16.15 12L12 7.85L7.85 12zM12 12"/></svg>,

    ]

    const setScore1 = () => {
        let setScoreList = [];
        for (let i = 0; i < team1.setScore; i++) {
            setScoreList.push(setScoreIcon[0]);
        }
        for (let i = 0; i < 3 - team1.setScore; i++) {
            console.log(i);
            setScoreList.push(setScoreIcon[1]);
        }
        return (
            <div className={style.setScoreBox}>
                {setScoreList.map((icon, index) => {
                    return (
                        <div key={index} className={style.setScoreItem}>{icon}</div>
                    )
                })}
            </div>
        );
    }

    const setScore2 = () => {
        let setScoreList = [];
        for (let i = 0; i < team2.setScore; i++) {
            setScoreList.push(setScoreIcon[2]);
        }
        for (let i = 0; i < 3 - team2.setScore; i++) {
            setScoreList.push(setScoreIcon[3]);
        }
        return (
            <div className={style.setScoreBox}>
                {setScoreList.map((icon, index) => {
                    return (
                        <div key={index} className={style.setScoreItem}>{icon}</div>
                    )
                })}
            </div>
        );
    }
    
    return (
        <div>
            <div className={style.leftBox}>
                <h1 className={style.teamName1 + " " + style.leftItem}>{team1.name}</h1>
                <img src={team1.logo} alt="team logo" className={style.logo1 + " " + style.leftItem} />
                <div className={style.scoreBox}>
                    <h1 className={style.leftItem + " " + style.score}>{gameScore[0]}</h1>
                    {setScore1()}
                </div>
            </div>

            <div className={style.rightBox}>
                <div className={style.scoreBox}>
                    {setScore2()}
                    <h1 className={style.rightItem + " " + style.score}>{gameScore[1]}</h1>
                </div>
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
