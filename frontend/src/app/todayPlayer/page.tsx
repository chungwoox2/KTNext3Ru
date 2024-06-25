// pages/pitch.tsx

import PlayerDashBoard from "@/components/PlayerDashBoard/PlayerDashBoard";
import TodayPlayerCon from "@/components/TodayPlayerCon/TodayPlayerCon";
import React from "react";

const TodayPlayer = () => {
  const players = [
    {
      name: "강건",
      imageUrl: "/images/pitcher/강건.jpg",
      number: "99",
      position: { top: "40%", left: "40%" },
      role: "SS",
    },
    {
      name: "고영표",
      imageUrl: "/images/pitcher/고영표.jpg",
      number: "1",
      position: { top: "40%", left: "55%" },
      role: "2B",
    },
    {
      name: "김건웅",
      imageUrl: "/images/pitcher/김건웅.jpg",
      number: "49",
      position: { top: "25%", left: "70%" },
      role: "RF",
    },
    {
      name: "김민",
      imageUrl: "/images/pitcher/김민.jpg",
      number: "11",
      position: { top: "20%", left: "47%" },
      role: "CF",
    },
    {
      name: "김민성",
      imageUrl: "/images/pitcher/김민성.jpg",
      number: "94",
      position: { top: "52%", left: "64%" },
      role: "1B",
    },
    {
      name: "김영현",
      imageUrl: "/images/pitcher/김영현.jpg",
      number: "48",
      position: { top: "25%", left: "25%" },
      role: "LF",
    },
    {
      name: "문용익",
      imageUrl: "/images/pitcher/문용익.jpg",
      number: "13",
      position: { top: "52%", left: "32%" },
      role: "3B",
    },
    {
      name: "박세진",
      imageUrl: "/images/pitcher/박세진.jpg",
      number: "33",
      position: { top: "52%", left: "48%" },
      role: "SP",
    },
    {
      name: "박세진2",
      imageUrl: "/images/pitcher/박세진.jpg",
      number: "33",
      position: { top: "70%", left: "48%" },
      role: "C",
    },
  ];

  return (
    <div>
      <h1>오늘 경기 선수들</h1>
      <div className="flex justify-center">
        <TodayPlayerCon players={players} />
      </div>
    </div>
  );
};

export default TodayPlayer;
