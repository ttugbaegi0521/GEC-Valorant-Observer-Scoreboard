import React from 'react';
import style from './Main.module.css';

const Main = () => {
    return (
        <div>
            {/* <svg
                className={style.trapezoidRotate}
                width="100"
                height="50"
                xmlns="http://www.w3.org/2000/svg"
            >
                <polygon points="20,0 80,0 100,50 0,50" fill="black" />
            </svg> */}
            <div className="relative flex justify-between p-2 bg-white shadow-md rounded-lg">
                <div className="flex items-center gap-2 ml-16">
                    <div className="flex flex-col items-end mr-4">
                        <h2 className="text-lg font-bold">Team 1</h2>
                        <h3 className="text-lg font-bold">Score: 10</h3>
                    </div>
                    <img
                        alt="Team 1 Logo"
                        className="rounded-full"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "40/40",
                            objectFit: "cover",
                        }}
                        width="40"
                    />
                </div>

                <div className="flex items-center gap-2 mr-16">
                    <img
                        alt="Team 2 Logo"
                        className="rounded-full"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "40/40",
                            objectFit: "cover",
                        }}
                        width="40"
                    />
                    <div className="ml-4">
                        <h2 className="text-lg font-bold">Team 2</h2>
                        <h3 className="text-lg font-bold">Score: 10</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
