import React, { useState } from "react";
import style from './MapBan.module.css';

const MapBan = () => {
    const [mapBan, setMapBan] = useState([
        "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder"
    ]);

    const [teams, setTeams] = useState([]);

    const maps = {
        "Split" : "https://i.namu.wiki/i/G1Dk0-z6fuMMxzSlEvQ5E5o9M_-hFVdJmOm0dniVIEdpE8wYVh7ctibFimGKi429CTVxkcjARsxqf6sFGxSA0Zyb9bJ250AWnGk7PqW03W19u7b9GcAYUedcc0Tmso3nM3dN97IY6BqttC0gc0IcsA.webp",
        "Bind" : "https://i.namu.wiki/i/AoGikHoGjsRzBeN4FTUBspKo-B4oMUwsNLR_5bcZlp4jD-E6kJIf-m7-4Xegu_5WdqjRIoVTw5zRS-KfZgdQ-UKDI1G0wMvGPVBhwZwF6JGWHEB4_X25gB_ntMi-YYM3cKMy-dxJHRpE60J8JPuHjg.webp",
        "Haven" : "https://i.namu.wiki/i/6incqgblafdKiEp1d9PD-1aC1zlDDhBkumEUGoTa8SKJPie4agUtvzH7EiVg7gL4MjJCwinFK0suTUWFs_sF0py5fvTaenXbqvRxX4HzoJJBecKhJp9bg60FBkZw0tmTdovXj6-gr_U3qWvJI80WDA.webp",
        "Ascent" : "https://i.namu.wiki/i/YBq1UD4yp8EiBe0yNOS21vin6R-OQlY1B0KhdzlK1BUjtcK2eQC4H5h1V3ULdV5_MfaGtTyOyIbRaG1M2IoTEDU6rfr9J6_ljHG8P6Uw8ByHvL8GWpip8YZfoFsSooXQmQWumEUlbOMqFIfGEwmISA.webp",
        "Icebox" : 'https://i.namu.wiki/i/oQxjTHUVeTeeB8d-TuiqQkme33aB39VsX5YpWMNHu2as8sH4b1gwASOR-utdR-9Xl-WXq5_4_IciCth6RmluP3NLY1ZOPH1aIAPSgRaDshrL48lpOGjziIiJU_q1byxXAzNi7j2__pkhphqv2fe0jg.webp',
        "Breeze" : "https://i.namu.wiki/i/HUlWSwYj5gyHwWaeANhW9xUcr5l7SR1lWlcUpp0DyEMGdKqD4sTaopPWJCROlPoVcSWxNkC7hOBNSof8Lr6OL6SMoPGTA5LoBMhfBjsRan5xpSU-jH6j64Mgw9ZqGXYiaMq-frAXWqeJiiyQ4z_iKg.webp",
        "Fracture":  "https://i.namu.wiki/i/vSE-QqVxfEqnenB7d-hmfexBm961tJK9Z0236D9h9xprrdmj7qAkKow59q3OyWSm79Ql3YNOr0R4UbWffX0Iz0mfu_p84hcXvs6___GdJ5h8UXbGsFalJFBFjqBw8oZBKV-jEzFsuuWipMBlVB9E_Q.webp",
        "Pearl" : "https://i.namu.wiki/i/Cp77W60XVT3cOgRrIiyySiDACCpeUHd29NGXdMN7U37wWFMcZaZ1DHkO7gE7WeZ4G9j3ayKw42aeDZrB-mL7tlP2k14JlN_INkE6R8TcZAQ6mu-VQ6jV80UOcj5Ze_qt2-QEUOgprhthidSoKlTNTw.webp",
        "Lotus" : "https://i.namu.wiki/i/BC_qlOQ8ov4qY4Pblku_5UvRurnV2YeNt9-cJFcf5H5FYzwen9mjZD3k9F0HBHeNgOOrP_QYbqTehcfSzFikP9g-XR9YKm4W81j-grWwO2iJjmqMbXbBZV48UC1hfsFFNyMpNMuCZ_l-OC3_1ECpKA.webp",
        "Sunset" : "https://i.namu.wiki/i/3zyefve6BVT_WQ6JBozy1Cy9bnTD_wxFj7sBVjou5G87RMKEdgj2hbd5uoFxnRmymukDw8AzsOQpWD1vE5tiydIVRvejVbaKFYgMZ_MPx8gdDXk2ZTNq7AlW3n_u0i7i5CKndIlkCxanPfzKvfKkhQ.webp",
        "Placeholder" : "https://lh3.googleusercontent.com/d/1e8TxjC96ZqI_3dpq6bCLeJ5LMtWubY9L"
    }

    const teamList = [
        "VRX", "KAG", "PRG", "GSS"  
    ]
    Array.prototype.insert = function ( index, ...items ) {
        this.splice( index, 0, ...items );
    };


    function handleImage(e) {
        e.target.src = "https://lh3.googleusercontent.com/d/1e8TxjC96ZqI_3dpq6bCLeJ5LMtWubY9L";
    }
 
    return (
        <div className={style.container}>
            <div className={style.banSelected}>
                <div>
                    <h1 className={style.ban}>Map Ban</h1>
                    <img className={style.banMap} src={maps[mapBan[0]] || maps["Placeholder"]} alt="placeholder" draggable={false} />
                    <h1>{teams[0]}</h1>
                </div>

                <div>
                    <h1 className={style.ban}>Map Ban</h1>
                    <img className={style.banMap} src={maps[mapBan[1]] || maps["Placeholder"]} alt="placeholder" draggable={false} />
                    <h1>{teams[1]}</h1>
                </div>
                
                <div>
                    <h1 className={style.pick}>Map Pick</h1>
                    <img className={style.banMap} src={maps[mapBan[2]] || maps["Placeholder"]} alt="placeholder" draggable={false} />
                    <h1>{teams[2]}</h1>
                </div>

                <div>
                    <h1 className={style.pick}>Map Pick</h1>
                    <img className={style.banMap} src={maps[mapBan[3]] || maps["Placeholder"]} alt="placeholder" draggable={false}/>
                    <h1>{teams[3]}</h1>
                </div>

                <div>
                    <h1 className={style.ban}>Map Ban</h1>
                    <img className={style.banMap} src={maps[mapBan[4]] || maps["Placeholder"]} alt="placeholder" draggable={false} />
                    <h1>{teams[4]}</h1>
                </div>

                <div>
                    <h1 className={style.ban}>Map Ban</h1>
                    <img className={style.banMap} src={maps[mapBan[5]] || maps["Placeholder"]} alt="placeholder" draggable={false} />
                    <h1>{teams[5]}</h1>
                </div>

                <div>
                    <h1 className={style.pick}>Map Pick</h1>
                    <img className={style.banMap} src={maps[mapBan[6]] || maps["Placeholder"]} alt="placeholder" draggable={false} />
                    <h1>{teams[6]}</h1>
                </div>
                
            </div>

            <div className={style.banEdit}>
                {
                    Object.keys(maps).map((map, index) => {
                        return (
                            <div key={index} className={style.mapBan}>
                                <img draggable={false}className={style.banMap} src={maps[map]} alt={map} onClick={() => 
                                {
                                    let temp = [];
                                    if (mapBan.length === 7) {
                                        temp = mapBan.slice(7);

                                        temp.push(map);
                                        setMapBan(temp);
                                        console.log(mapBan);
                                    }
                                    else {
                                        for(let i=0; i<mapBan.length; i++)
                                            temp.push(mapBan[i]);

                                        temp.push(map);
                                        // for(let i = 0; i < 7-temp.length; i++)
                                        //     temp.push("Placeholder");
                                        setMapBan(temp);
                                        console.log(mapBan);
                                    }

                                    


                                    
                                }
                                } />
                            </div>
                        );
                    })
                }

                <div>
                    <button onClick={() => setMapBan(["Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder"])}>Map Reset</button>
                </div>

                <div className={style.teamBaning}>
                {
                        // const [team, setTeam] = useState([""]);

                    teamList.map((team, index) => {
                        return (
                            <div key={index} className={style.teamBan}>
                                <h1 onClick={() => 
                                {
                                    
                                    let temp = [];
                                    if (teams.length === 7) {
                                        temp = teams.slice(7);

                                        // temp.insert(0, team);
                                        temp.push(team);
                                        setTeams(temp);
                                    }
                                    else {
                                        for(let i = 0; i < teams.length; i++)
                                            temp.push(teams[i]);
                                        temp.push(team);

                                        // temp = teams;
                                        setTeams(temp);
                                    }

                                    console.log(teams);
                                    
                                }
                                }>{team}</h1>
                            </div>
                        );
                    })
                }
                </div>  
            <button onClick={() => window.location.reload()}>Team reset</button>
            </div>

        </div>
    );
}

export default MapBan;