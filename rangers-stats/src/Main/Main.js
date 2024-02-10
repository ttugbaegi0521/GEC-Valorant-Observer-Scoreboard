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
    const [agent1, setAgent1] = useState([]);
    const [agent2, setAgent2] = useState([]);

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

    function importAll(r) {
        let images = {};
         r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
       }
    const images = importAll(require.context('../Agent', false, /\.(png|jpe?g|webp)$/));
    
      return (
        <div className={style.container}>
            <div className={style.leftBox}>
                <div className={style.agentContainer1}>
                    {
                        agent1.map((agent, index) => {
                            return (
                                <img key={index} src={images[agent]} alt="agent" className={style.agent} />
                            )
                        })
                    }
                </div>
                <div className={style.vl1}></div>
                <h1 className={style.teamName1 + " " + style.leftItem}>{team1.name}</h1>
                <img src={team1.logo} alt="team logo" className={style.logo1 + " " + style.leftItem} />
                <div className={style.scoreBox}>
                    <h1 className={style.leftItem + " " + style.score}>{gameScore[0]}</h1>
                    {setScore1()}
                </div>

                
            </div>

            <div className={style.rightBox}>
                <div className={style.scoreBox}>
                    <h1 className={style.leftItem + " " + style.score}>{gameScore[1]}</h1>
                    {setScore2()}
                </div>

                <img src={team2.logo} alt="team logo" className={style.logo2 + " " + style.rightItem} />
                <h1 className={style.teamName2 + " " + style.rightItem}>{team2.name}</h1>
                <div className={style.vl2}></div>
                <div className={style.agentContainer2}>
                    {
                        agent2.map((agent, index) => {
                            return (
                                <img key={index} src={images[agent]} alt="agent" className={style.agent} />
                            )
                        })
                    }
                </div>
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
                                            setTeam1({ name: key, logo: logoList[key], setScore: team1.setScore });
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
                                            setTeam2({ name: key, logo: logoList[key], setScore: team2.setScore });
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
                <div className={style.agentDiv}>
                    <div>
                        <div className={style.editAgent}>
                        <h1>Agent1</h1>
                            {
                                Object.keys(images).map((key) => {
                                    return (
                                        <div key={key}>
                                            <div key={key} className={style.editBox} onClick={
                                                () => {
                                                    let temp = [];
                                                    //if agent2 already has the 5 agents, remove the first agent and add the new one
                                                    if (agent1.length === 5) {
                                                        temp = agent1.slice(1);
                                                        temp.push(key);
                                                        setAgent1(temp);
                                                    }
                                                    else {
                                                        temp = agent1.slice();
                                                        temp.push(key);
                                                        setAgent1(temp);
                                                    }
                                                    console.log(agent1);
                                                }

                                            }>
                                                <img key={key + "_img"} src={images[key]} alt="team logo" className={style.agentLogo} draggable={false}/>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }

                        </div>
                    </div>
                    <div>
                        <div className={style.editAgent}>
                        <h1>Agent2</h1>
                            {
                                Object.keys(images).map((key) => {
                                    return (
                                        <div key={key}>
                                            <div key={key} className={style.editBox} onClick={
                                                () => {
                                                    let temp = [];
                                                    //if agent2 already has the 5 agents, remove the last agent and add the new one
                                                    if (agent2.length === 5) {
                                                        temp = agent2.slice(0, 4);
                                                        temp.unshift(key);
                                                        setAgent2(temp);
                                                    }
                                                    else {
                                                        temp = agent2.slice();
                                                        temp.push(key);
                                                        setAgent2(temp);
                                                    }
                                                    console.log(agent2);
                                                }

                                            }>
                                                <img key={key + "_img"} src={images[key]} alt="team logo" className={style.logo} />
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }

                        </div>
                    </div>
                </div>
                
                <div className={style.scoreDiv}>
                    <div>
                        <div>
                        <button onClick={() => {
                            setGameScore([gameScore[0] + 1, gameScore[1]]);
                            if (gameScore[0] + 1 > 13) {
                                setGameScore([0, 0]);
                            }
                        }}>Team1 Score +1</button>

                        <button onClick={() => {
                            setGameScore([gameScore[0], gameScore[1] + 1]);
                            if (gameScore[1] + 1 > 13) {
                                setGameScore([0, 0]);
                            }
                        }}>Team2 Score +1</button>
                        </div>
                        <div>
                        <button onClick={() => {
                            let game2 = gameScore[1];
                            setGameScore([gameScore[0] - 1, game2]);
                            if (gameScore[0] - 1 < 0) {
                                setGameScore([0, 0]);
                            }
                        }}>Team1 Score -1</button>

                        <button onClick={() => {
                            let game1 = gameScore[0];
                            setGameScore([game1, gameScore[1] - 1]);
                            if (gameScore[1] - 1 < 0) {
                                setGameScore([0, 0]);
                            }
                        }}>Team2 Score -1</button>
                        </div>
                        <button onClick={() => {
                            setGameScore([0, 0]);
                        }}>Reset game</button>

                    </div>
                    
                

                    <div>
                        {/* setscore */}
                        <button onClick={() => {
                            setTeam1({ name: team1.name, logo: team1.logo, setScore: team1.setScore + 1 });
                            //if gets more than 3, reset
                            if (team1.setScore + 1 > 3) {
                                setTeam1({ name: team1.name, logo: team1.logo, setScore: 0 });
                                setTeam2({ name: team2.name, logo: team2.logo, setScore: 0 });
                            }
                        }}>Set Score Team1</button>

                        <button onClick={() => {
                            setTeam2({ name: team2.name, logo: team2.logo, setScore: team2.setScore + 1 });
                            if (team2.setScore + 1 > 3) {
                                setTeam1({ name: team1.name, logo: team1.logo, setScore: 0 });
                                setTeam2({ name: team2.name, logo: team2.logo, setScore: 0 });
                            }
                        }
                        }>Set Score Team2</button>

                        <button onClick={() => {
                            setTeam2({ name: team2.name, logo: team2.logo, setScore: 0});
                            setTeam1({ name: team1.name, logo: team1.logo, setScore: 0});
                        }}>Reset set</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Main;
